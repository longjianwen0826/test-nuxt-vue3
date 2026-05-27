<template>
    <section class="py-16">
      <div class="container">
        <h1 class="text-3xl font-bold mb-8">关于我们</h1>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p class="text-gray-600 mb-4">我们是一组每个人性格各不相同，有人豪爽仗义、遇事永远冲在前面，靠谱又护短；有人温柔细心、心思细腻，有人装逼；爱端着高大上的样子，有人说话不合逻辑牛头不对马嘴的，总之是各种奇离古怪的六人组</p>
            <p class="text-gray-600 mb-4">是最爱互怼的损友，也可能（这是重点））是最靠谱的后盾。</p>
            <p class="text-gray-600">愿我们岁岁年年，吵不散、拆不开，这份从小攒下的友情，纯粹且长久，岁岁相伴，岁岁如初。</p>
          </div>
          <div class="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <img :src="getImageUrl('14.png','/img/utils/')" class="w-[100%] h-[100%] "/>
          </div>
        </div>
          <MediaGallery />
      </div>
    </section>
    <BackButton :back="false" :top="true" :bottom="107"/>
</template>
<script setup>
import { getImageUrl } from "@/utils/image.ts"
// 匹配 public/img/utils 下所有文件
// const files = import.meta.glob('/public/img/utils/*', { eager: true })

// // 提取文件名并过滤 图片/视频
// const mediaList = Object.keys(files)
//   .map(path => path.replace('/public', '')) // 变成 /img/utils/xxx.jpg
//   .filter(path => /\.(jpg|jpeg|png|gif|mp4|webm)$/i.test(path))

// console.log('媒体列表：', mediaList)
</script>
