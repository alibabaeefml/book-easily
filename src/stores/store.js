import { reactive, toRaw, watch } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const vars = reactive({ storage: {} })

  watch(
    () => vars.storage,
    (newVal) => localStorage.setItem('appData', JSON.stringify(toRaw(newVal))),
    { deep: true },
  )

  return { vars }
})
