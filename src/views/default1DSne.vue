

<template>
  <div class="page" style='height: 100%'>

    <div :custom-style="customStyle('62396b69e4b05fd77008a06f')">
    <!-- 空白区域 -->
    <div 
        
        v-show="controlProperties.v9513faac75e74e5ea9746d4b9d64c716.display"
        
        
    >   

    
    <div class="block WhiteBlock" :custom-style="customStyle('9513faac75e74e5ea9746d4b9d64c716')"></div>
</div>

      
        
      
    </div>
  </div>
</template>
<script>
  import validate from '@/components/validate.vue'
  import action from '@/mixins/action';
  import { mapState, mapActions } from 'vuex';

  
  
    import permission from '@/mixins/permission.js'
  
  
  
  export default {
    data() {
      return {"drawerList":[],"tableItem":{},"controlProperties":{"v9513faac75e74e5ea9746d4b9d64c716":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"WhiteBlock","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}}}}
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
  
  components: {
    validate,
  },
  mixins: [
    action,
      permission
    
  ],
  methods: {
    controlEvent(callback, $scoped) {
      if ($scoped) {
        this.tableItem = $scoped;
      };
      this[callback]();
    },
    
  


  },
  created() {
    
},
mounted(){
  
}
}
</script>
<style lang="less" scoped>
 
@import '../assets/less/default1DSne.less';

  
</style>