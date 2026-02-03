import { createClient } from '@prismicio/client'

export default function () {
  const config = useRuntimeConfig()
  const prismicConfig = config.public.prismic as {
    endpoint?: string
    clientConfig?: { routes?: Array<{ type: string; path: string }>; accessToken?: string }
  }
  const endpoint = prismicConfig?.endpoint || process.env.NUXT_PUBLIC_PRISMIC_ENDPOINT || 'balkrishna'
  const clientConfig = prismicConfig?.clientConfig || {}

  return createClient(endpoint, {
    routes: clientConfig.routes ?? [
      { type: 'home', path: '/' },
      { type: 'our-nursery', path: '/our-nursery/:uid' },
      { type: 'parents', path: '/parents/:uid' },
      { type: 'blog', path: '/post/:uid' },
    ],
    accessToken: clientConfig.accessToken || process.env.NUXT_PUBLIC_PRISMIC_ACCESS_TOKEN || '',
  })
}
