<template>
  <!-- 传入你的数据 -->
  <PersonCard :person="userInfo[indexValue]" />
</template>
<script setup >
  import { userInfo } from "@/utils/userMessage"
  const route = useRoute()
  const indexValue = parseInt(route.params.page)-1
</script>
