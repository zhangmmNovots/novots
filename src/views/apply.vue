

<template>
  <div class="page" style='height: 100%'>

    <div :custom-style="customStyle('623969a7e4b05fd77008a06e')">
    <!-- 空白区域 -->
    <div 
        
        v-show="controlProperties.vba751f89e12740bfb35462806590b44f.display"
        
        
    >   

    
    <div class="block WhiteBlock" :custom-style="customStyle('ba751f89e12740bfb35462806590b44f')">
    <!-- 空白容器2 -->
    <div 
        
        v-show="controlProperties.v086da7023631461e8d76e0b726b82633.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('086da7023631461e8d76e0b726b82633')"
    
    :class="classStyle('v086da7023631461e8d76e0b726b82633')"
 >
    <!-- 文本3 -->
    <div 
        
        v-show="controlProperties.v3f21acc170984582a17e4ba475213e8d.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.v3f21acc170984582a17e4ba475213e8d.disabled"
    class="Text"	
    :custom-style="customStyle('3f21acc170984582a17e4ba475213e8d')"
    
    :style='{"-webkit-line-clamp":1}'
    
    :class="classStyle('v3f21acc170984582a17e4ba475213e8d')"
    >

    {{controlProperties.v3f21acc170984582a17e4ba475213e8d.value}}
    
  </p>
</div>

    <!-- 查询审批状态下拉框4 -->
    <div 
        
        v-show="controlProperties.vef288ee2227c43b288d85e134d9519ab.display"
        
        
    >   

    
	<validate 
    :rules="controlProperties.vef288ee2227c43b288d85e134d9519ab.rules"
		:value="controlProperties.vef288ee2227c43b288d85e134d9519ab.value"
		prop="ef288ee2227c43b288d85e134d9519ab"
	>
  
    <a-tree-select
        class="DropdownList"
        :custom-style="customStyle('ef288ee2227c43b288d85e134d9519ab')"
        :class="classStyle('vef288ee2227c43b288d85e134d9519ab')"
        show-search

        
          @change="setSelectValue('ef288ee2227c43b288d85e134d9519ab',controlProperties.vef288ee2227c43b288d85e134d9519ab,'value',false,$event)"
          :value="selectValue(controlProperties.vef288ee2227c43b288d85e134d9519ab.value,false)"
        

        :disabled="controlProperties.vef288ee2227c43b288d85e134d9519ab.disabled"
        :tree-data="controlProperties.vef288ee2227c43b288d85e134d9519ab.dataSourceList"
        placeholder="请选择"
        :replaceFields="{children: 'children',title: 'title',key: 'id',value: 'id',}"
        
        tree-data-simple-mode
        :multiple="false"
      ></a-tree-select>
    </validate>
</div>
</div>
</div>

    <!-- 空白容器5 -->
    <div 
        
        v-show="controlProperties.v833aeb833c17497c8c85b22a95fcc462.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('833aeb833c17497c8c85b22a95fcc462')"
    
    :class="classStyle('v833aeb833c17497c8c85b22a95fcc462')"
 >
    <!-- 申请按钮 -->
    <div 
        
        v-show="controlProperties.v7b74ad13953b439ea9f2c2beac4a2b3a.display"
        
        
    >   

    

  <div style="display:flex;">
    <a-button :class="classStyle('v7b74ad13953b439ea9f2c2beac4a2b3a')"
   
      @click.stop="controlEvent('click7b74ad13953b439ea9f2c2beac4a2b3a',)"
    
    :disabled="controlProperties.v7b74ad13953b439ea9f2c2beac4a2b3a.disabled"
    :custom-style="customStyle('7b74ad13953b439ea9f2c2beac4a2b3a')"
    type="primary"
    size=default
    class="Button"
    >
      

      {{ controlProperties.v7b74ad13953b439ea9f2c2beac4a2b3a.value}}
      
    </a-button>
  </div>
</div>
</div>
</div>

    <!-- 收入确认申请列表 -->
    <div 
        
        v-show="controlProperties.v9dc8758d5418446c8c8ea956681b37a7.display"
        
        
    >   

    
  <a-table  bordered rowKey="id"
  :pagination="false"
  
  class="TableContainer"
   :custom-style="customStyle('9dc8758d5418446c8c8ea956681b37a7')"
    
        :data-source="controlProperties.v9dc8758d5418446c8c8ea956681b37a7.dataSourceList"
    
  :columns="controlProperties.v9dc8758d5418446c8c8ea956681b37a7.tableColums" :class="classStyle('v9dc8758d5418446c8c8ea956681b37a7')">

    

    
        
          <div slot-scope="text,
              
                uvsv_application_revenu,
                uvsv_application_revenuIndex
              
          " slot="e0dbb95a78464863bac6dbf686d2fcdf" >
            
    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.ve0dbb95a78464863bac6dbf686d2fcdf.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('e0dbb95a78464863bac6dbf686d2fcdf')"
    
    :class="classStyle('ve0dbb95a78464863bac6dbf686d2fcdf')"
 >
    <!-- 空白容器18 -->
    <div 
        
        v-show="controlProperties.v78169103bd6f4312b144195b9369a20f.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('78169103bd6f4312b144195b9369a20f')"
    
    :class="classStyle('v78169103bd6f4312b144195b9369a20f')"
 >
    <!-- 修改按钮 -->
    <div 
        
        v-show="controlProperties.ve63202aaaa98436ab2c7fe8772424ec8.display"
        
        
    >   

    

  <div style="display:flex;">
    <a-button :class="classStyle('ve63202aaaa98436ab2c7fe8772424ec8')"
   
      @click.stop="controlEvent('clicke63202aaaa98436ab2c7fe8772424ec8',uvsv_application_revenu)"
    
    :disabled="controlProperties.ve63202aaaa98436ab2c7fe8772424ec8.disabled"
    :custom-style="customStyle('e63202aaaa98436ab2c7fe8772424ec8')"
    type="dashed"
    size=default
    class="Button"
    >
      

      {{ controlProperties.ve63202aaaa98436ab2c7fe8772424ec8.value}}
      
    </a-button>
  </div>
</div>

    <!-- 审批按钮 -->
    <div 
        
        v-show="controlProperties.v485c20f68dc34bb1ad5d8085cfec6c3e.display"
        
        
    >   

    

  <div style="display:flex;">
    <a-button :class="classStyle('v485c20f68dc34bb1ad5d8085cfec6c3e')"
   
    :disabled="controlProperties.v485c20f68dc34bb1ad5d8085cfec6c3e.disabled"
    :custom-style="customStyle('485c20f68dc34bb1ad5d8085cfec6c3e')"
    type="primary"
    size=default
    class="Button"
    >
      

      {{ controlProperties.v485c20f68dc34bb1ad5d8085cfec6c3e.value}}
      
    </a-button>
  </div>
</div>

    <!-- 删除按钮 -->
    <div 
        
        v-show="controlProperties.v011c2573cd25430a9bad2b5a90ecb775.display"
        
        
    >   

    

  <div style="display:flex;">
    <a-button :class="classStyle('v011c2573cd25430a9bad2b5a90ecb775')"
   
      @click.stop="controlEvent('click011c2573cd25430a9bad2b5a90ecb775',uvsv_application_revenu)"
    
    :disabled="controlProperties.v011c2573cd25430a9bad2b5a90ecb775.disabled"
    :custom-style="customStyle('011c2573cd25430a9bad2b5a90ecb775')"
    type="danger"
    size=default
    class="Button"
    >
      

      {{ controlProperties.v011c2573cd25430a9bad2b5a90ecb775.value}}
      
    </a-button>
  </div>
</div>
</div>
</div>
</div>
</div>

          </div>
        
        
          <div slot-scope="text,
              
                uvsv_application_revenu,
                uvsv_application_revenuIndex
              
          " slot="775cac2910ae45878efb56006e16e418" >
            
    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.v775cac2910ae45878efb56006e16e418.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('775cac2910ae45878efb56006e16e418')"
    
    :class="classStyle('v775cac2910ae45878efb56006e16e418')"
 >
    <!-- 收入金额 -->
    <div 
        
        v-show="controlProperties.v0f9ea56a0acd4f6da95025ab339c2134.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.v0f9ea56a0acd4f6da95025ab339c2134.disabled"
    class="Text"	
    :custom-style="customStyle('0f9ea56a0acd4f6da95025ab339c2134')"
    
    :style='{"-webkit-line-clamp":1}'
    
    :class="classStyle('v0f9ea56a0acd4f6da95025ab339c2134')"
    >

    {{uvsv_application_revenu.fee}}
    
  </p>
</div>
</div>
</div>

          </div>
        
        
          <div slot-scope="text,
              
                uvsv_application_revenu,
                uvsv_application_revenuIndex
              
          " slot="2b9e820348694cc697505b072780cc98" >
            
    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.v2b9e820348694cc697505b072780cc98.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('2b9e820348694cc697505b072780cc98')"
    
    :class="classStyle('v2b9e820348694cc697505b072780cc98')"
 >
    <!-- 所属月份 -->
    <div 
        
        v-show="controlProperties.v89ee99d0ea22419ea930256460f4bb95.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.v89ee99d0ea22419ea930256460f4bb95.disabled"
    class="Text"	
    :custom-style="customStyle('89ee99d0ea22419ea930256460f4bb95')"
    
    :style='{"-webkit-line-clamp":1}'
    
    :class="classStyle('v89ee99d0ea22419ea930256460f4bb95')"
    >

    {{uvsv_application_revenu.month}}
    
  </p>
</div>
</div>
</div>

          </div>
        
        
          <div slot-scope="text,
              
                uvsv_application_revenu,
                uvsv_application_revenuIndex
              
          " slot="461bec041e744186805fa8b1a77ca56e" >
            
    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.v461bec041e744186805fa8b1a77ca56e.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('461bec041e744186805fa8b1a77ca56e')"
    
    :class="classStyle('v461bec041e744186805fa8b1a77ca56e')"
 >
    <!-- 申请人 -->
    <div 
        
        v-show="controlProperties.v5968478adcb44be88cbbf98494f837fe.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.v5968478adcb44be88cbbf98494f837fe.disabled"
    class="Text"	
    :custom-style="customStyle('5968478adcb44be88cbbf98494f837fe')"
    
    :style='{"-webkit-line-clamp":1}'
    
    :class="classStyle('v5968478adcb44be88cbbf98494f837fe')"
    >

    {{uvsv_application_revenu.uvsv_dzsp.TextuserName}}
    
  </p>
