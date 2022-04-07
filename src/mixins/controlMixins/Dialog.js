
 export default {
    data() {
      return {
        
      }
    },
    methods: {
      getContainer() {
        return document.getElementById("app");
      },
      onClosev(uuid){
         this.drawerList=this.drawerList.filter(v => v.controlUuid !== uuid);
         this.pageQuery.primaryId = "";
         this.pageQuery.primaryKey = "";
      },
      clickConfirmBtn(uuid){
        this[uuid]();
      },
    },
     computed: {
        visible() {
          return (uuid) => {
            const flag =
              this.drawerList.findIndex((v) => v.controlUuid === `v${uuid}`) > -1
              
           
            return flag
          }
        },
      },
    }
