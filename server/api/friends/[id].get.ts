import fs from 'fs'
import path from 'path'

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  const filePath = path.join(process.cwd(), 'server/data/userList.json')

  if (!fs.existsSync(filePath)) {
    return { code: 404, msg: '无数据' }
  }

  const list = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  const item = list.find(i => i.id == id)

  if (!item) return { code: 404, msg: '好友不存在' }
  return { code: 200, data: item }
})