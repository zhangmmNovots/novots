
  export default{
    data(){
      return {

      }
    },
    methods:{
      /* 写成功后触发
       * @param {String} url 画的图片路径
       * @param {object} dataSource 数据
       * @param {String} fieldId 字段
       */
      writingPadChange(url,dataSource,fieldId){
        dataSource[fieldId] = url
      }
    }
  }
