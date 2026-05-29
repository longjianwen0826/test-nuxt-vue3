<template>
  <!-- <n-config-provider inline-theme-disabled>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </n-config-provider> -->
  <!-- 核心：水合完成前不显示页面 -->
  <n-config-provider inline-theme-disabled>
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>

          <div v-if="isHydrated">
            <NuxtLayout v-if="!isLoginPage">
              <NuxtPage/>
            </NuxtLayout>
            <NuxtPage v-else/>
          </div>
          <div v-else class="loading"></div>
      
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>
<script setup>
import {
  NMessageProvider,
  NNotificationProvider,
  NDialogProvider
} from 'naive-ui'
const route = useRoute()

const isHydrated = ref(false)
// 判断当前是不是需要头部底部
const isLoginPage = computed(() => {
  // 不包含在NuxtLayout组件内的白名单
  let whiteList = ['/login','/user']
  let isTrue = false
  for (let i = 0; i < whiteList.length; i++) {
    if(route.path.includes(whiteList[i]))  {
      isTrue = true
      break
    }
  }
  return isTrue
})
onMounted(() => {
  isHydrated.value = true
})
</script>
<style scoped>
/* 加载占位，挡住乱的布局 */
.loading {
  position: fixed;
  inset: 0;
  background: rgba(243, 244, 246, var(--tw-bg-opacity));
  z-index: 9999;
}
</style>
<style>
/* 万能隐藏滚动条 */
html{
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
html::-webkit-scrollbar {
  display: none;
}
</style>
