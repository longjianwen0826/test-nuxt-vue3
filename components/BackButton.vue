<template>
  <div class="back_button_bac" :style="{ bottom: bottom+'px' }">
    <!-- 悬浮渐变浮动返回顶部按钮 -->
    <div class="back_but back_top" @click="backToTop" ref="backTopBtn" v-if="top">↑</div>
    <!-- 悬浮渐变浮动返回上一页按钮 -->
    <div class="back_but back_bac" @click="backTo" v-if="back">返回</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'nuxt/app'
const router = useRouter()
// props 接收
const props = defineProps({
  // 是否展示返回按钮
  back: {
    type: Boolean,
    default: false
  },
  // 是否展示返回顶部按钮
  top: {
    type: Boolean,
    default: false
  },
  // 自定义底部距离
  bottom: {
    type: Number,
    default: 26
  }
})
// 返回顶部
const backTopBtn = ref(null)

const handleScroll = () => {
  if (window.scrollY > 200) {
    backTopBtn.value?.classList.add('show')
  } else {
    backTopBtn.value?.classList.remove('show')
  }
}
const backTo = () => {
  router.back()
}
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.back_button_bac{
  position: fixed;
  right: 26px;
  /* bottom: 26px; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.back_but{
  margin-top: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.35);
  cursor: pointer;
  z-index: 9999;
  transition: all 0.3s ease;
  transform: scale(0.8);
  pointer-events: auto;
  /* 上下浮动动画 */
  animation: floatAnim 2.2s ease-in-out infinite;
}
/* 悬浮渐变浮动按钮 */
.back_bac {
  font-size: 12px;
  opacity: 1;
}
/* 悬浮渐变浮动按钮 */
.back_top {
  font-size: 22px;
  opacity: 0;
}
/* 显示 */
.back_top.show {
  opacity: 1;
  transform: scale(1);
}
/* hover 放大 */
.back_top:hover,  .back_bac:hover{
  transform: scale(1.12);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.5);
}

/* 上下浮动关键帧 */
@keyframes floatAnim {
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
}
</style>