</div>
</div>
</div>

          </div>
        
        
          <div slot-scope="text,
              
                uvsv_application_revenu,
                uvsv_application_revenuIndex
              
          " slot="89bd6a3dc912445c9b56983633b2c11c" >
            
    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.v89bd6a3dc912445c9b56983633b2c11c.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('89bd6a3dc912445c9b56983633b2c11c')"
    
    :class="classStyle('v89bd6a3dc912445c9b56983633b2c11c')"
 >
    <!-- 项目 -->
    <div 
        
        v-show="controlProperties.vb4af04a367664e8a9c1bb51ac0c13053.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.vb4af04a367664e8a9c1bb51ac0c13053.disabled"
    class="Text"	
    :custom-style="customStyle('b4af04a367664e8a9c1bb51ac0c13053')"
    
    :style='{"-webkit-line-clamp":1}'
    
    :class="classStyle('vb4af04a367664e8a9c1bb51ac0c13053')"
    >

    {{uvsv_application_revenu.uvsv_psey.Textentry_name}}
    
  </p>
</div>
</div>
</div>

          </div>
        

  </a-table>
 
  
    <div class="pageNation">
      
      
        <a-pagination v-model="controlProperties.v9dc8758d5418446c8c8ea956681b37a7.whereParams.pagination.pageInfo.currentPage" :pageSize="controlProperties.v9dc8758d5418446c8c8ea956681b37a7.pagination.page_size" :total="controlProperties.v9dc8758d5418446c8c8ea956681b37a7.pagination.total_record" @change="getFilterTableList9dc8758d5418446c8c8ea956681b37a7('9dc8758d5418446c8c8ea956681b37a7')"/>
      

    </div>
  
</div>

    <!-- 收入确认申请主键 -->
    <div 
        
        v-show="controlProperties.v33e53b0a13d24c5bb91d970303b53f2f.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.v33e53b0a13d24c5bb91d970303b53f2f.disabled"
    class="Text"	
    :custom-style="customStyle('33e53b0a13d24c5bb91d970303b53f2f')"
    
    :style='{"-webkit-line-clamp":1}'
    
    :class="classStyle('v33e53b0a13d24c5bb91d970303b53f2f')"
    >

    {{controlProperties.v33e53b0a13d24c5bb91d970303b53f2f.value}}
    
  </p>
</div>
</div>
</div>

    <!-- 收入确认申请 -->
    <div 
        
        v-show="controlProperties.v2e7b790e7f2342038e213ee756fcda96.display"
        
        
    >   

    
  <a-modal
     	:footer="null"
			:width="600"
			title="收入确认申请"
			:closable="true"
			:mask="true"
			:maskClosable="true"
			:keyboard="false"
		  :visible="visible('2e7b790e7f2342038e213ee756fcda96')"
			
			:body-style="{padding: '0px', paddingBottom:   '70px'}"
      @cancel="onClosev('v2e7b790e7f2342038e213ee756fcda96')"
      :getContainer="getContainer"
    >
    <div>
      <div :custom-style="customStyle('2e7b790e7f2342038e213ee756fcda96')">
    <!-- 收入确认申请 -->
    <div 
        
        v-show="controlProperties.v0bdcb09fefcf4a64b44b288e75183bf2.display"
        
        
    >   

    
  <div class="DataForm"  
        :custom-style="customStyle('0bdcb09fefcf4a64b44b288e75183bf2')"
        :class="classStyle('v0bdcb09fefcf4a64b44b288e75183bf2')"
 >
    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.va71e8ba938fb4fbabf24cd453def5bde.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('a71e8ba938fb4fbabf24cd453def5bde')"
    
    :class="classStyle('va71e8ba938fb4fbabf24cd453def5bde')"
 >
    <!-- 文本 -->
    <div 
        
        v-show="controlProperties.v89e6c55c012d4b07a190c89b4762d661.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.v89e6c55c012d4b07a190c89b4762d661.disabled"
    class="Text"	
    :custom-style="customStyle('89e6c55c012d4b07a190c89b4762d661')"
    
    :style='{"-webkit-line-clamp":1}'
    
    :class="classStyle('v89e6c55c012d4b07a190c89b4762d661')"
    >

    {{controlProperties.v89e6c55c012d4b07a190c89b4762d661.value}}
    
  </p>
</div>

    <!-- 输入框 -->
    <div 
        
        v-show="controlProperties.v00167aba3cea48d49a671190fde9d387.display"
        
        
    >   

    
	<validate 
	    :rules="controlProperties.v00167aba3cea48d49a671190fde9d387.rules"
		:value="controlProperties.v00167aba3cea48d49a671190fde9d387.value"
		prop="00167aba3cea48d49a671190fde9d387"
	>
		  <a-input
				class='Input'
				:custom-style="customStyle('00167aba3cea48d49a671190fde9d387')"
				:class="classStyle('v00167aba3cea48d49a671190fde9d387')"
				size="default"
				
				:disabled="controlProperties.v00167aba3cea48d49a671190fde9d387.disabled"
				placeholder="请输入"
        
						v-model="controlProperties.v00167aba3cea48d49a671190fde9d387.value"
        

				 
			>
    </a-input>
	</validate>

</div>
</div>
</div>

    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.ve8f34fa3460d4dc7847d62f66912069e.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('e8f34fa3460d4dc7847d62f66912069e')"
    
    :class="classStyle('ve8f34fa3460d4dc7847d62f66912069e')"
 >
    <!-- 文本 -->
    <div 
        
        v-show="controlProperties.v23831a891f2f49558138b999cb55c62c.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.v23831a891f2f49558138b999cb55c62c.disabled"
    class="Text"	
    :custom-style="customStyle('23831a891f2f49558138b999cb55c62c')"
    
    :style='{"-webkit-line-clamp":1}'
    
    :class="classStyle('v23831a891f2f49558138b999cb55c62c')"
    >

    {{controlProperties.v23831a891f2f49558138b999cb55c62c.value}}
    
  </p>
</div>

    <!-- 日期 -->
    <div 
        
        v-show="controlProperties.vfe1e37731923459cac53bc4ab44098f9.display"
        
        
    >   

    
 
	 <a-date-picker
	 
				class='Date'
				:custom-style="customStyle('fe1e37731923459cac53bc4ab44098f9')"
				:class="classStyle('vfe1e37731923459cac53bc4ab44098f9')"
				size="default"
				:disabled="controlProperties.vfe1e37731923459cac53bc4ab44098f9.disabled"
				placeholder="请选择日期"
				:allowClear="true"
				valueFormat='YYYY-MM-DD'v-model="controlProperties.vfe1e37731923459cac53bc4ab44098f9.value"format="YYYY-MM-DD"
			>
    <span class="iconfont" slot="suffixIcon">&#xe6ca;</span></a-date-picker
			>
 
</div>
</div>
</div>

    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.vcb6fc37a1b7e4db0a744ff168e14506f.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('cb6fc37a1b7e4db0a744ff168e14506f')"
    
    :class="classStyle('vcb6fc37a1b7e4db0a744ff168e14506f')"
 >
    <!-- 文本 -->
    <div 
        
        v-show="controlProperties.vd3b78c90a52a4b279a71c8f178793e63.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.vd3b78c90a52a4b279a71c8f178793e63.disabled"
    class="Text"	
    :custom-style="customStyle('d3b78c90a52a4b279a71c8f178793e63')"
    
    :style='{"-webkit-line-clamp":1}'
    
    :class="classStyle('vd3b78c90a52a4b279a71c8f178793e63')"
    >

    {{controlProperties.vd3b78c90a52a4b279a71c8f178793e63.value}}
    
  </p>
</div>

    <!-- 下拉框 -->
    <div 
        
        v-show="controlProperties.vd0a47be54f964bfa9aa74e82fca72676.display"
        
        
    >   

    
	<validate 
    :rules="controlProperties.vd0a47be54f964bfa9aa74e82fca72676.rules"
		:value="controlProperties.vd0a47be54f964bfa9aa74e82fca72676.value"
		prop="d0a47be54f964bfa9aa74e82fca72676"
	>
  
    <a-tree-select
        class="DropdownList"
        :custom-style="customStyle('d0a47be54f964bfa9aa74e82fca72676')"
        :class="classStyle('vd0a47be54f964bfa9aa74e82fca72676')"
        show-search

        
          @change="setSelectValue('d0a47be54f964bfa9aa74e82fca72676',controlProperties.vd0a47be54f964bfa9aa74e82fca72676,'value',false,$event)"
          :value="selectValue(controlProperties.vd0a47be54f964bfa9aa74e82fca72676.value,false)"
        

        :disabled="controlProperties.vd0a47be54f964bfa9aa74e82fca72676.disabled"
        :tree-data="controlProperties.vd0a47be54f964bfa9aa74e82fca72676.dataSourceList"
        placeholder="请选择"
        :replaceFields="{children: 'children',title: 'title',key: 'id',value: 'id',}"
        
        tree-data-simple-mode
        :multiple="false"
      ></a-tree-select>
    </validate>
</div>
</div>
</div>

    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.vead49800bc0e4b49b5ecf6f0b35259e3.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('ead49800bc0e4b49b5ecf6f0b35259e3')"
    
    :class="classStyle('vead49800bc0e4b49b5ecf6f0b35259e3')"
 >
    <!-- 文本 -->
    <div 
        
        v-show="controlProperties.v4d4072dd22ab41b4b045aa41f6e3b183.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.v4d4072dd22ab41b4b045aa41f6e3b183.disabled"
    class="Text"	
    :custom-style="customStyle('4d4072dd22ab41b4b045aa41f6e3b183')"
    
    :style='{"-webkit-line-clamp":1}'
    
    :class="classStyle('v4d4072dd22ab41b4b045aa41f6e3b183')"
    >

    {{controlProperties.v4d4072dd22ab41b4b045aa41f6e3b183.value}}
    
  </p>
