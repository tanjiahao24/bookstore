<template>
  <div class="ctgy">
    <ToSearch></ToSearch>
    <div v-for="item of firstCtgys">{{item.name}}</div>
  </div>

</template>

<script setup lang='ts'>
import { Ref, ref } from 'vue'
import ToSearch from './components/toSearch.vue';
import { FirstCtgy } from '@/store/state'
import { findFirstCtgys } from '@/store/actions'
import { getFirstCtgys } from '@/store/getters'

const firstCtgys: Ref<FirstCtgy[]> = ref([])

async function initFirstCtgys () {
  await findFirstCtgys()
  firstCtgys.value = getFirstCtgys()
}

initFirstCtgys()
</script>

<style>

</style>