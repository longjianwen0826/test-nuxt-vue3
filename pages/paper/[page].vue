<template>
  <section class="py-16">
    <div class="container">
      <h1 class="text-3xl font-bold mb-8">联系我们</h1>
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-xl font-semibold mb-4">联系方式</h2>
          <p class="text-gray-600 mb-2">📍 地址：广东省广州市天河区</p>
          <p class="text-gray-600 mb-2">📞 电话：400-123-4567</p>
          <p class="text-gray-600 mb-2">✉️ 邮箱：contact@example.com</p>
          <p class="text-gray-600">🕒 工作时间：周一至周五 9:00-18:00</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">在线留言</h2>
          <div class="space-y-4">
            <input type="text" placeholder="您的姓名" class="w-full border rounded px-3 py-2">
            <input type="email" placeholder="您的邮箱" class="w-full border rounded px-3 py-2">
            <textarea placeholder="留言内容" rows="4" class="w-full border rounded px-3 py-2"></textarea>
            <button class="btn-primary w-full">提交留言</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
</script>
