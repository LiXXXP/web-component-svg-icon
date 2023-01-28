import type { App } from 'vue'

// 组件引入
import SvgIcon from './SvgIcon'

// 所有组件
const components: any[] = [SvgIcon]

/**
 * 组件注册
 * @param app Vue对象
 */
const install = (app: App) => {
  components.forEach((component) => app.component(component.name, component))
}

export { SvgIcon }

// 全部导出
export default {
  install,
  ...components
}
