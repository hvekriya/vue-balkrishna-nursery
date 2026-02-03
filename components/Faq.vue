<template>
  <div>
    <template v-for="(slice, index) in slices" :key="index">
      <section v-if="slice.slice_type === 'text'" class="my-12">
      <div v-if="slice.primary?.intro" class="prose prose-brand mb-6">
        <PrismicRichText :field="slice.primary.intro" />
      </div>
      <div class="space-y-3">
        <details
          v-for="(item, i) in slice.items ?? []"
          :key="i"
          class="group rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 overflow-hidden shadow-lg"
        >
          <summary class="flex items-center justify-between cursor-pointer list-none px-6 py-4 font-display font-semibold text-ink hover:bg-surface-muted transition-colors">
            <PrismicText :field="item.question" />
            <span class="text-brand transition-transform group-open:rotate-180">▼</span>
          </summary>
          <div class="px-6 pb-4 pt-0 text-ink-light border-t border-gray-100 prose prose-brand prose-sm max-w-none">
            <PrismicRichText :field="item.answer" />
          </div>
        </details>
      </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  slices: Array<{
    slice_type: string
    primary?: { intro?: unknown }
    items?: Array<{ question?: unknown; answer?: unknown }>
  }>
}>()
</script>
