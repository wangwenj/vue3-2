import { createApp } from 'vue'
import router from './router'
import pinia from './stores'
import 'virtual:svg-icons-register'
import App from './App.vue'
import SvgIcon from './components/SvgIcon.vue'

// prettier-ignore
createApp(App)
  .use(router)
  .use(pinia)
  .component('SvgIcon', SvgIcon)
  .mount('#app')
