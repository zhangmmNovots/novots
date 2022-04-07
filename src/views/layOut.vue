

<template>
  <div class="page" style='height: 100%'>

    <div :custom-style="customStyle('623966b4e4b0d56b50932e5f')">
    <!-- 空白区域 -->
    <div 
        
        v-show="controlProperties.v623966b4e4b0d56b50932e60.display"
        
        
    >   

    
    <div class="block WhiteBlock" :custom-style="customStyle('623966b4e4b0d56b50932e60')">
    <!-- 空白容器3 -->
    <div 
        
        v-show="controlProperties.v623966b5e4b0d56b50932e68.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('623966b5e4b0d56b50932e68')"
    
    :class="classStyle('v623966b5e4b0d56b50932e68')"
 >
    <!-- 图片1.04 -->
    <div 
        
        v-show="controlProperties.v623966b5e4b0d56b50932e69.display"
        
        
    >   

    
  <div class="dataControl" style="position: relative" >
    <img 
      
     :custom-style="customStyle('623966b5e4b0d56b50932e69')"
        
        :src="imageSrc(controlProperties.v623966b5e4b0d56b50932e69.value)"
        
            class="Image image-fill"
        
        style="object-position: 0 0;"/>
  </div>
</div>
</div>
</div>

    <!-- 空白容器7 -->
    <div 
        
        v-show="controlProperties.v623966b5e4b0d56b50932e7c.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('623966b5e4b0d56b50932e7c')"
    
    :class="classStyle('v623966b5e4b0d56b50932e7c')"
 >
    <!-- 顶部导航5 -->
    <div 
        
        v-show="controlProperties.v623966b5e4b0d56b50932e80.display"
        
        
    >   

    


  <l-menu
      class='TopMenu'
      :class="classStyle('v623966b5e4b0d56b50932e80')"
			:custom-style="customStyle('623966b5e4b0d56b50932e80')"
      :menuData="controlProperties.v623966b5e4b0d56b50932e80.dataSourceList"
      unfoldIcon="https://timages.weilaios.com/wl/file/20220301190601846.svg"
      packUpIcon="https://timages.weilaios.com/wl/file/20220301190452433.svg"
      :menuItemStyle="{
        width: '',
        '--menu-radius': '0px',
        '--text-default-color': '#05061A',
        '--text-hover-color': '#054DE6',
        '--text-checked-color': '#054DE6',
        '--menu-background': '#FFF',
        '--menu-hover-background': '#FFF',
        '--menu-checked-background': '#F3F4FF',
        '--sub-menu-background': '#FFF',
      }"
      @select="sideMenuChange($event,'v623966b5e4b0d56b50932e80')"
      :value="sideMenuValue(controlProperties.v623966b5e4b0d56b50932e80.value,controlProperties.v623966b5e4b0d56b50932e80.dataSourceList)"
      :menuIcon="true"
      :menuPopover="true"
      :collapsed="false"
      :showCurrentMenu="false"
      :replaceFields="{children: 'children',id:'pageUuid',name: 'name',key:'uuid'}"
      vertical="horziontal"
    />

</div>

    <!-- 空白容器10 -->
    <div 
        
        v-show="controlProperties.v623966b5e4b0d56b50932e7d.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('623966b5e4b0d56b50932e7d')"
    
    :class="classStyle('v623966b5e4b0d56b50932e7d')"
 >
    <!-- 按钮9 -->
    <div 
        
        v-show="controlProperties.v623966b5e4b0d56b50932e7e.display"
        
        
    >   

    

  <div style="display:flex;">
    <a-button :class="classStyle('v623966b5e4b0d56b50932e7e')"
   
    :disabled="controlProperties.v623966b5e4b0d56b50932e7e.disabled"
    :custom-style="customStyle('623966b5e4b0d56b50932e7e')"
    type="primary"
    size=default
    class="Button"
    >
      

      {{ controlProperties.v623966b5e4b0d56b50932e7e.value}}
      
    </a-button>
  </div>
</div>

    <!-- 按钮8 -->
    <div 
        
        v-show="controlProperties.v623966b5e4b0d56b50932e7f.display"
        
        
    >   

    

  <div style="display:flex;">
    <a-button :class="classStyle('v623966b5e4b0d56b50932e7f')"
   
    :disabled="controlProperties.v623966b5e4b0d56b50932e7f.disabled"
    :custom-style="customStyle('623966b5e4b0d56b50932e7f')"
    type="primary"
    size=default
    class="Button"
    >
      

      {{ controlProperties.v623966b5e4b0d56b50932e7f.value}}
      
    </a-button>
  </div>
</div>
</div>
</div>
</div>
</div>

    <!-- 分割线16 -->
    <div 
        
        v-show="controlProperties.v01a05c18fbfa46928ba0e67c8cd7dc55.display"
        
        
    >   

    
  <a-divider  
    
     :class="classStyle('v01a05c18fbfa46928ba0e67c8cd7dc55')"
    :custom-style="customStyle('01a05c18fbfa46928ba0e67c8cd7dc55')"
    class="Dividing"	
    ></a-divider>
