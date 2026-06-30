import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { load as yamlLoad } from 'js-yaml'

function yamlPlugin() {
  return {
    name: 'vite-plugin-yaml',
    transform(code, id) {
      if (!id.endsWith('.yaml') && !id.endsWith('.yml')) return null
      const parsed = yamlLoad(code)
      return {
        code: `export default ${JSON.stringify(parsed)}`,
        map: null,
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), yamlPlugin()],
})
