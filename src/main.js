import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PersianDatePicker from 'vue3-persian-datetime-picker'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PersianDatePicker, {
  name: 'date-picker',
  props: {
    // format: 'YYYY-MM-DD HH:mm',
    // displayFormat: 'jYYYY-jMM-jDD',
    // editable: false,
    // inputClass: 'form-control my-custom-class-name',
    // placeholder: 'Please select a date',
    // altFormat: 'YYYY-MM-DD HH:mm',
    // color: '#00acc1',
    autoSubmit: true,
    //...
    //... And whatever you want to set as default.
    //...
  },
})
app.use(VueToast);

app.component('date-picker', PersianDatePicker)
app.mount('#app')
