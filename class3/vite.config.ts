import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { GieResolver } from '@giegie/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        }),
        GieResolver()
      ]
    }),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        GieResolver()
      ]
    })
  ]
})
