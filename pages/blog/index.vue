<template>
  <div>
    <section class="relative overflow-hidden bg-surface-muted py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="font-display text-4xl md:text-5xl font-bold text-ink">Blog</h1>
      </div>
    </section>
    <div class="container mx-auto px-4 py-12 max-w-3xl">
      <div class="rounded-2xl bg-white/95 backdrop-blur-sm border border-white/60 shadow-xl p-6 md:p-10">
        <div class="space-y-10">
          <article
          v-for="post in posts"
          :key="post.id"
          class="py-8 border-b border-surface-muted last:border-0"
        >
          <h2 class="font-display text-2xl font-semibold text-ink mb-2">
            <NuxtLink :to="`/post/${post.uid}`" class="hover:text-ink-light transition-colors">
              <PrismicText :field="post.data?.title" />
            </NuxtLink>
          </h2>
          <p class="text-ink/80 mb-2 line-clamp-2">
            {{ readMore(post.data?.content, 200) }}
          </p>
          <p class="text-ink/60 text-sm mb-4">
            Posted on {{ formatDate(post.first_publication_date) }}
          </p>
          <NuxtLink
            :to="`/post/${post.uid}`"
            class="text-ink-light font-display font-semibold hover:underline"
          >
            Read more →
          </NuxtLink>
        </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const prismic = usePrismic()
const { data: result } = await useAsyncData('blog-list', () =>
  prismic.client.getByType('blog', {
    orderings: [{ field: 'document.first_publication_date', direction: 'desc' }],
  })
)
const posts = computed(() => result.value?.results ?? [])

function readMore(content: unknown, length: number): string {
  if (!content || !Array.isArray(content)) return ''
  const text = content
    .map((b: { text?: string }) => b.text)
    .filter(Boolean)
    .join(' ')
  return text.length > length ? `${text.slice(0, length)}...` : text
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
