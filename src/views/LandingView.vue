<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center p-6"
  >
    <div class="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center space-y-8">
      <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-snug">
        سیستم رزرو وقت آنلاین
      </h1>
      <p class="text-lg text-gray-600 max-w-xl mx-auto">
        یک راهکار سریع و ساده برای مدیریت وقت‌ها و پذیرش آنلاین مشتریان. بدون نیاز به نصب و پشتیبانی.
      </p>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
        <RouterLink
          to="/reserve"
          class="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold shadow-md transition"
        >
          رزرو وقت
        </RouterLink>
        <RouterLink
          to="/admin/reservations?admin=1234"
          class="px-6 py-3 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-xl font-semibold shadow-sm transition"
        >
          پنل مدیریت
        </RouterLink>
      </div>

      <footer class="text-xs text-gray-400 pt-8 border-t" >
        <p dir="rtl">طراحی شده توسط علی بابایی</p>
        <p>0098 905 204 9121</p>
        <p>alibabaei.workmail@gmail.com</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
</script>
