// vite.config.ts
import { defineConfig } from "file:///C:/Codes/vue3-ts-components/class1/node_modules/.pnpm/vite@4.4.5_@types+node@18.17.1/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Codes/vue3-ts-components/class1/node_modules/.pnpm/@vitejs+plugin-vue@4.2.3_vite@4.4.5_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///C:/Codes/vue3-ts-components/class1/node_modules/.pnpm/unplugin-vue-components@0.25.2_vue@3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///C:/Codes/vue3-ts-components/class1/node_modules/.pnpm/unplugin-auto-import@0.16.6/node_modules/unplugin-auto-import/dist/vite.js";
import { GieResolver } from "file:///C:/Codes/vue3-ts-components/class1/packages/resolver/index.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        GieResolver()
      ]
    }),
    AutoImport({
      resolvers: [
        GieResolver()
      ]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxDb2Rlc1xcXFx2dWUzLXRzLWNvbXBvbmVudHNcXFxcY2xhc3MxXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxDb2Rlc1xcXFx2dWUzLXRzLWNvbXBvbmVudHNcXFxcY2xhc3MxXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Db2Rlcy92dWUzLXRzLWNvbXBvbmVudHMvY2xhc3MxL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgeyBHaWVSZXNvbHZlciB9IGZyb20gJ0BnaWVnaWUvcmVzb2x2ZXInXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOltcbiAgICAgICAgR2llUmVzb2x2ZXIoKVxuICAgICAgXVxuICAgIH0pLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIEdpZVJlc29sdmVyKClcbiAgICAgIF1cbiAgICB9KVxuICBdLFxuICBcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdTLFNBQVMsb0JBQW9CO0FBQzdULE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG1CQUFtQjtBQUU1QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxXQUFVO0FBQUEsUUFDUixZQUFZO0FBQUEsTUFDZDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVztBQUFBLFFBQ1QsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBRUYsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
