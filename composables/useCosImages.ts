import { httptsCos } from "@/utils/image"
export const useCosImages = () => {
  const cosBase = ref(httptsCos+'img/utils')

  const fileList = ref<string[]>([])
  const imageList = ref<string[]>([])

  // 获取文件夹所有文件
  const loadCosFiles = async () => {
    try {
      const res = await fetch(`${cosBase.value}/files.json`)
      const list = await res.json()
      fileList.value = list || []

      // 自动拼接成完整 URL
      imageList.value = fileList.value.map(
        (f) => `${cosBase.value}/${f}`
      )
    } catch (err) {
      console.error('获取COS文件失败', err)
    }
  }

  return {
    cosBase,
    fileList,
    imageList,
    loadCosFiles
  }
}