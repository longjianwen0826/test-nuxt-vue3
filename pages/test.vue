<template>
  <div class="snake-container">
    <div class="game-header">
      <h2>🐍 发小专属贪吃蛇</h2>
      <div class="score">得分：{{ score }}</div>
    </div>

    <div class="game-box">
      <div
        v-for="(point, idx) in snake"
        :key="idx"
        class="snake"
        :style="{ left: `${point.x * 10}px`, top: `${point.y * 10}px` }"
      />
      <div
        class="food"
        :style="{ left: `${food.x * 10}px`, top: `${food.y * 10}px` }"
      />
    </div>

    <div class="game-controls">
      <button @click="startGame" :disabled="isRunning">开始游戏</button>
      <button @click="pauseGame" :disabled="!isRunning">暂停</button>
      <button @click="resetGame">重新开始</button>
    </div>

    <div class="tips">键盘 ↑ ↓ ← → 控制方向</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const snake = ref([{ x: 15, y: 15 }])
const food = ref({ x: 5, y: 5 })
const direction = ref({ x: 1, y: 0 })
const score = ref(0)
const isRunning = ref(false)
let timer = null

// 游戏区域 30x30 格子，每个格子 10px
const GRID = 30
const SIZE = 20

// 生成食物（绝对不在蛇身上）
function generateFood() {
  let fx, fy
  do {
    fx = Math.floor(Math.random() * GRID)
    fy = Math.floor(Math.random() * GRID)
  } while (snake.value.some(s => s.x === fx && s.y === fy))
  food.value = { x: fx, y: fy }
}

// 移动逻辑
function move() {
  const head = {
    x: snake.value[0].x + direction.value.x,
    y: snake.value[0].y + direction.value.y
  }

  // 真正撞墙判断（修复！）
  if (head.x < 0 || head.y < 0 || head.x >= GRID || head.y >= GRID) {
    alert('游戏结束！得分：' + score.value)
    resetGame()
    return
  }

  // 撞到自己
  if (snake.value.some(s => s.x === head.x && s.y === head.y)) {
    alert('游戏结束！得分：' + score.value)
    resetGame()
    return
  }

  snake.value.unshift(head)

  // 吃到食物
  if (head.x === food.value.x && head.y === food.value.y) {
    score.value += 10
    generateFood()
  } else {
    snake.value.pop()
  }
}

// 键盘控制
function handleKey(e) {
  if (!isRunning.value) return
  const d = direction.value
  if (e.key === 'ArrowUp' && d.y !== 1) direction.value = { x: 0, y: -1 }
  if (e.key === 'ArrowDown' && d.y !== -1) direction.value = { x: 0, y: 1 }
  if (e.key === 'ArrowLeft' && d.x !== 1) direction.value = { x: -1, y: 0 }
  if (e.key === 'ArrowRight' && d.x !== -1) direction.value = { x: 1, y: 0 }
}

// 开始
function startGame() {
  if (isRunning.value) return
  isRunning.value = true
  timer = setInterval(move, 150)
}

// 暂停
function pauseGame() {
  isRunning.value = false
  clearInterval(timer)
}

// 重置
function resetGame() {
  clearInterval(timer)
  snake.value = [{ x: 15, y: 15 }]
  direction.value = { x: 1, y: 0 }
  score.value = 0
  isRunning.value = false
  generateFood()
}

onMounted(() => {
  generateFood()
  window.addEventListener('keydown', handleKey)
})

onUnmounted(() => {
  clearInterval(timer)
  window.removeEventListener('keydown', handleKey)
})
</script>

<style scoped>
.snake-container {
  width: 100%;
  max-width: 340px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  box-sizing: border-box;
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.game-header h2 {
  margin: 0;
  font-size: 19px;
}

.score {
  font-weight: bold;
  color: #1890ff;
}

/* 游戏区域：自适应 + 完全匹配格子 */
.game-box {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  background: #111;
  border-radius: 12px;
  overflow: hidden;
}

.snake {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #22c55e;
  border-radius: 2px;
}

.food {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #ef4444;
  border-radius: 50%;
  z-index: 10;
}

.game-controls {
  margin-top: 16px;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.game-controls button {
  padding: 7px 14px;
  border: none;
  border-radius: 8px;
  background: #1890ff;
  color: #fff;
  cursor: pointer;
}

.game-controls button:disabled {
  background: #ccc;
}

.tips {
  margin-top: 10px;
  font-size: 12px;
  color: #666;
}
</style>