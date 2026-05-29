import { defineEventHandler, readMultipartFormData, createError } from 'h3'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

// 允许格式
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']

export default defineEventHandler(async (event) => {
  const {formData, imageUrl} = await readBody(event)
  // 上传目录：public/img
  const UPLOAD_DIR = path.resolve(`public${imageUrl}`)
  // 1. 确保目录存在
  await mkdir(UPLOAD_DIR, { recursive: true })

  // 2. 读取上传文件
  const parts = await readMultipartFormData(formData)
  const file = parts?.[0]
  if (!file) throw createError({ statusCode: 400, message: '无文件' })
  if (!ALLOWED_TYPES.includes(file.type || '')) {
    throw createError({ statusCode: 400, message: '只允许 jpg/png/webp' })
  }

  // 3. 生成安全文件名（时间戳+原名）
  const ext = path.extname(file.filename as string)
  const name = `${Date.now()}-${file.filename.replace(ext, '')}${ext}`
  const filePath = path.join(UPLOAD_DIR, name)

  // 4. 写入 public/img
  await writeFile(filePath, file.data)

  // 5. 返回访问路径（前端直接用）
  return {
    code: 200,
    url: `${imageUrl}/${name}` // 直接能访问：http://xxx/img/xxx.jpg
  }
})