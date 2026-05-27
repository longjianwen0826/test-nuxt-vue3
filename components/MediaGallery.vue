<template>
  <div class="media-gallery" v-if="mediaList && mediaList.length > 0">
    <div class="grid">
      <div
        v-for="item in mediaList"
        :key="item.src"
        class="card"
      >
        <!-- 图片 -->
        <n-image
          v-if="item.type === 'image'"
          :src="item.src"
          :alt="item.name"
          class="media"
        />
        <!-- 视频 -->
        <video
          v-else-if="item.type === 'video'"
          controls
          class="media"
        >
          <source :src="item.src" />
        </video>
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getImageUrl } from "@/utils/image.ts"
// 1. 扫描 public/img/utils/ 下所有文件（构建时）
const files = import.meta.glob('/public/img/utils/*', { eager: true })

// 2. 过滤图片/视频，生成列表
const mediaList = Object.keys(files)
  .map(path => {
    const src = path.replace('/public', '') // /img/utils/xxx.jpg
    const name = src.split('/').pop() || ''
    const ext = name.split('.').pop()?.toLowerCase() || ''
    const type = ['jpg','jpeg','png','gif','webp'].includes(ext)
      ? 'image'
      : ['mp4','webm','ogg'].includes(ext)
        ? 'video'
        : null
    return { src, name, type }
  })
  .filter(item => item.type) // 只保留图片/视频
  // ✅ 关键：这里按文件名字母排序
  .sort((a, b) => a.name.localeCompare(b.name, 'zh-CN', { numeric: true }))

console.log('媒体列表：', mediaList)
</script>

<style scoped>
.media-gallery {
  width: 100%;
  padding: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
}

.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
}

.media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1B1B1B;
}
.name {
  /* padding: 0.5rem;
  font-size: 12px;
  color: #333;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 8px 10px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>