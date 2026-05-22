// 工具函数1：获取动态图片路径(路径是public下的assets)
export const getImageUrl = (name: string, prefix = '/img/') => {
  return new URL(`${prefix}${name}`, import.meta.url).href
}