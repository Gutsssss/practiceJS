import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
  components,
  directives,
})


createApp(App).use(createPinia()).use(vuetify).use(mdiVue,{
  icons: mdijs
}).mount('#app')
