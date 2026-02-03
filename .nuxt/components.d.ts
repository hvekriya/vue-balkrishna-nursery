
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const AtAGlance: typeof import("../components/AtAGlance.vue").default
export const Banner: typeof import("../components/Banner.vue").default
export const Faq: typeof import("../components/Faq.vue").default
export const FeaturedArticles: typeof import("../components/FeaturedArticles.vue").default
export const Footer: typeof import("../components/Footer.vue").default
export const Header: typeof import("../components/Header.vue").default
export const ImageSlice: typeof import("../components/ImageSlice.vue").default
export const Map: typeof import("../components/Map.vue").default
export const RecentBlog: typeof import("../components/RecentBlog.vue").default
export const Reviews: typeof import("../components/Reviews.vue").default
export const Slider: typeof import("../components/Slider.vue").default
export const SocialFollow: typeof import("../components/SocialFollow.vue").default
export const Team: typeof import("../components/Team.vue").default
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue").default
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout").default
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only").default
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only").default
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder").default
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link").default
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
export const PrismicEmbed: typeof import("@prismicio/vue").PrismicEmbed
export const PrismicImage: typeof import("@prismicio/vue").PrismicImage
export const PrismicLink: typeof import("@prismicio/vue").PrismicLink
export const PrismicText: typeof import("@prismicio/vue").PrismicText
export const PrismicRichText: typeof import("@prismicio/vue").PrismicRichText
export const PrismicTable: typeof import("@prismicio/vue").PrismicTable
export const SliceZone: typeof import("@prismicio/vue").SliceZone
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page").default
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components").NoScript
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components").Link
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components").Base
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components").Title
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components").Meta
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components").Style
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components").Head
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components").Html
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components").Body
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island").default
export const LazyAtAGlance: LazyComponent<typeof import("../components/AtAGlance.vue").default>
export const LazyBanner: LazyComponent<typeof import("../components/Banner.vue").default>
export const LazyFaq: LazyComponent<typeof import("../components/Faq.vue").default>
export const LazyFeaturedArticles: LazyComponent<typeof import("../components/FeaturedArticles.vue").default>
export const LazyFooter: LazyComponent<typeof import("../components/Footer.vue").default>
export const LazyHeader: LazyComponent<typeof import("../components/Header.vue").default>
export const LazyImageSlice: LazyComponent<typeof import("../components/ImageSlice.vue").default>
export const LazyMap: LazyComponent<typeof import("../components/Map.vue").default>
export const LazyRecentBlog: LazyComponent<typeof import("../components/RecentBlog.vue").default>
export const LazyReviews: LazyComponent<typeof import("../components/Reviews.vue").default>
export const LazySlider: LazyComponent<typeof import("../components/Slider.vue").default>
export const LazySocialFollow: LazyComponent<typeof import("../components/SocialFollow.vue").default>
export const LazyTeam: LazyComponent<typeof import("../components/Team.vue").default>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue").default>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout").default>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only").default>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only").default>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder").default>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link").default>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
export const LazyPrismicEmbed: LazyComponent<typeof import("@prismicio/vue").PrismicEmbed>
export const LazyPrismicImage: LazyComponent<typeof import("@prismicio/vue").PrismicImage>
export const LazyPrismicLink: LazyComponent<typeof import("@prismicio/vue").PrismicLink>
export const LazyPrismicText: LazyComponent<typeof import("@prismicio/vue").PrismicText>
export const LazyPrismicRichText: LazyComponent<typeof import("@prismicio/vue").PrismicRichText>
export const LazyPrismicTable: LazyComponent<typeof import("@prismicio/vue").PrismicTable>
export const LazySliceZone: LazyComponent<typeof import("@prismicio/vue").SliceZone>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page").default>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").NoScript>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Link>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Base>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Title>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Meta>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Style>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Head>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Html>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Body>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island").default>

export const componentNames: string[]
