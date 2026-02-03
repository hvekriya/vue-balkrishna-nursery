<template>
  <header class="sticky top-0 z-50 w-full bg-white shadow-md border-b border-violet-200 text-violet-900">
    <nav class="container mx-auto px-4 flex items-center justify-between h-16">
      <NuxtLink
        to="/"
        class="font-display font-bold text-xl text-violet-900 hover:text-violet-700 transition-colors"
      >
        Bal Krishna Nursery
      </NuxtLink>

      <!-- Mobile menu button -->
      <button
        type="button"
        class="md:hidden p-2 rounded-lg hover:bg-violet-100 text-violet-900 transition-colors"
        :class="{ 'bg-violet-100': menuOpen }"
        aria-label="Toggle menu"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            v-if="!menuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Desktop + mobile menu -->
      <div
        class="absolute md:static top-16 left-0 right-0 md:top-0 bg-violet-50 md:bg-transparent shadow-xl md:shadow-none backdrop-blur-lg md:backdrop-blur-none overflow-hidden transition-[max-height] duration-300 ease-out md:overflow-visible"
        :class="menuOpen ? 'max-h-[85vh]' : 'max-h-0 md:max-h-none'"
      >
        <ul class="flex flex-col md:flex-row md:items-center md:gap-0.5 container mx-auto px-4 py-4 md:py-0 md:px-0">
          <li>
            <NuxtLink
              to="/"
              class="block py-3 md:py-2.5 px-4 rounded-lg text-violet-900 hover:bg-violet-100 transition-colors"
              :class="{ 'bg-violet-100': route.path === '/' }"
              @click="menuOpen = false"
            >
              Home
            </NuxtLink>
          </li>

          <!-- Our Nursery dropdown -->
          <li class="relative group">
            <button
              type="button"
              class="w-full md:w-auto flex items-center justify-between md:justify-center gap-2 py-3 md:py-2.5 px-4 rounded-lg text-violet-900 hover:bg-violet-100 transition-colors text-left"
              :class="{ 'bg-violet-100': isActive('/our-nursery') }"
              :aria-expanded="ourNurseryOpen"
              aria-haspopup="true"
              aria-controls="our-nursery-menu"
              @click="toggleOurNursery"
            >
              <span>Our Nursery</span>
              <svg
                class="w-4 h-4 shrink-0 transition-transform"
                :class="{ 'rotate-180': ourNurseryOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul
              id="our-nursery-menu"
              class="md:absolute md:left-0 md:top-full md:pt-1 md:-mt-1 md:min-w-[220px] md:opacity-0 md:invisible md:pointer-events-none md:group-hover:opacity-100 md:group-hover:visible md:group-hover:pointer-events-auto md:transition-all md:duration-200"
              :class="[
                ourNurseryOpen ? 'block' : 'hidden md:block',
                ourNurseryOpen && 'md:!opacity-100 md:!visible md:!pointer-events-auto'
              ]"
            >
              <li class="md:bg-white md:rounded-xl md:shadow-xl md:py-2 md:border border-violet-100">
                <template v-for="link in ourNurseryLinks" :key="link.to">
                  <NuxtLink
                    :to="link.to"
                    class="block py-2.5 px-4 md:py-2 md:px-4 text-violet-900 hover:bg-violet-100 md:hover:bg-violet-50"
                    @click="closeAll"
                  >
                    {{ link.label }}
                  </NuxtLink>
                </template>
              </li>
            </ul>
          </li>

          <!-- Parents dropdown -->
          <li class="relative group">
            <button
              type="button"
              class="w-full md:w-auto flex items-center justify-between md:justify-center gap-2 py-3 md:py-2.5 px-4 rounded-lg text-violet-900 hover:bg-violet-100 transition-colors text-left"
              :class="{ 'bg-violet-100': isActive('/parents') }"
              :aria-expanded="parentsOpen"
              aria-haspopup="true"
              aria-controls="parents-menu"
              @click="toggleParents"
            >
              <span>Parents</span>
              <svg
                class="w-4 h-4 shrink-0 transition-transform"
                :class="{ 'rotate-180': parentsOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul
              id="parents-menu"
              class="md:absolute md:left-0 md:top-full md:pt-1 md:-mt-1 md:min-w-[200px] md:opacity-0 md:invisible md:pointer-events-none md:group-hover:opacity-100 md:group-hover:visible md:group-hover:pointer-events-auto md:transition-all md:duration-200"
              :class="[
                parentsOpen ? 'block' : 'hidden md:block',
                parentsOpen && 'md:!opacity-100 md:!visible md:!pointer-events-auto'
              ]"
            >
              <li class="md:bg-white md:rounded-xl md:shadow-xl md:py-2 md:border border-violet-100">
                <template v-for="item in parentsMenu" :key="item.uid">
                  <NuxtLink
                    :to="`/parents/${item.uid}`"
                    class="block py-2.5 px-4 md:py-2 md:px-4 text-violet-900 hover:bg-violet-100 md:hover:bg-violet-50"
                    @click="closeAll"
                  >
                    {{ asText(item.data?.title) }}
                  </NuxtLink>
                </template>
                <p v-if="parentsMenu.length === 0 && !parentsLoaded" class="py-2 px-4 text-violet-700 text-sm">Loading…</p>
              </li>
            </ul>
          </li>

          <li>
            <NuxtLink
              to="/blog"
              class="block py-3 md:py-2.5 px-4 rounded-lg text-violet-900 hover:bg-violet-100 transition-colors"
              :class="{ 'bg-violet-100': route.path.startsWith('/blog') }"
              @click="menuOpen = false"
            >
              Blog
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="block py-3 md:py-2.5 px-4 rounded-lg text-violet-900 hover:bg-violet-100 transition-colors"
              :class="{ 'bg-violet-100': route.path === '/contact' }"
              @click="menuOpen = false"
            >
              Contact
            </NuxtLink>
          </li>
          <li class="flex gap-1 py-3 md:py-0 px-4 border-t md:border-t-0 border-violet-200 mt-2 md:mt-0 md:ml-2">
            <a
              href="https://www.facebook.com/Bal-Krishna-Nursery-101302974825134/"
              target="_blank"
              rel="noopener"
              class="p-2.5 rounded-lg text-violet-700 hover:bg-violet-100 transition-colors"
              aria-label="Facebook"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href="https://www.instagram.com/balkrishnanursery/"
              target="_blank"
              rel="noopener"
              class="p-2.5 rounded-lg text-violet-700 hover:bg-violet-100 transition-colors"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { asText } from '@prismicio/client'

