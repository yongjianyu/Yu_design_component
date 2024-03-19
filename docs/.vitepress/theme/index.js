import DefaultTheme from 'vitepress/theme'
import YIcon from '@yu_design/components/icon'
import '@yu_design/theme-chalk/src/index.scss'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(YIcon)
  }
}
