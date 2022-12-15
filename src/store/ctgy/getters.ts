import store from '..'

export function getFirstCtgys() {
  return store.getters['ctgyModule/findFirstCtgys']
}
