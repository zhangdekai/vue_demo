/// <reference types="vite/client" />


/// 问题： 找不到模块“@/views/HomeView.vue”或其相应的类型声明
/*

出现这个问题的原因就是：ts只支持导出导入模块，但是vue不是模块，我们需要申明一下vue是个模块，你ts可以导入

问题解决方法：在 typings 目录下有 env.d.ts 文件，在文件中加上即可。

link： https://blog.csdn.net/qq_36410795/article/details/139123653
*/

// declare module '*.vue' {
//     import type { DefineComponent } from 'vue'
//     const component: DefineComponent<{}, {}, any>
//     export default component
//  }
//  或者
declare module '*.vue' { // 将*.vue文件声明为一个模块
    import type { DefineComponent } from 'vue'
    const component: ComponentOptions | ComponentOptions['setup']
    export default component
}
