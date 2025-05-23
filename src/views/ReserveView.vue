<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4"
  >
    <div class="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 space-y-8">
      <!-- Header -->
      <div class="text-center space-y-2">
        <h1 class="text-2xl font-bold text-gray-800">رزرو وقت آنلاین</h1>
        <p class="text-gray-500 text-sm">
          لطفاً فرم زیر را تکمیل کنید تا وقت مورد نظر شما رزرو شود
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="submitReservation" class="space-y-6">
  <!-- Date & Time -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" dir="rtl">
    <!-- Date -->
    <div>
      <label class="block text-sm text-gray-600 mb-1">تاریخ</label>
      <div class="relative">
        <span class="absolute inset-y-0 left-3 flex items-center text-blue-600">
          <i class="fas fa-calendar-alt"></i>
        </span>
        <persian-date-picker
          v-model="form.date"
          format="jYYYY/jMM/jDD"
          display-format="dddd jD jMMMM"
          placeholder="انتخاب تاریخ"
          input-class="w-full pl-10 pr-4 border border-gray-300 rounded-xl py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
        />
      </div>
    </div>

    <!-- Time -->
    <div>
      <label class="block text-sm text-gray-600 mb-1">ساعت</label>
      <select
        v-model="form.time"
        class="w-full text-right border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option disabled value="">انتخاب ساعت</option>
        <option v-for="time in availableTimes" :key="time" :value="time">
          {{ time }}
        </option>
      </select>
    </div>
  </div>
<!--  -->
  <!-- Name -->
  <div dir="rtl">
    <label class="block text-sm text-gray-600 mb-1">نام کامل</label>
    <input
      type="text"
      v-model="form.name"
      placeholder="مثلاً علی رضایی"
      class="w-full text-right border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <!-- Phone -->
  <div dir="rtl">
    <label class="block text-sm text-gray-600 mb-1">شماره تماس</label>
    <input
      type="tel"
      v-model="form.phone"
      placeholder="09xxxxxxxxx"
      class="w-full text-right border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <!-- Submit -->
  <button
    type="submit"
    class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition shadow-sm hover:shadow-md"
  >
    تایید و ثبت رزرو
  </button>
</form>


      <!-- Footer -->
      <div class="text-center text-xs text-gray-400 pt-4 border-t" dir="rtl">
        طراحی شده توسط Ali Babaei
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PersianDatePicker from 'vue3-persian-datetime-picker'

const form = ref({
  date: '',
  time: '',
  name: '',
  phone: '',
})

const availableTimes = ['09:00', '10:00', '11:30', '13:00', '15:00', '16:30']

function submitReservation() {
  if (form.value.date && form.value.time && form.value.name && form.value.phone) {
    alert(`رزرو ثبت شد برای:
    
    تاریخ: ${form.value.date}
    ساعت: ${form.value.time}
    نام: ${form.value.name}
    شماره: ${form.value.phone}
    `)
  } else {
    alert('لطفاً تمام فیلدها را پر کنید.')
  }
}
</script>

<style scoped>
/* اگر فونت دلخواه یا آیکون نیاز داری اینجا اضافه می‌شه */
</style>
