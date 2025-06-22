<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useStore } from '@/stores/store'
import IOSPWAHint from '@/components/IOSPWAHint.vue'

onMounted(() => {
  const store = useStore()
  const appData = localStorage.getItem('appData')
  if (appData) {
    const parsed = JSON.parse(appData)
    Object.assign(store.vars.storage, parsed) // 👈 مهم: بدون شکستن reactivity
  } else {
    store.vars.storage.reservations = []
    localStorage.setItem('appData', JSON.stringify(store.vars.storage))
  }
})
</script>

<template>
  <IOSPWAHint />
  <RouterView />
</template>

<style scoped></style>
