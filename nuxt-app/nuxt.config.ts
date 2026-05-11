import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    components: true,
    // modules: ['@nuxt/eslint'],
    css:[
        "@/assets/main.css"
    ],
    build: {
        // 配置构建选项
    },
    modules: [
       '@nuxt/eslint', 'nuxt-windicss' // 配置使用的 Nuxt.js 模块
    ],
    plugins: [
        // 配置使用的插件
    ],
    router: {
        // 配置路由选项
    },
    vite: {
        plugins: [
            Components({
                resolvers: [NaiveUiResolver()] // 自动注册 components 目录下的组件
            })
        ],
        
        ssr: {
            noExternal: [
                'moment',
                'naive-ui',
                '@juggle/resize-observer',
                '@css-render/vue3-ssr'
            ]
        },
        envDir: '~/env', // 指定环境变量目录
        optimizeDeps: {
            include: ['@vicons/ionicons5']
        }
    }
})