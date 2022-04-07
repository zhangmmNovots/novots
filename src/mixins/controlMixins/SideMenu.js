
import {findDataByField} from '@/util/util'

 export default {
    computed:{
      // 根据
      sideMenuValue(){
        return (value,list)=>{
          if(value){
            return value
          }
          return  findDataByField(list,'layoutPath',this.$route.path)?.pageUuid
        }
      }
    },
    methods: {
       sideMenuChange(data, uuid){
          if(data.layoutPath){
            this.controlProperties[uuid].value = data && data.pageUuid ? data.pageUuid : ''
            this.$router.push(`/page${data.pageUuid}`)
          }
       },
    },

  }
