import { CommonServerOptions, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import dotenv, { DotenvParseOutput } from 'dotenv'
import path from 'path'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })

export default defineConfig((mode) => {
  const envFileName: string = '.env'
  const curEnvFileName = envFileName + '.' + mode.mode

  let server: CommonServerOptions = {}
  const envData = fs.readFileSync(curEnvFileName)
  const envMap: DotenvParseOutput = dotenv.parse(envData)
  if (mode.mode === 'development') {
    server = {
      host: envMap.VITE_HOST,
      port: envMap.VITE_PORT,
      proxy: {
        [envMap.VITE_BASE_URL]: {
          target: envMap.VITE_PROXY_DOMAIN,
        },
      },
    }
  }

  return {
    plugins: [vue()],
    server,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
