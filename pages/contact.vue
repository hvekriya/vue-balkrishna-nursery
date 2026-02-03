<template>
  <div>
    <section class="relative overflow-hidden bg-surface-muted py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="font-display text-4xl md:text-5xl font-bold text-ink">Contact Us</h1>
        <p class="mt-2 text-ink/80 text-lg">Have questions? We love them.</p>
      </div>
    </section>
    <div class="container mx-auto px-4 py-12 max-w-5xl">
      <div class="grid md:grid-cols-5 gap-10">
        <!-- Contact form -->
        <div class="md:col-span-3">
          <div v-if="submitted" class="rounded-2xl bg-surface-muted/50 p-8 border border-surface-muted text-center">
            <p class="text-ink font-display font-semibold text-lg mb-2">Thank you for your message.</p>
            <p class="text-ink/80">We'll get back to you as soon as we can.</p>
          </div>
          <form
            v-else
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            class="rounded-2xl bg-white p-6 md:p-8 shadow-lg border border-surface-muted space-y-5"
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p class="hidden">
              <label>Don’t fill this out if you’re human: <input v-model="honeypot" name="bot-field" /></label>
            </p>
            <div>
              <label for="full-name" class="block font-display font-semibold text-ink mb-1">Full name <span class="text-red-500">*</span></label>
              <input
                id="full-name"
                v-model="form.fullName"
                type="text"
                name="full-name"
                required
                class="w-full px-4 py-3 rounded-xl border border-surface-muted focus:border-primary focus:ring-2 focus:ring-focus outline-none transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label for="email" class="block font-display font-semibold text-ink mb-1">Email <span class="text-red-500">*</span></label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                name="email"
                required
                class="w-full px-4 py-3 rounded-xl border border-surface-muted focus:border-primary focus:ring-2 focus:ring-focus outline-none transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label for="phone" class="block font-display font-semibold text-ink mb-1">Phone number <span class="text-ink/60 text-sm font-normal">(optional)</span></label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                name="phone"
                class="w-full px-4 py-3 rounded-xl border border-surface-muted focus:border-primary focus:ring-2 focus:ring-focus outline-none transition"
                placeholder="020 1234 5678"
              />
            </div>
            <div>
              <label for="message" class="block font-display font-semibold text-ink mb-1">Message <span class="text-red-500">*</span></label>
              <textarea
                id="message"
                v-model="form.message"
                name="message"
                required
                rows="5"
                class="w-full px-4 py-3 rounded-xl border border-surface-muted focus:border-primary focus:ring-2 focus:ring-focus outline-none transition resize-y min-h-[120px]"
                placeholder="Your message..."
              />
            </div>
            <p v-if="error" class="text-red-600 text-sm">{{ error }}</p>
            <button
              type="submit"
              :disabled="sending"
              class="w-full md:w-auto px-8 py-4 rounded-xl bg-brand text-white font-display font-semibold hover:bg-brand-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {{ sending ? 'Sending…' : 'Send message' }}
            </button>
          </form>
        </div>
        <!-- Contact info -->
        <div class="md:col-span-2">
          <div class="rounded-2xl bg-surface-muted/50 p-6 border border-surface-muted sticky top-24">
            <h2 class="font-display font-semibold text-ink text-lg mb-4 flex items-center gap-2">
              <span class="text-accent">📍</span> Our Location
            </h2>
            <address class="text-ink/90 not-italic space-y-2">
              <strong>Bal Krishna Nursery</strong><br />
              SKSS Temple Woolwich,<br />
              St. Margarets Grove,<br />
              London, SE18 7RL
            </address>
            <div class="mt-6 space-y-3">
              <p class="flex items-center gap-2 text-ink">
                <span>📞</span>
                <a href="tel:+442037456070" class="hover:text-brand underline">020 3745 6070</a>
              </p>
              <p class="flex items-center gap-2 text-ink">
                <span>✉️</span>
                <a href="mailto:info@balkrishna.org" class="hover:text-brand underline">info@balkrishna.org</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 rounded-2xl overflow-hidden shadow-lg">
        <Map />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  message: '',
})
const honeypot = ref('')
const sending = ref(false)
const submitted = ref(false)
const error = ref('')

// Check for success query param (redirect after form post)
const route = useRoute()
if (route.query?.success === 'true') {
  submitted.value = true
}

function encodeFormData(data: Record<string, string>) {
  return new URLSearchParams(data).toString()
}

async function handleSubmit() {
  error.value = ''
  if (honeypot.value) return // spam
  sending.value = true
  try {
    const body = encodeFormData({
      'form-name': 'contact',
      'full-name': form.fullName,
      email: form.email,
      phone: form.phone,
      message: form.message,
      'bot-field': honeypot.value,
    })
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
    if (!res.ok) throw new Error('Something went wrong. Please try again or email us directly.')
    submitted.value = true
    // Clean URL
    if (import.meta.client && window.history?.replaceState) {
      window.history.replaceState({}, '', '/contact')
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Something went wrong. Please try again or email us directly.'
  } finally {
    sending.value = false
  }
}
</script>
