// 工具函数1：获取本地项目动态图片路径(路径是public下的)
export const getImageUrl = (name: string, prefix = '/img/') => {
  return new URL(`${prefix}${name}`, import.meta.url).href
}

// 工具函数1：获取本地项目动态图片路径(路径是public下的)
export const getPrefixUrl = (prefix = '/img/') => {
  return new URL(`${prefix}`, import.meta.url).href
}

