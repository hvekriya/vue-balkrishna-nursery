<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Global scroll helper
const router = useRouter()
router.afterEach(() => {
  if (import.meta.client) window.scrollTo(0, 0)
})
</script>
