<template>
  <!-- <n-config-provider inline-theme-disabled>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </n-config-provider> -->
  <!-- 核心：水合完成前不显示页面 -->
  <n-config-provider inline-theme-disabled>
    <div v-if="isHydrated">
      <NuxtLayout v-if="!isLoginPage">
        <NuxtPage/>
      </NuxtLayout>
      <NuxtPage v-else/>
    </div>
    <div v-else class="loading"></div>
  </n-config-provider>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'nuxt/app'
const route = useRoute()
// 判断水合完成前不显示页面(避免页面闪一下不好看)
const isHydrated = ref(false)
onMounted(() => {
  isHydrated.value = true
})
// 判断当前是不是登录页
const isLoginPage = computed(() => {
  // 不包含在NuxtLayout组件内的白名单
  let whiteList = ['/login','/user']
  return whiteList.includes(route.path)
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
