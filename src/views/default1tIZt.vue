

<template>
  <div class="page" style='height: 100%'>

    <div :custom-style="customStyle('623be14ae4b0d56b50933053')">
    <!-- 空白区域 -->
    <div 
        
        v-show="controlProperties.vf2feb25a11844e0d900b24842e90b32a.display"
        
        
    >   

    
    <div class="block WhiteBlock" :custom-style="customStyle('f2feb25a11844e0d900b24842e90b32a')">
    <!-- 用户角色数据容器 -->
    <div 
        
        v-show="controlProperties.v87bc26a34a9e488789914fcd54fb272d.display"
        
        
    >   

    
  <a-table  bordered rowKey="id"
  :pagination="false"
  
  class="TableContainer"
   :custom-style="customStyle('87bc26a34a9e488789914fcd54fb272d')"
    
        :data-source="controlProperties.v87bc26a34a9e488789914fcd54fb272d.dataSourceList"
    
  :columns="controlProperties.v87bc26a34a9e488789914fcd54fb272d.tableColums" :class="classStyle('v87bc26a34a9e488789914fcd54fb272d')">

    

    
        
          <div slot-scope="text,
              
                uvsv_s_user,
                uvsv_s_userIndex
              
          " slot="43d8effae51446d0815a2f7154d5ff0e" >
            
    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.v43d8effae51446d0815a2f7154d5ff0e.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('43d8effae51446d0815a2f7154d5ff0e')"
    
    :class="classStyle('v43d8effae51446d0815a2f7154d5ff0e')"
 >
    <!-- 文本 -->
    <div 
        
        v-show="controlProperties.v194c248c1f9a43fbb34da1e3179af322.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.v194c248c1f9a43fbb34da1e3179af322.disabled"
    class="Text"	
    :custom-style="customStyle('194c248c1f9a43fbb34da1e3179af322')"
    :style='{"-webkit-line-clamp":1}'
    :class="classStyle('v194c248c1f9a43fbb34da1e3179af322')"
    >

    {{uvsv_s_user.userName}}
    
  </p>
</div>
</div>
</div>

          </div>
        
        
          <div slot-scope="text,
              
                uvsv_s_user,
                uvsv_s_userIndex
              
          " slot="2f88d75f2d8342c088cdf9f54c6b3df5" >
            
    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.v2f88d75f2d8342c088cdf9f54c6b3df5.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('2f88d75f2d8342c088cdf9f54c6b3df5')"
    
    :class="classStyle('v2f88d75f2d8342c088cdf9f54c6b3df5')"
 >
    <!-- 文本 -->
    <div 
        
        v-show="controlProperties.v7d333b38c27a4482872ea1b7cbb025fd.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.v7d333b38c27a4482872ea1b7cbb025fd.disabled"
    class="Text"	
    :custom-style="customStyle('7d333b38c27a4482872ea1b7cbb025fd')"
    :style='{"-webkit-line-clamp":1}'
    :class="classStyle('v7d333b38c27a4482872ea1b7cbb025fd')"
    >

    {{uvsv_s_user.uvsv_mzvr.Textrole_name}}
    
  </p>
