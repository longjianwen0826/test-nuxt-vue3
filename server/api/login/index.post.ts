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
  try {
    // 1. 获取前端传的登录参数：userName + password
    const body = await readBody(event)
    const { userName, password } = body

    // 2. 校验必填
    if (!userName || !password) {
      return {
        code: 400,
        msg: '姓名和ID不能为空',
        data: null
      }
    }

    // 3. 读取用户列表文件
    const filePath = path.join(process.cwd(), 'server/data/userList.json')
    if (!fs.existsSync(filePath)) {
      return {
        code: 404,
        msg: '暂无用户数据',
        data: null
      }
    }

    const userList: FriendInfo[] = JSON.parse(fs.readFileSync(filePath, 'utf-8')) || []

    // 4. 查找用户：userName 和 id 都匹配才算登录成功
    const findUser = userList.find(user => 
      user.userName === userName && user.password === password
    )

    if (!findUser) {
      return {
        code: 401,
        msg: '账号或密码不正确',
        data: null
      }
    }

    // 5. 登录成功 → 返回用户信息
    return {
      code: 200,
      msg: '登录成功',
      data: findUser
    }

  } catch (err) {
    return {
      code: 500,
      msg: '服务器异常',
        data: null
    }
  }
})