</div>

    <!-- 下拉框 -->
    <div 
        
        v-show="controlProperties.v8a8f2aa8fea9474a8373451917ac531d.display"
        
        
    >   

    
	<validate 
    :rules="controlProperties.v8a8f2aa8fea9474a8373451917ac531d.rules"
		:value="controlProperties.v8a8f2aa8fea9474a8373451917ac531d.value"
		prop="8a8f2aa8fea9474a8373451917ac531d"
	>
  
    <a-tree-select
        class="DropdownList"
        :custom-style="customStyle('8a8f2aa8fea9474a8373451917ac531d')"
        :class="classStyle('v8a8f2aa8fea9474a8373451917ac531d')"
        show-search

        
          @change="setSelectValue('8a8f2aa8fea9474a8373451917ac531d',controlProperties.v8a8f2aa8fea9474a8373451917ac531d,'value',false,$event)"
          :value="selectValue(controlProperties.v8a8f2aa8fea9474a8373451917ac531d.value,false)"
        

        :disabled="controlProperties.v8a8f2aa8fea9474a8373451917ac531d.disabled"
        :tree-data="controlProperties.v8a8f2aa8fea9474a8373451917ac531d.dataSourceList"
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
            <a-button class="drawcontent-footer-btn"  @click="onClosev('v2e7b790e7f2342038e213ee756fcda96')"  >
              
							
              取消
                </a-button>
            <a-button type="primary" class="drawcontent-footer-btn" @click="clickConfirmBtn('clickConfirmBtn2e7b790e7f2342038e213ee756fcda96')" >
							
              确认

							</a-button>
          </div>
        
        </div>
      </div>
    </div>
  </a-modal>
</div>

    <!-- 修改收入确认申请 -->
    <div 
        
        v-show="controlProperties.v971ec232275d4e40a15617ff3ccd9e98.display"
        
        
    >   

    
  <a-drawer
     width="600"
			title="修改收入确认申请"
			placement="right"
			:closable="true"
			:mask="true"
			:maskClosable="true"
			:keyboard="false"
			:visible="visible('971ec232275d4e40a15617ff3ccd9e98')"
      
      @close="onClosev('v971ec232275d4e40a15617ff3ccd9e98')"
      :body-style="{padding: '0px', paddingBottom:  '0px' }"
      :getContainer="getContainer"
    >
    <div>
      <div  :custom-style="customStyle('971ec232275d4e40a15617ff3ccd9e98')">
    <!-- 修改收入确认申请表单 -->
    <div 
        
        v-show="controlProperties.vc6d4d4246b694307977b3861b2417a26.display"
        
        
    >   

    
  <div class="DataForm"  
        :custom-style="customStyle('c6d4d4246b694307977b3861b2417a26')"
        :class="classStyle('vc6d4d4246b694307977b3861b2417a26')"
 >
    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.v49ff2c1acc4e47af808d08d4f17e3b72.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('49ff2c1acc4e47af808d08d4f17e3b72')"
    
    :class="classStyle('v49ff2c1acc4e47af808d08d4f17e3b72')"
 >
    <!-- 文本 -->
    <div 
        
        v-show="controlProperties.v0b53911caa464c2e9f148de85fb0abba.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.v0b53911caa464c2e9f148de85fb0abba.disabled"
    class="Text"	
    :custom-style="customStyle('0b53911caa464c2e9f148de85fb0abba')"
    
    :style='{"-webkit-line-clamp":1}'
    
    :class="classStyle('v0b53911caa464c2e9f148de85fb0abba')"
    >

    {{controlProperties.v0b53911caa464c2e9f148de85fb0abba.value}}
    
  </p>
</div>

    <!-- 输入框 -->
    <div 
        
        v-show="controlProperties.v1cfaa86651d84867a74d52ebfcd7e901.display"
        
        
    >   

    
	<validate 
	    :rules="controlProperties.v1cfaa86651d84867a74d52ebfcd7e901.rules"
		:value="controlProperties.v1cfaa86651d84867a74d52ebfcd7e901.value"
		prop="1cfaa86651d84867a74d52ebfcd7e901"
	>
		  <a-input
				class='Input'
				:custom-style="customStyle('1cfaa86651d84867a74d52ebfcd7e901')"
				:class="classStyle('v1cfaa86651d84867a74d52ebfcd7e901')"
				size="default"
				
				:disabled="controlProperties.v1cfaa86651d84867a74d52ebfcd7e901.disabled"
				placeholder="请输入"
        
						v-model="controlProperties.v1cfaa86651d84867a74d52ebfcd7e901.value"
        

				 
			>
    </a-input>
	</validate>

</div>
</div>
</div>

    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.ve8d61dae41cf4ece89172a06d0879261.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('e8d61dae41cf4ece89172a06d0879261')"
    
    :class="classStyle('ve8d61dae41cf4ece89172a06d0879261')"
 >
    <!-- 文本 -->
    <div 
        
        v-show="controlProperties.v317b711e4a1141829a9b4f1593cdb33d.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.v317b711e4a1141829a9b4f1593cdb33d.disabled"
    class="Text"	
    :custom-style="customStyle('317b711e4a1141829a9b4f1593cdb33d')"
    
    :style='{"-webkit-line-clamp":1}'
    
    :class="classStyle('v317b711e4a1141829a9b4f1593cdb33d')"
    >

    {{controlProperties.v317b711e4a1141829a9b4f1593cdb33d.value}}
    
  </p>
</div>

    <!-- 日期 -->
    <div 
        
        v-show="controlProperties.v66660d86f2044bfd88a80f2c8b28cf1e.display"
        
        
    >   

    
 
	 <a-date-picker
	 
				class='Date'
				:custom-style="customStyle('66660d86f2044bfd88a80f2c8b28cf1e')"
				:class="classStyle('v66660d86f2044bfd88a80f2c8b28cf1e')"
				size="default"
				:disabled="controlProperties.v66660d86f2044bfd88a80f2c8b28cf1e.disabled"
				placeholder="请选择日期"
				:allowClear="true"
				valueFormat='YYYY-MM-DD'v-model="controlProperties.v66660d86f2044bfd88a80f2c8b28cf1e.value"format="YYYY-MM-DD"
			>
    <span class="iconfont" slot="suffixIcon">&#xe6ca;</span></a-date-picker
			>
 
</div>
</div>
</div>

    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.v660057906cce4566a74e82b4eb438b5a.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('660057906cce4566a74e82b4eb438b5a')"
    
    :class="classStyle('v660057906cce4566a74e82b4eb438b5a')"
 >
    <!-- 文本 -->
    <div 
        
        v-show="controlProperties.vd3347ab43aae49ceb02849712ad71e25.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.vd3347ab43aae49ceb02849712ad71e25.disabled"
    class="Text"	
    :custom-style="customStyle('d3347ab43aae49ceb02849712ad71e25')"
    
    :style='{"-webkit-line-clamp":1}'
    
    :class="classStyle('vd3347ab43aae49ceb02849712ad71e25')"
    >

    {{controlProperties.vd3347ab43aae49ceb02849712ad71e25.value}}
    
  </p>
</div>

    <!-- 下拉框 -->
    <div 
        
        v-show="controlProperties.vf8495da4bfc442a980705bd2111dc760.display"
        
        
    >   

    
	<validate 
    :rules="controlProperties.vf8495da4bfc442a980705bd2111dc760.rules"
		:value="controlProperties.vf8495da4bfc442a980705bd2111dc760.value"
		prop="f8495da4bfc442a980705bd2111dc760"
	>
  
    <a-tree-select
        class="DropdownList"
        :custom-style="customStyle('f8495da4bfc442a980705bd2111dc760')"
        :class="classStyle('vf8495da4bfc442a980705bd2111dc760')"
        show-search

        
          @change="setSelectValue('f8495da4bfc442a980705bd2111dc760',controlProperties.vf8495da4bfc442a980705bd2111dc760,'value',false,$event)"
          :value="selectValue(controlProperties.vf8495da4bfc442a980705bd2111dc760.value,false)"
        

        :disabled="controlProperties.vf8495da4bfc442a980705bd2111dc760.disabled"
        :tree-data="controlProperties.vf8495da4bfc442a980705bd2111dc760.dataSourceList"
        placeholder="请选择"
        :replaceFields="{children: 'children',title: 'title',key: 'id',value: 'id',}"
        
        tree-data-simple-mode
        :multiple="false"
      ></a-tree-select>
    </validate>
</div>
</div>
</div>

    <!-- 空白容器 -->
    <div 
        
        v-show="controlProperties.v97e212b27a9f40baa4282b358613a63b.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('97e212b27a9f40baa4282b358613a63b')"
    
    :class="classStyle('v97e212b27a9f40baa4282b358613a63b')"
 >
    <!-- 文本 -->
    <div 
        
        v-show="controlProperties.vcdef8cf554ff4cea914581ef17ca81e7.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.vcdef8cf554ff4cea914581ef17ca81e7.disabled"
    class="Text"	
    :custom-style="customStyle('cdef8cf554ff4cea914581ef17ca81e7')"
    
    :style='{"-webkit-line-clamp":1}'
    
    :class="classStyle('vcdef8cf554ff4cea914581ef17ca81e7')"
    >

    {{controlProperties.vcdef8cf554ff4cea914581ef17ca81e7.value}}
    
  </p>
</div>

    <!-- 下拉框 -->
    <div 
        
        v-show="controlProperties.v4cff96e001fe4079a5cf6d6ff9d168be.display"
        
        
    >   

    
	<validate 
    :rules="controlProperties.v4cff96e001fe4079a5cf6d6ff9d168be.rules"
		:value="controlProperties.v4cff96e001fe4079a5cf6d6ff9d168be.value"
		prop="4cff96e001fe4079a5cf6d6ff9d168be"
	>
  
    <a-tree-select
        class="DropdownList"
        :custom-style="customStyle('4cff96e001fe4079a5cf6d6ff9d168be')"
        :class="classStyle('v4cff96e001fe4079a5cf6d6ff9d168be')"
        show-search

        
          @change="setSelectValue('4cff96e001fe4079a5cf6d6ff9d168be',controlProperties.v4cff96e001fe4079a5cf6d6ff9d168be,'value',false,$event)"
          :value="selectValue(controlProperties.v4cff96e001fe4079a5cf6d6ff9d168be.value,false)"
        

        :disabled="controlProperties.v4cff96e001fe4079a5cf6d6ff9d168be.disabled"
        :tree-data="controlProperties.v4cff96e001fe4079a5cf6d6ff9d168be.dataSourceList"
        placeholder="请选择"
        :replaceFields="{children: 'children',title: 'title',key: 'id',value: 'id',}"
        
        tree-data-simple-mode
        :multiple="false"
      ></a-tree-select>
    </validate>
