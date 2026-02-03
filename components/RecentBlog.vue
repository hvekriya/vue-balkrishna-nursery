<template>
  <section class="my-12">
    <h2 class="font-display text-2xl text-ink mb-6">Our recent blog articles</h2>
    <div class="space-y-6">
      <article
        v-for="post in posts"
        :key="post.id"
        class="py-6 border-b border-gray-200 last:border-0"
      >
        <h3 class="font-display font-semibold text-lg text-ink mb-2">
          <NuxtLink :to="`/post/${post.uid}`" class="hover:text-ink-light transition-colors">
            <PrismicText :field="post.data?.title" />
          </NuxtLink>
        </h3>
        <p class="text-ink/80 text-sm mb-2 line-clamp-2">
          {{ readMore(post.data?.content, 200) }}
        </p>
        <p class="text-ink/60 text-xs">
          Posted on {{ formatDate(post.first_publication_date) }}
        </p>
        <NuxtLink
          :to="`/post/${post.uid}`"
          class="inline-block mt-2 text-accent font-display font-semibold text-sm hover:underline"
        >
          Read more →
        </NuxtLink>
      </article>
    </div>
    <NuxtLink
      to="/blog"
      class="inline-flex mt-8 px-6 py-3 rounded-xl bg-brand text-white font-display font-semibold hover:bg-brand-light transition-colors"
    >
      View more
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import { asText } from '@prismicio/client'

const prismic = usePrismic()
const { data: result } = await useAsyncData('recent-blog', () =>
  prismic.client.getByType('blog', {
    orderings: [{ field: 'document.first_publication_date', direction: 'desc' }],
    pageSize: 4,
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
