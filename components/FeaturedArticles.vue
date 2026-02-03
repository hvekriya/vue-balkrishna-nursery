<template>
  <div>
    <template v-for="(slice, index) in (slices ?? [])" :key="index">
      <section v-if="slice.slice_type === 'list_of_articles'" class="my-12">
      <h2 class="font-display text-2xl font-bold text-ink mb-6">
        <PrismicText v-if="slice.primary?.section_title" :field="slice.primary.section_title" />
        <template v-else>Featured</template>
      </h2>
      <div class="grid md:grid-cols-2 gap-6">
        <article
          v-for="(item, i) in slice.items ?? []"
          :key="i"
          class="group rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm border border-white/60 shadow-xl hover:shadow-2xl hover:bg-white/90 transition-all duration-300"
        >
          <NuxtLink
            v-if="getInternalPath(item.article_to_link)"
            :to="getInternalPath(item.article_to_link) || '/'"
            class="block h-full flex flex-col"
          >
            <div class="relative overflow-hidden">
              <PrismicImage
                v-if="item.article_cover"
                :field="item.article_cover"
                class="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div class="p-6 flex-1 flex flex-col">
              <div class="font-display font-semibold text-ink text-lg mb-2 group-hover:text-brand transition-colors prose prose-brand prose-sm max-w-none [&_p]:my-0 [&_h1]:my-0 [&_h2]:my-0 [&_h3]:my-0">
                <PrismicRichText :field="item.article_title" />
              </div>
              <div class="text-ink-light text-sm line-clamp-3 flex-1 prose prose-brand prose-sm max-w-none [&_p]:my-0 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
                <PrismicRichText :field="item.article_description" />
              </div>
              <span class="inline-flex items-center gap-1 mt-4 text-brand font-display font-semibold text-sm">
                Read more
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </NuxtLink>
          <PrismicLink
            v-else-if="item.article_to_link?.url"
            :field="item.article_to_link"
            class="block h-full flex flex-col"
          >
            <div class="relative overflow-hidden">
              <PrismicImage
                v-if="item.article_cover"
                :field="item.article_cover"
                class="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div class="p-6 flex-1 flex flex-col">
              <div class="font-display font-semibold text-ink text-lg mb-2 group-hover:text-brand transition-colors prose prose-brand prose-sm max-w-none [&_p]:my-0 [&_h1]:my-0 [&_h2]:my-0 [&_h3]:my-0">
                <PrismicRichText :field="item.article_title" />
              </div>
              <div class="text-ink-light text-sm line-clamp-3 flex-1 prose prose-brand prose-sm max-w-none [&_p]:my-0 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
                <PrismicRichText :field="item.article_description" />
              </div>
              <span class="inline-flex items-center gap-1 mt-4 text-brand font-display font-semibold text-sm">
                Read more
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </PrismicLink>
          <div v-else class="block h-full flex flex-col">
            <div class="relative overflow-hidden">
              <PrismicImage
                v-if="item.article_cover"
                :field="item.article_cover"
                class="w-full aspect-video object-cover"
              />
            </div>
            <div class="p-6 flex-1 flex flex-col">
              <div class="font-display font-semibold text-ink text-lg mb-2 prose prose-brand prose-sm max-w-none [&_p]:my-0 [&_h1]:my-0 [&_h2]:my-0 [&_h3]:my-0">
                <PrismicRichText :field="item.article_title" />
              </div>
              <div class="text-ink-light text-sm line-clamp-3 flex-1 prose prose-brand prose-sm max-w-none [&_p]:my-0 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
                <PrismicRichText :field="item.article_description" />
              </div>
            </div>
          </div>
        </article>
      </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  slices?: Array<{
    slice_type: string
    primary?: { section_title?: unknown }
    items?: Array<{
      article_title?: unknown
      article_cover?: unknown
      article_description?: unknown
      article_to_link?: { link_type?: string; type?: string; uid?: string; url?: string }
    }>
  }>
}>()
/**
 * Resolve Prismic Document link to internal path for NuxtLink (no full URLs / deep links).
 */
function getInternalPath(link: { link_type?: string; type?: string; uid?: string; url?: string } | undefined): string | null {
  if (!link || link.link_type !== 'Document' || !link.uid) return null
  const type = link.type ?? ''
  const uid = link.uid
  if (type === 'blog') return `/post/${uid}`
  if (type === 'home') return '/'
  if (type === 'our-nursery' || type === 'our_nursery') return `/our-nursery/${uid}`
  if (type === 'parents') return `/parents/${uid}`
  if (type && uid) return `/${type}/${uid}`
  return null
}
</script>
