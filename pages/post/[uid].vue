<template>
  <div v-if="page">
    <section class="relative overflow-hidden">
      <img
        v-if="page.data?.cover?.url"
        :src="page.data.cover.url"
        :alt="page.data.cover.alt ?? ''"
        class="w-full h-[40vh] min-h-[240px] object-cover"
      />
      <div class="absolute inset-0 bg-brand/40" />
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="font-display text-3xl md:text-4xl font-bold text-white text-center px-4 drop-shadow-lg">
          <PrismicText :field="page.data.title" />
        </h1>
      </div>
    </section>
    <article class="container mx-auto px-4 py-12 max-w-3xl">
      <div class="rounded-2xl bg-white/95 backdrop-blur-sm border border-white/60 shadow-xl p-6 md:p-10">
        <div class="prose prose-brand max-w-none mb-8">
          <PrismicRichText :field="page.data.content" />
        </div>
        <div v-if="page.data?.cta_link" class="mb-8">
          <PrismicLink
            :field="page.data.cta_link"
            class="inline-flex items-center px-8 py-4 rounded-xl bg-brand text-white font-display font-semibold hover:bg-brand-light transition-colors"
          >
            <PrismicText :field="page.data.cta_text" />
          </PrismicLink>
        </div>
        <p class="text-brand/60 text-sm">
          Posted on {{ formatDate(page.first_publication_date) }}
        </p>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const prismic = usePrismic()
const uid = route.params.uid as string
const { data: page } = await useAsyncData(`post-${uid}`, () =>
  prismic.client.getByUID('blog', uid)
)
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post Not Found' })
}

function formatDate(value: string | undefined): string {
  if (!value) return ''
  return new Date(value).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}
</script>

<style scoped>
.prose-brand :deep(a:hover) {
  text-decoration: underline;
}
</style>
