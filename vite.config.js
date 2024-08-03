import vue from '@vitejs/plugin-vue'
import vike from 'vike/plugin'

export default {
  plugins: [vue(), vike()],
  build: {
    outDir: "compute/default",
    emptyOutDir: false
  }
}
