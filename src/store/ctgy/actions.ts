import store from '..'
export async function findFirstCtgys() {
  await store.dispatch('ctgyModule/findFirstCtgys')
}
export async function findSecThirdCtgys() {
  await store.dispatch('ctgyModule/findSecThirdCtgys')
}
