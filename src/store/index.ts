import { createStore } from 'vuex'
import ctgyModule from './ctgy/index'

export default createStore({
  modules: {
    ctgyModule,
  },
})
