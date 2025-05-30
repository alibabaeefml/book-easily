<template>
  <div class="min-h-screen bg-white text-gray-800 font-sans">
    <!-- Hero -->
    <section class="bg-gradient-to-tr from-blue-600 to-blue-500 text-white py-20 px-6" dir="rtl">
      <div class="max-w-5xl mx-auto text-center space-y-6">
        <h1 class="text-4xl sm:text-5xl font-extrabold leading-tight">
          سامانه رزرو وقت آنلاین برای کسب‌وکار شما
        </h1>
        <p class="text-lg sm:text-xl">
          رزرو سریع، بدون تماس، بدون دردسر. مخصوص پزشکان، مشاوران، سالن‌ها و مربیان.
        </p>
        <div class="flex justify-center gap-4 mt-6 flex-wrap">
          <RouterLink
            to="/reserve"
            class="bg-white text-blue-600 font-bold py-3 px-6 rounded-xl hover:bg-blue-100 transition"
          >
            شروع رزرو وقت
          </RouterLink>
          <RouterLink
            to="/admin/reservations?admin=1234"
            class="border border-white py-3 px-6 rounded-xl hover:bg-white hover:text-blue-600 transition"
          >
            ورود مدیر
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-20 px-6 bg-gray-50" dir="rtl">
      <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div>
          <i class="fas fa-clock text-3xl text-blue-600 mb-4"></i>
          <h3 class="font-bold text-xl mb-2">رزرو سریع و آسان</h3>
          <p class="text-gray-600">بدون نیاز به تماس تلفنی، فقط در چند ثانیه وقت بگیرید.</p>
        </div>
        <div>
          <i class="fas fa-mobile-alt text-3xl text-blue-600 mb-4"></i>
          <h3 class="font-bold text-xl mb-2">کاملاً ریسپانسیو</h3>
          <p class="text-gray-600">سازگار با موبایل، تبلت و دسکتاپ برای همه کاربران شما.</p>
        </div>
        <div>
          <i class="fas fa-lock text-3xl text-blue-600 mb-4"></i>
          <h3 class="font-bold text-xl mb-2">پنل مدیریت امن</h3>
          <p class="text-gray-600">نمایش رزروها با دسترسی محافظت‌شده، فقط برای شما.</p>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="py-20 px-6 bg-white text-center" dir="rtl">
      <h2 class="text-3xl font-bold mb-8">تعرفه ویژه راه‌اندازی</h2>
      <div class="max-w-xl mx-auto bg-blue-50 border border-blue-200 rounded-2xl p-8">
        <h3 class="text-2xl font-bold text-blue-700 mb-4">فقط ۲۰۰ هزار تومان برای اولین مشتریان</h3>
        <p class="text-gray-600 mb-6">
          راه‌اندازی اولیه، بدون هزینه‌ ماهانه، همراه با پشتیبانی اولیه و امکان شخصی‌سازی محدود.
        </p>
        <a
          href="https://wa.me/989123456789"
          target="_blank"
          class="inline-block bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition"
        >
          ثبت سفارش از طریق واتساپ
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-6 bg-gray-100 text-center text-sm text-gray-500" dir="rtl">
      © {{ new Date().getFullYear() }} طراحی و توسعه توسط علی بابایی. تمام حقوق محفوظ است.
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap');

* {
  font-family: 'Vazirmatn', sans-serif;
}
</style>
