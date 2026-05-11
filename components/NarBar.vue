<template>
  <div class="navbar">
    <div class="container flex items-center h-[60px]">
      <n-button text class="text-xl font-bold" @click="handelOpen('/')">小龙测试</n-button>
      <div class="menu">
        <div  v-for="(item, index) in menus" :key="index" class="menu-item"
        :class="{'menu-item-active' : (route.path == item.path)}"
        @click="handelOpen(item.path)">{{ item.name }} </div>
      </div>

      
      <n-button circle class="ml-auto mr-3">
        <template #icon>
          <n-icon size="20"><Search/></n-icon>
        </template>
      </n-button>
      <!-- <n-button sec>登录</n-button> -->
      <n-dropdown :options="options">
         <n-avatar
          round
          size="small"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </n-dropdown>
    </div>
  </div>
  <div class="w-[100%] h-[80px]"></div>
</template>
<script setup>
  import { Search } from '@vicons/ionicons5'
  const route = useRoute()
  const menus = [
    {
      name: '首页',
      path: '/'
    },
    {
      name: '考试',
      path: '/paper/1'
    },
    {
      name: '拼团',
      path: '/list/group/1'
    },
    {
      name: '秒杀',
      path: '/list/flashsale/2'
    },
    {
      name: '直播',
      path: '/list/live/3'
    },
    {
      name: '专栏',
      path: '/list/book/4'
    },
    {
      name: '电子书',
      path: '/list/column/5'
    },
    {
      name: '课程',
      path: '/list/course/6'
    },
    {
      name: '社区',
      path: '/bbs/0/1'
    },
  ]
    function handelOpen(path){
      navigateTo(path)
    }

  
  const options = [
    {
      label: '用户中心',
      key: 'conter'
    },
    {
      label: '退出登录',
      key: 'logout',
    }
  ]
</script>
<style>
.navbar{
  z-index: 1000;
   @apply bg-white fixed top-0 left-0 right-0 shadow-sm;
}
.menu{
  @apply flex items-center px-4;
}
.menu-item{
  transition: all 0.2s;
  cursor: pointer;
  @apply px-2 py-1 rounded hover:(bg-blue-50 text-blue-700) active:(bg-blue-100); 
}
.menu-item-active{
  @apply bg-blue-100 text-blue-600; 
}
</style>
