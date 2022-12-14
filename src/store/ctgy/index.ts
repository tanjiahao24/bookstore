import { Module } from 'vuex'
import { CtgyState, initCtgyState } from './state'
import CtgyApi from '@/api/CtgyApi'

const ctgyModule: Module<CtgyState, {}> = {
  namespaced: true,
  state: initCtgyState,
  getters: {},
  mutations: {},
  actions: {},
}

export default ctgyModule
