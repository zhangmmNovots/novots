export default {
    data(){
        return {
            paramJson: {},
            globalVariableList: {},
            timer: null,
            option: {},
        }
    },
    computed:{
        isWeb(){
            return document.body.clientWidth >= 750
        },
         isH5(){
            return  750 > document.body.clientWidth
        },
        customStyle(){
            return uuid => this.isWeb ? `PC${uuid}` : `H5${uuid}`
        },
        classStyle() {
            return (uuid) => {
                const obj = {}
                const classNames = JSON.parse(JSON.stringify(this.controlProperties[uuid].className))
                if (this.isWeb) {
                classNames.pcClass.reverse().forEach((item) => {
                    obj[item] = true
                })
                } else {
                classNames.mClass.reverse().forEach((item) => {
                    obj[item] = true
                })
                }
                return obj
            }
        },

    },
    methods: {
        /* 校验
         * @param {Array} list 需要校验的控件
         */
        validate(list = []) {
            const validateList = this.getValidateList(this.$children).filter(item => list.includes(item.prop))
            let flag = true
            if(validateList.length){
                 validateList.forEach((item) =>{
                    if(!item.tiggerValidate()){
                        flag = false
                    }
                 }
                )
            }
            return flag;
        },
        getValidateList(list) {
            const resultList = [];
            list.forEach((item) => {
                if (item.$options.name === "validate") {
                    resultList.push(item);
                }
                if (item.$children && item.$children.length) {
                    resultList.push(...this.getValidateList(item.$children));
                }
            });
            return resultList;
        },
        setControlVal(val,baseType,type){
            if(type==='Address' && baseType!=='Address'){
               try{
                    const value=typeof val ==='string'?JSON.parse(val):val
                    return value.map((item) => item.name).join("/");
                }catch(e){
                    return '';
                }
            };
             if(type==='File' && baseType!=='FileUpload'){
               try{
                    const value=typeof val ==='string'?JSON.parse(val):val
                    return value.map((item) => item.title).join("/");
                }catch(e){
                    return '';
                }
            };
            return val
        },
           async showFn(status, $scoped,uuid) {
               const defaultFlag=status.display==='show'

                console.log(status, $scoped)
                const jude = await this.conditionJudge(status.displayCondition, null,$scoped)
                
                  const flag = defaultFlag ? !(jude && defaultFlag) : defaultFlag || jude
                $scoped[`display${uuid}`] =flag
                this.$set($scoped, { [`display${uuid}`]: flag })
            },
        getControlFlowVal(controlUuid, element) {
            let value = this.controlProperties[`v${controlUuid}`].value;
            let type = this.controlProperties[`v${controlUuid}`]?.type;
            if (
                type &&
                [
                    "Video",
                    "Audio",
                    "FileUpload",
                ].includes(type)
            ) {
                value = typeof this.controlProperties[`v${controlUuid}`].value === 'string' ? JSON.parse(this.controlProperties[`v${controlUuid}`].value) : this.controlProperties[`v${controlUuid}`].value;
            } else if (controlUuid && ['TableView', 'CardView', 'ListView', 'TableContainer', 'FormList'].includes(type)) {
                if (element?.children?.length > 0) {
                    //有子集
                    if (['FormList'].includes(type)) {
                        let list = this.getFormListInsertData(controlUuid).insertContent
                        let valList = [];
                        list.forEach(valItem => {
                            const obj = {};
                            valItem.insert.forEach(sItem => {
                                element.children.forEach(item => {
                                    const paramsName = item.paramsName;
                                    obj[paramsName] = sItem.value;
                                });
                                valList.push(obj);
                            })

                        });
                        value = valList;
                    } else {
                        const ids = this.controlProperties[`v${controlUuid}`].value;
                        let list = this.controlProperties[`v${element.controlUuid}`].dataSourceList.filter(v => {
                            return ids.find(m => m === v.id);
                        });
                        let valList = [];
                        list.forEach(valItem => {
                            const obj = {};
                            element.children.forEach(item => {
                                const keyItem = item.subControlUuid;
                                const paramsName = item.paramsName;
                                obj[paramsName] = valItem[keyItem];
                            });
                            valList.push(obj);
                        });
                        value = valList;
                    }
                } else {
                    //无子集
                    if (!control.dataProperty.showRowSelection) {
                        value = this.selectList[controlUuid].resultData.map(v => v.id);
                    } else {
                        value = this.controlValues[controlUuid];
                    }
                }

            }
            return value;
        },
        // 设置容器条件
        setWhere(where){
            where.or &&
            where.or.forEach(orItem => {
                orItem.and &&
                    orItem.and.forEach(andItem => {
                        if (andItem.south === 'controlValue') {
                            const val = this.getControlFlowVal(andItem.controls, andItem);
                            andItem.value = val;
                            andItem.right = val;
                        }
                        if (andItem.south === 'pageparams') {
                            andItem.value = this.$route.query[andItem.pageparams[andItem.pageparams.length - 1]];
                            andItem.right = this.$route.query[andItem.pageparams[andItem.pageparams.length - 1]];
                        }
                        
                        andItem.table_uuid = andItem.table_uuid || whereParams.model_uuid;
                        if (andItem.right === '') {
                            
                        }
                    });
            });
        },
        async conditionJudge(orList,globalVariableList, $scoped){
            	//条件判断
			let str = [];
			for (let j = 0; j < orList.length; j++) {
				const orItem = orList[j];
				let andStr = [];
				for (let i = 0; i < orItem.and.length; i++) {
					const andItem = orItem.and[i];
					const v1 = await this.getVal(andItem.beforeMatchType, globalVariableList,$scoped);
					const v2 = await this.getVal(andItem.afterMatchType, globalVariableList,$scoped);
					let type = andItem.matchType;
					let str = `'${v1}'${type}'${v2}'`;
					if (['>=', '>', '<=', '<'].includes(type)) {
						str = `${v1}${type}${v2}`;
					}
					if (['includes', 'startWith', 'endsWith'].includes(type)) {
						//包含，开始，结束
						str = `'${v1}'.${type}('${v2}')`;
					}
					if (type === '!includes') {
						//包含
						str = `!'${v1}'.includes('${v2}')`;
					}
					if ([`==''`].includes(type)) {
						//为空
						str = `('${v1}'==''||'${v1}'.length==0)`;
					}
					if ([`!=''`].includes(type)) {
						//不为空
						str = `('${v1}'!=''&&'${v1}'.length>0)`;
					}

					andStr.push(str);
					console.log('v1=', v1, 'v2=', v2, 'andStr', andStr);
				}
				console.log('and', andStr);
				str.push(andStr.join('&&'));
			}
			const jsStr = str.join('||');
			try {
				return eval(jsStr) || false;
			} catch (e) {
				console.log('判断出错', e);
				return false;
			}
        },
                
                
                  async  start(start, flowMap, paramsArr, next){
                            },
                
                
                  async  setValue(setValue, flowMap, paramsArr, next){
                            
      let list = [];
      if (setValue.list && setValue.list.length > 0) {
        list = setValue.list;
      } else {
        list = setValue;
      }
      const setValueList = list.map((v) => {
        const item = v;
        item.source = item.source || item.actionType;
        return item;
      });
        for (let i = 0; i < setValueList.length; i++) {
          const item = setValueList[i]
        const val = await this.getVal(item, paramsArr?.globalVariableList, this.tableItem);
        this.controlProperties[`v${item.controlTargetUuid}`].value = val;
      }
      this.goNext(next, flowMap, paramsArr);
},
                
                
                  async  delayThe(delayThe, flowMap, paramsArr, next){
                            
    //延迟执行
    const th = this;
    const {delayNumber, delayType} = delayThe;
    const num = delayType === 's' ? delayNumber * 1000 : delayNumber;
    setTimeout(() => {
        this.goNext(next, flowMap, paramsArr);
    }, num);
},
                
                
                  async  initFormDetail(initFormDetail, flowMap, paramsArr, next){
                            },
                
                async invokeFlow(invokeFlow, flowMap, paramsArr, invokeFlowNext){
     const req = invokeFlow?.req || [];
            const res = invokeFlow?.res;
            const processId = invokeFlow?.processId;
            const formData = { system_pb: {} };
            for (var i = 0; i < req.length; i++) {
                const element = req[i];
                if (element.source === "url") {
                    formData[element.paramsName] =
                        this.$route.query[element.fieldparamName];
                } else if (element.source === "page") {
                    if (element.controlUuid) {
                        if (element.subControlUuid) {
                            formData[element.paramsName] = this.tableItem[element.subControlUuid];
                        } else {
                            formData[element.paramsName] = this.getControlFlowVal(element.controlUuid, element);
                        }
                    }

                } else if (element.source === "globalValue") {
                    const res =
                        await this.$get("/process/v1/queryGlobalValueByKey", {
                            fieldNameKey: element.fieldNameKey,
                        })
                    formData[element.paramsName] = res.data.fieldNameValue;
                } else if (element.source === "globalVariableValue") {
                    formData[element.paramsName] = paramsArr.globalVariableList[element.globalVariableValue];
                }
            }
            const params = {
                processJsonUUid: processId,
                paramsJson: JSON.stringify({ data: formData }),
            };



            if (res && res.length === 1 && res[0].response.length === 1 && res[0].response[0].paramsType === 'FileIo') {
                const response = await this.$postGetfile(
                    `/process/v1/${invokeFlow?.processId}`,
                    params,
                    {
                        responseType: 'blob',
                        getResponse: true
                    }
                );
                let blob = response.data
                let reader = new FileReader()
                reader.readAsDataURL(blob)
                reader.onload = (e) => {
                    let a = document.createElement('a')
                    a.download = decodeURI(response.headers['content-disposition'].split('filename=')[1])
                    a.href = e.target.result
                    document.body.appendChild(a)
                    a.click()
                    document.body.removeChild(a)
                }
                return
            }


            const response = await this.$post(`/process/v1/${invokeFlow?.processId}`, params);
            const data = response.data;
            res.map((item) => {
                if (item.resresultType.includes(data.system_returnBelong)) {
                    if (item.resresult === "flowrespage") {
                        item.response.forEach((element) => {
                            this.setControlProperties(element, data[element.paramsName], params, paramsArr);
                        });
                        if (invokeFlowNext && invokeFlowNext.length > 0) {
                            const v = invokeFlowNext.find(
                                (v) => v.resBelongid === data.system_returnBelong
                            ).Next;
                            this.loop(v, flowMap, paramsArr);
                        }
                    } else {
                        this.loop(item.actionNext, flowMap, paramsArr);
                    }
                }
            });

},
            
                
                  async  messageTips(messageTips, flowMap, paramsArr, next){
                            
    this.$message.config({
        top: messageTips.tipsTopPosition || "24px",
        duration: 2,
        maxCount: 3,
    });
    this.$message[`${messageTips.tipsType}`]({
        content: messageTips.tipsDesc,
        duration: messageTips.tipsTime || 3,
    });
    const _th = this;
    if (next) {
        setTimeout(() => {
            let nextList = [];
            if (typeof next === 'string') {
                nextList = [next];
            } else {
                nextList = next;
            }
            nextList.forEach(v => {
                _th.loop(v, flowMap, paramsArr);
            });
        }, messageTips.tipsTime * 1000);
    }                      

},
                openPage(openPage){
    this.getParams(openPage);
    if(openPage.blank) {
         const routeUrl = this.$router.resolve({
            path: `/page${openPage.pageUuid}`,
            query: {
                ...this.paramJson
            }
        });
        window.open(window.location.origin + routeUrl.href, '_blank')
    }else {
       this.$router.push({
            path: `/page${openPage.pageUuid}`,
            query: {
                ...this.paramJson
            }
        });
    }
},
            
                
                  async  dialogOpen(dialogOpen, flowMap, paramsArr, next){
                            
      let primaryKeyUuid = '';
      let primaryKeyEnName = '';
      if (this.tableItem) {
        if(dialogOpen.subparamValue) {
            const subparamValue =  dialogOpen.subparamValue;
            if (subparamValue) {
              primaryKeyUuid = this.tableItem[subparamValue];
              primaryKeyEnName = subparamValue;
            }
        }
      }
      this.drawerList.push({
        controlUuid:`v${dialogOpen.controlUuid}`,
        primaryKeyUuid: primaryKeyUuid,
        tableItem: this.tableItem,
        primaryKeyEnName: primaryKeyEnName
      });

      if (next) {
          let nextList = [];
          if (typeof next === "string") {
              nextList = [next];
          } else {
              nextList = next;
          }
          nextList.forEach((v) => {
              this.loop(v, flowMap, paramsArr);
          });
      }

},
                
                
                  async  saveData(saveData, flowMap, paramsArr, next){
                            },
                
                
                  async  dialogClose(dialogClose, flowMap, paramsArr, next){
                            

    const drawerList = this.drawerList.filter(v => v.controlUuid !== `v${dialogClose.controlUuid}`);
    this.drawerList = JSON.parse(JSON.stringify(drawerList));
    this.goNext(next, flowMap, paramsArr);

},
                
                
                  async  notifications(notifications, flowMap, paramsArr, next){
                            
    const params = notifications.iconSwitch ? {
        placement: notifications.locationType,
        duration: notifications.tipsTime || 3,
        icon: notifications.iconSwitch,
        top: notifications.tipsTopPosition || '20px'
    }: {
        placement: notifications.locationType,
        duration: notifications.tipsTime || 3,
        top: notifications.tipsTopPosition || '20px'
    }
    this.$notification.config(params);
    if(notifications.iconSwitch){
        this.$notification[notifications.tipsType]({
            message: notifications.tipsTitle,
            description: notifications.tipsDesc
        });
    }else {
        this.$notification.open({
            message: notifications.tipsTitle,
            description: notifications.tipsDesc
        });
    }
    const _th = this;
    if (next) {
        setTimeout(() => {
            let nextList = [];
            if (typeof next === 'string') {
                nextList = [next];
            } else {
                nextList = next;
            }
            nextList.forEach(v => {
                _th.loop(v, flowMap, paramsArr);
            });
        }, notifications.tipsTime * 1000);
    }
     
},
                
                
                  async  getFilterTableList(getFilterTableList, flowMap, paramsArr, next){
                            },
                
                
                  async  editObject(editObject, flowMap, paramsArr, next){
                            
   const params = Object.assign(
      { actionType: editObject.editType },
      {
        [editObject.editType]: editObject[editObject.editType],
      }
    );
    this[params.actionType](params[params.actionType]);

    this.pageQuery.primaryId = this.tableItem.id;
    this.pageQuery.primaryKey = editObject.dialogOpen.subparamValue;
    const formIds = editObject.dialogOpen.dataFormIds;
    formIds.forEach((v) => {
      this[`initFormDetail${v}`](editObject.dialogOpen.subparamValue);
    });
    this.goNext(next, flowMap, paramsArr);
},
                
                
                  async  setLookupValue(setLookupValue, flowMap, paramsArr, next){
                            },
                
                confirm(confirm, flowMap, paramsArr, choiceNext){
    const _th = this;
    this.$confirm({
        title: confirm?.tipsTitle,
        content: confirm?.tipsDesc,
        okText: "确认",
        cancelText: "取消",
        visible: true,
        onOk() {
            const next = choiceNext?.find((v) => v.isTrue).Next;
            next && next && _th.loop(next, flowMap, paramsArr);
        },
        onCancel() {
            const next = choiceNext?.find((v) => !v.isTrue).Next;
            next && next && _th.loop(next, flowMap, paramsArr);
        },
    });

},
            
                
                  async  refreshData(refreshData, flowMap, paramsArr, next){
                            

    refreshData?.controlList?.forEach(item => {
        this.refreshData(item);
        const type = this.controlProperties[`v${item}`].dataSourceType;
        const basetype = this.controlProperties[`v${item}`].type;
        const req = this.controlProperties[`v${item}`].req;
        if (['Tree','TreeContainer'].includes(basetype)){
            this[`getFilterTableList${item}`](item)
            return 
        }
        if(type === 'flow') {
            let System_Page = {};
            const paramsJson = JSON.parse(req.paramsJson);
            paramsJson.data.System_Page = System_Page;
            req.paramsJson = JSON.stringify(paramsJson);
            this.$post(`/process/v1/${req.processJsonUUid}`, req).then((res) => {
                const resultData = this[`setLookupValue${item}`](res.data[req.flowresParamsName])
                this.controlProperties[`v${item}`].dataSourceList = resultData;
                

                this.controlProperties[`v${item}`].pagination =
                res.data[req.flowresParamsName];
            });
        }else if(type === 'entity') {
           const where = this.controlProperties[`v${item}`].whereParams;
            this.setWhere(where.where);
            this.$post("/process/v1/datagridQuery", { data: where }).then((res) => {
                const result = res.data.list;

                this.controlProperties[`v${item}`].pagination = result.pagination ?? {};
                
                const resultData = this[`setLookupValue${item}`](result)
                this.controlProperties[`v${item}`].dataSourceList = resultData;
                this[`getFilterTableList${item}`](item);
            });
        }
    });

    this.goNext(next, flowMap, paramsArr);
    
},
                
                
                  async  hideControls(hideControls, flowMap, paramsArr, next){
                            },
                
            
                 async setControlProperties(element, res, params, paramsArr) {
                    let value = res
                    if (element.controlUuid) {
                    if (element.istemplate) {
                        value = this.template(this.controlProperties[`v${element.controlUuid}`], {
                        [element.paramsName]: data[element.paramsName],
                        })
                    }
                    if (element.paramsType === 'Lookup') {
                        const list = res.map((v) => {
                        return v.columns
                        })

                        value = { resultData: list }
                    }
                    if (element.baseType && ['List', 'Lookup'].includes(element.paramsType)) {
                        if (element.baseType === 'Tag') {
                        if (element.paramsType === 'Lookup') {
                            this.controlProperties[`v${element.controlUuid}`].value = value[element.subFieldId]
                        } else {
                            const datalist = value.resultData.map((m) => {
                            return {
                                columns: { ...m },
                                uuid: m.id,
                            }
                            })
                            this.controlProperties[`v${element.controlUuid}`].value = datalist
                        }
                        } else {
                        if (!value.resultData) {
                            value = { resultData: value }
                        }

                         const resultData = this[`setLookupValue${element.controlUuid}`](value)

                        this.controlProperties[`v${element.controlUuid}`].dataSourceList = resultData

                        }
                    } else {
                        if (
                        element.baseType &&
                        ['TableView', 'ListView', 'CardView', 'TableContainer'].includes(element.baseType) &&
                        element.subFieldId &&
                        this.tableItem
                        ) {
                        if (this.dataControl.dataIndex > -1 && this.dataControl.advancedUuid) {
                            const fieldId = element.subFieldId
                            if (fieldId) {
                            this.controlProperties[`v${fieldId}`].dataSource = value
                            return
                            }
                        }
                        }

                        this.controlProperties[`v${element.controlUuid}`].value = value
                    }
                    this.controlProperties[`v${element.controlUuid}`].req = {
                        ...params,
                        flowresParamsName: element.paramsName,
                        belong: element.belong,
                        type: 'flow',
                    }
                    }
                    if (element.isVarable) {
                    if (!paramsArr.globalVariableList) paramsArr.globalVariableList = {}
                    paramsArr.globalVariableList[element.paramsName] = value
                    }

                    if (element.paramsType !== 'List' && element.children && element.children.length > 0) {
                    element.children.forEach((item) => {
                        if (res && res.hasOwnProperty(item.paramsName)) {
                        if (
                            item.paramsType === 'Lookup' &&
                            !item.multiple &&
                            res[item.paramsName] instanceof Array &&
                            res[item.paramsName].length === 1
                        ) {
                            this.setControlProperties(item, res[item.paramsName][0].columns, params, paramsArr)
                        } else {
                            this.setControlProperties(item, res[item.paramsName], params, paramsArr)
                        }
                        }
                    })
                    }

                    // 增加生成token，存储token
                    if (element.paramsType === 'TOKEN') {
                    sessionStorage.setItem('token', res)
                    }
                },
            getParams(openPage) {
                    this.paramJson = {};
                    const { parameList } = openPage;
                    parameList.forEach((item) => {
                        if (item.paramName === '_editObjectid_') {
                            this.paramJson['_editObjectPrimaryKey_'] =
                            this.paramJson['_editObjectPrimaryKey_'] || item.subparamValue
                        }
                        this.paramJson[item.paramName] = this.getParamUrl(item)
                    })
                },
                getParamUrl(item) {
                    if (item.paramSource === 'url') {
                        return this.$route.query[item.fieldparamName];
                    } else if (item.subparamValue) {
                        return this.gettableItem(item.subparamValue);
                    } else if (item.paramSource === 'cursorm') {
                        return item.cursormValue;
                    } else {
                        return this.controlProperties[`v${item.controlUuid}`].value;
                    }
                },
            
                dialogOpen(dialogOpen, flowMap, paramsArr, next){
      let primaryKeyUuid = '';
      let primaryKeyEnName = '';
      if (this.tableItem) {
        if(dialogOpen.subparamValue) {
            const subparamValue =  dialogOpen.subparamValue;
            if (subparamValue) {
              primaryKeyUuid = this.tableItem[subparamValue];
              primaryKeyEnName = subparamValue;
            }
        }
      }
      this.drawerList.push({
        controlUuid:`v${dialogOpen.controlUuid}`,
        primaryKeyUuid: primaryKeyUuid,
        tableItem: this.tableItem,
        primaryKeyEnName: primaryKeyEnName
      });

      if (next) {
          let nextList = [];
          if (typeof next === "string") {
              nextList = [next];
          } else {
              nextList = next;
          }
          nextList.forEach((v) => {
              this.loop(v, flowMap, paramsArr);
          });
      }

},
            gettableItem(subitem) {
            return this.tableItem[subitem];
            
        },

        /* 获取lookup数据
		 * @param {Array} lookupIdList lookup数组
		 * @param {Array} list 数据
		 * 递归
		 */
		getLookupData(lookupIdList, list) {
			let [lookupId, ...lookupList] = lookupIdList;
			let result = [];
            if(list instanceof Array)
			list.map(item => {
				if (lookupList.length) {
					result.push(this.getLookupData(lookupList, item.columns[lookupId]));
				} else {
					if (item.columns[lookupId] instanceof Object) {
						result.push(item.columns[lookupId].fields);
					} else {
						result.push(item.columns[lookupId]);
					}
				}
			});
			return result.join(',');
		},
        getLookupList(list){
            if(list instanceof Array){
                let result = []
                result = list.map(item => item.uuid)
                return result.join(',')
            }
          return list

        },
        loop(start, flowMap, paramsArr) {
            let actionType = flowMap[start]?.actionType;
            let current = flowMap[start]?.current;
            let Next = flowMap[start]?.Next;
            if (actionType === "choice") {
                actionType &&
                    this[actionType](
                        paramsArr[current],
                        flowMap,
                        paramsArr,
                        flowMap[start].choiceNext,
                        paramsArr?.globalVariableList
                    );
            } else if (actionType === "choose") {
                actionType &&
                    this[actionType](
                        paramsArr[current],
                        flowMap,
                        paramsArr,
                        paramsArr?.globalVariableList
                    );
            } else if (actionType === "confirm") {
                 actionType &&
                        this[actionType](paramsArr[current], flowMap, paramsArr, flowMap[start].choiceNext);
            } else if((actionType === 'saveData' || actionType === 'deleteObject') && current){
                this[current]();
                if(Next){
                let nextList = [];
                if (typeof Next === "string") {
                    nextList = [Next];
                } else {
                    nextList = Next;
                }
                nextList.forEach((v) => {
                    this.loop(v, flowMap, paramsArr);
                });
                }
            } else if (actionType === "invokeFlow" ){
                actionType && this[actionType](paramsArr[current], flowMap, paramsArr, flowMap[start]?.invokeFlowNext);
            } else {
                actionType && this[actionType](paramsArr[current], flowMap, paramsArr, Next);
            }
        },
        template(str, o) {
            const re = /{(.+?)}/g;
            return str.replace(re, function (match, name) {
                return o[name] === undefined ? `{${name}}` : o[name];
            });
        },
        async getVal(obj,globalVariableList,$scoped){
             let value = '';
            if (obj.source === 'customSetValue') {
                //自定义
                if (obj.valueVariableList && obj.valueVariableList.length > 0) {
                    if (obj.valueVariableListObj) {
                        const val = await this.getVal(obj.valueVariableListObj, globalVariableList);
                        return this.template(obj.value, {
                            [obj.valueVariableList.join('/')]: val
                        });
                    } else {
                        let v = obj.value;

                        for (let i = 0; i < obj.valueVariableList.length; i++) {
                            const val = await this.getVal(obj.valueVariableList[i], globalVariableList);
                            v = this.template(v, {
                                [obj.valueVariableList[i].valueList.join('/')]: val
                            });
                        }
                        return v;
                    }
                }
                return obj.value;
            } else if (obj.source === 'controlValue') {
                //组件
                return this.getControlFlowVal(obj.controlUuid);
            } else if (obj.source === 'globalValue') {
                //环境变量
                let res = await this.$get('/process/v1/queryGlobalValueByKey', {
                    fieldNameKey: obj.globalValue
                });
                value = res.data.fieldNameValue;
                return value;
            } else if (obj.source === 'url' || obj.source === 'urlSetValue') {
                //url
                return this.$route.query[obj.pageparams] || '';
            } else if (obj.source === 'globalVariableValue') {
                return globalVariableList[obj.globalVariableValue]
            } else if (obj.source === 'property' && ($scoped|| this.tableItem)) {
                //组件属性
                const item = $scoped||this.tableItem;
                 if (obj.optionProperty) {
                const data = item[obj.fieldId]
                const valList = data.fields.map((item) => {
                    const val = JSON.parse(item.data)
                    return val[obj.optionProperty]
                })
                return valList.join('/')
                } else {
                return item[obj.fieldId]
                }
            } else if (obj.source === 'dataSet') {
                let res = {}
                if (this.option[obj.optionSetEnName]) {
                res = this.option[obj.optionSetEnName]
                } else {
                res = await this.$get('/dam/v1/wlosOptionData/noPage/list', {
                    optionUuid: obj.optionSetEnName,
                })
                this.$set(this.option, obj.optionSetEnName, res)
                }
                const data = res.data.map((item) => {
                return JSON.parse(item.data)
                })
                return data.find((v) => obj.optionDataId === v.id)[obj.optionProperty]
            }
            return '';
        },

        async getValV2(constVal,$scoped){
            if(constVal[0].classification==='controlsGroup'){
                const controls=(constVal.find(v=>v.classification==='controls')||{}).dataKey
                const properties=(constVal.find(v=>v.classification==='properties')||{}).dataKey
                return this.controlProperties[`v${controls}`][properties]
            }
        },
        goNext(next, flowMap, paramsArr){
            if (next) {
                let nextList = [];
                if (typeof next === 'string') {
                    nextList = [next];
                } else {
                    nextList = next;
                }
                nextList.forEach(v => {
                    this.loop(v, flowMap, paramsArr);
                });
            }
        }
    },
    beforeDestroy() {
        clearInterval(this.timer)
    }
}

