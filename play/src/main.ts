import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Icon from '@yu_design/components/icon'
import Button from '@yu_design/components/button'
import '@yu_design/theme-chalk/src/index.scss'

const plugins = [Icon, Button]
const app = createApp(App)
plugins.forEach(plugin => app.use(plugin))

app.mount('#app')
