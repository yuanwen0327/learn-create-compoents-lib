declare module 'vue' {
  export interface GlobalComponents {
    GieInput: typeof import('@giegie/components')['GieInput']
  }

  interface ComponentCustomProperties {
  }
}

export {}
