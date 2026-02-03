<template>
  <div class="container mx-auto px-4 py-24">
    <div class="max-w-xl mx-auto rounded-2xl bg-white/95 backdrop-blur-sm border border-white/60 shadow-xl p-8 text-center">
      <h1 class="font-display text-4xl font-bold text-ink mb-4">Page not found</h1>
      <p class="text-ink/80 mb-8">Sorry, we couldn't find the page you're looking for.</p>
      <NuxtLink
        to="/"
        class="inline-flex items-center px-8 py-4 rounded-xl bg-brand text-white font-display font-semibold hover:bg-brand-light transition-colors"
      >
        Back to home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
