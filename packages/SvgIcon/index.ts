import type { App } from 'vue'
import SvgIcon from './index.vue'

type SFCWithInstall<T> = T & { install(app: App): void } // vue 安装

// const withInstall = <T extends Record<string, any>>(main: T) => {
//   ;(main as SFCWithInstall<T>).install = (app): void => {
//     app.component(main.name, main)
//   }
//   return main as SFCWithInstall<T>
// }

// 安装
SvgIcon.install = (app: App) => {
  app.component(SvgIcon.name, SvgIcon)
}

const InSvgIcon: SFCWithInstall<typeof SvgIcon> = SvgIcon as SFCWithInstall<typeof SvgIcon> // 增加类型
// const InSvgIcon = withInstall(SvgIcon)
export default InSvgIcon
