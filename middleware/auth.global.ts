// middleware/auth.global.ts
// = Nuxt3 全局路由守卫
// = 所有页面切换都会自动检查是否登录
// = 没登录 → 自动跳回登录页
import { useUserStore } from '@/stores/user'

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore()
  // 白名单
  const whiteList = ['/login']

  // 登录页直接放行
  if (whiteList.includes(to.path)) {
    return
  }

  // 🔥 关键：服务端直接跳过校验，不拦截！
  if (import.meta.server) {
    return
  }

  // 未登录 → 跳登录
  if (!userStore.userInfo) {
    return navigateTo('/login')
  }
})