<template>
  <footer class="mt-auto bg-violet-50 shadow-inner text-violet-900 border-t border-violet-200 pt-12 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <!-- Brand -->
        <div>
          <img src="/img/logo.png" alt="Bal Krishna Nursery" class="h-14 w-auto mb-4" />
          <h3 class="font-display font-bold text-lg mb-2 text-violet-900">Bal Krishna Nursery</h3>
          <p class="text-violet-800 text-sm leading-relaxed mb-4">
            By Woolwich Temple. A caring start for every child.
          </p>
          <div class="flex gap-3">
            <a
              href="https://www.facebook.com/Bal-Krishna-Nursery-101302974825134/"
              target="_blank"
              rel="noopener"
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-200 text-violet-700 hover:bg-violet-300 transition-colors"
              aria-label="Facebook"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href="https://www.instagram.com/balkrishnanursery/"
              target="_blank"
              rel="noopener"
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-200 text-violet-700 hover:bg-violet-300 transition-colors"
              aria-label="Instagram"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-display font-bold text-lg mb-4 border-b border-violet-200 pb-2 inline-block text-violet-900">
            Quick Links
          </h4>
          <ul class="space-y-2.5 text-sm">
            <li><NuxtLink to="/" class="text-violet-800 hover:text-violet-900 transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/our-nursery/our-values" class="text-violet-800 hover:text-violet-900 transition-colors">Our Nursery</NuxtLink></li>
            <li><NuxtLink to="/parents" class="text-violet-800 hover:text-violet-900 transition-colors">Parents</NuxtLink></li>
            <li><NuxtLink to="/blog" class="text-violet-800 hover:text-violet-900 transition-colors">Blog</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-violet-800 hover:text-violet-900 transition-colors">Contact</NuxtLink></li>
            <li><NuxtLink to="/our-nursery/privacy-policy" class="text-violet-800 hover:text-violet-900 transition-colors">Privacy Policy</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-display font-bold text-lg mb-4 border-b border-violet-200 pb-2 inline-block text-violet-900">
            Contact Us
          </h4>
          <address class="text-violet-800 text-sm not-italic space-y-3">
            <p>SKSS Temple Woolwich,<br />St. Margarets Grove,<br />London, SE18 7RL</p>
            <p><a href="tel:+442037456070" class="hover:text-violet-900 transition-colors">020 3745 6070</a></p>
            <p><a href="mailto:info@balkrishna.org" class="hover:text-violet-900 transition-colors">info@balkrishna.org</a></p>
          </address>
        </div>

        <!-- Accreditation -->
        <div>
          <h4 class="font-display font-bold text-lg mb-4 border-b border-violet-200 pb-2 inline-block text-violet-900">
            Ofsted
          </h4>
          <img
            :src="ofstedImageSrc"
            alt="Ofsted Good"
            width="120"
            height="48"
            class="h-12 w-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>

      <div class="border-t border-violet-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-violet-800">
        <p>© {{ new Date().getFullYear() }} Bal Krishna Nursery. All rights reserved.</p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <NuxtLink to="/our-nursery/privacy-policy" class="hover:text-violet-900 transition-colors">Privacy Policy</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-violet-900 transition-colors">Contact</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Build path from baseURL; fallback to root if base is missing or invalid (e.g. '&')
const config = useRuntimeConfig()
const rawBase = config.app?.baseURL ?? '/'
const base = (typeof rawBase === 'string' && rawBase !== '&' ? rawBase.replace(/\/$/, '') : '') || ''
const ofstedImageSrc = base ? `${base}/img/Ofsted_Good_GP_Colour.png` : '/img/Ofsted_Good_GP_Colour.png'
</script>
