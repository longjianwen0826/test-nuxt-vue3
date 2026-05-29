<template>
  <div>
    <input type="file" accept="image/*" @change="handleUpload" />
    <img v-if="imgUrl" :src="imgUrl" style="width:200px" />
  </div>
</template>

<script setup>
// props 接收
const props = defineProps({
  // 是否展示返回按钮
  imageurl: {
    type: String,
    default: '/img'
  },
  imageName: {
    type: String,
    default: ''
  },
})
const imgUrl = ref('')

const handleUpload = async (e) => {
  const file = e.target.files[0]
  if (!file) return
  const formData = new FormData()
  formData.append('file', file)

  const res = await $fetch('/api/upload', {
    method: 'POST',
    body: {formData,imageurl: this.imageurl}
  })
  if (res.code === 200) {
    imgUrl.value = res.url // 直接 /img/xxx.jpg
  }
}
</script>