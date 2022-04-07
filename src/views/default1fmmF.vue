

<template>
  <div class="page" style='height: 100%'>

    <div :custom-style="customStyle('623c1bdfe4b05fd77008a11b')">
    <!-- 空白区域 -->
    <div 
        
        v-show="controlProperties.veba350bac3d241749e5eabaeee2a7556.display"
        
        
    >   

    
    <div class="block WhiteBlock" :custom-style="customStyle('eba350bac3d241749e5eabaeee2a7556')">
    <!-- 表格容器2 -->
    <div 
        
        v-show="controlProperties.vb1af161efeb140f7acc67965fa0b7048.display"
        
        
    >   

    
  <a-table  bordered rowKey="id"
  :pagination="false"
  
  class="TableContainer"
   :custom-style="customStyle('b1af161efeb140f7acc67965fa0b7048')"
    
        :data-source="controlProperties.vb1af161efeb140f7acc67965fa0b7048.dataSourceList"
    
  :columns="controlProperties.vb1af161efeb140f7acc67965fa0b7048.tableColums" :class="classStyle('vb1af161efeb140f7acc67965fa0b7048')">

    

    
        
          <div slot-scope="text,
              
                uvsv_role,
                uvsv_roleIndex
              
          " slot="2964be516f4f41db860391ba6cd69c76" >
            
    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.v2964be516f4f41db860391ba6cd69c76.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('2964be516f4f41db860391ba6cd69c76')"
    
    :class="classStyle('v2964be516f4f41db860391ba6cd69c76')"
 >
    <!-- 文本 -->
    <div 
        
        v-show="controlProperties.vf3739038383444f090b370d70c63d615.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.vf3739038383444f090b370d70c63d615.disabled"
    class="Text"	
    :custom-style="customStyle('f3739038383444f090b370d70c63d615')"
    :style='{"-webkit-line-clamp":1}'
    :class="classStyle('vf3739038383444f090b370d70c63d615')"
    >

    {{uvsv_role.role_name}}
    
  </p>
</div>
</div>
</div>

          </div>
        
        
          <div slot-scope="text,
              
                uvsv_role,
                uvsv_roleIndex
              
          " slot="cb07dff94f3445c4a0d283f3d96e78e3" >
            
    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.vcb07dff94f3445c4a0d283f3d96e78e3.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('cb07dff94f3445c4a0d283f3d96e78e3')"
    
    :class="classStyle('vcb07dff94f3445c4a0d283f3d96e78e3')"
 >
    <!-- 文本 -->
    <div 
        
        v-show="controlProperties.veda9a22b395b413cbdce100268aa24d2.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.veda9a22b395b413cbdce100268aa24d2.disabled"
    class="Text"	
    :custom-style="customStyle('eda9a22b395b413cbdce100268aa24d2')"
    :style='{"-webkit-line-clamp":1}'
    :class="classStyle('veda9a22b395b413cbdce100268aa24d2')"
    >

    {{uvsv_role.uvsv_boig.Textpermission_name}}
    
  </p>
</div>
</div>
</div>

          </div>
        
        
          <div slot-scope="text,
              
                uvsv_role,
                uvsv_roleIndex
              
          " slot="bab58d0282bb4aabaf419318cad1720e" >
            
    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.vbab58d0282bb4aabaf419318cad1720e.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('bab58d0282bb4aabaf419318cad1720e')"
    
    :class="classStyle('vbab58d0282bb4aabaf419318cad1720e')"
 >
    <!-- 分配权限按钮 -->
    <div 
        
        v-show="controlProperties.v8de56c72a2454e0388a8c33ffcdee54d.display"
        
        
    >   

    

  <div style="display:flex;">
    <a-button :class="classStyle('v8de56c72a2454e0388a8c33ffcdee54d')"
   
      @click.stop="controlEvent('click8de56c72a2454e0388a8c33ffcdee54d',uvsv_role)"
    
    :disabled="controlProperties.v8de56c72a2454e0388a8c33ffcdee54d.disabled"
    :custom-style="customStyle('8de56c72a2454e0388a8c33ffcdee54d')"
    type="link"
    size=default
    class="Button"
    >
      

      {{ controlProperties.v8de56c72a2454e0388a8c33ffcdee54d.value}}
      
    </a-button>
  </div>
</div>
</div>
</div>

          </div>
        

  </a-table>
 
  
