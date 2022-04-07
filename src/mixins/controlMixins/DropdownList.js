
 export default {
    data() {
        return {
          
        }
    },
    computed:{
      selectValue(){
        return (value,multiple)=>{
          if(multiple){
            return value && value.length ? value.split(',') : []
          }
          return value
        }
      }
      
    },
    methods:{
      /* 修改多选值 */
      setSelectValue(id,obj,fieldId,multiple,value){
        if(multiple){
          obj[fieldId] = value.join(',')
        }else {
          obj[fieldId] = value
        }
        if(this[`change${id}`]){
         this[`change${id}`]()
        }
        
      }
    }
  }