</div>
</div>
</div>

          </div>
        
        
          <div slot-scope="text,
              
                uvsv_s_user,
                uvsv_s_userIndex
              
          " slot="30fd7db796274908a89a698933b9290f" >
            
    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.v30fd7db796274908a89a698933b9290f.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('30fd7db796274908a89a698933b9290f')"
    
    :class="classStyle('v30fd7db796274908a89a698933b9290f')"
 >
    <!-- 分配角色按钮 -->
    <div 
        
        v-show="controlProperties.vd38596e3eb204aa8afb77feeeb2111f6.display"
        
        
    >   

    

  <div style="display:flex;">
    <a-button :class="classStyle('vd38596e3eb204aa8afb77feeeb2111f6')"
   
      @click.stop="controlEvent('clickd38596e3eb204aa8afb77feeeb2111f6',uvsv_s_user)"
    
    :disabled="controlProperties.vd38596e3eb204aa8afb77feeeb2111f6.disabled"
    :custom-style="customStyle('d38596e3eb204aa8afb77feeeb2111f6')"
    type="link"
    size=default
    class="Button"
    >
      

      {{ controlProperties.vd38596e3eb204aa8afb77feeeb2111f6.value}}
      
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

    <!-- 分配用户角色 -->
    <div 
        
        v-show="controlProperties.vee435e1f08484ba3ae674bdd8f123918.display"
        
        
    >   

    
  <a-modal
     	:footer="null"
			:width="600"
			title="分配用户角色"
			:closable="true"
			:mask="true"
			:maskClosable="true"
			:keyboard="false"
		  :visible="visible('ee435e1f08484ba3ae674bdd8f123918')"
			
			:body-style="{padding: '0px', paddingBottom:   '70px'}"
      @cancel="onClosev('vee435e1f08484ba3ae674bdd8f123918')"
      :getContainer="getContainer"
    >
    <div>
      <div :custom-style="customStyle('ee435e1f08484ba3ae674bdd8f123918')">
    <!-- 数据表单12 -->
    <div 
        
        v-show="controlProperties.vb70be3c70c404ae4852c2341bd787a15.display"
        
        
    >   

    
  <div class="DataForm"  
        :custom-style="customStyle('b70be3c70c404ae4852c2341bd787a15')"
        :class="classStyle('vb70be3c70c404ae4852c2341bd787a15')"
 >
    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.v09bcad1ad3f1409484fe1dda29eaf4e0.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('09bcad1ad3f1409484fe1dda29eaf4e0')"
    
    :class="classStyle('v09bcad1ad3f1409484fe1dda29eaf4e0')"
 >
    <!-- 文本 -->
    <div 
        
        v-show="controlProperties.v6213624a35c34e0e9a1056a202aaec98.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.v6213624a35c34e0e9a1056a202aaec98.disabled"
    class="Text"	
    :custom-style="customStyle('6213624a35c34e0e9a1056a202aaec98')"
    :style='{"-webkit-line-clamp":1}'
    :class="classStyle('v6213624a35c34e0e9a1056a202aaec98')"
    >

    {{controlProperties.v6213624a35c34e0e9a1056a202aaec98.value}}
    
  </p>
</div>

    <!-- 输入框 -->
    <div 
        
        v-show="controlProperties.v4c6f02280a8943e78c644b39c4e8eb5b.display"
        
        
    >   

    
	<validate 
	    :rules="controlProperties.v4c6f02280a8943e78c644b39c4e8eb5b.rules"
		:value="controlProperties.v4c6f02280a8943e78c644b39c4e8eb5b.value"
		prop="4c6f02280a8943e78c644b39c4e8eb5b"
	>
		  <a-input
				class='Input'
				:custom-style="customStyle('4c6f02280a8943e78c644b39c4e8eb5b')"
				:class="classStyle('v4c6f02280a8943e78c644b39c4e8eb5b')"
				size="default"
				
				:disabled="controlProperties.v4c6f02280a8943e78c644b39c4e8eb5b.disabled"
				placeholder="请输入"
        
						v-model="controlProperties.v4c6f02280a8943e78c644b39c4e8eb5b.value"
        

				 
			>
    </a-input>
	</validate>

</div>
</div>
</div>

    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.v9e498cb6f4654a46803a8629e541eb78.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('9e498cb6f4654a46803a8629e541eb78')"
    
    :class="classStyle('v9e498cb6f4654a46803a8629e541eb78')"
 >
    <!-- 文本 -->
    <div 
        
        v-show="controlProperties.vd3c50d0d552d4440b818937e453213ac.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.vd3c50d0d552d4440b818937e453213ac.disabled"
    class="Text"	
    :custom-style="customStyle('d3c50d0d552d4440b818937e453213ac')"
    :style='{"-webkit-line-clamp":1}'
    :class="classStyle('vd3c50d0d552d4440b818937e453213ac')"
    >

    {{controlProperties.vd3c50d0d552d4440b818937e453213ac.value}}
    
  </p>