const route = useRoute()
const prismic = usePrismic()
const menuOpen = ref(false)
const ourNurseryOpen = ref(false)
const parentsOpen = ref(false)
const parentsLoaded = ref(false)

const ourNurseryLinks = [
  { to: '/our-nursery/our-values', label: 'Our vision and values' },
  { to: '/our-nursery/curriculum', label: 'Curriculum' },
  { to: '/our-nursery/food', label: 'Food' },
  { to: '/our-nursery/fees-and-funding', label: 'Fees and funding' },
  { to: '/our-nursery/meet-the-team', label: 'Meet the team' },
  { to: '/our-nursery/vacancy', label: 'Vacancy' },
  { to: '/our-nursery/policies', label: 'Policies' },
]

const parentsMenu = ref<Array<{ uid: string; data?: { title?: unknown } }>>([])

function isActive(path: string) {
  return route.path.startsWith(path)
}

function toggleOurNursery() {
  ourNurseryOpen.value = !ourNurseryOpen.value
  if (ourNurseryOpen.value) parentsOpen.value = false
}

function toggleParents() {
  parentsOpen.value = !parentsOpen.value
  if (parentsOpen.value) ourNurseryOpen.value = false
}

function closeAll() {
  menuOpen.value = false
  ourNurseryOpen.value = false
  parentsOpen.value = false
}

onMounted(() => {
  prismic.client
    .getAllByType('parents')
    .then((results) => {
      parentsMenu.value = results
      parentsLoaded.value = true
    })
    .catch(() => {
      parentsLoaded.value = true
    })
})
</script>
