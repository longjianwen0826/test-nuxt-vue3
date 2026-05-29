<template>
  <div class="max-w-3xl mx-auto p-4 pb-16">
    <n-form 
      ref="formRef" 
      :model="form" 
      :rules="rules" 
      label-align="left"
      label-placement="left"
      >
      <n-form-item label="登录账号" path="userName">
        <n-input v-model:value="form.userName" placeholder="请输入账号"/>
      </n-form-item>
      <n-form-item label="登录密码" path="password">
        <n-input v-model:value="form.password" placeholder="请输入数字"/>
      </n-form-item>
      <n-form-item label="姓名" path="name">
        <n-input v-model:value="form.name" />
      </n-form-item>

      <n-form-item label="英文名" path="nameEn">
        <n-input v-model:value="form.nameEn" />
      </n-form-item>

      <!-- <n-form-item label="资源路径">
        <n-input v-model:value="form.ImageUrl" />
      </n-form-item> -->

      <n-form-item label="头像文件名">
        <n-input v-model:value="form.avatar" />
        <!-- <upload :imageurl="form.ImageUrl" :imageName="form.avatar"/> -->
      </n-form-item>

      <n-form-item label="年龄">
        <n-input-number v-model:value="form.age" />
      </n-form-item>

      <n-form-item label="身高">
        <n-input-number v-model:value="form.height" />
      </n-form-item>

      <n-form-item label="体重">
        <n-input-number v-model:value="form.weight" />
      </n-form-item>

      <n-form-item label="性格">
        <n-input type="textarea" v-model:value="form.character" />
      </n-form-item>

      <n-form-item label="描述">
        <n-input type="textarea" v-model:value="form.describe" />
      </n-form-item>

      <n-form-item label="爱好">
        <n-input v-model:value="hobbyStr" />
      </n-form-item>

      <!-- 动态经历 -->
      <div class="mt-4">
        <div class="flex justify-between mb-2">
          <h3 class="font-bold">过往经历</h3>
          <n-button size="small" type="primary" @click="addItem">+ 新增</n-button>
        </div>

        <div v-for="(item, i) in form.guoWang" :key="i" class="border p-4 rounded mb-3 relative">
          <n-input v-model:value="item.des" placeholder="描述" class="mb-2" />
          <n-input v-model:value="item.date" placeholder="日期" class="mb-2" />
          <n-input v-model:value="item.imageNameStr" placeholder="图片,视频" />
          <n-button type="error" size="tiny" class="absolute right-2 top-2" @click="delItem(i)">删除</n-button>
        </div>
      </div>

      <n-button type="primary" block @click="submit" :loading="loading">提交</n-button>
    </n-form>
  </div>
  <BackButton :back="true" :top="true"/>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'nuxt/app'
const router = useRouter()
const route = useRoute()

const formRef = ref()
const loading = ref(false)
const hobbyStr = ref('')

const form = reactive({
  id: null,
  userName: '',
  password: null,
  ImageUrl: '',
  avatar: '',
  name: '',
  nameEn: '',
  age: 0,
  height: 0,
  weight: 0,
  character: '',
  describe: '',
  hobby: [],
  guoWang: []
})

// 规则
const rules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  userName: [{ required: true, message: '请输入登录账号名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入登录密码（数字）', trigger: 'blur' }],
  nameEn: [{
    pattern: /^[a-z]+\.[a-z]+$/,
    message: '格式如：jianwen.long',
    trigger: 'blur'
  }]
}

// 回显数据
onMounted(async () => {
  if(route.params.id && route.params.id != 0){
    const res = await $fetch(`/api/friends/${route.params.id}`)
    Object.assign(form, res.data)
    hobbyStr.value = res.data.hobby ? res.data.hobby.join(',') : ''
    form.guoWang = res.data.guoWang.map(i => ({
      ...i,
      imageNameStr: i.imageName.join(',')
    }))
  }
})

const addItem = () => form.guoWang.push({ des: '', date: '', imageName: [], imageNameStr: '' })
const delItem = (i) => form.guoWang.splice(i, 1)

const submit = async () => {
  await formRef.value.validate()
  // 处理爱好
  form.hobby = hobbyStr.value.split(',').map(i => i.trim()).filter(Boolean)
  // 处理每个经历的图片名称数组
  if(form.guoWang && form.guoWang.length > 0){
    form.guoWang.forEach(item => {
      item.imageName = item.imageNameStr.split(',').map(i => i.trim()).filter(Boolean)
      delete item.imageNameStr
    })
  }

  loading.value = true
  try {
    if(route.params.id && route.params.id != 0){
      await $fetch('/api/friends/update', { method: 'POST', body: form })
      alert('修改成功！')
    }else{
      // 处理资源路径
      form.ImageUrl = form.nameEn  ? form.nameEn.split('.')[0] : '/img/'
      await $fetch('/api/friends/add', {method: 'POST',body: form})
      alert('新增成功！')
    }
    router.back()
  } catch (e) {
    alert('提交失败',e)
  } finally {
    loading.value = false
  }
}
</script>