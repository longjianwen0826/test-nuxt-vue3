<template>
  <div class="navbar">
    <div class="container flex items-center h-[60px]">
      <!-- <n-button text class="text-xl font-bold" @click="handelOpen('/')">小龙测试</n-button> -->
      <div class="menu">
        <div class="flex items-center justify-between h-16">
          <!-- 移动端汉堡按钮 -->
          <button class="md:hidden text-gray-700 text-xl mr-2" @click="menuOpen = !menuOpen">
            ☰
          </button>
          <!-- Logo -->
          <div class="text-xl font-bold text-primary mr-6" @click="handelOpen('/')">小龙测试</div>
          <!-- PC端菜单 -->
          <nav class="hidden md:flex items-center space-x-6">
            <NuxtLink :to="item.path" class="text-gray-700 hover:text-primary" 
              :class="{'menu-item-active' : (route.path == item.path)}"
              v-for="(item, index) in menus" :key="index">{{ item.name }}</NuxtLink>
          </nav>
        </div>
      </div>
        
      
      <n-button circle class="ml-auto mr-3">
        <template #icon>
          <n-icon size="20"><Search/></n-icon>
        </template>
      </n-button>
      <!-- 头像点击多功能选择 -->
      <n-dropdown :options="options">
         <n-avatar round size="small" :src="getImageUrl('avatar')"/>
      </n-dropdown>
      
      <!-- 移动端侧边菜单-->
      <n-drawer v-model:show="menuOpen" :width="200" placement="left">
        <div class="w-[100%] h-[100%] " style="display: flex;flex-direction: column;">
          <div v-for="(item, index) in menus" :key="index" 
            >
            <NuxtLink :to="item.path" class="text-gray-700 hover:text-primary w-[100%] h-[50px] flex items-center justify-center" @click="menuOpen = !menuOpen"
              :class="route.path == item.path ? 'tab_active' : ''">
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </n-drawer>
    </div>
  </div>
  <div class="w-[100%] h-[60px]"></div>
</template>
<script setup>
  import { Search } from '@vicons/ionicons5'
  import { getImageUrl } from "@/utils/image.ts"
  const route = useRoute()
  const menuOpen = ref(false)
  const menus = [
    {
      name: '首页',
      path: '/'
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
      name: '关于',
      path: '/bbs/0/1'
    },
    {
      name: '联系',
      path: '/paper/1'
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
<style scoped>
.navbar{
  z-index: 100;
  @apply bg-white fixed top-0 left-0 right-0 shadow-sm;
}
.menu{
  @apply flex items-center;
}
.menu-item{
  transition: all 0.2s;
  cursor: pointer;
  @apply px-2 py-1 rounded hover:(bg-blue-50 text-blue-700) active:(bg-blue-100); 
}
.menu-item-active{
  @apply bg-blue-100 text-blue-600; 
}
.mobile-menu-enter-from,
.mobile-menu-leave-to { max-height:0; opacity:0; }
.mobile-menu-enter-active,
.mobile-menu-leave-active { max-height:300px; opacity:1; transition:all 0.3s; }
.tab_active{
  background: #E5E7EB;
  font-weight: 600;
  color: #3E7EFE;
}
</style>