</div>

    <!-- 页面占位符 -->
    <div 
        
        v-show="controlProperties.v623966b5e4b0d56b50932e67.display"
        
        
    >   

    
  <div
    :custom-style="customStyle('623966b5e4b0d56b50932e67')"
     
    class="PagePlaceholder"
    :class="classStyle('v623966b5e4b0d56b50932e67')"
  >
    <router-view />
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

  
    import Image from '@/mixins/controlMixins/Image.js';
    
      import lMenu from '@/components/menu'
    import SideMenu from '@/mixins/controlMixins/SideMenu.js';
  
    import permission from '@/mixins/permission.js'
  
  
  
  export default {
    data() {
      return {"drawerList":[],"tableItem":{},"controlProperties":{"v623966b4e4b0d56b50932e60":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"WhiteBlock","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v623966b5e4b0d56b50932e68":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v623966b5e4b0d56b50932e69":{"value":"[{\"title\":\"护航科技\",\"url\":\"@/assets/img/20220318175352540.png\"}]","disabled":false,"display":true,"dataSourceType":"","type":"Image","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v623966b5e4b0d56b50932e7c":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v623966b5e4b0d56b50932e80":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"TopMenu","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true},"dataSourceList":[{"pageUuid":"","layoutPath":"","children":[{"pageUuid":"","layoutPath":"","children":[{"pageUuid":"","layoutPath":"","children":[],"name":"商家推荐","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"007d080b91ab41beb89210a7b36216f8"}],"name":"商机","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"d471e1b27ea747508f6f11ba9ceeb80d"},{"layoutPath":"","children":[{"pageUuid":"623969a7e4b05fd77008a06e","layoutPath":"/YOBtkK/default1","children":[],"name":"收入确认申请","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"c820e0b92aa04ad1a7357d401cd6a37e"},{"pageUuid":"62396b69e4b05fd77008a06f","layoutPath":"/YOBtkK/default1DSne","children":[],"name":"收入确认审批","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"764a3d89f18d44909de0d4165262b5ff"}],"name":"收入确认","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"ff7dadbb0ff1499a92641ae4168a0338"}],"name":"销售","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"7f79afc207c149ddb27b157d495b6652"},{"pageUuid":"","layoutPath":"","children":[],"name":"方案","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"c67ecb2a5ff74a66a09f80cec0d4e58c"},{"pageUuid":"","layoutPath":"","children":[],"name":"实施","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"76cc9e3caca5441da05cc802266a80ca"},{"pageUuid":"","layoutPath":"","children":[{"pageUuid":"","layoutPath":"","children":[],"name":"薪酬","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"b1ccae19c7ca4abda4c46185c676044b"},{"pageUuid":"","layoutPath":"","children":[],"name":"报销","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"f90914e0fae14553a7eb93bde7f0637f"},{"pageUuid":"","layoutPath":"","children":[],"name":"请休假","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"99a4daf3b010451a9cd21b2f9f6dd238"},{"pageUuid":"62384b4ce4b05fd77008a058","layoutPath":"/defaultLayout1/default1TMjR","children":[{"pageUuid":"623d8089e4b05fd77008a232","layoutPath":"/default1","children":[],"name":"导出员工表","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"9ac929af660641eabf7fa17cd5dd8fd7"}],"name":"导出综合报表","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"da2fddd84afa47508bdd50911dd6b767"}],"name":"职能","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"7ac81d78991e466eb94ad3c0130841df"},{"pageUuid":"","layoutPath":"","children":[{"pageUuid":"623be14ae4b0d56b50933053","layoutPath":"/layOut/default1tIZt","children":[],"name":"角色配置","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"965a6d8210da402f84bf980d7a943850"},{"pageUuid":"623c1bdfe4b05fd77008a11b","layoutPath":"/layOut/default1fmmF","children":[],"name":"权限配置","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"16a31b1a3d394338addc49bb2e8aa70f"}],"name":"电子审批","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"254d12836cdf458f9f37aabc2ac8c22f"},{"pageUuid":"","layoutPath":"","children":[],"name":"帮助","icon":"https://timages.weilaios.com/wl/file/20220302095913968.svg","uuid":"29ad89d2b1414bf488c04945522acdeb"}]},"v623966b5e4b0d56b50932e7d":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v623966b5e4b0d56b50932e7e":{"value":"上班","disabled":false,"display":true,"dataSourceType":"","type":"Button","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"disabled":"enable","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v623966b5e4b0d56b50932e7f":{"value":"下班","disabled":false,"display":true,"dataSourceType":"","type":"Button","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"disabled":"enable","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v01a05c18fbfa46928ba0e67c8cd7dc55":{"value":"2","disabled":false,"display":true,"dataSourceType":"","type":"Dividing","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v623966b5e4b0d56b50932e67":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"PagePlaceholder","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}}}}
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
        lMenu,
      
  },
  mixins: [
    action,
        Image,
      
        SideMenu,
      
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
 
@import '../assets/less/layOut.less';

  
</style>