

<template>
  <div class="page" style='height: 100%'>

    <div :custom-style="customStyle('623d8089e4b05fd77008a232')">
    <!-- 空白区域 -->
    <div 
        
        v-show="controlProperties.v9b273658fafe4c47a35ac5ed38aff918.display"
        
        
    >   

    
    <div class="block WhiteBlock" :custom-style="customStyle('9b273658fafe4c47a35ac5ed38aff918')">
    <!-- 空白容器10 -->
    <div 
        
        v-show="controlProperties.v64096d6430d140729a930ff5a409e102.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('64096d6430d140729a930ff5a409e102')"
    
    :class="classStyle('v64096d6430d140729a930ff5a409e102')"
 >
    <!-- 按钮2 -->
    <div 
        
        v-show="controlProperties.v9bba932dc9494753b14760a1bcce0fd0.display"
        
        
    >   

    

  <div style="display:flex;">
    <a-button :class="classStyle('v9bba932dc9494753b14760a1bcce0fd0')"
   
      @click.stop="controlEvent('click9bba932dc9494753b14760a1bcce0fd0',)"
    
    :disabled="controlProperties.v9bba932dc9494753b14760a1bcce0fd0.disabled"
    :custom-style="customStyle('9bba932dc9494753b14760a1bcce0fd0')"
    type="primary"
    size=default
    class="Button"
    >
      

      {{ controlProperties.v9bba932dc9494753b14760a1bcce0fd0.value}}
      
    </a-button>
  </div>
</div>

    <!-- 按钮3 -->
    <div 
        
        v-show="controlProperties.vc5591047f6ff45e19bfab9a9a0b67669.display"
        
        
    >   

    

  <div style="display:flex;">
    <a-button :class="classStyle('vc5591047f6ff45e19bfab9a9a0b67669')"
   
      @click.stop="controlEvent('clickc5591047f6ff45e19bfab9a9a0b67669',)"
    
    :disabled="controlProperties.vc5591047f6ff45e19bfab9a9a0b67669.disabled"
    :custom-style="customStyle('c5591047f6ff45e19bfab9a9a0b67669')"
    type="link"
    size=default
    class="Button"
    >
      

      {{ controlProperties.vc5591047f6ff45e19bfab9a9a0b67669.value}}
      
    </a-button>
  </div>
