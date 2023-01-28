import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcons({
      iconDirs: [
        resolve(process.cwd(), 'packages/theme-default/icons/svg'),
        resolve(process.cwd(), 'examples/icons/svg')
      ],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 4000
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './examples'),
      '~': resolve(__dirname, './packages')
    }
  }
})
