import fs from 'fs'
import path from 'path'

// 直接在当前文件定义你的好友类型 👍
interface FriendInfo {
  id: number
  userName: string
  password: string
  ImageUrl: string
  avatar: string
  name: string          // 必填
  nameEn: string
  age: number
  height: number
  weight: number
  character: string
  describe: string
  hobby: string[]
  guoWang: {
    imageName: string[]
    des: string
    date: string
  }[]
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const data = body as FriendInfo

  // 后端强制校验：name 必须填
  if (!data.name) {
    return { code: 400, msg: "姓名 name 为必填项" }
  }

  const filePath = path.join(process.cwd(), "server/data/userList.json")
  let list: FriendInfo[] = []

  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf-8")
    list = JSON.parse(content) || []
  }

  // 新增（自动补全ID）
  list.push({
    ...data,
    id: Date.now(), // 自动生成唯一ID
  })

  fs.writeFileSync(filePath, JSON.stringify(list, null, 2))

  return { code: 200, msg: "添加好友成功！" }
})