<template>
  <div>
    <div @click="handleClick">
      <slot />
    </div>
		<div class="progress" :style="{width: progressWidth}" v-if="showProgress"></div>
    <input
      ref="file"
      v-show="false"
      type="file"
      :accept="accept"
      @change="handleChange"
			:disabled="disabled"
    />
  </div>
</template>

<script>
const qiniu = require("qiniu-js");
import { baseURL } from "@/util/util";
export default {
  name: "upload",
  data() {
    return {
			showProgress: false,
			progressWidth: '0',
      chunkParams : {
          file:'', // 添加文件
          chunks:'', // 总块儿数
          chunk:0, // 当前第几块儿
          chunkSize:'', //当前块儿大小
          name :'', //文件名
          id:''  //分片文件  md5
      },
      bufferLength:1024 * 1024 * 4
		};
  },
  props: {
    // 支持上传文件类型
    accept: {
      type: String,
      default: "*",
    },
    // 上传前方法
    beforeUpload: {
      type: Function,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 本地上传  还是七牛上传
    type: {
      type: String,
      default: "",
    },
    // 唯一值
    uuid: {
      type: String,
      default: "",
    },
    // 域名
    domain: {
      type: String,
      default: "",
    },
		// 本地存储路径
		savePath: {
			type: String,
			default: ''
		}
  },
  methods: {
    /* 上传文件 */
    handleChange() {
      const [file] = this.$refs.file.files;
      const flag = this.beforeUpload(file);
			this.uploadFile(flag,file)
    },
		uploadFile(flag,file){
			// 是否可以上传
      if (flag) {
        // 七牛
        if (this.type === "2") {
          this.qiniuUpload(this.uuid, file);
        } else if (this.type === "1") {
          this.initparams(file);
          // 本地
					this.defaultUpload(file)
        }
      }
		},
    /* 点击
     * 弹出选择文件框
     */
    handleClick() {
      this.$refs.file.click();
    },
    /* 获取七牛的token
     * @param {String} uuid 唯一值
     * @param {String} fileName 文件名称
     */
    getQiniuToken(uuid, fileName) {
      return this.$get(`/process/v1/getQnUploadToken/${uuid}`, {
        fileName,
      });
    },

    /*
     * 七牛上传
     * @param {String} uuid 唯一值
     * @param {File} file 文件
     */
    async qiniuUpload(uuid, file) {
			// 域名后是否包含/
			const domain = this.domain.slice(this.domain.length - 1,this.domain.length) === '/' ? this.domain : this.domain + '/'

      // 获取token
      const { data: token } = await this.getQiniuToken(uuid, file.name);
      if (!token) return;
      const that = this;
			
      const observer = {
        next(res) {
          // 当前上传进度
          that.$emit("progress", res);
					that.showProgress = true
					that.progressWidth = res.total.percent + '%'
        },
        error(err) {
          that.$emit("error", err);
        },
        complete(res) {
          that.$emit("change", {
            title: file.name,
            url: domain + res.key,
          });
					that.showProgress = false
        },
      };
      // 上传配置
      const config = {
        useCdnDomain: true,
        region: qiniu.region.z1,
      };
      // 文件配置
      const putExtra = {
        fname: file.name,
      };
      const observable = qiniu.upload(file, file.name, token, putExtra, config);
      // 上传开始
      observable.subscribe(observer);
    },
    /* 转form 对象 */
    setFormData(data) {
      let params = new FormData();
      if (data) {
        Object.keys(data).forEach(function(key) {
          params.append(key, data[key]);
        });
      }
      return params;
    } ,
    /* 初始化参数 */
    initparams(file){
        //设置分片大小（单位Byte）
        this.chunkParams.chunks = Math.ceil(file.size / this.bufferLength);
        this.chunkParams = {
          file:'', // 添加文件
          chunks:Math.ceil(file.size / this.bufferLength), // 总块儿数
          chunk:0, // 当前第几块儿
          chunkSize:this.bufferLength, //当前块儿大小
          name :file.name, //文件名
          id:this.$uuid()  //文件 唯一标示
        }
    },
    /* 递归上传 */
    deepUpload(file,lastUpload){
      //计算开始的切割点,idx是上传成功的分片数，未上传过文件则开始点为0
      let start = this.chunkParams.chunk * this.bufferLength;
      //计算分割的位置
      let end = start + this.bufferLength;
      //如果分割点超出文件大小，回退分割点
      if (end > file.size) {end = file.size;}
      this.chunkParams.file = file.slice(start, end);
      let totalPercent = lastUpload ? lastUpload : 0;
      this.$postPorm(
                `/process/v1/fileUpload`,
                this.setFormData(this.chunkParams),
                //进度条的回调
              (res)=>{
                let temp = 0;
                if(res.loaded === res.total){
                  totalPercent += res.total
                  temp = totalPercent

                }else{
                  temp = totalPercent + res.loaded
                }
                this.showProgress = true;
        		    this.progressWidth = (temp / file.size) * 100 + '%';
              }
            ).then(result=>{
              if(result && result.data.code == 200){
                if(result.data.data.url){
                  const domain = this.domain.slice(this.domain.length - 1,this.domain.length) === '/' ? this.domain : this.domain + '/'
                  this.$emit("change", {
                      title: file.name,
                      url: domain + result.data.data.url,
                    });
                  this.showProgress = false
                }else{
                  this.deepUpload(file,totalPercent,++this.chunkParams.chunk)
                }
              }else{
                this.$emit("error", result.data.msg);
                this.showProgress = false;
              }
          }).catch(err=>{
              this.$emit("error", '内部服务器错误');
            })
    },
    /* 默认上传 */
    async defaultUpload(file) {
      if(file.size > this.bufferLength){
        this.deepUpload(file)
      }else{
        const formdata = new FormData();
        // 添加文件
        formdata.append("file", file);
        // 添加参数 token
        formdata.append("TOKEN", sessionStorage.getItem("token"));
        // 本地保存路径
        formdata.append('savePath',this.savePath)
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
          // 如果完成
          if (xhr.readyState === 4 && xhr.status === 200) {
            const res = JSON.parse(xhr.response);
        		this.$emit('change',res.data)
        		this.showProgress = false
          }
        };
        xhr.upload.onprogress = event => {
        	if (event.lengthComputable) {
        		const percent = (event.loaded / event.total) * 100 + '%';
        		this.showProgress = true
        		this.progressWidth = percent
        	}
        };
        xhr.open("post", baseURL + "/process/v1/uploadFile", true);
        xhr.send(formdata);
      }
    },
  },
};
</script>
<style scoped lang="less">
	.progress{
		height: 2px;
		background: #66cc3a;
	}
</style>