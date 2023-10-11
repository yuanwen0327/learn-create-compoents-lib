declare module 'vue' {
  export interface GlobalComponents {
    GieInput: typeof import('@giegie/components')['GieInput']
    GieRichtext: typeof import('@giegie/components')['GieRichtext']
  }

  interface ComponentCustomProperties {
  }
}

export {}
