<template>
    <section class="py-16">
      <div class="container">
        <h1 class="text-3xl font-bold mb-8">关于我们</h1>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p class="text-gray-600 mb-4">我们是一家专注于企业数字化服务的高科技公司，成立于2016年，总部位于广州。</p>
            <p class="text-gray-600 mb-4">公司致力于为客户提供高效、稳定、安全的行业解决方案，已服务超过1000家企业客户。</p>
            <p class="text-gray-600">我们坚持“客户第一、创新驱动、专业专注、合作共赢”的核心价值观。</p>
          </div>
          <div class="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <img :src="getImageUrl('14.png','/img/utils/')" class="w-[100%] h-[100%] "/>
          </div>
        </div>
      </div>
    </section>
</template>
<script setup>
import { getImageUrl } from "@/utils/image.ts"
// const { imageList, loadCosFiles } = useCosImages()

// onMounted(async () => {
//   await loadCosFiles()
//   console.log('COS 文件夹所有图片：', imageList.value)
// })
</script>
