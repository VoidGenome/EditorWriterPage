import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.min.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdi',
  },
  themes: {
    light: {
      // Customize the background color
      dark: false,
      colors: {
        background: '#f5f5f5', // Light grey background
      },
    },
  }
})

createApp(App).use(store).use(router).use(vuetify).mount('#app')
