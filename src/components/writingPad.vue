<template>
	<div class="writing" >
		<div class="writing-pad">
			<canvas class="canvas" ref="canvas" @mousedown="mousedown" @mousemove="mousemove" @mouseup="mouseup"></canvas>
		</div>
		<div class="writing-clear" @click="clearCanvas">清除</div>
		<upload v-show="false" 
			:uuid="uuid"
      :type="type"
      :domain="domain"
      :savePath="savePath"
			ref="upload"
			@change="uploadChange"
			@error="uploadError"
		/>
	</div>
</template>
<script>
import {baseURL} from '@/util/util';
import upload from '@/components/upload'

export default{
  name: 'writingPad',
	props:{
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
  data(){
    return {
		  ctx: '',
			points: [],
			canvas: '',
			timerOut: null,
      uploadUrl: baseURL + '/process/v1/uploadFile'
    }
  },
  methods:{
    initWritingPad(){
      let canvas = this.$refs.canvas;
      canvas.width = this.$refs.canvas.parentNode.clientWidth;
      canvas.height = this.$refs.canvas.parentNode.clientHeight;
      this.ctx = canvas.getContext('2d');
      this.ctx.lineWidth = 4;
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
      this.canvas = this.$refs['canvas'];
    },
    getMousePos(canvas, evt) {
			var rect = canvas.getBoundingClientRect();
			return {
				x: evt.clientX - rect.left * (rect.width / canvas.width),
				y: evt.clientY - rect.top * (canvas.height / rect.height)
			};
		},
		/* 点击的时候保存下来位置
		 * @param {e} e 自定义属性
		 */
		mousedown(e) {
			const obj = this.getMousePos(e.target, e);
			const startX = obj.x;
			const startY = obj.y;
			e.preventDefault();
			const startPoint = {
				X: startX,
				Y: startY
			};
			this.points.push(startPoint);
			this.ctx.beginPath();
		},
    /* 移动的时候保存下来位dd
		 * @param {e} e 自定义属性
		 */
		mousemove(e) {
			e.preventDefault();
			if (this.points.length) {
				const obj = this.getMousePos(e.target, e);
				let moveX = obj.x;
				let moveY = obj.y;
				let movePoint = {
					X: moveX,
					Y: moveY
				};
				this.points.push(movePoint); //存点
				let len = this.points.length;
				if (len >= 2) {
					this.draw(); //绘制路径
				}
			}
		},
    /* 画 */
		draw() {
			let point1 = this.points[0];
			let point2 = this.points[1];
			this.points.shift();
			this.ctx.moveTo(point1.X, point1.Y);
			this.ctx.lineTo(point2.X, point2.Y);
			this.ctx.stroke();
		},

		/* 清空canvas */
		clearCanvas() {
			this.$nextTick(() => {
				// 重置画布
				this.ctx.clearRect(0, 0, this.$refs['canvas'].width, this.$refs['canvas'].height);
				// 清空数据
				this.$emit('change','')
			});
		},
    /* 触摸结束，将未绘制的点清空防止对后续路径产生干扰 */
		mouseup() {
			this.timerOut && clearTimeout(this.timerOut);
			this.points = [];
			this.$nextTick(() => {
				const blob = this.dataURLtoBlob(this.$refs.canvas.toDataURL('image/png'));
				blob.name = this.$uuid() + 'writingPad.png';
				this.timerOut = setTimeout(() => {
					this.uploadFile(blob);
				}, 1000);
			});
		},
    /* base64转blob
    * @param {String} baseurl base64
    */
    dataURLtoBlob(baseurl) {
      let arr = baseurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {
        type: mime
      });
    },
    /* 上传文件
		 * @param {Blob} file 文件
		 */
		uploadFile(file) {
			this.$refs.upload.uploadFile(true,file)
		},
		/* 上传失败 */
		uploadError(error){
			console.log(error)
		},
		/* 上传成功 */
		uploadChange(file){
			this.$emit('change',file)
		},

  },
  mounted(){
    this.initWritingPad()
  },
	components:{
		upload
	}
}
</script>
<style lang="less" scoped>
  .writing {
    &-pad {
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(100% - 40px);
      border-bottom: 1px solid #e9eaf0;
      .canvas {
        width: 100%;
        height: 100%;
      }
    }
    &-clear {
      height: 40px;
      display: flex;
      flex-direction: row-reverse;
      color: @primary-color;
      align-items: center;
    }
  }
</style>