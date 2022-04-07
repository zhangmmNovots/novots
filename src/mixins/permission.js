
import { mapState, mapActions } from 'vuex';

export default {
    data(){
        return {
            
        }
    },
     computed: {
    ...mapState(['permissionList']),
    getpermission() {
      return (uuid) => {
        if (this.permissionList.includes(uuid)) {
          return true
        }
        return false
      }
    },
  },

    methods:{
      ...mapActions(['changedata']),
      async getAllPermission(){
        let res = await this.$get('/process/v1/queryGlobalValueByKey', {
        fieldNameKey: 'currentdate',
      })
      const permissionKeyList = res.data.fieldNameValue
      this.changedata({ permissionList: permissionKeyList })
      }
    }
}