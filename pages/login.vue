<template>
  <div class="login-page">
    <div class="login-card">
      <h2 class="logo">六人组 · 我们的网站</h2>

      <n-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-placement="left"
        label-width="auto"
        require-mark-placement="left"
        class="login-form"
      >
        <n-form-item label="账号：" path="userName">
          <n-input
            v-model:value="form.userName"
            placeholder="请输入账号"
            size="large"
          />
        </n-form-item>

        <n-form-item label="密码：" path="password">
          <n-input
            v-model:value="form.password"
            type="password"
            placeholder="请输入密码"
            size="large"
            show-password-on="mousedown"
          />
            <div class="is_checked">
                <n-checkbox v-model:checked="isChecked">记住账号密码</n-checkbox>
            </div>
        </n-form-item>

        <div class="btn-box">
          <n-button
            type="primary"
            size="large"
            block
            @click="login"
          >
            登 录
          </n-button>
        </div>
      </n-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'nuxt/app'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

// import { useMessage } from 'naive-ui'

const router = useRouter()
// const message = useMessage()
const formRef = ref(null)
const isChecked = ref(false)
const form = reactive({
  userName: '',
  password: ''
})
const rules = {
  userName: {
    required: true,
    message: '请输入你的狗名😯',
    trigger: ['input']
  },
  password: {
    required: true,
    message: '请输入相同的小秘',
    trigger: ['input']
  }
}

// 获取登录是否记住密码
const getCheckedFUn = () => {
    if(userStore.checkedInfo){
        isChecked.value = userStore.checkedInfo.isChecked
        form.userName = userStore.checkedInfo.userName
        form.password = userStore.checkedInfo.password
    }else{
        isChecked.value = false
    }
}
// 登录是否记住密码
const setCheckedFUn = () => {
    let info = null
    if(isChecked.value){
        info = {
            isChecked: true,
            userName: form.userName,
            password: form.password
        }
    }
    return info
}


// 登录逻辑
const login = () => {
  formRef.value?.validate( async (errors) => {
    if (!errors) {
        try {
          const res = await $fetch('/api/login', {
            method: 'POST',
            body: form
          })
          if (res.code === 200) {
            // 模拟登录成功(保存信息)
            userStore.login(res.data)
            userStore.updateCheckedInfo(setCheckedFUn())
            //  message.success('登录成功')
            router.push('/') // 跳首页
          } else {
            console.log(res.msg)
          }
        } catch (e) {
          console.log("请求失败")
        }
    }
    else {
        console.log("请输入你的狗名和密码")
        // message.warning('请输入你的狗名和密码')
    }
  })
}

onMounted(() => {
    getCheckedFUn()
})
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 30%, #ec4899 100%);
  padding: 20px;
}

.login-card {
  width: 100%;
  max-width: 420px;
  background: #fff;
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.logo {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  background: linear-gradient(90deg, #4f46e5, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.btn-box {
  margin-top: 10px;
}
.is_checked{
    position: absolute;
    right: 0;
    bottom: -100%;
}
</style>