</div>
</div>
</div>

    <!-- 分配权限对话框 -->
    <div 
        
        v-show="controlProperties.vea8ab64727b94779aec6c98970ca7ed9.display"
        
        
    >   

    
  <a-modal
     	:footer="null"
			:width="600"
			title="分配权限对话框"
			:closable="true"
			:mask="true"
			:maskClosable="true"
			:keyboard="false"
		  :visible="visible('ea8ab64727b94779aec6c98970ca7ed9')"
			
			:body-style="{padding: '0px', paddingBottom:   '70px'}"
      @cancel="onClosev('vea8ab64727b94779aec6c98970ca7ed9')"
      :getContainer="getContainer"
    >
    <div>
      <div :custom-style="customStyle('ea8ab64727b94779aec6c98970ca7ed9')">
    <!-- 数据表单11 -->
    <div 
        
        v-show="controlProperties.v593a12b3d5ff4c56939b2b9e53e660ad.display"
        
        
    >   

    
  <div class="DataForm"  
        :custom-style="customStyle('593a12b3d5ff4c56939b2b9e53e660ad')"
        :class="classStyle('v593a12b3d5ff4c56939b2b9e53e660ad')"
 >
    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.vcf0ecf6cb33b43b18a5f6be8d4ca9e49.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('cf0ecf6cb33b43b18a5f6be8d4ca9e49')"
    
    :class="classStyle('vcf0ecf6cb33b43b18a5f6be8d4ca9e49')"
 >
    <!-- 文本 -->
    <div 
        
        v-show="controlProperties.v09b5fb90b26f440d9464af78edace935.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.v09b5fb90b26f440d9464af78edace935.disabled"
    class="Text"	
    :custom-style="customStyle('09b5fb90b26f440d9464af78edace935')"
    :style='{"-webkit-line-clamp":1}'
    :class="classStyle('v09b5fb90b26f440d9464af78edace935')"
    >

    {{controlProperties.v09b5fb90b26f440d9464af78edace935.value}}
    
  </p>
</div>

    <!-- 输入框 -->
    <div 
        
        v-show="controlProperties.v6cf7f47e641f4fa7a3f297735a12063f.display"
        
        
    >   

    
	<validate 
	    :rules="controlProperties.v6cf7f47e641f4fa7a3f297735a12063f.rules"
		:value="controlProperties.v6cf7f47e641f4fa7a3f297735a12063f.value"
		prop="6cf7f47e641f4fa7a3f297735a12063f"
	>
		  <a-input
				class='Input'
				:custom-style="customStyle('6cf7f47e641f4fa7a3f297735a12063f')"
				:class="classStyle('v6cf7f47e641f4fa7a3f297735a12063f')"
				size="default"
				
				:disabled="controlProperties.v6cf7f47e641f4fa7a3f297735a12063f.disabled"
				placeholder="请输入"
        
						v-model="controlProperties.v6cf7f47e641f4fa7a3f297735a12063f.value"
        

				 
			>
    </a-input>
	</validate>

</div>
</div>
</div>

    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.v34bb464009e64873b4251bee2707558d.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('34bb464009e64873b4251bee2707558d')"
    
    :class="classStyle('v34bb464009e64873b4251bee2707558d')"
 >
    <!-- 文本 -->
    <div 
        
        v-show="controlProperties.vb661dd1e8d0840d1a0e1b185678f5800.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.vb661dd1e8d0840d1a0e1b185678f5800.disabled"
    class="Text"	
    :custom-style="customStyle('b661dd1e8d0840d1a0e1b185678f5800')"
    :style='{"-webkit-line-clamp":1}'
    :class="classStyle('vb661dd1e8d0840d1a0e1b185678f5800')"
    >

    {{controlProperties.vb661dd1e8d0840d1a0e1b185678f5800.value}}
    
  </p>
</div>

    <!-- 下拉框 -->
    <div 
        
        v-show="controlProperties.v91aad2eda64a44baa943624a63d904ce.display"
        
        
    >   

    
	<validate 
    :rules="controlProperties.v91aad2eda64a44baa943624a63d904ce.rules"
		:value="controlProperties.v91aad2eda64a44baa943624a63d904ce.value"
		prop="91aad2eda64a44baa943624a63d904ce"
	>
  
  
  <a-checkbox-group 
   :custom-style="customStyle('91aad2eda64a44baa943624a63d904ce')"
   
    class="Checkbox"@change="setCheckboxValue(controlProperties.v91aad2eda64a44baa943624a63d904ce,'value',$event)"
			:value="checkboxValue(controlProperties.v91aad2eda64a44baa943624a63d904ce.value)":disabled="controlProperties.v91aad2eda64a44baa943624a63d904ce.disabled"
    >

    
    <a-checkbox
        v-for="item in controlProperties.v91aad2eda64a44baa943624a63d904ce.dataSourceList"
        :key="item.id"
        :style="{display: 'inline-block'}"
        :value="item.id"
      >
      
      
        {{
         
            item.title 
        
            }}
      
    </a-checkbox>
  </a-checkbox-group>
  </validate>
