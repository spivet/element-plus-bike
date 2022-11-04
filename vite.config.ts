import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './packages/index.ts'),
      formats: ['es', 'cjs'],
      // name: 'arco-design-dx',
      // fileName: 'index',
    },
    target: 'modules',
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      input: [path.resolve(__dirname, './packages/index.ts')],
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: [
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'packages',
        },
        {
          format: 'commonjs',
          dir: 'lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'packages',
        },
      ],
    },    
  }
})
