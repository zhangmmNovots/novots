import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    permissionList: [],
    editCurrentUuid: '',
    current_uuid: '',
    pageData: {
      uuid: '',
      templateUuid: '',
      title: '',
      description: '',
      keywords: '',
      charset: 'utf-8',
      styles: []
    },
    approvalPageData: {
      uuid: ''
    },
    blocks: [],
    cBlocks: [],
    mdata: '',
  },
  mutations: {
    changeState(state, data) {
      Object.keys(data).forEach((key) => {
        return (state[key] = data[key])
      })
    },
    clearState(state, data) {
      state.blocks = [];
      state.current_uuid = '';
      state.cBlocks = [];
      state.mdata = '';
      state.editCurrentUuid = '';
      if (data && data.clearAll) {
        for (let o in state.pageData) {
          state.pageData[o] = '';
        }
      }

      state.pageData.charset = 'utf-8';
      state.pageData.styles = [];
    },
  },
  actions: {
    changedata({ commit }, data) {
      commit('changeState', data)
    },
    //向对应的uuid下添加块儿
    addBlocksToPage({ commit, state: { current_uuid, blocks } }, data) {
      const pageUuid = sessionStorage.getItem('pageUuid');
      let b = [
        ...blocks,
        {
          ...data,
          pageUuid: pageUuid
        }
      ];

      for (let i = 0; i < b.length; i++) {
        delete b[i].children;
      }
      commit('changeState', {
        blocks: b
      });
    },
    //清楚state数据
    clearState({ commit }, data) {
      commit('clearState', data);
    },
    changedmdata({ commit }, data) {
      //改变拖动
      commit('changeState', {
        mdata: data
      });
    },
    //设置当前正在编辑uuid
    actionChangeUuid({ commit, state }, data) {
      commit('changeState', { current_uuid: data });
    },
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
})
