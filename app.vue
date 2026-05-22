<template>
  <!-- <n-config-provider inline-theme-disabled>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </n-config-provider> -->
  <!-- 核心：水合完成前不显示页面 -->
  <n-config-provider inline-theme-disabled>
    <div v-if="isHydrated">
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </div>
    <div v-else class="loading"></div>
  </n-config-provider>
</template>
<script setup>
const isHydrated = ref(false)
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
