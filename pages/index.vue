<template>
  <div>
    <!-- Hero with glass overlay -->
    <section id="hero" class="relative overflow-hidden">
      <img
        v-if="page?.data?.cover?.url"
        :src="page.data.cover.url"
        :alt="page.data.cover.alt ?? 'Bal Krishna Nursery'"
        class="w-full h-[50vh] min-h-[280px] md:h-[75vh] md:min-h-[420px] object-cover object-top md:object-center"
      />
      <img
        v-else
        src="/img/home-bg.jpg"
        alt="Bal Krishna Nursery"
        class="w-full h-[50vh] min-h-[280px] md:h-[75vh] md:min-h-[420px] object-cover object-top md:object-center"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/30 to-transparent" />
      <div class="absolute inset-0 flex items-end pb-12 md:pb-20 lg:pb-28">
        <div class="container mx-auto px-4">
          <p class="text-white/95 text-lg md:text-xl font-display font-semibold drop-shadow-sm">
            <span v-if="page?.data?.welcome_heading"><PrismicText :field="page.data.welcome_heading" /></span>
            <span v-else>Welcome to Bal Krishna Nursery</span>
          </p>
          <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-display font-bold drop-shadow-lg mt-1 max-w-2xl">
            <span v-if="page?.data?.welcome_title"><PrismicText :field="page.data.welcome_title" /></span>
            <span v-else>A caring start for every child</span>
          </h1>
        </div>
      </div>
      <a
        href="#main-content"
        class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full p-2 text-white/90 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 md:bottom-6"
        aria-label="Scroll down"
      >
        <svg class="h-8 w-8 animate-scroll-down md:h-10 md:w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
    <div id="main-content" class="container mx-auto px-4 py-12 max-w-4xl">
      <div class="rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 p-6 md:p-10 mb-10">
        <div v-if="page?.data?.content" class="prose prose-brand max-w-none mb-12">
          <PrismicRichText :field="page.data.content" />
        </div>
        <AtAGlance />
        <Faq v-if="page?.data?.body" :slices="page.data.body" />
        <FeaturedArticles v-if="page?.data?.body" :slices="page.data.body" />
        <RecentBlog />
        <Faq v-if="page?.data?.body" :slices="page.data.body" />
        <Banner v-if="page?.data?.body" :slices="page.data.body" />
        <Slider v-if="page?.data?.body" :slices="page.data.body" />
        <ImageSlice v-if="page?.data?.body" :slices="page.data.body" />
        <Reviews />
        <SocialFollow />
      <div v-if="page?.data?.cta_link" class="mt-10">
          <PrismicLink
            :field="page.data.cta_link"
            class="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand text-white font-display font-semibold hover:bg-brand-light transition-colors shadow-lg"
          >
            <PrismicText :field="page.data.cta_text" />
          </PrismicLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const prismic = usePrismic()
const { data: page } = await useAsyncData('home', () =>
  prismic.client.getSingle('home')
)
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
</script>

<style scoped>
.prose-brand :deep(a:hover) {
  text-decoration: underline;
}

@keyframes scroll-down {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0.375rem);
  }
}

.animate-scroll-down {
  animation: scroll-down 2s ease-in-out infinite;
}
</style>
