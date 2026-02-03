<template>
  <div class="min-h-screen flex flex-col font-sans text-violet-900 bg-gradient-to-b from-violet-50/80 via-white to-violet-50/80">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
</script>
