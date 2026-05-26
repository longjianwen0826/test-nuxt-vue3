// 工具函数1：获取本地项目动态图片路径(路径是public下的)
export const getImageUrl = (name: string, prefix = '/img/') => {
  return new URL(`${prefix}${name}`, import.meta.url).href
}

// 腾讯云存储桶cos路径前缀
export const httptsCos = 'https://static-1316305867.cos.ap-guangzhou.myqcloud.com/'
