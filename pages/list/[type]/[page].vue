<template>
  <!-- 传入你的数据 -->
  <PersonCard :person="userInfo" />
</template>
<script setup >
  const route = useRoute()
  const userInfo = reactive({})
  const res = await $fetch(`/api/friends/${route.params.page}`)
  Object.assign(userInfo, res.data)
</script>