</div>

    <!-- 下拉框 -->
    <div 
        
        v-show="controlProperties.v9f8702c032ea4ce5a014a897b672465d.display"
        
        
    >   

    
	<validate 
    :rules="controlProperties.v9f8702c032ea4ce5a014a897b672465d.rules"
		:value="controlProperties.v9f8702c032ea4ce5a014a897b672465d.value"
		prop="9f8702c032ea4ce5a014a897b672465d"
	>
  
    <a-tree-select
        class="DropdownList"
        :custom-style="customStyle('9f8702c032ea4ce5a014a897b672465d')"
        :class="classStyle('v9f8702c032ea4ce5a014a897b672465d')"
        show-search

        
          @change="setSelectValue('9f8702c032ea4ce5a014a897b672465d',controlProperties.v9f8702c032ea4ce5a014a897b672465d,'value',false,$event)"
          :value="selectValue(controlProperties.v9f8702c032ea4ce5a014a897b672465d.value,false)"
        

        :disabled="controlProperties.v9f8702c032ea4ce5a014a897b672465d.disabled"
        :tree-data="controlProperties.v9f8702c032ea4ce5a014a897b672465d.dataSourceList"
        placeholder="请选择"
        :replaceFields="{children: 'children',title: 'title',key: 'id',value: 'id',}"
        
        tree-data-simple-mode
        :multiple="false"
      ></a-tree-select>
    </validate>