</div>

    <!-- 空白容器51 -->
    <div 
        
        v-show="controlProperties.v70d8a7192b79410999df2e636b634a28.display"
        
        
    >   

    
  <div 
    class="spaceContainer"
    :custom-style="customStyle('70d8a7192b79410999df2e636b634a28')"
    
    :class="classStyle('v70d8a7192b79410999df2e636b634a28')"
 >
    <!-- 按钮52 -->
    <div 
        
        v-show="controlProperties.v13136a8148454268a711334f1683f650.display"
        
        
    >   

    

  <div style="display:flex;">
    <a-button :class="classStyle('v13136a8148454268a711334f1683f650')"
   
      @click.stop="controlEvent('click13136a8148454268a711334f1683f650',)"
    
    :disabled="controlProperties.v13136a8148454268a711334f1683f650.disabled"
    :custom-style="customStyle('13136a8148454268a711334f1683f650')"
    type="primary"
    size=default
    class="Button"
    >
      

      {{ controlProperties.v13136a8148454268a711334f1683f650.value}}
      
    </a-button>
  </div>
</div>

    <!-- 按钮53 -->
    <div 
        
        v-show="controlProperties.va4ac391beac44a96988abc8561ce9f10.display"
        
        
    >   

    

  <div style="display:flex;">
    <a-button :class="classStyle('va4ac391beac44a96988abc8561ce9f10')"
   
      @click.stop="controlEvent('clicka4ac391beac44a96988abc8561ce9f10',)"
    
    :disabled="controlProperties.va4ac391beac44a96988abc8561ce9f10.disabled"
    :custom-style="customStyle('a4ac391beac44a96988abc8561ce9f10')"
    type="default"
    size=default
    class="Button"
    >
      

      {{ controlProperties.va4ac391beac44a96988abc8561ce9f10.value}}
      
    </a-button>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div>
        
        </div>
      </div>
    </div>
  </a-drawer>
</div>

    <!-- 对话框55 -->
    <div 
        
        v-show="controlProperties.v285b5ca77be443d282c35c4ec65bbd48.display"
        
        
    >   

    
  <a-modal
     	:footer="null"
			:width="600"
			title="对话框55"
			:closable="true"
			:mask="true"
			:maskClosable="true"
			:keyboard="false"
		  :visible="visible('285b5ca77be443d282c35c4ec65bbd48')"
			
			:body-style="{padding: '0px', paddingBottom:   '70px'}"
      @cancel="onClosev('v285b5ca77be443d282c35c4ec65bbd48')"
      :getContainer="getContainer"
    >
    <div>
      <div :custom-style="customStyle('285b5ca77be443d282c35c4ec65bbd48')">
    <!-- 文本56 -->
    <div 
        
        v-show="controlProperties.vfd278721b63e40009ba171578176998f.display"
        
        
    >   

    
  <p 
     
    
    :disabled="controlProperties.vfd278721b63e40009ba171578176998f.disabled"
    class="Text"	
    :custom-style="customStyle('fd278721b63e40009ba171578176998f')"
    
    :style='{"-webkit-line-clamp":1}'
    
    :class="classStyle('vfd278721b63e40009ba171578176998f')"
    >

    {{controlProperties.vfd278721b63e40009ba171578176998f.value}}
    
  </p>
