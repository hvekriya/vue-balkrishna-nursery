<template>
  <section class="my-12">
    <h2 class="font-display text-2xl md:text-3xl font-bold text-ink mb-2">
      Find out what people love about us
    </h2>
    <p class="text-ink-light mb-8 max-w-2xl">
      Reviews from parents and carers – see what they say on Google.
    </p>
    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div
        v-for="(review, i) in reviews"
        :key="i"
        class="rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg p-6 flex flex-col"
      >
        <p class="text-ink flex-1 italic mb-4">"{{ review.quote }}"</p>
        <p class="text-ink-light text-sm font-display font-semibold">{{ review.author }}</p>
        <p class="text-ink-muted text-xs">Google review</p>
      </div>
    </div>
    <a
      href="https://www.google.com/search?q=Bal+Krishna+Nursery+Woolwich+reviews"
      target="_blank"
      rel="noopener"
      class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/90 backdrop-blur-sm border border-white/60 shadow-lg font-display font-semibold text-ink hover:bg-white transition-colors"
    >
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      View all reviews on Google
    </a>
  </section>
</template>

<script setup lang="ts">
// Replace these with real review text from your Google Business profile (Bal Krishna Nursery).
// To get reviews: Google Business Profile → Reviews, or use a Google Places reviews widget if you have an API key.
const reviews = [
  {
    quote: 'A welcoming and caring environment. My child has thrived here and the staff are wonderful.',
    author: 'Parent',
  },
  {
    quote: 'We are so happy we chose Bal Krishna Nursery. The team really care about each child.',
    author: 'Parent',
  },
]
</script>
