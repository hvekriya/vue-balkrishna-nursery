<template>
  <template v-for="(slice, index) in slices" :key="index">
    <section
      v-if="slice.slice_type === 'banner_with_caption' && slice.primary?.image_banner?.url"
      class="relative rounded-2xl overflow-hidden my-12 min-h-[320px] flex items-center justify-center text-center bg-white/60 backdrop-blur-sm border border-white/40 shadow-xl"
      :style="{ backgroundImage: `url(${slice.primary.image_banner.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
    >
      <div class="absolute inset-0 bg-brand/50" />
      <div class="relative z-10 px-6 py-12 text-white max-w-2xl">
        <div v-if="slice.primary?.title_of_banner" class="font-display text-3xl md:text-4xl font-bold mb-4 prose prose-invert prose-lg max-w-none [&_p]:mb-2 [&_p:last-child]:mb-0">
          <PrismicRichText :field="slice.primary.title_of_banner" />
        </div>
        <div v-if="slice.primary?.description" class="text-lg opacity-95 mb-6 prose prose-invert prose-lg max-w-none [&_p]:mb-2 [&_p:last-child]:mb-0">
          <PrismicRichText :field="slice.primary.description" />
        </div>
        <PrismicLink
          v-if="slice.primary?.button_link?.url"
          :field="slice.primary.button_link"
          class="inline-flex items-center px-6 py-3 rounded-xl bg-white text-brand font-display font-semibold hover:bg-surface transition-colors"
        >
          <PrismicText :field="slice.primary.button_label" />
        </PrismicLink>
      </div>
    </section>
  </template>
</template>

<script setup lang="ts">
defineProps<{
  slices: Array<{ slice_type: string; primary?: Record<string, unknown> }>
}>()
</script>
