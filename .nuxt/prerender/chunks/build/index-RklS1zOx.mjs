import { u as usePrismic, g as useAsyncData, h as createError, c as _sfc_main$3$1, e as _sfc_main$7, f as _sfc_main$a, _ as __nuxt_component_0$1, d as _sfc_main$b } from './server.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, mergeProps, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, computed, useSSRContext } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$8 } from './Faq-B4VKcdOI.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$9 } from './ImageSlice-Bk5ifv0V.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/hookable/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unctx/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/h3/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue-router/vue-router.node.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/defu/dist/defu.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/ufo/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/@prismicio/client/dist/index.js';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/@prismicio/client/dist/richtext.js';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/esm-env/index.js';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/perfect-debounce/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/destr/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/ohash/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/klona/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/scule/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/pathe/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unhead/dist/server.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/devalue/index.js';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unhead/dist/plugins.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AtAGlance",
  __ssrInlineRender: true,
  setup(__props) {
    const offerings = [
      { to: "/our-nursery/fees-and-funding", label: "Fees & funding", icon: "\u{1F4B7}" },
      { to: "/our-nursery/meet-the-team", label: "Meet the team", icon: "\u{1F469}\u200D\u{1F467}\u200D\u{1F466}" },
      { to: "/our-nursery/policies", label: "Policies", icon: "\u{1F4CB}" },
      { to: "/contact", label: "Contact us", icon: "\u{1F4DE}" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "my-12" }, _attrs))}><h2 class="font-display text-2xl md:text-3xl font-bold text-ink mb-2"> Here&#39;s an &#39;at a glance&#39; guide to what Bal Krishna has to offer </h2><p class="text-ink-light mb-8 max-w-2xl"> Quick links to what matters most for your family. </p><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(offerings, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.to,
          to: item.to,
          class: "group flex flex-col items-center text-center p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-2xl mb-2" aria-hidden="true"${_scopeId}>${ssrInterpolate(item.icon)}</span><span class="font-display font-semibold text-ink text-sm leading-tight group-hover:text-brand transition-colors"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
            } else {
              return [
                createVNode("span", {
                  class: "text-2xl mb-2",
                  "aria-hidden": "true"
                }, toDisplayString(item.icon), 1),
                createVNode("span", { class: "font-display font-semibold text-ink text-sm leading-tight group-hover:text-brand transition-colors" }, toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AtAGlance.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "FeaturedArticles",
  __ssrInlineRender: true,
  props: {
    slices: {}
  },
  setup(__props) {
    function getInternalPath(link) {
      var _a;
      if (!link || link.link_type !== "Document" || !link.uid) return null;
      const type = (_a = link.type) != null ? _a : "";
      const uid = link.uid;
      if (type === "blog") return `/post/${uid}`;
      if (type === "home") return "/";
      if (type === "our-nursery" || type === "our_nursery") return `/our-nursery/${uid}`;
      if (type === "parents") return `/parents/${uid}`;
      if (type && uid) return `/${type}/${uid}`;
      return null;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_PrismicText = _sfc_main$3$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_PrismicImage = _sfc_main$b;
      const _component_PrismicRichText = _sfc_main$7;
      const _component_PrismicLink = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList((_a = __props.slices) != null ? _a : [], (slice, index2) => {
        var _a2, _b;
        _push(`<!--[-->`);
        if (slice.slice_type === "list_of_articles") {
          _push(`<section class="my-12"><h2 class="font-display text-2xl font-bold text-ink mb-6">`);
          if ((_a2 = slice.primary) == null ? void 0 : _a2.section_title) {
            _push(ssrRenderComponent(_component_PrismicText, {
              field: slice.primary.section_title
            }, null, _parent));
          } else {
            _push(`<!--[-->Featured<!--]-->`);
          }
          _push(`</h2><div class="grid md:grid-cols-2 gap-6"><!--[-->`);
          ssrRenderList((_b = slice.items) != null ? _b : [], (item, i) => {
            var _a3;
            _push(`<article class="group rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm border border-white/60 shadow-xl hover:shadow-2xl hover:bg-white/90 transition-all duration-300">`);
            if (getInternalPath(item.article_to_link)) {
              _push(ssrRenderComponent(_component_NuxtLink, {
                to: getInternalPath(item.article_to_link) || "/",
                class: "block h-full flex flex-col"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="relative overflow-hidden"${_scopeId}>`);
                    if (item.article_cover) {
                      _push2(ssrRenderComponent(_component_PrismicImage, {
                        field: item.article_cover,
                        class: "w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                      }, null, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<div class="absolute inset-0 bg-gradient-to-t from-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"${_scopeId}></div></div><div class="p-6 flex-1 flex flex-col"${_scopeId}><div class="font-display font-semibold text-ink text-lg mb-2 group-hover:text-brand transition-colors prose prose-brand prose-sm max-w-none [&amp;_p]:my-0 [&amp;_h1]:my-0 [&amp;_h2]:my-0 [&amp;_h3]:my-0"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_PrismicRichText, {
                      field: item.article_title
                    }, null, _parent2, _scopeId));
                    _push2(`</div><div class="text-ink-light text-sm line-clamp-3 flex-1 prose prose-brand prose-sm max-w-none [&amp;_p]:my-0 [&amp;_p:first-child]:mt-0 [&amp;_p:last-child]:mb-0"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_PrismicRichText, {
                      field: item.article_description
                    }, null, _parent2, _scopeId));
                    _push2(`</div><span class="inline-flex items-center gap-1 mt-4 text-brand font-display font-semibold text-sm"${_scopeId}> Read more <span class="transition-transform group-hover:translate-x-1"${_scopeId}>\u2192</span></span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "relative overflow-hidden" }, [
                        item.article_cover ? (openBlock(), createBlock(_component_PrismicImage, {
                          key: 0,
                          field: item.article_cover,
                          class: "w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                        }, null, 8, ["field"])) : createCommentVNode("", true),
                        createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" })
                      ]),
                      createVNode("div", { class: "p-6 flex-1 flex flex-col" }, [
                        createVNode("div", { class: "font-display font-semibold text-ink text-lg mb-2 group-hover:text-brand transition-colors prose prose-brand prose-sm max-w-none [&_p]:my-0 [&_h1]:my-0 [&_h2]:my-0 [&_h3]:my-0" }, [
                          createVNode(_component_PrismicRichText, {
                            field: item.article_title
                          }, null, 8, ["field"])
                        ]),
                        createVNode("div", { class: "text-ink-light text-sm line-clamp-3 flex-1 prose prose-brand prose-sm max-w-none [&_p]:my-0 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0" }, [
                          createVNode(_component_PrismicRichText, {
                            field: item.article_description
                          }, null, 8, ["field"])
                        ]),
                        createVNode("span", { class: "inline-flex items-center gap-1 mt-4 text-brand font-display font-semibold text-sm" }, [
                          createTextVNode(" Read more "),
                          createVNode("span", { class: "transition-transform group-hover:translate-x-1" }, "\u2192")
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else if ((_a3 = item.article_to_link) == null ? void 0 : _a3.url) {
              _push(ssrRenderComponent(_component_PrismicLink, {
                field: item.article_to_link,
                class: "block h-full flex flex-col"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="relative overflow-hidden"${_scopeId}>`);
                    if (item.article_cover) {
                      _push2(ssrRenderComponent(_component_PrismicImage, {
                        field: item.article_cover,
                        class: "w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                      }, null, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<div class="absolute inset-0 bg-gradient-to-t from-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"${_scopeId}></div></div><div class="p-6 flex-1 flex flex-col"${_scopeId}><div class="font-display font-semibold text-ink text-lg mb-2 group-hover:text-brand transition-colors prose prose-brand prose-sm max-w-none [&amp;_p]:my-0 [&amp;_h1]:my-0 [&amp;_h2]:my-0 [&amp;_h3]:my-0"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_PrismicRichText, {
                      field: item.article_title
                    }, null, _parent2, _scopeId));
                    _push2(`</div><div class="text-ink-light text-sm line-clamp-3 flex-1 prose prose-brand prose-sm max-w-none [&amp;_p]:my-0 [&amp;_p:first-child]:mt-0 [&amp;_p:last-child]:mb-0"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_PrismicRichText, {
                      field: item.article_description
                    }, null, _parent2, _scopeId));
                    _push2(`</div><span class="inline-flex items-center gap-1 mt-4 text-brand font-display font-semibold text-sm"${_scopeId}> Read more <span class="transition-transform group-hover:translate-x-1"${_scopeId}>\u2192</span></span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "relative overflow-hidden" }, [
                        item.article_cover ? (openBlock(), createBlock(_component_PrismicImage, {
                          key: 0,
                          field: item.article_cover,
                          class: "w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                        }, null, 8, ["field"])) : createCommentVNode("", true),
                        createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" })
                      ]),
                      createVNode("div", { class: "p-6 flex-1 flex flex-col" }, [
                        createVNode("div", { class: "font-display font-semibold text-ink text-lg mb-2 group-hover:text-brand transition-colors prose prose-brand prose-sm max-w-none [&_p]:my-0 [&_h1]:my-0 [&_h2]:my-0 [&_h3]:my-0" }, [
                          createVNode(_component_PrismicRichText, {
                            field: item.article_title
                          }, null, 8, ["field"])
                        ]),
                        createVNode("div", { class: "text-ink-light text-sm line-clamp-3 flex-1 prose prose-brand prose-sm max-w-none [&_p]:my-0 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0" }, [
                          createVNode(_component_PrismicRichText, {
                            field: item.article_description
                          }, null, 8, ["field"])
                        ]),
                        createVNode("span", { class: "inline-flex items-center gap-1 mt-4 text-brand font-display font-semibold text-sm" }, [
                          createTextVNode(" Read more "),
                          createVNode("span", { class: "transition-transform group-hover:translate-x-1" }, "\u2192")
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<div class="block h-full flex flex-col"><div class="relative overflow-hidden">`);
              if (item.article_cover) {
                _push(ssrRenderComponent(_component_PrismicImage, {
                  field: item.article_cover,
                  class: "w-full aspect-video object-cover"
                }, null, _parent));
              } else {
                _push(`<!---->`);
              }
              _push(`</div><div class="p-6 flex-1 flex flex-col"><div class="font-display font-semibold text-ink text-lg mb-2 prose prose-brand prose-sm max-w-none [&amp;_p]:my-0 [&amp;_h1]:my-0 [&amp;_h2]:my-0 [&amp;_h3]:my-0">`);
              _push(ssrRenderComponent(_component_PrismicRichText, {
                field: item.article_title
              }, null, _parent));
              _push(`</div><div class="text-ink-light text-sm line-clamp-3 flex-1 prose prose-brand prose-sm max-w-none [&amp;_p]:my-0 [&amp;_p:first-child]:mt-0 [&amp;_p:last-child]:mb-0">`);
              _push(ssrRenderComponent(_component_PrismicRichText, {
                field: item.article_description
              }, null, _parent));
              _push(`</div></div></div>`);
            }
            _push(`</article>`);
          });
          _push(`<!--]--></div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeaturedArticles.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "RecentBlog",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const prismic = usePrismic();
    const { data: result } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "recent-blog",
      () => prismic.client.getByType("blog", {
        orderings: [{ field: "document.first_publication_date", direction: "desc" }],
        pageSize: 4
      })
    )), __temp = await __temp, __restore(), __temp);
    const posts = computed(() => {
      var _a, _b;
      return (_b = (_a = result.value) == null ? void 0 : _a.results) != null ? _b : [];
    });
    function readMore(content, length) {
      if (!content || !Array.isArray(content)) return "";
      const text = content.map((b) => b.text).filter(Boolean).join(" ");
      return text.length > length ? `${text.slice(0, length)}...` : text;
    }
    function formatDate(value) {
      if (!value) return "";
      return new Date(value).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_PrismicText = _sfc_main$3$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "my-12" }, _attrs))}><h2 class="font-display text-2xl text-ink mb-6">Our recent blog articles</h2><div class="space-y-6"><!--[-->`);
      ssrRenderList(unref(posts), (post) => {
        var _a;
        _push(`<article class="py-6 border-b border-gray-200 last:border-0"><h3 class="font-display font-semibold text-lg text-ink mb-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/post/${post.uid}`,
          class: "hover:text-ink-light transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(ssrRenderComponent(_component_PrismicText, {
                field: (_a2 = post.data) == null ? void 0 : _a2.title
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_PrismicText, {
                  field: (_b = post.data) == null ? void 0 : _b.title
                }, null, 8, ["field"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h3><p class="text-ink/80 text-sm mb-2 line-clamp-2">${ssrInterpolate(readMore((_a = post.data) == null ? void 0 : _a.content, 200))}</p><p class="text-ink/60 text-xs"> Posted on ${ssrInterpolate(formatDate(post.first_publication_date))}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/post/${post.uid}`,
          class: "inline-block mt-2 text-accent font-display font-semibold text-sm hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Read more \u2192 `);
            } else {
              return [
                createTextVNode(" Read more \u2192 ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</article>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "inline-flex mt-8 px-6 py-3 rounded-xl bg-brand text-white font-display font-semibold hover:bg-brand-light transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View more `);
          } else {
            return [
              createTextVNode(" View more ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RecentBlog.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Slider",
  __ssrInlineRender: true,
  props: {
    slices: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrismicImage = _sfc_main$b;
      _push(`<!--[-->`);
      ssrRenderList(__props.slices, (slice, index2) => {
        var _a;
        _push(`<!--[-->`);
        if (slice.slice_type === "image_gallery" && ((_a = slice.items) == null ? void 0 : _a.length)) {
          _push(`<section class="my-12 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg"><div class="relative"><div class="flex overflow-x-auto snap-x snap-mandatory gap-4 p-4 scroll-smooth"><!--[-->`);
          ssrRenderList(slice.items, (item, i) => {
            _push(`<div class="flex-shrink-0 w-[85vw] max-w-2xl snap-center rounded-xl overflow-hidden shadow-lg">`);
            if (item.gallery_image) {
              _push(ssrRenderComponent(_component_PrismicImage, {
                field: item.gallery_image,
                class: "w-full aspect-video object-cover"
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div></div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Slider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Reviews",
  __ssrInlineRender: true,
  setup(__props) {
    const reviews = [
      {
        quote: "A welcoming and caring environment. My child has thrived here and the staff are wonderful.",
        author: "Parent"
      },
      {
        quote: "We are so happy we chose Bal Krishna Nursery. The team really care about each child.",
        author: "Parent"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "my-12" }, _attrs))}><h2 class="font-display text-2xl md:text-3xl font-bold text-ink mb-2"> Find out what people love about us </h2><p class="text-ink-light mb-8 max-w-2xl"> Reviews from parents and carers \u2013 see what they say on Google. </p><div class="grid md:grid-cols-2 gap-6 mb-8"><!--[-->`);
      ssrRenderList(reviews, (review, i) => {
        _push(`<div class="rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg p-6 flex flex-col"><p class="text-ink flex-1 italic mb-4">&quot;${ssrInterpolate(review.quote)}&quot;</p><p class="text-ink-light text-sm font-display font-semibold">${ssrInterpolate(review.author)}</p><p class="text-ink-muted text-xs">Google review</p></div>`);
      });
      _push(`<!--]--></div><a href="https://www.google.com/search?q=Bal+Krishna+Nursery+Woolwich+reviews" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/90 backdrop-blur-sm border border-white/60 shadow-lg font-display font-semibold text-ink hover:bg-white transition-colors"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg> View all reviews on Google </a></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Reviews.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "my-12" }, _attrs))}><h2 class="font-display text-2xl md:text-3xl font-bold text-ink mb-2"> Follow us on social media </h2><p class="text-ink-light mb-8 max-w-2xl"> Join us on Facebook and Instagram for updates, activities and a peek at what we get up to every day. </p><div class="grid sm:grid-cols-2 gap-6"><a href="https://www.facebook.com/Bal-Krishna-Nursery-101302974825134/" target="_blank" rel="noopener" class="group flex items-center gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300"><span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1877F2] text-white"><svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></span><div><span class="font-display font-semibold text-ink group-hover:text-brand transition-colors block">Follow us on Facebook</span><span class="text-ink-light text-sm">Like our page for news and photos</span></div><span class="ml-auto text-brand">\u2192</span></a><a href="https://www.instagram.com/balkrishnanursery/" target="_blank" rel="noopener" class="group flex items-center gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300"><span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white"><svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"></path><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg></span><div><span class="font-display font-semibold text-ink group-hover:text-brand transition-colors block">Follow us on Instagram</span><span class="text-ink-light text-sm">See our day-to-day and activities</span></div><span class="ml-auto text-brand">\u2192</span></a></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialFollow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = publicAssetsURL("/img/home-bg.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const prismic = usePrismic();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "home",
      () => prismic.client.getSingle("home")
    )), __temp = await __temp, __restore(), __temp);
    if (!page.value) {
      throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
      const _component_PrismicText = _sfc_main$3$1;
      const _component_PrismicRichText = _sfc_main$7;
      const _component_AtAGlance = _sfc_main$6;
      const _component_Faq = _sfc_main$8;
      const _component_FeaturedArticles = _sfc_main$5;
      const _component_RecentBlog = _sfc_main$4;
      const _component_Banner = _sfc_main$1$1;
      const _component_Slider = _sfc_main$3;
      const _component_ImageSlice = _sfc_main$9;
      const _component_Reviews = _sfc_main$2;
      const _component_SocialFollow = __nuxt_component_10;
      const _component_PrismicLink = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a5123c09><section class="relative overflow-hidden" data-v-a5123c09>`);
      if ((_c = (_b = (_a = unref(page)) == null ? void 0 : _a.data) == null ? void 0 : _b.cover) == null ? void 0 : _c.url) {
        _push(`<img${ssrRenderAttr("src", unref(page).data.cover.url)}${ssrRenderAttr("alt", (_d = unref(page).data.cover.alt) != null ? _d : "Bal Krishna Nursery")} class="w-full h-[75vh] min-h-[420px] object-cover object-center" data-v-a5123c09>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_0)} alt="Bal Krishna Nursery" class="w-full h-[75vh] min-h-[420px] object-cover object-center" data-v-a5123c09>`);
      }
      _push(`<div class="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/30 to-transparent" data-v-a5123c09></div><div class="absolute inset-0 flex items-end pb-12 md:pb-16" data-v-a5123c09><div class="container mx-auto px-4" data-v-a5123c09><p class="text-white/95 text-lg md:text-xl font-display font-semibold drop-shadow-sm" data-v-a5123c09>`);
      if ((_f = (_e = unref(page)) == null ? void 0 : _e.data) == null ? void 0 : _f.welcome_heading) {
        _push(`<span data-v-a5123c09>`);
        _push(ssrRenderComponent(_component_PrismicText, {
          field: unref(page).data.welcome_heading
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<span data-v-a5123c09>Welcome to Bal Krishna Nursery</span>`);
      }
      _push(`</p><h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-display font-bold drop-shadow-lg mt-1 max-w-2xl" data-v-a5123c09>`);
      if ((_h = (_g = unref(page)) == null ? void 0 : _g.data) == null ? void 0 : _h.welcome_title) {
        _push(`<span data-v-a5123c09>`);
        _push(ssrRenderComponent(_component_PrismicText, {
          field: unref(page).data.welcome_title
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<span data-v-a5123c09>A caring start for every child</span>`);
      }
      _push(`</h1></div></div></section><div class="container mx-auto px-4 py-12 max-w-4xl" data-v-a5123c09><div class="rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 p-6 md:p-10 mb-10" data-v-a5123c09>`);
      if ((_j = (_i = unref(page)) == null ? void 0 : _i.data) == null ? void 0 : _j.content) {
        _push(`<div class="prose prose-brand max-w-none mb-12" data-v-a5123c09>`);
        _push(ssrRenderComponent(_component_PrismicRichText, {
          field: unref(page).data.content
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_AtAGlance, null, null, _parent));
      if ((_l = (_k = unref(page)) == null ? void 0 : _k.data) == null ? void 0 : _l.body) {
        _push(ssrRenderComponent(_component_Faq, {
          slices: unref(page).data.body
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if ((_n = (_m = unref(page)) == null ? void 0 : _m.data) == null ? void 0 : _n.body) {
        _push(ssrRenderComponent(_component_FeaturedArticles, {
          slices: unref(page).data.body
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_RecentBlog, null, null, _parent));
      if ((_p = (_o = unref(page)) == null ? void 0 : _o.data) == null ? void 0 : _p.body) {
        _push(ssrRenderComponent(_component_Faq, {
          slices: unref(page).data.body
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if ((_r = (_q = unref(page)) == null ? void 0 : _q.data) == null ? void 0 : _r.body) {
        _push(ssrRenderComponent(_component_Banner, {
          slices: unref(page).data.body
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if ((_t = (_s = unref(page)) == null ? void 0 : _s.data) == null ? void 0 : _t.body) {
        _push(ssrRenderComponent(_component_Slider, {
          slices: unref(page).data.body
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if ((_v = (_u = unref(page)) == null ? void 0 : _u.data) == null ? void 0 : _v.body) {
        _push(ssrRenderComponent(_component_ImageSlice, {
          slices: unref(page).data.body
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Reviews, null, null, _parent));
      _push(ssrRenderComponent(_component_SocialFollow, null, null, _parent));
      if ((_x = (_w = unref(page)) == null ? void 0 : _w.data) == null ? void 0 : _x.cta_link) {
        _push(`<div class="mt-10" data-v-a5123c09>`);
        _push(ssrRenderComponent(_component_PrismicLink, {
          field: unref(page).data.cta_link,
          class: "inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand text-white font-display font-semibold hover:bg-brand-light transition-colors shadow-lg"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_PrismicText, {
                field: unref(page).data.cta_text
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_PrismicText, {
                  field: unref(page).data.cta_text
                }, null, 8, ["field"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a5123c09"]]);

export { index as default };
//# sourceMappingURL=index-RklS1zOx.mjs.map
