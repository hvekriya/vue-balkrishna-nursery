<template>
  <section class="my-12">
    <h2 class="font-display text-2xl md:text-3xl font-bold text-ink mb-2">
      Here's an 'at a glance' guide to what Bal Krishna has to offer
    </h2>
    <p class="text-ink-light mb-8 max-w-2xl">
      Quick links to what matters most for your family.
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <NuxtLink
        v-for="item in offerings"
        :key="item.to"
        :to="item.to"
        class="group flex flex-col items-center text-center p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300"
      >
        <span class="text-2xl mb-2" aria-hidden="true">{{ item.icon }}</span>
        <span class="font-display font-semibold text-ink text-sm leading-tight group-hover:text-brand transition-colors">
          {{ item.label }}
        </span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const offerings = [
  { to: '/our-nursery/fees-and-funding', label: 'Fees & funding', icon: '💷' },
  { to: '/our-nursery/meet-the-team', label: 'Meet the team', icon: '👩‍👧‍👦' },
  { to: '/our-nursery/policies', label: 'Policies', icon: '📋' },
  { to: '/contact', label: 'Contact us', icon: '📞' },
]
</script>
