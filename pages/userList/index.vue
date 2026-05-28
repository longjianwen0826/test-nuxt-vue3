<template>
  <div class="max-w-5xl mx-auto p-6">
      <!-- 好友列表 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <div
          v-for="item in list"
          :key="item.id"
          class="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition"
          @click="goEdit(item.id)"
        >
          <!-- 头像 -->
          <div class="w-14 h-14 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
            <img
              v-if="item.ImageUrl && item.avatar"
              :src="`${item.ImageUrl}${item.avatar}`"
              :alt="item.name"
              class="w-full h-full object-cover"
            />
            <div v-else class="w-full h-full flex items-center justify-center text-lg font-bold">
              {{ item.name.substring(0, 1) }}
            </div>
          </div>

          <!-- 姓名 -->
          <div class="flex-1">
            <div class="text-lg font-semibold">{{ item.name }}</div>
            <div class="text-sm text-gray-400">{{ item.nameEn }}</div>
          </div>

          <!-- 编辑按钮 -->
          <n-button size="small" type="primary" ghost @click.stop="goEdit(item.id)">
            编辑
          </n-button>
        </div>
      </div>

      <!-- 空状态 -->
      <div v-if="list.length === 0" class="py-10 text-center text-gray-400">
        暂无好友，快去添加吧～
      </div>
  </div>
  <BackButton :back="true" :top="true" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
const router = useRouter()

// 好友列表
const list = ref([])

// 获取列表
onMounted(async () => {
  const res = await $fetch('/api/friends')
  list.value = res.data || []
})

// 去编辑页面
const goEdit = (id) => {
  router.push(`/user/${id}`)
}
</script>