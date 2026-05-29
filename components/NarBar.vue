<template>
  <div class="navbar">
    <div class="container flex items-center h-[60px]">
      <!-- <n-button text class="text-xl font-bold" @click="handelOpen('/')">小龙测试</n-button> -->
      <div class="menu">
        <div class="flex items-center justify-between h-16">
          <!-- 移动端汉堡按钮 -->
          <button class="md:hidden text-xl mr-2" @click="menuOpen = !menuOpen">
            ☰
          </button>
          <!-- Logo -->
          <div class="text-xl font-bold text-primary mr-6" @click="handelOpen('/')">小龙测试</div>
          <!-- PC端菜单 -->
          <nav class="hidden md:flex items-center space-x-6">
            <NuxtLink :to="item.path" class="nav_link"
              :class="{'menu-item-active' : (route.path == item.path)}"
              v-for="(item, index) in menus" :key="index">{{ item.name }}</NuxtLink>
          </nav>
        </div>
      </div>
        
      
      <!-- 头像点击多功能选择 -->
      <n-dropdown :options="options" @select="handleSelect">
         <n-avatar round size="small" :src="getImageUrl(userStore.userInfo.avatar, userStore.userInfo.ImageUrl)" alt="头像" class="ml-auto"/>
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
  import { ref, onMounted, onUnmounted } from 'vue'
  import { getImageUrl } from "@/utils/image"
  import { userInfo } from "@/utils/userMessage"
  import { useRouter } from 'nuxt/app'
  import { useUserStore } from '@/stores/user'
  const userStore = useUserStore()
  const router = useRouter()
  const route = useRoute()
  const menuOpen = ref(false)
  // 固定路由信息
  const menus = reactive([{
      name: '首页',
      path: '/'
    },
    {
      name: '关于',
      path: '/bbs/0/1'
    },
    // {
    //   name: '联系',
    //   path: '/paper/1'
    // },
  ])
  // 头像选择选项
  const options = reactive([
    {
      label: '用户中心',
      key: 'conter',
    },
    {
      label: '退出登录',
      key: 'logout',
    }
  ])
  // 处理路由信息和选择选项信息
  const updateDataFun = async () =>{
    const res = await $fetch('/api/friends')
    if(res.data && res.data.length > 0){
      let routeList = []
      res.data.forEach( (item) => {
        routeList.push(
          {
            name: item.name,
            path: `/list/live/${item.id}`
          }
        )
      })
      menus.splice(1,0,...routeList)
    }

    if(userStore.userInfo.name == '龙建文'){
      options.splice(1,0,{
        label: '用户管理',
        key: 'userList'
      })
    }else{
      options.splice(1,0,{
        label: '用户修改',
        key: 'user'
      })
    }
  }

  function handelOpen(path){
    navigateTo(path)
  }

  const handleSelect =  (key) => {
    if(key == 'logout') {
      userStore.logout()
      router.push('/login')
    }else if(key == 'userList'){
      router.push('/userList')
    }else if(key == 'user'){
      router.push(`/user/${userStore.userInfo.id}`)
    }else{
      router.push('/userInfo')
    }
  }
  onMounted(() => {
    updateDataFun()
  })
</script>
<style scoped>
.navbar{
  z-index: 100;
  @apply fixed top-0 left-0 right-0 shadow-sm;
  background: var( --bg-color);
  color: var(--text-color);
}
.menu{
  @apply flex items-center;
}
.menu-item{
  transition: all 0.2s;
  cursor: pointer;
  @apply px-2 py-1 rounded hover:(bg-blue-50 text-blue-700) active:(bg-blue-100); 
}
.mobile-menu-enter-from,
.mobile-menu-leave-to { max-height:0; opacity:0; }
.mobile-menu-enter-active,
.mobile-menu-leave-active { max-height:300px; opacity:1; transition:all 0.3s; }
.tab_active{
  background: var( --bg-color);
  font-weight: 600;
  color: var(--text-color-active);
}
.nav_link{
  color: var(--text-color);
}
.menu-item-active{
  color: var(--text-color-active);
}
</style>
