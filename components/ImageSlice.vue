<template>
  <div>
    <template v-for="(slice, index) in slices" :key="index">
      <div v-if="slice.slice_type === 'image' && slice.primary?.image_banner?.url" class="my-8 rounded-2xl overflow-hidden shadow-lg">
      <PrismicImage
        :field="slice.primary.image_banner"
        class="w-full h-auto"
      />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  slices: Array<{ slice_type: string; primary?: { image_banner?: unknown } }>
}>()
</script>
