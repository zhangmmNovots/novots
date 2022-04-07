
import {get} from '@/util/http';
 export default {
    data() {
        return {
            addressData: [],
			address: {
				uuid: 'address',
				name: ''
			},
			resultList: [],
			fieldNames: {
				label: 'name',
				value: 'uuid',
				children: 'children'
			}
        }
    },
    computed: {
		
	},
    methods: {
        addressLookKeyName(value) {
            let name = ''
            let data = value ? JSON.parse(value) : []
            data.forEach(item => {
                if (item.uuid === 'address') {
                    name = item.name
                }
            })
            return name
        },
        addressLookKeyInput(obj, e, field) {
            const {value} = e.target
            let data = obj[field] ? JSON.parse(obj[field]) : []
            let len = data.length
            let o = {
                uuid: 'address',
                name: value
            }
            if (len === 0) {
                data.push(o)
            } else {
                if (data[len - 1].uuid === 'address') {
                    data.splice(len - 1, 1, o)
                } else {
                    data.push(o)
                }
            }
            obj[field] = JSON.stringify(data)
        },
        addressLookKeyValue (value) {
            let arr = []
            let data = value ? JSON.parse(value) : []
            data.map(item => {
                if (item.uuid !== 'address') {
                    arr.push(item.uuid);
                }
                return item.uuid
            })
            return arr
        },
        addressLookKeyChange (obj, value, field) {
            let selectData = this.addressData
			const result = value.map(item => {
				const province = this.flatter(item, selectData);
				selectData = province.children;
				return {name: province.name, uuid: province.uuid};
			});
            let data = obj[field] ? JSON.parse(obj[field]) : []
            if (data.length > 0) {
                let index = data.findIndex(item => item.uuid === 'address')
                if (index === -1) {
                    obj[field] = JSON.stringify(result);
                } else {
                    let nameObj = JSON.parse(JSON.stringify(data[index]))
                    obj[field] = JSON.stringify(result.concat(nameObj));
                }
            } else {
                obj[field] = JSON.stringify(result);
            }
        },
        addressValue (uuid) {
            const arr = [];
            let data = this.controlProperties[uuid].value ? JSON.parse(this.controlProperties[uuid].value) : []
            data.map(item => {
                if (item.uuid !== 'address') {
                    arr.push(item.uuid);
                }
                return item.uuid
            })
            return arr
		},
        addressChange (uuid, value) {
            console.log(uuid, value)
            let selectData = this.addressData
			const result = value.map(item => {
				const province = this.flatter(item, selectData);
				selectData = province.children;
				return {name: province.name, uuid: province.uuid};
			});
            let data = this.controlProperties[uuid].value ? JSON.parse(this.controlProperties[uuid].value) : []
            if (data.length > 0) {
                let index = data.findIndex(item => item.uuid === 'address')
                if (index === -1) {
                    this.controlProperties[uuid].value = JSON.stringify(result);
                } else {
                    let obj = JSON.parse(JSON.stringify(data[index]))
                    this.controlProperties[uuid].value = JSON.stringify(result.concat(obj));
                }
            } else {
                this.controlProperties[uuid].value = JSON.stringify(result);
            }
        },
        addressName(uuid){
            let name = ''
            let data = this.controlProperties[uuid].value ? JSON.parse(this.controlProperties[uuid].value) : []
            data.forEach(item => {
                if (item.uuid === 'address') {
                    name = item.name
                }
            })
            return name
        },
        addressInput (uuid, e) {
            const {value} = e.target
            console.log(this.controlProperties[uuid].value)
            let data = this.controlProperties[uuid].value ? JSON.parse(this.controlProperties[uuid].value) : []
            let len = data.length
            let obj = {
                uuid: 'address',
                name: value
            }
            if (len === 0) {
                data.push(obj)
            } else {
                if (data[len - 1].uuid === 'address') {
                    data.splice(len - 1, 1, obj)
                } else {
                    data.push(obj)
                }
            }
            this.controlProperties[uuid].value = JSON.stringify(data)
        },
        flatter(id, list) {
			return list.find(item => item.uuid === id);
		}
    },
    created(){
        get('/dam/v1/wlosOptionSet/sys/province').then(({data}) => (this.addressData = data[0].wlosOptionDetailList));
    },
    mounted () {
    }
    }
