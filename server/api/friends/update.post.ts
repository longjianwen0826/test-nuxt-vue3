import fs from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { id, ...data } = body

  if (!id) return { code: 400, msg: '缺少ID' }
  if (!data.name) return { code: 400, msg: '姓名不能为空' }

  const filePath = path.join(process.cwd(), 'server/data/userList.json')
  const list = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

  const index = list.findIndex(i => i.id == id)
  if (index === -1) return { code: 404, msg: '好友不存在' }

  list[index] = { ...list[index], ...data, id }
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2))

  return { code: 200, msg: '更新成功' }
})