/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 接口合并
interface ImportMetaEnv {
  VITE_USERNAME: string,
  VITE_AGE: number
}