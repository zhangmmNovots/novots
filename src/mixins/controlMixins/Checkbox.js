
 export default {
    data() {
        return {
          
        }
    },
    computed:{
      checkboxValue(){
        return (value)=>{
          return value && value.length ? value.split(',') : []
        }
      }
      
    },
    methods:{
      /* 修改多选值 */
      setCheckboxValue(obj,fieldId,value){
        obj[fieldId] = value.join(',')
      }
    }
  }
