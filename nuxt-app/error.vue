<template>
  <div class="pt-[80]">
    <n-result
      status="500"
      title="500 服务器错误"
      :description="error.messsage"
    >
      <template #footer>
        <n-button @click="goHome">返回首页</n-button>
      </template>
    </n-result>
  </div>
</template>
<script setup>
defineProps({
    error: Object
})
const goHome = () => clearError({redirect: '/'})
</script>