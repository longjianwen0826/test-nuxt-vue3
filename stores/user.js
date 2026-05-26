import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  // ✅ SSR 安全：只在客户端持久化，服务端不碰 localStorage
  persist: {
    enabled: !import.meta.server, // 服务端关闭持久化
    key: 'user-store'
  },

  state: () => ({
    userInfo: null,         // 用户信息
    checkedInfo: null,       // 登录状态()
  }),
  actions: {
    // 登录
    login(user) {
      this.userInfo = user
    },
    // 退出
    logout() {
      this.userInfo = null
    },
    updateCheckedInfo(info){
      this.checkedInfo = info
    },
  }
})