
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

interface _GlobalComponents {
  'AtAGlance': typeof import("../../components/AtAGlance.vue").default
  'Banner': typeof import("../../components/Banner.vue").default
  'Faq': typeof import("../../components/Faq.vue").default
  'FeaturedArticles': typeof import("../../components/FeaturedArticles.vue").default
  'Footer': typeof import("../../components/Footer.vue").default
  'Header': typeof import("../../components/Header.vue").default
  'ImageSlice': typeof import("../../components/ImageSlice.vue").default
  'Map': typeof import("../../components/Map.vue").default
  'RecentBlog': typeof import("../../components/RecentBlog.vue").default
  'Reviews': typeof import("../../components/Reviews.vue").default
  'Slider': typeof import("../../components/Slider.vue").default
  'SocialFollow': typeof import("../../components/SocialFollow.vue").default
  'Team': typeof import("../../components/Team.vue").default
  'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default
  'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default
  'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
  'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only").default
  'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default
  'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default
  'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default
  'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
  'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
  'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
  'NuxtImg': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
  'NuxtPicture': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
  'PrismicEmbed': typeof import("@prismicio/vue").PrismicEmbed
  'PrismicImage': typeof import("@prismicio/vue").PrismicImage
  'PrismicLink': typeof import("@prismicio/vue").PrismicLink
  'PrismicText': typeof import("@prismicio/vue").PrismicText
  'PrismicRichText': typeof import("@prismicio/vue").PrismicRichText
  'PrismicTable': typeof import("@prismicio/vue").PrismicTable
  'SliceZone': typeof import("@prismicio/vue").SliceZone
  'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default
  'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript
  'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link
  'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base
  'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title
  'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta
  'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style
  'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head
  'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html
  'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body
  'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default
  'LazyAtAGlance': LazyComponent<typeof import("../../components/AtAGlance.vue").default>
  'LazyBanner': LazyComponent<typeof import("../../components/Banner.vue").default>
  'LazyFaq': LazyComponent<typeof import("../../components/Faq.vue").default>
  'LazyFeaturedArticles': LazyComponent<typeof import("../../components/FeaturedArticles.vue").default>
  'LazyFooter': LazyComponent<typeof import("../../components/Footer.vue").default>
  'LazyHeader': LazyComponent<typeof import("../../components/Header.vue").default>
  'LazyImageSlice': LazyComponent<typeof import("../../components/ImageSlice.vue").default>
  'LazyMap': LazyComponent<typeof import("../../components/Map.vue").default>
  'LazyRecentBlog': LazyComponent<typeof import("../../components/RecentBlog.vue").default>
  'LazyReviews': LazyComponent<typeof import("../../components/Reviews.vue").default>
  'LazySlider': LazyComponent<typeof import("../../components/Slider.vue").default>
  'LazySocialFollow': LazyComponent<typeof import("../../components/SocialFollow.vue").default>
  'LazyTeam': LazyComponent<typeof import("../../components/Team.vue").default>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only").default>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
  'LazyPrismicEmbed': LazyComponent<typeof import("@prismicio/vue").PrismicEmbed>
  'LazyPrismicImage': LazyComponent<typeof import("@prismicio/vue").PrismicImage>
  'LazyPrismicLink': LazyComponent<typeof import("@prismicio/vue").PrismicLink>
  'LazyPrismicText': LazyComponent<typeof import("@prismicio/vue").PrismicText>
  'LazyPrismicRichText': LazyComponent<typeof import("@prismicio/vue").PrismicRichText>
  'LazyPrismicTable': LazyComponent<typeof import("@prismicio/vue").PrismicTable>
  'LazySliceZone': LazyComponent<typeof import("@prismicio/vue").SliceZone>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript>
  'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link>
  'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style>
  'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html>
  'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
