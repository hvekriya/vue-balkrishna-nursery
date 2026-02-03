/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        brand: {
          css: {
            '--tw-prose-body': theme('colors.ink.DEFAULT'),
            '--tw-prose-headings': theme('colors.ink.DEFAULT'),
            '--tw-prose-links': theme('colors.brand.DEFAULT'),
            '--tw-prose-bold': theme('colors.ink.DEFAULT'),
            '--tw-prose-counters': theme('colors.ink.light'),
            '--tw-prose-bullets': theme('colors.ink.light'),
            '--tw-prose-quotes': theme('colors.ink.DEFAULT'),
            '--tw-prose-quote-borders': theme('colors.brand.DEFAULT'),
            '--tw-prose-captions': theme('colors.ink.light'),
            '--tw-prose-code': theme('colors.ink.DEFAULT'),
            '--tw-prose-pre-code': theme('colors.ink.DEFAULT'),
            '--tw-prose-pre-bg': theme('colors.surface.muted'),
            '--tw-prose-th-borders': theme('colors.violet[200]'),
            '--tw-prose-td-borders': theme('colors.violet[200]'),
            maxWidth: 'none',
          },
        },
      }),
      colors: {
        // Purple theme: light backgrounds, darker purple text
        brand: {
          DEFAULT: '#7c3aed', // violet-600
          light: '#8b5cf6',   // violet-500
          dark: '#6d28d9',    // violet-700
        },
        ink: {
          DEFAULT: '#4c1d95', // violet-900 – main text
          light: '#5b21b6',   // violet-800
          muted: '#6d28d9',   // violet-700
        },
        surface: {
          DEFAULT: '#faf5ff', // violet-50
          muted: '#f3e8ff',    // violet-100
        },
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        display: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
