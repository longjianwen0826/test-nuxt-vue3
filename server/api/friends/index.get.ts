import fs from 'fs'
import path from 'path'
import { getImageUrl } from "@/utils/image"

export default defineEventHandler(() => {
  const filePath = path.join(process.cwd(), 'server/data/userList.json')

  if (!fs.existsSync(filePath)) {
    return { code: 200, data: [] }
  }

  try {
    let data = fs.readFileSync(filePath, 'utf-8')
    let list  = JSON.parse(data) || []
    // if(list && list.length > 0){
    //     list.forEach( (item: any) => {
    //         item.avatar = getImageUrl(item.avatar, item.ImageUrl)
    //         if(item.guoWang && item.guoWang.length > 0){
    //             item.guoWang.forEach( ( guo: any) => {
    //                 if(guo.imageName && guo.imageName.length > 0){
    //                     guo.imageName.array.forEach( (name: string) => {
    //                         name = getImageUrl(name, item.ImageUrl)
    //                     });
    //                 }
    //             })
    //         }
    //     });
    // }
    return { code: 200, data: list }
  } catch (err) {
    return { code: 200, data: [] }
  }
})