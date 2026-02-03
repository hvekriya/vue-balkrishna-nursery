<template>
  <div>
    <section class="relative overflow-hidden bg-surface-muted py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="font-display text-4xl md:text-5xl font-bold text-ink">Parents</h1>
      </div>
    </section>
    <div class="container mx-auto px-4 py-12 max-w-3xl">
      <div class="rounded-2xl bg-white/95 backdrop-blur-sm border border-white/60 shadow-xl p-6 md:p-10">
        <ul class="space-y-4">
        <li
          v-for="item in parents"
          :key="item.uid"
          class="rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-md hover:shadow-lg transition-shadow"
        >
          <NuxtLink
            :to="`/parents/${item.uid}`"
            class="block p-6 font-display font-semibold text-ink hover:text-brand transition-colors"
          >
            {{ asText(item.data?.title) }}
          </NuxtLink>
        </li>
      </ul>
        <p v-if="parents.length === 0 && !loading" class="text-ink-light text-center py-8">
          No parent pages yet.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { asText } from '@prismicio/client'

const prismic = usePrismic()
const { data: result, pending: loading } = await useAsyncData('parents-list', () =>
  prismic.client.getByType('parents', {
    orderings: [{ field: 'document.first_publication_date', direction: 'asc' }],
  })
)
const parents = computed(() => result.value?.results ?? [])
</script>
