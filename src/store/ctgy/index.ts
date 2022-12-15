import { Module } from 'vuex'
import { CtgyState, initCtgyState } from './state'
import CtgyApi from '@/api/CtgyApi'

const ctgyModule: Module<CtgyState, {}> = {
  namespaced: true,
  state: initCtgyState,
  getters: {
    findFirstCtgys(state) {
      return state.firstCtgyList
    },
  },
  mutations: {
    getFirstCtgys(state, { firstCtgys }) {
      state.firstCtgyList = firstCtgys
    },
  },
  actions: {
    async findFirstCtgys({ commit }) {
      const firstCtgys = await CtgyApi.getFirstCtgy()
      commit('getFirstCtgys', { firstCtgys })
    },
    findSecThirdCtgys() {},
  },
}

export default ctgyModule