</div>
</div>
</div>
</div>
</div>
<div>
           
          <div class="drawer-footer" >
            <a-button class="drawcontent-footer-btn"  @click="onClosev('vee435e1f08484ba3ae674bdd8f123918')"  >
              
							
              取消
                </a-button>
            <a-button type="primary" class="drawcontent-footer-btn" @click="clickConfirmBtn('clickConfirmBtnee435e1f08484ba3ae674bdd8f123918')" >
							
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
    import DropdownList from '@/mixins/controlMixins/DropdownList.js';
  
    import permission from '@/mixins/permission.js'
  
  
  
  export default {
    data() {
      return {"drawerList":[],"tableItem":{},"controlProperties":{"vf2feb25a11844e0d900b24842e90b32a":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"WhiteBlock","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v87bc26a34a9e488789914fcd54fb272d":{"value":[],"disabled":false,"display":true,"dataSourceType":"entity","type":"TableContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true},"dataSourceList":[],"tableColums":[{"title":"用户名","dataIndex":"userName","key":"userName","ellipsis":true,"width":"33%","columnWidth":"33%","sorter":false,"type":"String","scopedSlots":{"customRender":"43d8effae51446d0815a2f7154d5ff0e"},"columId":"62303c75e4b0da5d7ec365ed"},{"title":"用户-角色","dataIndex":"uvsv_mzvr","key":"uvsv_mzvr","ellipsis":true,"width":"33%","columnWidth":"33%","sorter":false,"type":"Lookup","scopedSlots":{"customRender":"2f88d75f2d8342c088cdf9f54c6b3df5"},"columId":"EagqDGERrc0abdRLEN"},{"title":"操作","ellipsis":true,"width":"34%","columnWidth":"34%","sorter":false,"type":"","scopedSlots":{"customRender":"30fd7db796274908a89a698933b9290f"},"columId":"30fd7db796274908a89a698933b9290f"}],"containerIdObj":{},"pagination":{"current_page":1,"page_size":0,"total_record":0},"whereParams":{"lookup":[{"look_up":{"uvsv_mzvr":{"look_up":{},"columns":["role_name"],"table_uuid":"uvsv_role","lookup_relation":{"type":"4","leftEntityUuid":"uvsv_s_user","rightEntityUuid":"uvsv_role","leftRelationField":"uvsv_s_user_id","rightRelationField":"uvsv_role_id","relationKey":"uvsv_mzvr"}}}}],"pagination":{"pageMode":1,"pageInfo":{},"range":{}},"order_byEcho":[{"entityName":""}],"tree_structure":{"field":"","is_tree":false},"model_uuid":"uvsv_s_user","order_by":{},"where":{"or":[]},"relations":[],"content":[{"columns":["uvsv_s_user_id","userName","password","uvsv_bkfp","uvsv_mzvr"],"table_uuid":"uvsv_s_user"}]}},"v7a29bef869374e75aa6babfb70113b3f":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SubTableContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v43d8effae51446d0815a2f7154d5ff0e":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v194c248c1f9a43fbb34da1e3179af322":{"value":"未来OS是新一代低代码化智能软件","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v2f88d75f2d8342c088cdf9f54c6b3df5":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v7d333b38c27a4482872ea1b7cbb025fd":{"value":"未来OS是新一代低代码化智能软件","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v30fd7db796274908a89a698933b9290f":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vd38596e3eb204aa8afb77feeeb2111f6":{"value":"分配角色","disabled":false,"display":true,"dataSourceType":"","type":"Button","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"disabled":"enable","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vee435e1f08484ba3ae674bdd8f123918":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"Dialog","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vb70be3c70c404ae4852c2341bd787a15":{"value":"","disabled":false,"display":true,"dataSourceType":"entity","type":"DataForm","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v09bcad1ad3f1409484fe1dda29eaf4e0":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v6213624a35c34e0e9a1056a202aaec98":{"value":"用户名","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v4c6f02280a8943e78c644b39c4e8eb5b":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"Input","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"displaySwitch":false,"disabled":"enable"},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true},"rules":[{"checked":false,"type":"required","message":""},{"min":1,"max":100,"checked":false,"type":"wordLimit","message":"请输入大于1个小于100个的字符串"},{"pattern":"","checked":false,"type":"limitInputType","message":"","value":""}]},"v9e498cb6f4654a46803a8629e541eb78":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vd3c50d0d552d4440b818937e453213ac":{"value":"角色","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v9f8702c032ea4ce5a014a897b672465d":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"DropdownList","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"displaySwitch":false,"disabled":"enable"},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true},"rules":[{"checked":false,"type":"required","message":""}],"dataSourceList":[],"whereParams":{"order_byEcho":[{"entityName":""}],"model_uuid":"uvsv_role","order_by":[],"where":{"or":[]},"relations":[],"content":[{"columns":["role_name"],"table_uuid":"uvsv_role"}]}}}}
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
      
        DropdownList,
      
      permission
    
  ],
  methods: {
    controlEvent(callback, $scoped) {
      if ($scoped) {
        this.tableItem = $scoped;
      };
      this[callback]();
    },
    
  
    
      
      
        
          getFilterTableList87bc26a34a9e488789914fcd54fb272d(uuid){
          
          

const where=this.controlProperties[`v${uuid}`].whereParams
this.setWhere(where.where)
  this.$post('/process/v1/datagridQuery',{data:where}).then(res =>{
      const result = res.data.list;
    



    this.controlProperties[`v${uuid}`].pagination = result.pagination ?? {};
    
    
    

    



      
      const resultData = this.setLookupValue87bc26a34a9e488789914fcd54fb272d(result)

      
      this.controlProperties[`v${uuid}`].dataSourceList = resultData;

    



  })

          
          },
        
      
    
  
    
      
      
        
          setLookupValue87bc26a34a9e488789914fcd54fb272d(result){
          
          
      
      const resultData = JSON.parse(JSON.stringify(result.resultData))

      let listOption;
      
      resultData.forEach((item,index) =>{
        item.uvsv_mzvr.role_name = {};item.uvsv_mzvr.Textrole_name = this.getLookupData(["role_name"],result.resultData[index].uvsv_mzvr);
      })

      return resultData;


          
          },
        
      
    
  
    
      
      
        
       
          async clickd38596e3eb204aa8afb77feeeb2111f6(){
             
             
             
              let startadb14b76da30c49dd892068c9d22bad3a = undefined;let editObjecta59065264e40945d49e288c68424b1760 = {"openPage":{"pageUuid":"","blank":false,"parameList":[{"controlUuid":"","paramName":"_editObjectid_","paramSource":"page","subparamValue":"uvsv_s_user_id"}]},"editType":"dialogOpen","dialogOpen":{"controlUuid":"ee435e1f08484ba3ae674bdd8f123918","subparamValue":"uvsv_s_user_id","dataFormIds":["b70be3c70c404ae4852c2341bd787a15"]},"parentControlsCardUuid":"87bc26a34a9e488789914fcd54fb272d"};
              
                
                  let paramsArr = { startadb14b76da30c49dd892068c9d22bad3a,editObjecta59065264e40945d49e288c68424b1760 };
                
              
              
              let flowMap = {"adb14b76da30c49dd892068c9d22bad3a":{"actionType":"start","Next":["a59065264e40945d49e288c68424b1760"],"current":"startadb14b76da30c49dd892068c9d22bad3a"},"a59065264e40945d49e288c68424b1760":{"actionType":"editObject","current":"editObjecta59065264e40945d49e288c68424b1760"}};;
              this.loop(flowMap['adb14b76da30c49dd892068c9d22bad3a'].Next[0], flowMap, paramsArr);;
            },
       
         
      
    
  
    
      
      
        
       
          async clickConfirmBtnee435e1f08484ba3ae674bdd8f123918(){
             
             
             
              let starta2c3086e0b40f498ca980b4eec57779e4 = undefined; let saveDataa299136ae3b4a42089bd586f8c8e60dda = {"controlUuid":["b70be3c70c404ae4852c2341bd787a15"]};let messageTipsa8503153d52af4353ad52e3c2dce3e03f = {"actionType":"messageTips","tipsType":"success","tipsDesc":"用户角色分配成功！","tipsTime":5,"tipsTopPosition":"24px"};let dialogClosea79aa46a9575f493eb4a1ec58b3b20b1e = {"controlUuid":"ee435e1f08484ba3ae674bdd8f123918","subparamValue":""};let refreshDataa1bec004a65bd4e9e87a5221ba6b8ff1f = {"controlList":["87bc26a34a9e488789914fcd54fb272d"]};
              
                
                  let paramsArr = { starta2c3086e0b40f498ca980b4eec57779e4,saveDataa299136ae3b4a42089bd586f8c8e60dda,messageTipsa8503153d52af4353ad52e3c2dce3e03f,dialogClosea79aa46a9575f493eb4a1ec58b3b20b1e,refreshDataa1bec004a65bd4e9e87a5221ba6b8ff1f };
                
              
              
              let flowMap = {"a2c3086e0b40f498ca980b4eec57779e4":{"actionType":"start","Next":["a299136ae3b4a42089bd586f8c8e60dda"],"current":"starta2c3086e0b40f498ca980b4eec57779e4"},"a299136ae3b4a42089bd586f8c8e60dda":{"actionType":"saveData","Next":["a79aa46a9575f493eb4a1ec58b3b20b1e"],"current":"saveDataUrla299136ae3b4a42089bd586f8c8e60dda"},"a8503153d52af4353ad52e3c2dce3e03f":{"actionType":"messageTips","Next":["a1bec004a65bd4e9e87a5221ba6b8ff1f"],"current":"messageTipsa8503153d52af4353ad52e3c2dce3e03f"},"a79aa46a9575f493eb4a1ec58b3b20b1e":{"actionType":"dialogClose","Next":["a8503153d52af4353ad52e3c2dce3e03f"],"current":"dialogClosea79aa46a9575f493eb4a1ec58b3b20b1e"},"a1bec004a65bd4e9e87a5221ba6b8ff1f":{"actionType":"refreshData","Next":["a9c0640c4f58343fa9508c184adb13461"],"current":"refreshDataa1bec004a65bd4e9e87a5221ba6b8ff1f"}};;
              this.loop(flowMap['a2c3086e0b40f498ca980b4eec57779e4'].Next[0], flowMap, paramsArr);;
            },
       
         
      
    
  
    
      
        initFormDetailb70be3c70c404ae4852c2341bd787a15(primaryKey){

	const key = 'uvsv_s_user_id' || primaryKey;

    if(this.$route.query._editObjectid_ && this.$route.query._editObjectPrimaryKey_ && this.$route.query._editObjectPrimaryKey_ === 'uvsv_s_user_id'){
      this.pageQuery.primaryId = this.$route.query._editObjectid_
      this.pageQuery.primaryKey = this.$route.query._editObjectPrimaryKey_
    }else if (!this.pageQuery.primaryId || !this.pageQuery.primaryKey || this.pageQuery.primaryKey !== key){
      const info = {}
      this.controlProperties.v4c6f02280a8943e78c644b39c4e8eb5b.value = info.userName ?? this.$options.data().controlProperties.v4c6f02280a8943e78c644b39c4e8eb5b.value;this.controlProperties.v9f8702c032ea4ce5a014a897b672465d.value = this.getLookupList(info?.uvsv_mzvr);
      return 
    }

      const whereParams = {
					model_uuid: 'uvsv_s_user',
					where: {
						or: [
							{
								and: [
									{
										paramSourceType: '3',
										condition: '11',
										left_type: 'entity',
										right_type: 'value',
										table_uuid: 'uvsv_s_user',
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
							columns: ['uvsv_s_user_id',
                'userName',
                'password',
                'uvsv_bkfp',
                'uvsv_mzvr',
                
              ],
							table_uuid: 'uvsv_s_user'
						}
					],
					lookup: [{"look_up":{"uvsv_mzvr":{"look_up":{},"columns":["role_name"],"table_uuid":"uvsv_role","lookup_relation":{"type":"4","leftEntityUuid":"uvsv_s_user","rightEntityUuid":"uvsv_role","leftRelationField":"uvsv_s_user_id","rightRelationField":"uvsv_role_id","relationKey":"uvsv_mzvr"}}}}],
				};
      this.$post('/process/v1/datagridInfo',{data: whereParams}).then(res =>{
        const info = res.data.info
        
        this.controlProperties.v4c6f02280a8943e78c644b39c4e8eb5b.value = info.userName ?? this.$options.data().controlProperties.v4c6f02280a8943e78c644b39c4e8eb5b.value;this.controlProperties.v9f8702c032ea4ce5a014a897b672465d.value = this.getLookupList(info?.uvsv_mzvr);

	
		
	


  })
},
      
    
  
    
      
      
        
          getFilterTableList9f8702c032ea4ce5a014a897b672465d(uuid){
          
          

const where=this.controlProperties[`v${uuid}`].whereParams
this.setWhere(where.where)
  this.$post('/process/v1/datagridQuery',{data:where}).then(res =>{
      const result = res.data.list;
    
      result.resultData.forEach(item =>{
          try{
            item.title = item.role_name
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
        
      
    
  
    
      
      
        
          saveDataUrla299136ae3b4a42089bd586f8c8e60dda(){
          
          
  let url;
  let result = {}
  let sub_form = []
  
    
    sub_form = []
    result = {
      'model_uuid': "uvsv_s_user",
    }
    const subFormIdList = ['4c6f02280a8943e78c644b39c4e8eb5b','9f8702c032ea4ce5a014a897b672465d',]
    if(!this.validate(subFormIdList)){
      return 
    }

    
    if(this.pageQuery.primaryId && this.pageQuery.primaryKey === "uvsv_s_user_id"){
      url = '/process/v1/datagridUpdate' 
      result.updateContent = [
        {
          main_form: {
            content:[
                
                  {
                    table_column: "userName",
                    value: this.controlProperties.v4c6f02280a8943e78c644b39c4e8eb5b.value,
                    paramSourceType: 3
                  },
                
                  {
                    table_column: "uvsv_mzvr",
                    value: this.controlProperties.v9f8702c032ea4ce5a014a897b672465d.value,
                    paramSourceType: 3
                  },
                
            ],
            where: {
              or: [
                {
                  and: [
                    {
                      table_column: "uvsv_s_user_id",
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
              table_column: "userName",
              value: this.controlProperties.v4c6f02280a8943e78c644b39c4e8eb5b.value,
              paramSourceType: 3
            },
          
            {
              table_column: "uvsv_mzvr",
              value: this.controlProperties.v9f8702c032ea4ce5a014a897b672465d.value,
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
    
      this.getFilterTableList87bc26a34a9e488789914fcd54fb272d('87bc26a34a9e488789914fcd54fb272d')
    
      this.initFormDetailb70be3c70c404ae4852c2341bd787a15();
    
      this.getFilterTableList9f8702c032ea4ce5a014a897b672465d('9f8702c032ea4ce5a014a897b672465d')
    
},
mounted(){
  
}
}
</script>
<style lang="less" scoped>
 
@import '../assets/less/default1tIZt.less';

  
</style>