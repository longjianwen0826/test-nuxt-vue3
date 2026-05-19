<template>
  <section class="py-16 bg-gray-50">
    <div class="container">
      <h1 class="text-3xl font-bold mb-8">{{ pageTitle }}</h1>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(item, i) in pageList" :key="i" class="bg-white p-4 rounded-lg shadow-sm">
          <div class="bg-gray-200 h-40 rounded mb-4">
            <img :src="getImageUrl(i+1)" class="w-[100%] h-[100%]"/>
          </div>
          <h3 class="font-semibold text-lg mb-2">{{ item.name }}</h3>
          <p class="text-gray-600 text-sm mb-3">{{ item.mes }}</p>
          <button class="btn-primary text-sm">查看详情</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup >
import { getImageUrl } from "@/utils/image.ts"
const route = useRoute()
const img = new URL('@/assets/img/1.png', import.meta.url).href
const dataList = reactive([
  {
    id: 1,
    title: '拼团产品',
    list: [
      {name: '这是拼团产品1',img:  '@/assets/img/1',mes: '这是拼团产品1的描述'},
      {name: '这是拼团产品2',img: '@/assets/img/2',mes: '这是拼团产品2的描述'},
      {name: '这是拼团产品3',img: '@/assets/img/3',mes: '这是拼团产品3的描述'},
      {name: '这是拼团产品4',img: '@/assets/img/4',mes: '这是拼团产品4的描述'},
      {name: '这是拼团产品5',img: '@/assets/img/5',mes: '这是拼团产品5的描述'},
      {name: '这是拼团产品6',img: '@/assets/img/6',mes: '这是拼团产品6的描述'},
    ]
  },
  {
    id: 2,
    title: '秒杀产品',
    list: [
      {name: '这是秒杀产品1',img: '@/assets/img/1',mes: '这是秒杀产品1的描述'},
      {name: '这是秒杀产品2',img: '@/assets/img/2',mes: '这是秒杀产品2的描述'},
      {name: '这是秒杀产品3',img: '@/assets/img/3',mes: '这是秒杀产品3的描述'},
      {name: '这是秒杀产品4',img: '@/assets/img/4',mes: '这是秒杀产品4的描述'},
      {name: '这是秒杀产品5',img: '@/assets/img/5',mes: '这是秒杀产品5的描述'},
      {name: '这是秒杀产品6',img: '@/assets/img/6',mes: '这是秒杀产品6的描述'},
    ]
  },
  {
    id: 3,
    title: '直播产品',
    list: [
      {name: '这是直播产品1',img: '@/assets/img/1',mes: '这是直播产品1的描述'},
      {name: '这是直播产品2',img: '@/assets/img/2',mes: '这是直播产品2的描述'},
      {name: '这是直播产品3',img: '@/assets/img/3',mes: '这是直播产品3的描述'},
      {name: '这是直播产品4',img: '@/assets/img/4',mes: '这是直播产品4的描述'},
      {name: '这是直播产品5',img: '@/assets/img/5',mes: '这是直播产品5的描述'},
      {name: '这是直播产品6',img: '@/assets/img/6',mes: '这是直播产品6的描述'},
    ]
  },
  {
    id: 4,
    title: '专栏产品',
    list: [
      {name: '这是专栏产品1',img: '@/assets/img/1',mes: '这是专栏产品1的描述'},
      {name: '这是专栏产品2',img: '@/assets/img/2',mes: '这是专栏产品2的描述'},
      {name: '这是专栏产品3',img: '@/assets/img/3',mes: '这是专栏产品3的描述'},
      {name: '这是专栏产品4',img: '@/assets/img/4',mes: '这是专栏产品4的描述'},
      {name: '这是专栏产品5',img: '@/assets/img/5',mes: '这是专栏产品5的描述'},
      {name: '这是专栏产品6',img: '@/assets/img/6',mes: '这是专栏产品6的描述'},
    ]
  },
  {
    id: 5,
    title: '电子书产品',
    list: [
      {name: '这是电子书产品1',img: '@/assets/img/1',mes: '这是电子书产品1的描述'},
      {name: '这是电子书产品2',img: '@/assets/img/2',mes: '这是电子书产品2的描述'},
      {name: '这是电子书产品3',img: '@/assets/img/3',mes: '这是电子书产品3的描述'},
      {name: '这是电子书产品4',img: '@/assets/img/4',mes: '这是电子书产品4的描述'},
      {name: '这是电子书产品5',img: '@/assets/img/5',mes: '这是电子书产品5的描述'},
      {name: '这是电子书产品6',img: '@/assets/img/6',mes: '这是电子书产品6的描述'},
    ]
  },
  {
    id: 6,
    title: '课程产品',
    list: [
      {name: '这是课程产品1',img: '@/assets/img/1',mes: '这是课程产品1的描述'},
      {name: '这是课程产品2',img: '@/assets/img/2',mes: '这是课程产品2的描述'},
      {name: '这是课程产品3',img: '@/assets/img/3',mes: '这是课程产品3的描述'},
      {name: '这是课程产品4',img: '@/assets/img/4',mes: '这是课程产品4的描述'},
      {name: '这是课程产品5',img: '@/assets/img/5',mes: '这是课程产品5的描述'},
      {name: '这是课程产品6',img: '@/assets/img/6',mes: '这是课程产品6的描述'},
    ]
  },
])
const pageTitle = dataList[route.params.page-1].title
const pageList = reactive(dataList[route.params.page-1].list)
</script>
