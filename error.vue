<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-surface px-4 font-sans text-ink">
    <h1 class="font-display text-4xl font-bold text-ink mb-4">
      {{ error.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}
    </h1>
    <p class="text-ink/80 mb-8 text-center max-w-md">
      {{ error.statusCode === 404 ? "Sorry, we couldn't find the page you're looking for." : error.message }}
    </p>
    <NuxtLink
      to="/"
      class="inline-flex items-center px-8 py-4 rounded-xl bg-brand text-white font-display font-semibold hover:bg-brand-light transition-colors"
    >
      Back to home
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error: { statusCode?: number; message?: string }
}>()
</script>
