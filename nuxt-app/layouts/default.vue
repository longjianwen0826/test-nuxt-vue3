<template>
  <div class="body">
    <NarBar/>
    <main class="container">
      <slot/>
    </main>
    <PageFooter/>
  </div>
</template>
<script setup>
</script>
<style>
.body{
  min-width: 1000px;
  @apply bg-gray-100 flex flex-col min-h-screen;
}
</style>
