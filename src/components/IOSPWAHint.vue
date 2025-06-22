<script setup>
import { useStore } from '@/stores/store'
import AddToHomeScreenIcon from './AddToHomeScreenIcon.vue'
import { useNavigator } from '@/composables/navigator.js'

const { isIOS, isInStandaloneMode } = useNavigator()

const store = useStore()


</script>

<template>
  <Teleport to="body">
    <div
      class="fixed bottom-0 left-0 flex items-center justify-between w-[95%] m-[2.5%] h-36 bg-white border border-gray-300 rounded-xl p-4"
      dir="rtl"
      v-if="isIOS() &&
       !isInStandaloneMode() &&
        !store.vars.storage.hideHint"
    >
      <div class="flex items-center gap-4 text-sm">
        <img src="/icons/ios/180.png" alt="آیکون برنامه" width="50" height="50" />
        <div class="flex flex-wrap">
          <strong class="text-lg">برای نصب Book Easily</strong>
          <p class="flex flex-wrap gap-1 items-center ">

            <AddToHomeScreenIcon class="w-6 h-6 fill-blue-700" /> را انتخاب و در منو باز شده، گزینه
            <div class="flex items-center justify-between gap-1">
              <div class="w-4 h-4 rounded-sm border flex items-center justify-center text-lg">+</div>
              Add to Home Screen
            </div>
  
            را انتخاب کنید.
          </p>
        </div>
      </div>
      <button @click="store.vars.storage.hideHint = true" class="bg-gray-300 rounded-lg w-6 h-6 absolute left-0 top-0 m-4">&times;</button>
    </div>
  </Teleport>
</template>
