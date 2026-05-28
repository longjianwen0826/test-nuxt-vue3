<template>
  <div class="user-center-page">
    <!-- 顶部个人信息卡片 -->
    <div class="profile-card" :class="animate ? 'animate-in' : ''">
      <div class="avatar-box">
        <n-avatar :src="userInfo.ImageUrl + userInfo.avatar" :size="160" />
      </div>

      <div class="info-box">
        <h2 class="name">{{ userInfo.name }}</h2>
        <p class="name-en">{{ userInfo.nameEn }}</p>

        <div class="base-info">
          <span>身高：{{ userInfo.height }}cm</span>
          <span>体重：{{ userInfo.weight }}kg</span>
        </div>

        <div class="character-box">
          <span class="label">性格：</span>
          {{ userInfo.character }}
        </div>

        <div class="desc-box">
          <span class="label">简介：</span>
          {{ userInfo.describe }}
        </div>
      </div>
    </div>

    <!-- 爱好 -->
    <div class="section-card">
      <h3 class="section-title">🏆 爱好</h3>
      <div class="hobby-list">
        <n-tag
          v-for="(item, idx) in userInfo.hobby"
          :key="idx"
          type="primary"
          round
          class="hobby-tag"
        >
          {{ item }}
        </n-tag>
      </div>
    </div>

    <!-- 过往经历 -->
    <div class="section-card">
      <h3 class="section-title">📸 过往经历</h3>

      <div class="guo-wang-list">
        <div
          class="guo-item"
          v-for="(item, idx) in userInfo.guoWang"
          :key="idx"
        >
          <div class="guo-header">
            <span class="date">{{ item.date }}</span>
            <span class="des">{{ item.des }}</span>
          </div>

          <div class="guo-images">
            <n-image
              v-for="(img, i) in item.imageName"
              :key="i"
              :src="userInfo.ImageUrl + img"
              preview
              class="guo-img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <BackButton :back="true" :top="true" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

// 用户数据（直接替换成你的真实数据）
const userInfo = (userStore.userInfo)

// 入场动画
const animate = ref(false)
onMounted(() => setTimeout(() => (animate.value = true), 200))
</script>

<style scoped>
.user-center-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 20px;
}

/* 顶部卡片 */
.profile-card {
  background: #fff;
  border-radius: 24px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 30px;
  align-items: center;
  margin-bottom: 30px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}
.profile-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.avatar-box {
  flex-shrink: 0;
}

.info-box {
  flex: 1;
}

.name {
  font-size: 28px;
  font-weight: bold;
  margin: 0 0 6px;
  color: #222;
}
.name-en {
  font-size: 16px;
  color: #999;
  margin: 0 0 14px;
}

.base-info {
  display: flex;
  gap: 20px;
  margin-bottom: 14px;
  color: #555;
  font-size: 15px;
}

.character-box,
.desc-box {
  color: #444;
  line-height: 1.6;
  margin-bottom: 8px;
}
.label {
  color: #1890ff;
  font-weight: 500;
}

/* 区块卡片 */
.section-card {
  background: #fff;
  border-radius: 20px;
  padding: 24px 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  margin-bottom: 24px;
}

.section-title {
  font-size: 20px;
  margin: 0 0 18px;
  color: #222;
}

/* 爱好 */
.hobby-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.hobby-tag {
  font-size: 14px;
  padding: 0 14px;
}

/* 过往经历 */
.guo-item {
  margin-bottom: 26px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #eee;
}
.guo-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.guo-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}
.date {
  background: #f0f7ff;
  color: #1890ff;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 13px;
}
.des {
  font-size: 15px;
  color: #333;
}

.guo-images {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.guo-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s;
}
.guo-img:hover {
  transform: scale(1.05);
}
/* 响应式 */
@media (max-width: 768px) {
  .profile-card {
    flex-direction: column;
    text-align: center;
    padding: 30px 20px;
  }
  .guo-img {
    width: 100px;
    height: 100px;
  }
}
</style>