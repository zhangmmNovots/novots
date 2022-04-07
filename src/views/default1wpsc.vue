

<template>
  <div class="page" style='height: 100%'>

    <div :custom-style="customStyle('624e575ae4b05b1369e4c552')">
    <!-- 空白区域 -->
    <div 
        
        v-show="controlProperties.vcdfd7cf3b4be414fadca1f145e3b6e21.display"
        
        
    >   

    
    <div class="block WhiteBlock" :custom-style="customStyle('cdfd7cf3b4be414fadca1f145e3b6e21')">
    <!-- IFrame2 -->
    <div 
        
        v-show="controlProperties.vf20ecffeb94649c987e4c2127610d0b0.display"
        
        
    >   

    
	<div class="dataControl"  >
		<iframe  
			:custom-style="customStyle('f20ecffeb94649c987e4c2127610d0b0')"
			  
						:src="controlProperties.vf20ecffeb94649c987e4c2127610d0b0.value"
      
		
		 class="IFrame myiframe" frameborder="0" ref="f20ecffeb94649c987e4c2127610d0b0"></iframe>
	</div>
</div>
</div>
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
      return {"drawerList":[],"tableItem":{},"controlProperties":{"vcdfd7cf3b4be414fadca1f145e3b6e21":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"WhiteBlock","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vf20ecffeb94649c987e4c2127610d0b0":{"value":"www.baidu.com","disabled":false,"display":true,"dataSourceType":"","type":"IFrame","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}}}}
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
 
@import '../assets/less/default1wpsc.less';

  
</style>