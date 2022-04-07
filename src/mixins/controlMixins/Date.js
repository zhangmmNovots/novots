
import moment from 'moment';
moment.suppressDeprecationWarnings = true;
 export default {
    data() {
        return {
          
        }
    },
    methods: {  
      changeDateLook (e, obj, type) {
        obj.date = moment(e._d).format(type)
      },
      
      changeDate(uuid, e, dateFormat) {
        if (e?._d) {
          this.controlProperties[uuid].value = moment(e._d).format(dateFormat)
        } else {
          this.controlProperties[uuid].value = ''
        }
      }, 
    },
    created(){
            
    },
    }
