<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4">
    <div class="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6 space-y-6">
      <h1 class="text-2xl font-bold text-center text-gray-800">لیست رزروها</h1>

      <div v-if="!isAuthorized" class="text-center text-red-500 font-semibold">
        دسترسی غیرمجاز! لطفاً از طریق لینک صحیح وارد شوید.
      </div>

      <div v-else>
        <div v-if="sortedReservations.length === 0" class="text-center text-gray-500" dir="rtl">
          هنوز رزروی ثبت نشده است.      
        </div>

        <div v-else class="space-y-4">
          <div
            v-for="res in sortedReservations"
            :key="res.id"
            class="border border-gray-200 rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition"
            dir="rtl"
          >
            <div class="flex flex-col sm:flex-row justify-between text-sm text-gray-700 mb-2">
              <div class="mb-1 sm:mb-0">
                <span class="font-bold text-gray-800">📅 تاریخ:</span>
                <span>{{ res.date }}</span>
              </div>
              <div>
                <span class="font-bold text-gray-800">⏰ ساعت:</span>
                <span>{{ res.time }}</span>
              </div>
            </div>

            <div class="text-sm text-gray-700 space-y-1 mt-2">
              <p><span class="font-bold text-gray-800">🙍‍♂️ نام:</span> {{ res.name }}</p>
              <p><span class="font-bold text-gray-800">📞 شماره تماس:</span> {{ res.phone }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/stores/store'

const route = useRoute()
const isAuthorized = computed(() => route.query.admin === '1234')
const store = useStore()

const sortedReservations = computed(() => {
  if (!store.vars.storage.reservations) return []
  return store.vars.storage.reservations.slice().sort((a, b) => {
    const getTimeValue = (r) => `${r.date} ${r.time}`.replaceAll('/', '')
    return getTimeValue(b).localeCompare(getTimeValue(a))
  })
})
</script>