</div>
<div>
           
          <div class="drawer-footer" >
            <a-button class="drawcontent-footer-btn"  @click="onClosev('v285b5ca77be443d282c35c4ec65bbd48')"  >
              
							
              取消
                </a-button>
            <a-button type="primary" class="drawcontent-footer-btn" @click="clickConfirmBtn('clickConfirmBtn285b5ca77be443d282c35c4ec65bbd48')" >
							
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

  
    import DropdownList from '@/mixins/controlMixins/DropdownList.js';
    import Dialog from '@/mixins/controlMixins/Dialog.js';
    import DataForm from '@/mixins/controlMixins/DataForm.js';
    import Date from '@/mixins/controlMixins/Date.js';
  
    import permission from '@/mixins/permission.js'
  
  
  
  export default {
    data() {
      return {"drawerList":[],"tableItem":{},"controlProperties":{"vba751f89e12740bfb35462806590b44f":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"WhiteBlock","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v086da7023631461e8d76e0b726b82633":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v3f21acc170984582a17e4ba475213e8d":{"value":"审批状态","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vef288ee2227c43b288d85e134d9519ab":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"DropdownList","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"displaySwitch":false,"disabled":"enable"},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true},"rules":[{"checked":false,"type":"required","message":""}],"dataSourceList":[],"whereParams":{"lookup":[],"order_byEcho":[{"entityName":""}],"model_uuid":"uvsv_entity_uwwj","order_by":[],"where":{"or":[]},"relations":[],"content":[{"columns":["state"],"table_uuid":"uvsv_entity_uwwj"}]}},"v833aeb833c17497c8c85b22a95fcc462":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v7b74ad13953b439ea9f2c2beac4a2b3a":{"value":"收入确认申请","disabled":false,"display":true,"dataSourceType":"","type":"Button","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"disabled":"enable","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v9dc8758d5418446c8c8ea956681b37a7":{"value":[],"disabled":false,"display":true,"dataSourceType":"entity","type":"TableContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true},"dataSourceList":[],"tableColums":[{"title":"操作","dataIndex":"uvsv_application_revenu_id","key":"uvsv_application_revenu_id","ellipsis":true,"width":"20%","columnWidth":"20%","sorter":false,"type":"Primarykey","scopedSlots":{"customRender":"e0dbb95a78464863bac6dbf686d2fcdf"},"columId":"EfeLNNcCGq5sZTxu5t"},{"title":"收入金额","dataIndex":"fee","key":"fee","ellipsis":true,"width":"20%","columnWidth":"20%","sorter":false,"type":"String","scopedSlots":{"customRender":"775cac2910ae45878efb56006e16e418"},"columId":"6237e4eae4b02cb9b4f93141"},{"title":"所属月份","dataIndex":"month","key":"month","ellipsis":true,"width":"20%","columnWidth":"20%","sorter":false,"type":"Date","scopedSlots":{"customRender":"2b9e820348694cc697505b072780cc98"},"columId":"6237e639e4b02cb9b4f93143"},{"title":"申请人","dataIndex":"uvsv_dzsp","key":"uvsv_dzsp","ellipsis":true,"width":"20%","columnWidth":"20%","sorter":false,"type":"Lookup","scopedSlots":{"customRender":"461bec041e744186805fa8b1a77ca56e"},"columId":"EafccKYmc081LXxUpG"},{"title":"项目","dataIndex":"uvsv_psey","key":"uvsv_psey","ellipsis":true,"width":"20%","columnWidth":"20%","sorter":false,"type":"Lookup","scopedSlots":{"customRender":"89bd6a3dc912445c9b56983633b2c11c"},"columId":"EattqUd8U1m3QVd9YZ"}],"containerIdObj":{},"pagination":{"page_size":0,"total_record":0},"whereParams":{"lookup":[{"look_up":{"uvsv_psey":{"look_up":{},"columns":["entry_name"],"table_uuid":"uvsv_project","lookup_relation":{"type":"3","leftEntityUuid":"uvsv_application_revenu","rightEntityUuid":"uvsv_project","leftRelationField":"uvsv_psey","rightRelationField":"uvsv_project_id","relationKey":"uvsv_psey"}},"uvsv_dzsp":{"look_up":{},"columns":["userName"],"table_uuid":"uvsv_tse","lookup_relation":{"type":"3","leftEntityUuid":"uvsv_application_revenu","rightEntityUuid":"uvsv_tse","leftRelationField":"uvsv_dzsp","rightRelationField":"uvsv_tse_id","relationKey":"uvsv_dzsp"}}}}],"pagination":{"pageMode":2,"pageInfo":{"pageSize":15,"currentPage":1},"range":{}},"order_byEcho":[{"entityName":""}],"tree_structure":{"field":"","is_tree":false},"model_uuid":"uvsv_application_revenu","order_by":{},"where":{"or":[]},"relations":[],"content":[{"columns":["uvsv_application_revenu_id","fee","month","uvsv_dzsp","uvsv_psey"],"table_uuid":"uvsv_application_revenu"}]}},"v1c42fbcba78b48b4bdd47f01c8eeac0a":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SubTableContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"ve0dbb95a78464863bac6dbf686d2fcdf":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v78169103bd6f4312b144195b9369a20f":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"ve63202aaaa98436ab2c7fe8772424ec8":{"value":"修改","disabled":false,"display":true,"dataSourceType":"","type":"Button","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"disabled":"enable","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v485c20f68dc34bb1ad5d8085cfec6c3e":{"value":"审批","disabled":false,"display":true,"dataSourceType":"","type":"Button","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"disabled":"enable","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v011c2573cd25430a9bad2b5a90ecb775":{"value":"删除","disabled":false,"display":true,"dataSourceType":"","type":"Button","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"disabled":"enable","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v775cac2910ae45878efb56006e16e418":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v0f9ea56a0acd4f6da95025ab339c2134":{"value":"未来OS是新一代低代码化智能软件","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v2b9e820348694cc697505b072780cc98":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v89ee99d0ea22419ea930256460f4bb95":{"value":"未来OS是新一代低代码化智能软件","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v461bec041e744186805fa8b1a77ca56e":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v5968478adcb44be88cbbf98494f837fe":{"value":"未来OS是新一代低代码化智能软件","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v89bd6a3dc912445c9b56983633b2c11c":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vb4af04a367664e8a9c1bb51ac0c13053":{"value":"未来OS是新一代低代码化智能软件","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v33e53b0a13d24c5bb91d970303b53f2f":{"value":"未来OS是新一代低代码化智能软件","disabled":false,"display":false,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"hide","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v2e7b790e7f2342038e213ee756fcda96":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"Dialog","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v0bdcb09fefcf4a64b44b288e75183bf2":{"value":"","disabled":false,"display":true,"dataSourceType":"entity","type":"DataForm","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"va71e8ba938fb4fbabf24cd453def5bde":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v89e6c55c012d4b07a190c89b4762d661":{"value":"收入金额","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v00167aba3cea48d49a671190fde9d387":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"Input","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"displaySwitch":false,"disabled":"enable"},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true},"rules":[{"checked":false,"type":"required","message":""},{"min":1,"max":100,"checked":false,"type":"wordLimit","message":"请输入大于1个小于100个的字符串"},{"pattern":"","checked":false,"type":"limitInputType","message":"","value":""}]},"ve8f34fa3460d4dc7847d62f66912069e":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v23831a891f2f49558138b999cb55c62c":{"value":"所属月份","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vfe1e37731923459cac53bc4ab44098f9":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"Date","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"displaySwitch":false,"disabled":"enable"},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vcb6fc37a1b7e4db0a744ff168e14506f":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vd3b78c90a52a4b279a71c8f178793e63":{"value":"申请人","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vd0a47be54f964bfa9aa74e82fca72676":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"DropdownList","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"displaySwitch":false,"disabled":"enable"},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true},"rules":[{"checked":false,"type":"required","message":""}],"dataSourceList":[],"whereParams":{"order_byEcho":[{"entityName":""}],"model_uuid":"uvsv_tse","order_by":[],"where":{"or":[]},"relations":[],"content":[{"columns":["userName"],"table_uuid":"uvsv_tse"}]}},"vead49800bc0e4b49b5ecf6f0b35259e3":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v4d4072dd22ab41b4b045aa41f6e3b183":{"value":"项目","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v8a8f2aa8fea9474a8373451917ac531d":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"DropdownList","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"displaySwitch":false,"disabled":"enable"},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true},"rules":[{"checked":false,"type":"required","message":""}],"dataSourceList":[],"whereParams":{"order_byEcho":[{"entityName":""}],"model_uuid":"uvsv_project","order_by":[],"where":{"or":[]},"relations":[],"content":[{"columns":["entry_name"],"table_uuid":"uvsv_project"}]}},"v971ec232275d4e40a15617ff3ccd9e98":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"Drawer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vc6d4d4246b694307977b3861b2417a26":{"value":"","disabled":false,"display":true,"dataSourceType":"entity","type":"DataForm","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v49ff2c1acc4e47af808d08d4f17e3b72":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v0b53911caa464c2e9f148de85fb0abba":{"value":"收入金额","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v1cfaa86651d84867a74d52ebfcd7e901":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"Input","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"displaySwitch":false,"disabled":"enable"},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true},"rules":[{"checked":false,"type":"required","message":""},{"min":1,"max":100,"checked":false,"type":"wordLimit","message":"请输入大于1个小于100个的字符串"},{"pattern":"","checked":false,"type":"limitInputType","message":"","value":""}]},"ve8d61dae41cf4ece89172a06d0879261":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v317b711e4a1141829a9b4f1593cdb33d":{"value":"所属月份","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v66660d86f2044bfd88a80f2c8b28cf1e":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"Date","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"displaySwitch":false,"disabled":"enable"},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v660057906cce4566a74e82b4eb438b5a":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vd3347ab43aae49ceb02849712ad71e25":{"value":"申请人","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vf8495da4bfc442a980705bd2111dc760":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"DropdownList","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"displaySwitch":false,"disabled":"enable"},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true},"rules":[{"checked":false,"type":"required","message":""}],"dataSourceList":[],"whereParams":{"order_byEcho":[{"entityName":""}],"model_uuid":"uvsv_tse","order_by":[],"where":{"or":[]},"relations":[],"content":[{"columns":["userName"],"table_uuid":"uvsv_tse"}]}},"v97e212b27a9f40baa4282b358613a63b":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vcdef8cf554ff4cea914581ef17ca81e7":{"value":"项目","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v4cff96e001fe4079a5cf6d6ff9d168be":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"DropdownList","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"displaySwitch":false,"disabled":"enable"},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true},"rules":[{"checked":false,"type":"required","message":""}],"dataSourceList":[],"whereParams":{"order_byEcho":[{"entityName":""}],"model_uuid":"uvsv_project","order_by":[],"where":{"or":[]},"relations":[],"content":[{"columns":["entry_name"],"table_uuid":"uvsv_project"}]}},"v70d8a7192b79410999df2e636b634a28":{"value":"[]","disabled":false,"display":true,"dataSourceType":"","type":"SpaceContainer","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v13136a8148454268a711334f1683f650":{"value":"确认","disabled":false,"display":true,"dataSourceType":"","type":"Button","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"disabled":"enable","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"va4ac391beac44a96988abc8561ce9f10":{"value":"取消","disabled":false,"display":true,"dataSourceType":"","type":"Button","status":{"displayCondition":[],"disabledCondition":[],"display":"show","disabledSwitch":false,"disabled":"enable","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"v285b5ca77be443d282c35c4ec65bbd48":{"value":"","disabled":false,"display":true,"dataSourceType":"","type":"Dialog","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}},"vfd278721b63e40009ba171578176998f":{"value":"确认删除此数据吗？","disabled":false,"display":true,"dataSourceType":"","type":"Text","status":{"displayCondition":[],"display":"show","displaySwitch":false},"className":{"mClass":[],"pcClass":[],"mStyle":true,"pcStyle":true}}}}
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
        DropdownList,
      
        Dialog,
      
        DataForm,
      
        Date,
      
      permission
    
  ],
  methods: {
    controlEvent(callback, $scoped) {
      if ($scoped) {
        this.tableItem = $scoped;
      };
      this[callback]();
    },
    
  
    
      
      
        
          getFilterTableListef288ee2227c43b288d85e134d9519ab(uuid){
          
          

const where=this.controlProperties[`v${uuid}`].whereParams
this.setWhere(where.where)
  this.$post('/process/v1/datagridQuery',{data:where}).then(res =>{
      const result = res.data.list;
    
      result.resultData.forEach(item =>{
          try{
            item.title = item.state
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
        
      
    
  
    
      
      
        
       
          async click7b74ad13953b439ea9f2c2beac4a2b3a(){
             
             
             
              let startab4200bd7126c41e68a1162de2b1f78e5 = undefined;let dialogOpena8d0ebec35331446686c567f5fa2d77f1 = {"controlUuid":"2e7b790e7f2342038e213ee756fcda96","subparamValue":""};
              
                
                  let paramsArr = { startab4200bd7126c41e68a1162de2b1f78e5,dialogOpena8d0ebec35331446686c567f5fa2d77f1 };
                
              
              
              let flowMap = {"ab4200bd7126c41e68a1162de2b1f78e5":{"actionType":"start","Next":["a8d0ebec35331446686c567f5fa2d77f1"],"current":"startab4200bd7126c41e68a1162de2b1f78e5"},"a8d0ebec35331446686c567f5fa2d77f1":{"actionType":"dialogOpen","Next":["ab76c8f57267d401c9149a1365e824436"],"current":"dialogOpena8d0ebec35331446686c567f5fa2d77f1"}};;
              this.loop(flowMap['ab4200bd7126c41e68a1162de2b1f78e5'].Next[0], flowMap, paramsArr);;
            },
       
         
      
    
  
    
      
      
        
       
          async click9dc8758d5418446c8c8ea956681b37a7(){
             
             
             
              let starta49a6098d528a4d3484eb486fcbfee495 = undefined;let editObjecta9ffae165eb8243a79dc00698568ffd00 = {"openPage":{"pageUuid":"","blank":false,"parameList":[{"controlUuid":"","paramName":"_editObjectid_","paramSource":"page","subparamValue":"uvsv_application_revenu_id"}]},"editType":"dialogOpen","dialogOpen":{"controlUuid":"971ec232275d4e40a15617ff3ccd9e98","subparamValue":"uvsv_application_revenu_id","dataFormIds":["c6d4d4246b694307977b3861b2417a26"]},"parentControlsCardUuid":"9dc8758d5418446c8c8ea956681b37a7"};
              
                
                  let paramsArr = { starta49a6098d528a4d3484eb486fcbfee495,editObjecta9ffae165eb8243a79dc00698568ffd00 };
                
              
              
              let flowMap = {"a49a6098d528a4d3484eb486fcbfee495":{"actionType":"start","Next":["a9ffae165eb8243a79dc00698568ffd00"],"current":"starta49a6098d528a4d3484eb486fcbfee495"},"a9ffae165eb8243a79dc00698568ffd00":{"actionType":"editObject","current":"editObjecta9ffae165eb8243a79dc00698568ffd00"}};;
              this.loop(flowMap['a49a6098d528a4d3484eb486fcbfee495'].Next[0], flowMap, paramsArr);;
            },
       
         
      
    
  
    
      
      
        
          getFilterTableList9dc8758d5418446c8c8ea956681b37a7(uuid){
          
          

const where=this.controlProperties[`v${uuid}`].whereParams
this.setWhere(where.where)
  this.$post('/process/v1/datagridQuery',{data:where}).then(res =>{
      const result = res.data.list;
    



    this.controlProperties[`v${uuid}`].pagination = result.pagination ?? {};
    
    
    

    



      
      const resultData = this.setLookupValue9dc8758d5418446c8c8ea956681b37a7(result)

      
      this.controlProperties[`v${uuid}`].dataSourceList = resultData;

    


     



  })

          
          },
        
      
    
  
    
      
      
        
          setLookupValue9dc8758d5418446c8c8ea956681b37a7(result){
          
          
      
      const resultData = JSON.parse(JSON.stringify(result.resultData))

      let listOption;
      
      resultData.forEach((item,index) =>{
        item.uvsv_dzsp.userName = {};item.uvsv_dzsp.TextuserName = this.getLookupData(["userName"],result.resultData[index].uvsv_dzsp);item.uvsv_psey.entry_name = {};item.uvsv_psey.Textentry_name = this.getLookupData(["entry_name"],result.resultData[index].uvsv_psey);
      })

      return resultData;


          
          },
        
      
    
  
    
      
      
        
       
          async clicke63202aaaa98436ab2c7fe8772424ec8(){
             
             
             
              let starta49a6098d528a4d3484eb486fcbfee495 = undefined;let editObjecta9ffae165eb8243a79dc00698568ffd00 = {"openPage":{"pageUuid":"","blank":false,"parameList":[{"controlUuid":"","paramName":"_editObjectid_","paramSource":"page","subparamValue":"uvsv_application_revenu_id"}]},"editType":"dialogOpen","dialogOpen":{"controlUuid":"971ec232275d4e40a15617ff3ccd9e98","subparamValue":"uvsv_application_revenu_id","dataFormIds":["c6d4d4246b694307977b3861b2417a26"]},"parentControlsCardUuid":"9dc8758d5418446c8c8ea956681b37a7"};
              
                
                  let paramsArr = { starta49a6098d528a4d3484eb486fcbfee495,editObjecta9ffae165eb8243a79dc00698568ffd00 };
                
              
              
              let flowMap = {"a49a6098d528a4d3484eb486fcbfee495":{"actionType":"start","Next":["a9ffae165eb8243a79dc00698568ffd00"],"current":"starta49a6098d528a4d3484eb486fcbfee495"},"a9ffae165eb8243a79dc00698568ffd00":{"actionType":"editObject","current":"editObjecta9ffae165eb8243a79dc00698568ffd00"}};;
              this.loop(flowMap['a49a6098d528a4d3484eb486fcbfee495'].Next[0], flowMap, paramsArr);;
            },
       
         
      
    
  
    
      
      
        
       
          async click011c2573cd25430a9bad2b5a90ecb775(){
             
             
             
              let starta073f163bf79a4cca8bffc4049f9712cc = undefined;let setValueade7a0b4ad6894f79bd3f105b67f16520 = {"list":[{"controlTargetUuid":"33e53b0a13d24c5bb91d970303b53f2f","controlUuid":"","actionType":"","globalValue":"","value":"","setvalDataList":[],"pageparams":"","page":"","variableName":"","valueVariableList":[],"valueList":["property","9dc8758d5418446c8c8ea956681b37a7","uvsv_application_revenu_id"],"source":"property","fieldId":"uvsv_application_revenu_id"}]};let invokeFlowacee87bd2eb48430da0698b9e331c4bc5 = {"req":[{"source":"page","paramsName":"id","controlUuid":"33e53b0a13d24c5bb91d970303b53f2f"}],"res":[{"resBelongid":"Event_18ucyuc","resBelongname":"结束事件","resresultType":["Event_18ucyuc"],"resresult":"flowrespage","actionNext":{},"response":[]}],"processId":"p62396079e4b047fabe30d9ab"}; let confirmac623200171954a798098bdd6bbd7d133 = {"tipsTitle":"删除确认","tipsDesc":"确认删除此条数据吗？","tipsTopPosition":"24px"};let invokeFlowad5dd420ff65445e5a6c3f400439987d6 = {"req":[{"source":"page","paramsName":"id","controlUuid":"33e53b0a13d24c5bb91d970303b53f2f"}],"res":[{"resBelongid":"Event_18ucyuc","resBelongname":"主键不存在","resresultType":["Event_18ucyuc"],"resresult":"flowrespage","actionNext":{},"response":[]},{"resBelongid":"Event_0ijjayu","resBelongname":"主键存在","resresultType":["Event_0ijjayu"],"resresult":"flowrespage","actionNext":{},"response":[]}],"processId":"p62394177e4b02961f8302442"};let notificationsab3007688853c46e78339fb1d5601af2b = {"tipsType":"success","tipsTitle":"删除结果","tipsDesc":"数据删除成功！","tipsTime":3,"tipsTopPosition":"24px","locationType":"topRight","iconSwitch":false};let notificationsa85945a1d8f64408eb9f95fae80154f7a = {"tipsType":"error","tipsTitle":"删除结果","tipsDesc":"数据删除失败！","tipsTime":3,"tipsTopPosition":"24px","locationType":"topRight","iconSwitch":false};let refreshDataaf6743dfc910846beb6463483755b3676 = {"controlList":["9dc8758d5418446c8c8ea956681b37a7"]};
              
                
                  let paramsArr = { starta073f163bf79a4cca8bffc4049f9712cc,setValueade7a0b4ad6894f79bd3f105b67f16520,invokeFlowacee87bd2eb48430da0698b9e331c4bc5,confirmac623200171954a798098bdd6bbd7d133,invokeFlowad5dd420ff65445e5a6c3f400439987d6,notificationsab3007688853c46e78339fb1d5601af2b,notificationsa85945a1d8f64408eb9f95fae80154f7a,refreshDataaf6743dfc910846beb6463483755b3676 };
                
              
              
              let flowMap = {"a073f163bf79a4cca8bffc4049f9712cc":{"actionType":"start","Next":["ac623200171954a798098bdd6bbd7d133"],"current":"starta073f163bf79a4cca8bffc4049f9712cc"},"ade7a0b4ad6894f79bd3f105b67f16520":{"actionType":"setValue","Next":["acee87bd2eb48430da0698b9e331c4bc5"],"current":"setValueade7a0b4ad6894f79bd3f105b67f16520"},"acee87bd2eb48430da0698b9e331c4bc5":{"actionType":"invokeFlow","params":"reqacee87bd2eb48430da0698b9e331c4bc5","Next":["ad5dd420ff65445e5a6c3f400439987d6"],"invokeFlowNext":[{"Next":"ad5dd420ff65445e5a6c3f400439987d6","portId":"Event_18ucyuc","resBelongid":"Event_18ucyuc"}],"current":"invokeFlowacee87bd2eb48430da0698b9e331c4bc5"},"ac623200171954a798098bdd6bbd7d133":{"actionType":"confirm","Next":["ade7a0b4ad6894f79bd3f105b67f16520","af70bc5df3fac46b5b36e10bd9ba2dcdb"],"choiceNext":[{"Next":"ade7a0b4ad6894f79bd3f105b67f16520","isTrue":false},{"Next":"af70bc5df3fac46b5b36e10bd9ba2dcdb","isTrue":false}],"current":"confirmac623200171954a798098bdd6bbd7d133"},"ad5dd420ff65445e5a6c3f400439987d6":{"actionType":"invokeFlow","params":"reqad5dd420ff65445e5a6c3f400439987d6","Next":["ab3007688853c46e78339fb1d5601af2b","a85945a1d8f64408eb9f95fae80154f7a"],"invokeFlowNext":[{"Next":"ab3007688853c46e78339fb1d5601af2b","portId":"Event_18ucyuc","resBelongid":"Event_18ucyuc"},{"Next":"a85945a1d8f64408eb9f95fae80154f7a","portId":"Event_0ijjayu","resBelongid":"Event_0ijjayu"}],"current":"invokeFlowad5dd420ff65445e5a6c3f400439987d6"},"ab3007688853c46e78339fb1d5601af2b":{"actionType":"notifications","Next":["af6743dfc910846beb6463483755b3676"],"current":"notificationsab3007688853c46e78339fb1d5601af2b"},"a85945a1d8f64408eb9f95fae80154f7a":{"actionType":"notifications","Next":["af70bc5df3fac46b5b36e10bd9ba2dcdb"],"current":"notificationsa85945a1d8f64408eb9f95fae80154f7a"},"af6743dfc910846beb6463483755b3676":{"actionType":"refreshData","Next":["af70bc5df3fac46b5b36e10bd9ba2dcdb"],"current":"refreshDataaf6743dfc910846beb6463483755b3676"}};;
              this.loop(flowMap['a073f163bf79a4cca8bffc4049f9712cc'].Next[0], flowMap, paramsArr);;
            },
       
         
      
    
  
    
      
      
        
       
          async clickConfirmBtn2e7b790e7f2342038e213ee756fcda96(){
             
             
             
              let starta8b17a18d8d2d43639e361e1d71f251d5 = undefined; let saveDataa66ff54f897dc4831957f4d18382ef8c5 = {"controlUuid":["0bdcb09fefcf4a64b44b288e75183bf2"]};let messageTipsa4660036605954931954e945fe2bde230 = {"actionType":"messageTips","tipsType":"success","tipsDesc":"数据添加成功！","tipsTime":5,"tipsTopPosition":"24px"};let dialogClosea61a60e9e1ba14ce799ce00971f2ba7c8 = {"controlUuid":"2e7b790e7f2342038e213ee756fcda96","subparamValue":""};
              
                
                  let paramsArr = { starta8b17a18d8d2d43639e361e1d71f251d5,saveDataa66ff54f897dc4831957f4d18382ef8c5,messageTipsa4660036605954931954e945fe2bde230,dialogClosea61a60e9e1ba14ce799ce00971f2ba7c8 };
                
              
              
              let flowMap = {"a8b17a18d8d2d43639e361e1d71f251d5":{"actionType":"start","Next":["a66ff54f897dc4831957f4d18382ef8c5"],"current":"starta8b17a18d8d2d43639e361e1d71f251d5"},"a66ff54f897dc4831957f4d18382ef8c5":{"actionType":"saveData","Next":["a4660036605954931954e945fe2bde230"],"current":"saveDataUrla66ff54f897dc4831957f4d18382ef8c5"},"a4660036605954931954e945fe2bde230":{"actionType":"messageTips","Next":["a61a60e9e1ba14ce799ce00971f2ba7c8"],"current":"messageTipsa4660036605954931954e945fe2bde230"},"a61a60e9e1ba14ce799ce00971f2ba7c8":{"actionType":"dialogClose","Next":["a1f1e5093d07c41d4aa7e9ade263a49f3"],"current":"dialogClosea61a60e9e1ba14ce799ce00971f2ba7c8"}};;
              this.loop(flowMap['a8b17a18d8d2d43639e361e1d71f251d5'].Next[0], flowMap, paramsArr);;
            },
       
         
      
    
  
    
      
        initFormDetail0bdcb09fefcf4a64b44b288e75183bf2(primaryKey){

	const key = 'uvsv_application_revenu_id' || primaryKey;

    if(this.$route.query._editObjectid_ && this.$route.query._editObjectPrimaryKey_ && this.$route.query._editObjectPrimaryKey_ === 'uvsv_application_revenu_id'){
      this.pageQuery.primaryId = this.$route.query._editObjectid_
      this.pageQuery.primaryKey = this.$route.query._editObjectPrimaryKey_
    }else if (!this.pageQuery.primaryId || !this.pageQuery.primaryKey || this.pageQuery.primaryKey !== key){
      const info = {}
      this.controlProperties.v00167aba3cea48d49a671190fde9d387.value = info.fee ?? this.$options.data().controlProperties.v00167aba3cea48d49a671190fde9d387.value;this.controlProperties.vfe1e37731923459cac53bc4ab44098f9.value = info.month ?? this.$options.data().controlProperties.vfe1e37731923459cac53bc4ab44098f9.value;this.controlProperties.vd0a47be54f964bfa9aa74e82fca72676.value = this.getLookupList(info?.uvsv_dzsp);this.controlProperties.v8a8f2aa8fea9474a8373451917ac531d.value = this.getLookupList(info?.uvsv_psey);
      return 
    }

      const whereParams = {
					model_uuid: 'uvsv_application_revenu',
					where: {
						or: [
							{
								and: [
									{
										paramSourceType: '3',
										condition: '11',
										left_type: 'entity',
										right_type: 'value',
										table_uuid: 'uvsv_application_revenu',
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
							columns: ['uvsv_application_revenu_id',
                'fee',
                'month',
                'uvsv_dzsp',
                'uvsv_psey',
                
              ],
							table_uuid: 'uvsv_application_revenu'
						}
					],
					lookup: [{"look_up":{"uvsv_psey":{"look_up":{},"columns":["entry_name"],"table_uuid":"uvsv_project","lookup_relation":{"type":"3","leftEntityUuid":"uvsv_application_revenu","rightEntityUuid":"uvsv_project","leftRelationField":"uvsv_psey","rightRelationField":"uvsv_project_id","relationKey":"uvsv_psey"}},"uvsv_dzsp":{"look_up":{},"columns":["userName"],"table_uuid":"uvsv_tse","lookup_relation":{"type":"3","leftEntityUuid":"uvsv_application_revenu","rightEntityUuid":"uvsv_tse","leftRelationField":"uvsv_dzsp","rightRelationField":"uvsv_tse_id","relationKey":"uvsv_dzsp"}}}}],
				};
      this.$post('/process/v1/datagridInfo',{data: whereParams}).then(res =>{
        const info = res.data.info
        
        this.controlProperties.v00167aba3cea48d49a671190fde9d387.value = info.fee ?? this.$options.data().controlProperties.v00167aba3cea48d49a671190fde9d387.value;this.controlProperties.vfe1e37731923459cac53bc4ab44098f9.value = info.month ?? this.$options.data().controlProperties.vfe1e37731923459cac53bc4ab44098f9.value;this.controlProperties.vd0a47be54f964bfa9aa74e82fca72676.value = this.getLookupList(info?.uvsv_dzsp);this.controlProperties.v8a8f2aa8fea9474a8373451917ac531d.value = this.getLookupList(info?.uvsv_psey);

	
		
	


  })
},
      
    
  
    
      
      
        
          getFilterTableListd0a47be54f964bfa9aa74e82fca72676(uuid){
          
          

const where=this.controlProperties[`v${uuid}`].whereParams
this.setWhere(where.where)
  this.$post('/process/v1/datagridQuery',{data:where}).then(res =>{
      const result = res.data.list;
    
      result.resultData.forEach(item =>{
          try{
            item.title = item.userName
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
        
      
    
  
    
      
      
        
          getFilterTableList8a8f2aa8fea9474a8373451917ac531d(uuid){
          
          

const where=this.controlProperties[`v${uuid}`].whereParams
this.setWhere(where.where)
  this.$post('/process/v1/datagridQuery',{data:where}).then(res =>{
      const result = res.data.list;
    
      result.resultData.forEach(item =>{
          try{
            item.title = item.entry_name
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
        
      
    
  
    
      
      
        
       
          async clickConfirmBtn971ec232275d4e40a15617ff3ccd9e98(){
             
             
             
              let startac45978b0ec5f4267afab6f5792c019d8 = undefined; let saveDataaa03566d380044d6d9b81bcdfbc1296e3 = {"controlUuid":["c6d4d4246b694307977b3861b2417a26"]};let messageTipsa41932522ff43462b94ea4b3a6f8179b7 = {"actionType":"messageTips","tipsType":"success","tipsDesc":"数据修改成功！","tipsTime":5,"tipsTopPosition":"24px"};let dialogClosead30029f8a29140ee90eff7e2ff465113 = {"controlUuid":"971ec232275d4e40a15617ff3ccd9e98","subparamValue":""};let refreshDataae3b79e9df81846d4891f51980fd46368 = {"controlList":["9dc8758d5418446c8c8ea956681b37a7"]};
              
                
                  let paramsArr = { startac45978b0ec5f4267afab6f5792c019d8,saveDataaa03566d380044d6d9b81bcdfbc1296e3,messageTipsa41932522ff43462b94ea4b3a6f8179b7,dialogClosead30029f8a29140ee90eff7e2ff465113,refreshDataae3b79e9df81846d4891f51980fd46368 };
                
              
              
              let flowMap = {"ac45978b0ec5f4267afab6f5792c019d8":{"actionType":"start","Next":["aa03566d380044d6d9b81bcdfbc1296e3"],"current":"startac45978b0ec5f4267afab6f5792c019d8"},"aa03566d380044d6d9b81bcdfbc1296e3":{"actionType":"saveData","Next":["a41932522ff43462b94ea4b3a6f8179b7"],"current":"saveDataUrlaa03566d380044d6d9b81bcdfbc1296e3"},"a41932522ff43462b94ea4b3a6f8179b7":{"actionType":"messageTips","Next":["ad30029f8a29140ee90eff7e2ff465113"],"current":"messageTipsa41932522ff43462b94ea4b3a6f8179b7"},"ad30029f8a29140ee90eff7e2ff465113":{"actionType":"dialogClose","Next":["ae3b79e9df81846d4891f51980fd46368"],"current":"dialogClosead30029f8a29140ee90eff7e2ff465113"},"ae3b79e9df81846d4891f51980fd46368":{"actionType":"refreshData","Next":["a108002267bf34184a716267f8f76c2ae"],"current":"refreshDataae3b79e9df81846d4891f51980fd46368"}};;
              this.loop(flowMap['ac45978b0ec5f4267afab6f5792c019d8'].Next[0], flowMap, paramsArr);;
            },
       
         
      
    
  
    
      
        initFormDetailc6d4d4246b694307977b3861b2417a26(primaryKey){

	const key = 'uvsv_application_revenu_id' || primaryKey;

    if(this.$route.query._editObjectid_ && this.$route.query._editObjectPrimaryKey_ && this.$route.query._editObjectPrimaryKey_ === 'uvsv_application_revenu_id'){
      this.pageQuery.primaryId = this.$route.query._editObjectid_
      this.pageQuery.primaryKey = this.$route.query._editObjectPrimaryKey_
    }else if (!this.pageQuery.primaryId || !this.pageQuery.primaryKey || this.pageQuery.primaryKey !== key){
      const info = {}
      this.controlProperties.v1cfaa86651d84867a74d52ebfcd7e901.value = info.fee ?? this.$options.data().controlProperties.v1cfaa86651d84867a74d52ebfcd7e901.value;this.controlProperties.v66660d86f2044bfd88a80f2c8b28cf1e.value = info.month ?? this.$options.data().controlProperties.v66660d86f2044bfd88a80f2c8b28cf1e.value;this.controlProperties.vf8495da4bfc442a980705bd2111dc760.value = this.getLookupList(info?.uvsv_dzsp);this.controlProperties.v4cff96e001fe4079a5cf6d6ff9d168be.value = this.getLookupList(info?.uvsv_psey);
      return 
    }

      const whereParams = {
					model_uuid: 'uvsv_application_revenu',
					where: {
						or: [
							{
								and: [
									{
										paramSourceType: '3',
										condition: '11',
										left_type: 'entity',
										right_type: 'value',
										table_uuid: 'uvsv_application_revenu',
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
							columns: ['uvsv_application_revenu_id',
                'fee',
                'month',
                'uvsv_dzsp',
                'uvsv_psey',
                
              ],
							table_uuid: 'uvsv_application_revenu'
						}
					],
					lookup: [{"look_up":{"uvsv_psey":{"look_up":{},"columns":["entry_name"],"table_uuid":"uvsv_project","lookup_relation":{"type":"3","leftEntityUuid":"uvsv_application_revenu","rightEntityUuid":"uvsv_project","leftRelationField":"uvsv_psey","rightRelationField":"uvsv_project_id","relationKey":"uvsv_psey"}},"uvsv_dzsp":{"look_up":{},"columns":["userName"],"table_uuid":"uvsv_tse","lookup_relation":{"type":"3","leftEntityUuid":"uvsv_application_revenu","rightEntityUuid":"uvsv_tse","leftRelationField":"uvsv_dzsp","rightRelationField":"uvsv_tse_id","relationKey":"uvsv_dzsp"}}}}],
				};
      this.$post('/process/v1/datagridInfo',{data: whereParams}).then(res =>{
        const info = res.data.info
        
        this.controlProperties.v1cfaa86651d84867a74d52ebfcd7e901.value = info.fee ?? this.$options.data().controlProperties.v1cfaa86651d84867a74d52ebfcd7e901.value;this.controlProperties.v66660d86f2044bfd88a80f2c8b28cf1e.value = info.month ?? this.$options.data().controlProperties.v66660d86f2044bfd88a80f2c8b28cf1e.value;this.controlProperties.vf8495da4bfc442a980705bd2111dc760.value = this.getLookupList(info?.uvsv_dzsp);this.controlProperties.v4cff96e001fe4079a5cf6d6ff9d168be.value = this.getLookupList(info?.uvsv_psey);

	
		
	


  })
},
      
    
  
    
      
      
        
          getFilterTableListf8495da4bfc442a980705bd2111dc760(uuid){
          
          

const where=this.controlProperties[`v${uuid}`].whereParams
this.setWhere(where.where)
  this.$post('/process/v1/datagridQuery',{data:where}).then(res =>{
      const result = res.data.list;
    
      result.resultData.forEach(item =>{
          try{
            item.title = item.userName
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
        
      
    
  
    
      
      
        
          getFilterTableList4cff96e001fe4079a5cf6d6ff9d168be(uuid){
          
          

const where=this.controlProperties[`v${uuid}`].whereParams
this.setWhere(where.where)
  this.$post('/process/v1/datagridQuery',{data:where}).then(res =>{
      const result = res.data.list;
    
      result.resultData.forEach(item =>{
          try{
            item.title = item.entry_name
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
        
      
    
  
    
      
      
        
       
          async click13136a8148454268a711334f1683f650(){
             
             
             
              let startac45978b0ec5f4267afab6f5792c019d8 = undefined; let saveDataaa03566d380044d6d9b81bcdfbc1296e3 = {"controlUuid":["c6d4d4246b694307977b3861b2417a26"]};let messageTipsa41932522ff43462b94ea4b3a6f8179b7 = {"actionType":"messageTips","tipsType":"success","tipsDesc":"数据修改成功！","tipsTime":5,"tipsTopPosition":"24px"};let dialogClosead30029f8a29140ee90eff7e2ff465113 = {"controlUuid":"971ec232275d4e40a15617ff3ccd9e98","subparamValue":""};let refreshDataae3b79e9df81846d4891f51980fd46368 = {"controlList":["9dc8758d5418446c8c8ea956681b37a7"]};
              
                
                  let paramsArr = { startac45978b0ec5f4267afab6f5792c019d8,saveDataaa03566d380044d6d9b81bcdfbc1296e3,messageTipsa41932522ff43462b94ea4b3a6f8179b7,dialogClosead30029f8a29140ee90eff7e2ff465113,refreshDataae3b79e9df81846d4891f51980fd46368 };
                
              
              
              let flowMap = {"ac45978b0ec5f4267afab6f5792c019d8":{"actionType":"start","Next":["aa03566d380044d6d9b81bcdfbc1296e3"],"current":"startac45978b0ec5f4267afab6f5792c019d8"},"aa03566d380044d6d9b81bcdfbc1296e3":{"actionType":"saveData","Next":["a41932522ff43462b94ea4b3a6f8179b7"],"current":"saveDataUrlaa03566d380044d6d9b81bcdfbc1296e3"},"a41932522ff43462b94ea4b3a6f8179b7":{"actionType":"messageTips","Next":["ad30029f8a29140ee90eff7e2ff465113"],"current":"messageTipsa41932522ff43462b94ea4b3a6f8179b7"},"ad30029f8a29140ee90eff7e2ff465113":{"actionType":"dialogClose","Next":["ae3b79e9df81846d4891f51980fd46368"],"current":"dialogClosead30029f8a29140ee90eff7e2ff465113"},"ae3b79e9df81846d4891f51980fd46368":{"actionType":"refreshData","Next":["a108002267bf34184a716267f8f76c2ae"],"current":"refreshDataae3b79e9df81846d4891f51980fd46368"}};;
              this.loop(flowMap['ac45978b0ec5f4267afab6f5792c019d8'].Next[0], flowMap, paramsArr);;
            },
       
         
      
    
  
    
      
      
        
       
          async clicka4ac391beac44a96988abc8561ce9f10(){
             
             
             
              let starta66cc3a65a59d45dfbb7e0422efc57d9a = undefined;let dialogCloseaf40a718df925460389af09c4e50bf214 = {"controlUuid":"971ec232275d4e40a15617ff3ccd9e98","subparamValue":""};
              
                
                  let paramsArr = { starta66cc3a65a59d45dfbb7e0422efc57d9a,dialogCloseaf40a718df925460389af09c4e50bf214 };
                
              
              
              let flowMap = {"a66cc3a65a59d45dfbb7e0422efc57d9a":{"actionType":"start","Next":["af40a718df925460389af09c4e50bf214"],"current":"starta66cc3a65a59d45dfbb7e0422efc57d9a"},"af40a718df925460389af09c4e50bf214":{"actionType":"dialogClose","Next":["a58b5fbf55e6b4273a6e470c8be7aa80d"],"current":"dialogCloseaf40a718df925460389af09c4e50bf214"}};;
              this.loop(flowMap['a66cc3a65a59d45dfbb7e0422efc57d9a'].Next[0], flowMap, paramsArr);;
            },
       
         
      
    
  
    
      
      
        
          saveDataUrlaa03566d380044d6d9b81bcdfbc1296e3(){
          
          
  let url;
  let result = {}
  let sub_form = []
  
    
    sub_form = []
    result = {
      'model_uuid': "uvsv_application_revenu",
    }
    const subFormIdList = ['1cfaa86651d84867a74d52ebfcd7e901','66660d86f2044bfd88a80f2c8b28cf1e','f8495da4bfc442a980705bd2111dc760','4cff96e001fe4079a5cf6d6ff9d168be',]
    if(!this.validate(subFormIdList)){
      return 
    }

    
    if(this.pageQuery.primaryId && this.pageQuery.primaryKey === "uvsv_application_revenu_id"){
      url = '/process/v1/datagridUpdate' 
      result.updateContent = [
        {
          main_form: {
            content:[
                
                
                  {
                    table_column: "fee",
                    value: this.controlProperties.v1cfaa86651d84867a74d52ebfcd7e901.value,
                    paramSourceType: 3
                  },
                  
                
                
                  {
                    table_column: "month",
                    value: this.controlProperties.v66660d86f2044bfd88a80f2c8b28cf1e.value,
                    paramSourceType: 3
                  },
                  
                
                
                  {
                    table_column: "uvsv_dzsp",
                    value: this.controlProperties.vf8495da4bfc442a980705bd2111dc760.value,
                    paramSourceType: 3
                  },
                  
                
                
                  {
                    table_column: "uvsv_psey",
                    value: this.controlProperties.v4cff96e001fe4079a5cf6d6ff9d168be.value,
                    paramSourceType: 3
                  },
                  
                
            ],
            where: {
              or: [
                {
                  and: [
                    {
                      table_column: "uvsv_application_revenu_id",
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
              table_column: "fee",
              value: this.controlProperties.v1cfaa86651d84867a74d52ebfcd7e901.value,
              paramSourceType: 3
            },
          
            {
              table_column: "month",
              value: this.controlProperties.v66660d86f2044bfd88a80f2c8b28cf1e.value,
              paramSourceType: 3
            },
          
            {
              table_column: "uvsv_dzsp",
              value: this.controlProperties.vf8495da4bfc442a980705bd2111dc760.value,
              paramSourceType: 3
            },
          
            {
              table_column: "uvsv_psey",
              value: this.controlProperties.v4cff96e001fe4079a5cf6d6ff9d168be.value,
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
        
      
    
  
    
      
      
        
          saveDataUrlaa03566d380044d6d9b81bcdfbc1296e3(){
          
          
  let url;
  let result = {}
  let sub_form = []
  
    
    sub_form = []
    result = {
      'model_uuid': "uvsv_application_revenu",
    }
    const subFormIdList = ['1cfaa86651d84867a74d52ebfcd7e901','66660d86f2044bfd88a80f2c8b28cf1e','f8495da4bfc442a980705bd2111dc760','4cff96e001fe4079a5cf6d6ff9d168be',]
    if(!this.validate(subFormIdList)){
      return 
    }

    
    if(this.pageQuery.primaryId && this.pageQuery.primaryKey === "uvsv_application_revenu_id"){
      url = '/process/v1/datagridUpdate' 
      result.updateContent = [
        {
          main_form: {
            content:[
                
                
                  {
                    table_column: "fee",
                    value: this.controlProperties.v1cfaa86651d84867a74d52ebfcd7e901.value,
                    paramSourceType: 3
                  },
                  
                
                
                  {
                    table_column: "month",
                    value: this.controlProperties.v66660d86f2044bfd88a80f2c8b28cf1e.value,
                    paramSourceType: 3
                  },
                  
                
                
                  {
                    table_column: "uvsv_dzsp",
                    value: this.controlProperties.vf8495da4bfc442a980705bd2111dc760.value,
                    paramSourceType: 3
                  },
                  
                
                
                  {
                    table_column: "uvsv_psey",
                    value: this.controlProperties.v4cff96e001fe4079a5cf6d6ff9d168be.value,
                    paramSourceType: 3
                  },
                  
                
            ],
            where: {
              or: [
                {
                  and: [
                    {
                      table_column: "uvsv_application_revenu_id",
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
              table_column: "fee",
              value: this.controlProperties.v1cfaa86651d84867a74d52ebfcd7e901.value,
              paramSourceType: 3
            },
          
            {
              table_column: "month",
              value: this.controlProperties.v66660d86f2044bfd88a80f2c8b28cf1e.value,
              paramSourceType: 3
            },
          
            {
              table_column: "uvsv_dzsp",
              value: this.controlProperties.vf8495da4bfc442a980705bd2111dc760.value,
              paramSourceType: 3
            },
          
            {
              table_column: "uvsv_psey",
              value: this.controlProperties.v4cff96e001fe4079a5cf6d6ff9d168be.value,
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
        
      
    
  
    
      
      
        
          saveDataUrla66ff54f897dc4831957f4d18382ef8c5(){
          
          
  let url;
  let result = {}
  let sub_form = []
  
    
    sub_form = []
    result = {
      'model_uuid': "uvsv_application_revenu",
    }
    const subFormIdList = ['00167aba3cea48d49a671190fde9d387','fe1e37731923459cac53bc4ab44098f9','d0a47be54f964bfa9aa74e82fca72676','8a8f2aa8fea9474a8373451917ac531d',]
    if(!this.validate(subFormIdList)){
      return 
    }

    
    if(this.pageQuery.primaryId && this.pageQuery.primaryKey === "uvsv_application_revenu_id"){
      url = '/process/v1/datagridUpdate' 
      result.updateContent = [
        {
          main_form: {
            content:[
                
                
                  {
                    table_column: "fee",
                    value: this.controlProperties.v00167aba3cea48d49a671190fde9d387.value,
                    paramSourceType: 3
                  },
                  
                
                
                  {
                    table_column: "month",
                    value: this.controlProperties.vfe1e37731923459cac53bc4ab44098f9.value,
                    paramSourceType: 3
                  },
                  
                
                
                  {
                    table_column: "uvsv_dzsp",
                    value: this.controlProperties.vd0a47be54f964bfa9aa74e82fca72676.value,
                    paramSourceType: 3
                  },
                  
                
                
                  {
                    table_column: "uvsv_psey",
                    value: this.controlProperties.v8a8f2aa8fea9474a8373451917ac531d.value,
                    paramSourceType: 3
                  },
                  
                
            ],
            where: {
              or: [
                {
                  and: [
                    {
                      table_column: "uvsv_application_revenu_id",
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
              table_column: "fee",
              value: this.controlProperties.v00167aba3cea48d49a671190fde9d387.value,
              paramSourceType: 3
            },
          
            {
              table_column: "month",
              value: this.controlProperties.vfe1e37731923459cac53bc4ab44098f9.value,
              paramSourceType: 3
            },
          
            {
              table_column: "uvsv_dzsp",
              value: this.controlProperties.vd0a47be54f964bfa9aa74e82fca72676.value,
              paramSourceType: 3
            },
          
            {
              table_column: "uvsv_psey",
              value: this.controlProperties.v8a8f2aa8fea9474a8373451917ac531d.value,
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
    
      this.getFilterTableListef288ee2227c43b288d85e134d9519ab('ef288ee2227c43b288d85e134d9519ab')
    
      this.getFilterTableList9dc8758d5418446c8c8ea956681b37a7('9dc8758d5418446c8c8ea956681b37a7')
    
      this.initFormDetail0bdcb09fefcf4a64b44b288e75183bf2();
    
      this.getFilterTableListd0a47be54f964bfa9aa74e82fca72676('d0a47be54f964bfa9aa74e82fca72676')
    
      this.getFilterTableList8a8f2aa8fea9474a8373451917ac531d('8a8f2aa8fea9474a8373451917ac531d')
    
      this.initFormDetailc6d4d4246b694307977b3861b2417a26();
    
      this.getFilterTableListf8495da4bfc442a980705bd2111dc760('f8495da4bfc442a980705bd2111dc760')
    
      this.getFilterTableList4cff96e001fe4079a5cf6d6ff9d168be('4cff96e001fe4079a5cf6d6ff9d168be')
    
},
mounted(){
  
}
}
</script>
<style lang="less" scoped>
 
@import '../assets/less/apply.less';

  
</style>