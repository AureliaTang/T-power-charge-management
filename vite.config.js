import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    host: "0.0.0.0",
    port: 8080,
    proxy: {
      '^/server/.*': {
        target: 'https://www.tpterp.com/web/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/server/, ''),
      },
      '/api': {
        target: 'http://test.tpterp.com:8000/',
        changeOrigin: true,
        secure:false,
        rewrite: (path) => path.replace(/^\/api/, '')
    },
      '/text': {
          target: 'http://test.tpterp.com:8082/',
          changeOrigin: true,
          secure:false,
          rewrite: (path) => path.replace(/^\/text/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#27a43a',
          // 'primary-color': '#f61',
        },
        javascriptEnabled: true
      }
    }
  }
})
