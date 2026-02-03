<template>
  <template v-for="(slice, index) in slices" :key="index">
    <section v-if="slice.slice_type === 'team'" class="my-12">
      <div v-if="slice.primary?.team_section" class="prose prose-brand mb-10 max-w-none">
        <PrismicRichText :field="slice.primary.team_section" />
      </div>
      <div class="flex flex-col gap-8 sm:gap-10">
        <article
          v-for="(item, i) in slice.items ?? []"
          :key="i"
          class="flex flex-col sm:flex-row sm:items-stretch rounded-2xl bg-white border border-violet-100 overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <div class="w-full sm:w-48 shrink-0 aspect-square sm:aspect-auto sm:min-h-[200px]">
            <PrismicImage
              v-if="item.portrait"
              :field="item.portrait"
              class="w-full h-full object-cover object-center"
            />
            <div v-else class="w-full h-full min-h-[200px] bg-violet-100 flex items-center justify-center">
              <span class="text-violet-400 text-4xl font-display" aria-hidden="true">?</span>
            </div>
          </div>
          <div class="p-6 sm:p-8 flex-1 flex flex-col justify-center text-center sm:text-left">
            <h3 class="font-display font-semibold text-ink text-xl mb-1">
              <PrismicText :field="item.name" />
            </h3>
            <p class="text-brand font-medium text-sm mb-4">
              <PrismicText :field="item.position" />
            </p>
            <div class="text-ink-light text-sm leading-relaxed prose prose-brand prose-sm max-w-none [&_p]:my-1">
              <PrismicRichText :field="item.description" />
            </div>
          </div>
        </article>
      </div>
    </section>
  </template>
</template>

<script setup lang="ts">
defineProps<{
  slices: Array<{
    slice_type: string
    primary?: { team_section?: unknown }
    items?: Array<{
      portrait?: unknown
      name?: unknown
      position?: unknown
      description?: unknown
    }>
  }>
}>()
</script>
