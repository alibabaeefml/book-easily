import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const vars = reactive({})

  return { vars }
})
