declare module 'vue' {
    export interface GlobalComponents {
      DxQueryForm: typeof import('./index')['DxQueryForm'];
      DxEditor: typeof import('./index')['DxEditor'];
    }
}

export {};