</div>
</div>
</div>
</div>
</div>
<div>
           
          <div class="drawer-footer" >
            <a-button class="drawcontent-footer-btn"  @click="onClosev('vea8ab64727b94779aec6c98970ca7ed9')"  >
              
							
              取消
                </a-button>
            <a-button type="primary" class="drawcontent-footer-btn" @click="clickConfirmBtn('clickConfirmBtnea8ab64727b94779aec6c98970ca7ed9')" >
							
              确认

							</a-button>
          </div>
        
        </div>
      </div>
    </div>
  </a-modal>
</div>

      
        
      
        
      
        
      
        
      
        
      
        
      
        
      
        
      
        
      
        
      
        
      
        
      
        
      
        
      
        
      
        
      
        
      
    </div>
  </div>
</template>
<script>
  import validate from '@/components/validate.vue'
  import action from '@/mixins/action';
  import { mapState, mapActions } from 'vuex';

  
    import Dialog from '@/mixins/controlMixins/Dialog.js';
    import DataForm from '@/mixins/controlMixins/DataForm.js';
    import Checkbox from '@/mixins/controlMixins/Checkbox.js';
  
    import permission from '@/mixins/permission.js'
  
  
  
  export default {
    data() {
      return {"drawerList":[],"tableItem":{},"controlProperties":{"veba350bac3d241749e5eabaeee2a7556":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"WhiteBlock","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vb1af161efeb140f7acc67965fa0b7048":{"value":[],"disabled":false,"display":true,"dataSourceType":"entity","type":"TableContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true},"dataSourceList":[],"tableColums":[{"title":"角色名称","dataIndex":"role_name","key":"role_name","ellipsis":true,"width":"33%","columnWidth":"33%","sorter":false,"type":"String","scopedSlots":{"customRender":"2964be516f4f41db860391ba6cd69c76"},"columId":"623bd861e4b02cb9b4f93208"},{"title":"权限","dataIndex":"uvsv_boig","key":"uvsv_boig","ellipsis":true,"width":"33%","columnWidth":"33%","sorter":false,"type":"Lookup","scopedSlots":{"customRender":"cb07dff94f3445c4a0d283f3d96e78e3"},"columId":"EaaRX4PQiYAISLRJWN"},{"title":"操作","ellipsis":true,"width":"34%","columnWidth":"34%","sorter":false,"type":"","scopedSlots":{"customRender":"bab58d0282bb4aabaf419318cad1720e"},"columId":"bab58d0282bb4aabaf419318cad1720e"}],"containerIdObj":{},"pagination":{"current_page":1,"page_size":0,"total_record":0},"whereParams":{"lookup":[{"look_up":{"uvsv_boig":{"look_up":{},"columns":["permission_name"],"table_uuid":"uvsv_jurisdiction","lookup_relation":{"type":"4","leftEntityUuid":"uvsv_role","rightEntityUuid":"uvsv_jurisdiction","leftRelationField":"uvsv_role_id","rightRelationField":"uvsv_jurisdiction_id","relationKey":"uvsv_boig"}}}}],"pagination":{"pageMode":1,"pageInfo":{},"range":{}},"order_byEcho":[{"entityName":""}],"tree_structure":{"field":"","is_tree":false},"model_uuid":"uvsv_role","order_by":{},"where":{"or":[]},"relations":[],"content":[{"columns":["uvsv_role_id","role_name","uvsv_mzvr","uvsv_xfue","uvsv_boig","uvsv_phlr"],"table_uuid":"uvsv_role"}]}},"ve566b4d626b2407e8e3a6c755df72dc2":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SubTableContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v2964be516f4f41db860391ba6cd69c76":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vf3739038383444f090b370d70c63d615":{"value":"未来OS是新一代低代码化智能软件","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vcb07dff94f3445c4a0d283f3d96e78e3":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"veda9a22b395b413cbdce100268aa24d2":{"value":"未来OS是新一代低代码化智能软件","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vbab58d0282bb4aabaf419318cad1720e":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v8de56c72a2454e0388a8c33ffcdee54d":{"value":"分配权限","disabled":false,"display":true,"dataSourceType":"","type":"Button","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"disabled":"enable","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vea8ab64727b94779aec6c98970ca7ed9":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"Dialog","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v593a12b3d5ff4c56939b2b9e53e660ad":{"value":"","disabled":false,"display":true,"dataSourceType":"entity","type":"DataForm","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vcf0ecf6cb33b43b18a5f6be8d4ca9e49":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v09b5fb90b26f440d9464af78edace935":{"value":"角色名称","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v6cf7f47e641f4fa7a3f297735a12063f":{"value":"","disabled":true,"display":true,"dataSourceType":"","type":"Input","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"displaySwitch":false,"disabled":"disabled"},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true},"rules":[{"checked":false,"type":"required","message":""},{"min":1,"max":100,"checked":false,"type":"wordLimit","message":"请输入大于1个小于100个的字符串"},{"pattern":"","checked":false,"type":"limitInputType","message":"","value":""}]},"v34bb464009e64873b4251bee2707558d":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vb661dd1e8d0840d1a0e1b185678f5800":{"value":"权限","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v91aad2eda64a44baa943624a63d904ce":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"Checkbox","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"displaySwitch":false,"disabled":"enable"},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true},"rules":[{"checked":false,"type":"required","message":""}],"dataSourceList":[],"whereParams":{"order_byEcho":[{"entityName":""}],"model_uuid":"uvsv_jurisdiction","order_by":[],"where":{"or":[]},"relations":[],"content":[{"columns":["permission_name"],"table_uuid":"uvsv_jurisdiction"}]}}}}
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
        Dialog,
      
        DataForm,
      
        Checkbox,
      
      permission
    
  ],
  methods: {
    controlEvent(callback, $scoped) {
      if ($scoped) {
        this.tableItem = $scoped;
      };
      this[callback]();
    },
    
  
    
      
      
        
          getFilterTableListb1af161efeb140f7acc67965fa0b7048(uuid){
          
          

const where=this.controlProperties[`v${uuid}`].whereParams
this.setWhere(where.where)
  this.$post('/process/v1/datagridQuery',{data:where}).then(res =>{
      const result = res.data.list;
    



    this.controlProperties[`v${uuid}`].pagination = result.pagination ?? {};
    
    
    

    



      
      const resultData = this.setLookupValueb1af161efeb140f7acc67965fa0b7048(result)

      
      this.controlProperties[`v${uuid}`].dataSourceList = resultData;

    



  })

          
          },
        
      
    
  
    
      
      
        
          setLookupValueb1af161efeb140f7acc67965fa0b7048(result){
          
          
      
      const resultData = JSON.parse(JSON.stringify(result.resultData))

      let listOption;
      
      resultData.forEach((item,index) =>{
        item.uvsv_boig.permission_name = {};item.uvsv_boig.Textpermission_name = this.getLookupData(["permission_name"],result.resultData[index].uvsv_boig);
      })

      return resultData;


          
          },
        
      
    
  
    
      
      
        
       
          async click8de56c72a2454e0388a8c33ffcdee54d(){
             
             
             
              let starta538b1023a76a401fa82ea8f8e2d4c7f8 = undefined;let editObjectad265141d428a4082b6d1644a2580e802 = {"openPage":{"pageUuid":"","blank":false,"parameList":[{"controlUuid":"","paramName":"_editObjectid_","paramSource":"page","subparamValue":"uvsv_role_id"}]},"editType":"dialogOpen","dialogOpen":{"controlUuid":"ea8ab64727b94779aec6c98970ca7ed9","subparamValue":"uvsv_role_id","dataFormIds":["593a12b3d5ff4c56939b2b9e53e660ad"]},"parentControlsCardUuid":"b1af161efeb140f7acc67965fa0b7048"};
              
                
                  let paramsArr = { starta538b1023a76a401fa82ea8f8e2d4c7f8,editObjectad265141d428a4082b6d1644a2580e802 };
                
              
              
              let flowMap = {"a538b1023a76a401fa82ea8f8e2d4c7f8":{"actionType":"start","Next":["ad265141d428a4082b6d1644a2580e802"],"current":"starta538b1023a76a401fa82ea8f8e2d4c7f8"},"ad265141d428a4082b6d1644a2580e802":{"actionType":"editObject","current":"editObjectad265141d428a4082b6d1644a2580e802"}};;
              this.loop(flowMap['a538b1023a76a401fa82ea8f8e2d4c7f8'].Next[0], flowMap, paramsArr);;
            },
       
         
      
    
  
    
      
      
        
       
          async clickConfirmBtnea8ab64727b94779aec6c98970ca7ed9(){
             
             
             
              let startac6ab1ff52d9d4d7d99ecee4fc60a3541 = undefined; let saveDataade08aad8a1564723a6eefcd97961da6a = {"controlUuid":["593a12b3d5ff4c56939b2b9e53e660ad"]};let dialogCloseac505b9dc31d84f92aed3edfa3d418694 = {"controlUuid":"ea8ab64727b94779aec6c98970ca7ed9","subparamValue":""};let messageTipsaec2053a088be4e409fff9badf1b891c5 = {"actionType":"messageTips","tipsType":"success","tipsDesc":"角色权限分配成功！!!","tipsTime":3,"tipsTopPosition":"24px"};let refreshDataa8b2324c385cd41109a17cf5c916d5885 = {"controlList":["b1af161efeb140f7acc67965fa0b7048"]};
              
                
                  let paramsArr = { startac6ab1ff52d9d4d7d99ecee4fc60a3541,saveDataade08aad8a1564723a6eefcd97961da6a,dialogCloseac505b9dc31d84f92aed3edfa3d418694,messageTipsaec2053a088be4e409fff9badf1b891c5,refreshDataa8b2324c385cd41109a17cf5c916d5885 };
                
              
              
              let flowMap = {"ac6ab1ff52d9d4d7d99ecee4fc60a3541":{"actionType":"start","Next":["ade08aad8a1564723a6eefcd97961da6a"],"current":"startac6ab1ff52d9d4d7d99ecee4fc60a3541"},"ade08aad8a1564723a6eefcd97961da6a":{"actionType":"saveData","Next":["aec2053a088be4e409fff9badf1b891c5"],"current":"saveDataUrlade08aad8a1564723a6eefcd97961da6a"},"ac505b9dc31d84f92aed3edfa3d418694":{"actionType":"dialogClose","Next":["a8b2324c385cd41109a17cf5c916d5885"],"current":"dialogCloseac505b9dc31d84f92aed3edfa3d418694"},"aec2053a088be4e409fff9badf1b891c5":{"actionType":"messageTips","Next":["ac505b9dc31d84f92aed3edfa3d418694"],"current":"messageTipsaec2053a088be4e409fff9badf1b891c5"},"a8b2324c385cd41109a17cf5c916d5885":{"actionType":"refreshData","Next":["a48d899e0e3b243e4aafa8677e0fcda43"],"current":"refreshDataa8b2324c385cd41109a17cf5c916d5885"}};;
              this.loop(flowMap['ac6ab1ff52d9d4d7d99ecee4fc60a3541'].Next[0], flowMap, paramsArr);;
            },
       
         
      
    
  
    
      
        initFormDetail593a12b3d5ff4c56939b2b9e53e660ad(primaryKey){

	const key = 'uvsv_role_id' || primaryKey;

    if(this.$route.query._editObjectid_ && this.$route.query._editObjectPrimaryKey_ && this.$route.query._editObjectPrimaryKey_ === 'uvsv_role_id'){
      this.pageQuery.primaryId = this.$route.query._editObjectid_
      this.pageQuery.primaryKey = this.$route.query._editObjectPrimaryKey_
    }else if (!this.pageQuery.primaryId || !this.pageQuery.primaryKey || this.pageQuery.primaryKey !== key){
      const info = {}
      this.controlProperties.v6cf7f47e641f4fa7a3f297735a12063f.value = info.role_name ?? this.$options.data().controlProperties.v6cf7f47e641f4fa7a3f297735a12063f.value;this.controlProperties.v91aad2eda64a44baa943624a63d904ce.value = this.getLookupList(info?.uvsv_boig);
      return 
    }

      const whereParams = {
					model_uuid: 'uvsv_role',
					where: {
						or: [
							{
								and: [
									{
										paramSourceType: '3',
										condition: '11',
										left_type: 'entity',
										right_type: 'value',
										table_uuid: 'uvsv_role',
										right: this.pageQuery.primaryId,
										table_column: this.pageQuery.primaryKey
									}
								]
							}
						]
					},
					relations: [],
					content: [
						{
							columns: ['uvsv_role_id',
                'role_name',
                'uvsv_mzvr',
                'uvsv_xfue',
                'uvsv_boig',
                'uvsv_phlr',
                
              ],
							table_uuid: 'uvsv_role'
						}
					],
					lookup: [{"look_up":{"uvsv_boig":{"look_up":{},"columns":["permission_name"],"table_uuid":"uvsv_jurisdiction","lookup_relation":{"type":"4","leftEntityUuid":"uvsv_role","rightEntityUuid":"uvsv_jurisdiction","leftRelationField":"uvsv_role_id","rightRelationField":"uvsv_jurisdiction_id","relationKey":"uvsv_boig"}}}}],
				};
      this.$post('/process/v1/datagridInfo',{data: whereParams}).then(res =>{
        const info = res.data.info
        
        this.controlProperties.v6cf7f47e641f4fa7a3f297735a12063f.value = info.role_name ?? this.$options.data().controlProperties.v6cf7f47e641f4fa7a3f297735a12063f.value;this.controlProperties.v91aad2eda64a44baa943624a63d904ce.value = this.getLookupList(info?.uvsv_boig);

	
		
	


  })
},
      
    
  
    
      
      
        
          getFilterTableList91aad2eda64a44baa943624a63d904ce(uuid){
          
          

const where=this.controlProperties[`v${uuid}`].whereParams
this.setWhere(where.where)
  this.$post('/process/v1/datagridQuery',{data:where}).then(res =>{
      const result = res.data.list;
    
      result.resultData.forEach(item =>{
          try{
            item.title = item.permission_name
          }catch(e){
            item.title = ''
          }
          item.value = item.id
        })
        result.resultData = result.resultData.filter(item => item.title);

    



    this.controlProperties[`v${uuid}`].pagination = result.pagination ?? {};
    
    
    

    



  
      this.controlProperties[`v${uuid}`].dataSourceList = result.resultData;

    



  })

          
          },
        
      
    
  
    
      
      
        
          saveDataUrlade08aad8a1564723a6eefcd97961da6a(){
          
          
  let url;
  let result = {}
  let sub_form = []
  
    
    sub_form = []
    result = {
      'model_uuid': "uvsv_role",
    }
    const subFormIdList = ['6cf7f47e641f4fa7a3f297735a12063f','91aad2eda64a44baa943624a63d904ce',]
    if(!this.validate(subFormIdList)){
      return 
    }

    
    if(this.pageQuery.primaryId && this.pageQuery.primaryKey === "uvsv_role_id"){
      url = '/process/v1/datagridUpdate' 
      result.updateContent = [
        {
          main_form: {
            content:[
                
                  {
                    table_column: "role_name",
                    value: this.controlProperties.v6cf7f47e641f4fa7a3f297735a12063f.value,
                    paramSourceType: 3
                  },
                
                  {
                    table_column: "uvsv_boig",
                    value: this.controlProperties.v91aad2eda64a44baa943624a63d904ce.value,
                    paramSourceType: 3
                  },
                
            ],
            where: {
              or: [
                {
                  and: [
                    {
                      table_column: "uvsv_role_id",
                      value: this.pageQuery.primaryId,
                      paramSourceType: 3,
                      condition: 11
                    }
                  ]
                }
              ]
            }
          },
          main_data_id: this.pageQuery.primaryId,
          sub_form
        }
      ]
    }else {
      url = '/process/v1/datagridSave'
      result.insertContent = [
        {
          insert: [
          
            {
              table_column: "role_name",
              value: this.controlProperties.v6cf7f47e641f4fa7a3f297735a12063f.value,
              paramSourceType: 3
            },
          
            {
              table_column: "uvsv_boig",
              value: this.controlProperties.v91aad2eda64a44baa943624a63d904ce.value,
              paramSourceType: 3
            },
          
          ],
          sub_form
      }]
    }
  

  this.$post(url,{
    data: result
  }).then(res=>{
  })


          
          },
        
      
    
  


  },
  created() {
    
      this.getFilterTableListb1af161efeb140f7acc67965fa0b7048('b1af161efeb140f7acc67965fa0b7048')
    
      this.initFormDetail593a12b3d5ff4c56939b2b9e53e660ad();
    
      this.getFilterTableList91aad2eda64a44baa943624a63d904ce('91aad2eda64a44baa943624a63d904ce')
    
},
mounted(){
  
}
}
</script>
<style lang="less" scoped>
 
@import '../assets/less/default1fmmF.less';

  
</style>