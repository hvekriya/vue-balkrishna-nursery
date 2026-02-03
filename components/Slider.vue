<template>
  <template v-for="(slice, index) in slices" :key="index">
    <section
      v-if="slice.slice_type === 'image_gallery' && slice.items?.length"
      class="my-12 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg"
    >
      <div class="relative">
        <div class="flex overflow-x-auto snap-x snap-mandatory gap-4 p-4 scroll-smooth">
          <div
            v-for="(item, i) in slice.items"
            :key="i"
            class="flex-shrink-0 w-[85vw] max-w-2xl snap-center rounded-xl overflow-hidden shadow-lg"
          >
            <PrismicImage
              v-if="item.gallery_image"
              :field="item.gallery_image"
              class="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  </template>
</template>

<script setup lang="ts">
defineProps<{
  slices: Array<{ slice_type: string; items?: Array<{ gallery_image?: unknown }> }>
}>()
</script>
