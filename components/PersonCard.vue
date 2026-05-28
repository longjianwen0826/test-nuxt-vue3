<template>
  <!-- 整体页面 -->
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
    <!-- 顶部酷炫欢迎区域 -->
    <div class="w-full bg-gradient-to-r from-purple-400 text-white py-14 px-6">
      <div class="max-w-5xl mx-auto text-center">
        <h1 
          class="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-3 tracking-wide
                 animate-[fadeIn_1.5s_ease-in-out]"
        >
          🌟 欢迎来到 {{ person.name }} 的个人主页
        </h1>
        <p 
          class="text-[clamp(1rem,2vw,1.25rem)] opacity-90 animate-[fadeIn_1.8s_ease-in-out]"
        >
          记录生活 · 记录友情 · 记录搞笑瞬间
        </p>
      </div>
    </div>

    <!-- 个人信息卡片 -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <div
        class="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10
               hover:shadow-indigo-200/30 transition-all duration-500"
      >
        <!-- 头像 + 信息 -->
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <div
            class="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl
                   hover:rotate-6 hover:scale-105 transition-all duration-500"
          >
            <img
              :src="getImageUrl( person.avatar, person.ImageUrl)"
              :alt="person.name"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="flex-1 text-center md:text-left">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              {{ person.name }}
              <span class="text-lg text-gray-400 ml-2">{{ person.nameEn }}</span>
            </h2>

            <div class="flex flex-wrap gap-3 justify-center md:justify-start my-4">
              <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">身高 {{ person.height }}cm</span>
              <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">体重 {{ person.weight }}kg</span>
              <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                {{ person.age === 0 ? '年龄保密' : person.age + '岁' }}
              </span>
            </div>

            <p class="text-gray-600 mb-2"><b>性格：</b>{{ person.character }}</p>
            <p class="text-gray-600 mb-4"><b>简介：</b>{{ person.describe }}</p>

            <div>
              <b class="text-gray-700">爱好：</b>
              <div class="flex flex-wrap gap-2 mt-2">
                <span
                  v-for="(h, i) in person.hobby"
                  :key="i"
                  class="px-2 py-1 bg-orange-100 text-orange-600 rounded-md text-sm"
                >
                  {{ h }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 过往经历 -->
      <div class="mt-14">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-8">
          📸 生活瞬间 & 搞笑经历
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(item, idx) in person.guoWang"
            :key="idx"
            class="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition-all"
          >
            <!-- 轮播：图片 + 视频 混合自动判断 -->
            <n-carousel
              v-if="item.imageName.length"
              :touchable="item.imageName.length>=2"
              class="w-full h-52 md:h-64 rounded-xl overflow-hidden mb-4"
              :autoplay="false"
              loop
              show-arrows="hover"
            >
              <n-carousel-item v-for="(imgName, i) in item.imageName" :key="i">
                <!-- 视频 -->
                <video
                  v-if="imgName.endsWith('.mp4')"
                  :src="getImageUrl(imgName, person.ImageUrl)"
                  controls
                  controlslist="nodownload nofullscreen noremoteplayback"
                  disablepictureinpicture
                  class="w-full h-full object-contain bg-black"
                />

                <!-- 图片 + 点击预览 -->
                <img
                  v-else
                  :src="getImageUrl(imgName, person.ImageUrl)"
                  :alt="imgName"
                  class="w-full h-full object-cover cursor-pointer"
                  @click="previewImage(getImageUrl(imgName, person.ImageUrl))"
                />
              </n-carousel-item>
            </n-carousel>

            <p class="text-gray-700 font-medium text-lg">{{ item.des }}</p>
            <p class="text-gray-400 text-sm mt-1">{{ item.date }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 图片预览组件 -->
    <n-image-preview v-model:visible="previewVisible" :src="previewSrc" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getImageUrl } from "@/utils/image"

// props 接收
const props = defineProps({
  person: {
    type: Object,
    required: true
  }
})

// 图片预览
const previewVisible = ref(false)
const previewSrc = ref('')

const previewImage = (url) => {
  previewSrc.value = url
  console.log("url===========",url)
  previewVisible.value = true
}
</script>

<style windi>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>