</div>
</div>
</div>

    <!-- 手写区域6 -->
    <div 
        
        v-show="controlProperties.v437193c6963e4079ac168aecefa6caa3.display"
        
        
    >   

    
  <div class='WritingPad'
    :custom-style="customStyle('437193c6963e4079ac168aecefa6caa3')"
    :class="classStyle('v437193c6963e4079ac168aecefa6caa3')"
  >
    <l-writing-pad 
      uuid=""
      type=""
      accept=""
      domain=""
      savePath=""
      @change="writingPadChange($event,
        
              controlProperties.v437193c6963e4079ac168aecefa6caa3,
              'value'
        
    )"/>
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

  
    
      import lWritingPad from '@/components/writingPad'
    import WritingPad from '@/mixins/controlMixins/WritingPad.js';
  
    import permission from '@/mixins/permission.js'
  
  
  
  export default {
    data() {
      return {"drawerList":[],"tableItem":{},"controlProperties":{"v9b273658fafe4c47a35ac5ed38aff918":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"WhiteBlock","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v64096d6430d140729a930ff5a409e102":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v9bba932dc9494753b14760a1bcce0fd0":{"value":"导出","disabled":false,"display":true,"dataSourceType":"","type":"Button","status":{"displayCondition":[{"and":[{"afterMatchType":{"valueList":[],"source":"","page":"","controlUuid":"","optionSetEnName":"","optionProperty":"","pageparams":"","globalValue":"","optionDataId":"","fieldId":""},"matchType":"","beforeMatchType":{"valueList":["property"],"source":"property","page":"","controlUuid":"9bba932dc9494753b14760a1bcce0fd0","optionSetEnName":"","optionProperty":"","pageparams":"","value":"","globalValue":"currentdate","optionDataId":""}}]}],"disabledCondition":[],"display":"show","disabledSwitch":false,"disabled":"enable","displaySwitch":true},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vc5591047f6ff45e19bfab9a9a0b67669":{"value":"模板下载","disabled":false,"display":true,"dataSourceType":"","type":"Button","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"disabled":"enable","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v437193c6963e4079ac168aecefa6caa3":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"WritingPad","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}}}}
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
        lWritingPad,
      
  },
  mixins: [
    action,
        WritingPad,
      
      permission
    
  ],
  methods: {
    controlEvent(callback, $scoped) {
      if ($scoped) {
        this.tableItem = $scoped;
      };
      this[callback]();
    },
    
  
    
      
      
        
       
          async load9b273658fafe4c47a35ac5ed38aff918(){
             
             
             
              
              
              
              ;
              ;
            },
       
         
      
    
  
    
      
      
        
       
          async click9bba932dc9494753b14760a1bcce0fd0(){
             
             
             
              let starta270d7af879cb4a0e8717677c1a024d82 = undefined;let invokeFlowac949b02733a94fc4a96bd1f950269660 = {"req":[],"res":[{"resBelongid":"Event_18ucyuc","resBelongname":"结束事件","resresultType":["Event_18ucyuc"],"resresult":"flowrespage","actionNext":{},"response":[{"paramsType":"FileIo","paramsName":"application_revenue"}]}],"processId":"p623d8107e4b047fabe30ddd7"};let messageTipsa6139cf13ffd04ce5a8fefe2cf5c91214 = {"actionType":"messageTips","tipsType":"success","tipsDesc":"导出员工表成功！","tipsTime":3,"tipsTopPosition":"24px"};
              
                
                  let paramsArr = { starta270d7af879cb4a0e8717677c1a024d82,invokeFlowac949b02733a94fc4a96bd1f950269660,messageTipsa6139cf13ffd04ce5a8fefe2cf5c91214 };
                
              
              
              let flowMap = {"a270d7af879cb4a0e8717677c1a024d82":{"actionType":"start","Next":["ac949b02733a94fc4a96bd1f950269660"],"current":"starta270d7af879cb4a0e8717677c1a024d82"},"ac949b02733a94fc4a96bd1f950269660":{"actionType":"invokeFlow","params":"reqac949b02733a94fc4a96bd1f950269660","Next":["a6139cf13ffd04ce5a8fefe2cf5c91214"],"invokeFlowNext":[{"Next":"a6139cf13ffd04ce5a8fefe2cf5c91214","portId":"Event_18ucyuc","resBelongid":"Event_18ucyuc"}],"current":"invokeFlowac949b02733a94fc4a96bd1f950269660"},"a6139cf13ffd04ce5a8fefe2cf5c91214":{"actionType":"messageTips","Next":["aea488cba4d344fcc8962d8f0adab1929"],"current":"messageTipsa6139cf13ffd04ce5a8fefe2cf5c91214"}};;
              this.loop(flowMap['a270d7af879cb4a0e8717677c1a024d82'].Next[0], flowMap, paramsArr);;
            },
       
         
      
    
  
    
      
      
        
       
          async clickc5591047f6ff45e19bfab9a9a0b67669(){
             
             
             
              let startae940d4f12041470c943521f7866c3f18 = undefined;let invokeFlowa3dcb1886761e44318fb8ae052f823626 = {"req":[],"res":[{"resBelongid":"Event_18ucyuc","resBelongname":"结束事件","resresultType":["Event_18ucyuc"],"resresult":"flowrespage","actionNext":{},"response":[{"paramsType":"FileIo","paramsName":"model"}]}],"processId":"p62415fefe4b047fabe30e029"};let messageTipsa8d30ac65c2334693bf68dbeb1e070c45 = {"actionType":"messageTips","tipsType":"success","tipsDesc":"生成模板成功！","tipsTime":3,"tipsTopPosition":"24px"};
              
                
                  let paramsArr = { startae940d4f12041470c943521f7866c3f18,invokeFlowa3dcb1886761e44318fb8ae052f823626,messageTipsa8d30ac65c2334693bf68dbeb1e070c45 };
                
              
              
              let flowMap = {"ae940d4f12041470c943521f7866c3f18":{"actionType":"start","Next":["a3dcb1886761e44318fb8ae052f823626"],"current":"startae940d4f12041470c943521f7866c3f18"},"a3dcb1886761e44318fb8ae052f823626":{"actionType":"invokeFlow","params":"reqa3dcb1886761e44318fb8ae052f823626","Next":["a8d30ac65c2334693bf68dbeb1e070c45"],"invokeFlowNext":[{"Next":"a8d30ac65c2334693bf68dbeb1e070c45","portId":"Event_18ucyuc","resBelongid":"Event_18ucyuc"}],"current":"invokeFlowa3dcb1886761e44318fb8ae052f823626"},"a8d30ac65c2334693bf68dbeb1e070c45":{"actionType":"messageTips","Next":["a462599bbb5b54468a4f85193a6fd2b64"],"current":"messageTipsa8d30ac65c2334693bf68dbeb1e070c45"}};;
              this.loop(flowMap['ae940d4f12041470c943521f7866c3f18'].Next[0], flowMap, paramsArr);;
            },
       
         
      
    
  
    
      
      
        
          hideControls(uuid){
          
          
      
      const controlsUuid=["9bba932dc9494753b14760a1bcce0fd0"]
      controlsUuid.forEach(async (item) => {
        const flag = await this.conditionJudge(
          this.controlProperties[`v${item}`].status.displayCondition
        )
        this.controlProperties[`v${item}`].display = this.controlProperties[`v${item}`].display ? !flag : flag
      })
      
          },
        
      
    
  


  },
  created() {
    
      this.load9b273658fafe4c47a35ac5ed38aff918();
    
      this.hideControls()
    
},
mounted(){
  
}
}
</script>
<style lang="less" scoped>
 
@import '../assets/less/default1.less';

  
</style>