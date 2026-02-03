import { i as useRoute, u as usePrismic, _ as __nuxt_component_0$1, j as useRuntimeConfig } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, toDisplayString } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue/server-renderer/index.mjs';
import { asText } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/@prismicio/client/dist/index.js';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/hookable/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unctx/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/h3/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue-router/vue-router.node.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/defu/dist/defu.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/ufo/dist/index.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    usePrismic();
    const menuOpen = ref(false);
    const ourNurseryOpen = ref(false);
    const parentsOpen = ref(false);
    const parentsLoaded = ref(false);
    const ourNurseryLinks = [
      { to: "/our-nursery/our-values", label: "Our vision and values" },
      { to: "/our-nursery/curriculum", label: "Curriculum" },
      { to: "/our-nursery/food", label: "Food" },
      { to: "/our-nursery/fees-and-funding", label: "Fees and funding" },
      { to: "/our-nursery/meet-the-team", label: "Meet the team" },
      { to: "/our-nursery/vacancy", label: "Vacancy" },
      { to: "/our-nursery/policies", label: "Policies" }
    ];
    const parentsMenu = ref([]);
    function isActive(path) {
      return route.path.startsWith(path);
    }
    function closeAll() {
      menuOpen.value = false;
      ourNurseryOpen.value = false;
      parentsOpen.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 w-full bg-white shadow-md border-b border-violet-200 text-violet-900" }, _attrs))}><nav class="container mx-auto px-4 flex items-center justify-between h-16">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "font-display font-bold text-xl text-violet-900 hover:text-violet-700 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Bal Krishna Nursery `);
          } else {
            return [
              createTextVNode(" Bal Krishna Nursery ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="button" class="${ssrRenderClass([{ "bg-violet-100": unref(menuOpen) }, "md:hidden p-2 rounded-lg hover:bg-violet-100 text-violet-900 transition-colors"])}" aria-label="Toggle menu"${ssrRenderAttr("aria-expanded", unref(menuOpen))}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">`);
      if (!unref(menuOpen)) {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`);
      } else {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`);
      }
      _push(`</svg></button><div class="${ssrRenderClass([unref(menuOpen) ? "max-h-[85vh]" : "max-h-0 md:max-h-none", "absolute md:static top-16 left-0 right-0 md:top-0 bg-violet-50 md:bg-transparent shadow-xl md:shadow-none backdrop-blur-lg md:backdrop-blur-none overflow-hidden transition-[max-height] duration-300 ease-out md:overflow-visible"])}"><ul class="flex flex-col md:flex-row md:items-center md:gap-0.5 container mx-auto px-4 py-4 md:py-0 md:px-0"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: ["block py-3 md:py-2.5 px-4 rounded-lg text-violet-900 hover:bg-violet-100 transition-colors", { "bg-violet-100": unref(route).path === "/" }],
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="relative group"><button type="button" class="${ssrRenderClass([{ "bg-violet-100": isActive("/our-nursery") }, "w-full md:w-auto flex items-center justify-between md:justify-center gap-2 py-3 md:py-2.5 px-4 rounded-lg text-violet-900 hover:bg-violet-100 transition-colors text-left"])}"${ssrRenderAttr("aria-expanded", unref(ourNurseryOpen))} aria-haspopup="true" aria-controls="our-nursery-menu"><span>Our Nursery</span><svg class="${ssrRenderClass([{ "rotate-180": unref(ourNurseryOpen) }, "w-4 h-4 shrink-0 transition-transform"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><ul id="our-nursery-menu" class="${ssrRenderClass([[
        unref(ourNurseryOpen) ? "block" : "hidden md:block",
        unref(ourNurseryOpen) && "md:!opacity-100 md:!visible md:!pointer-events-auto"
      ], "md:absolute md:left-0 md:top-full md:pt-1 md:-mt-1 md:min-w-[220px] md:opacity-0 md:invisible md:pointer-events-none md:group-hover:opacity-100 md:group-hover:visible md:group-hover:pointer-events-auto md:transition-all md:duration-200"])}"><li class="md:bg-white md:rounded-xl md:shadow-xl md:py-2 md:border border-violet-100"><!--[-->`);
      ssrRenderList(ourNurseryLinks, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.to,
          class: "block py-2.5 px-4 md:py-2 md:px-4 text-violet-900 hover:bg-violet-100 md:hover:bg-violet-50",
          onClick: closeAll
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></li></ul></li><li class="relative group"><button type="button" class="${ssrRenderClass([{ "bg-violet-100": isActive("/parents") }, "w-full md:w-auto flex items-center justify-between md:justify-center gap-2 py-3 md:py-2.5 px-4 rounded-lg text-violet-900 hover:bg-violet-100 transition-colors text-left"])}"${ssrRenderAttr("aria-expanded", unref(parentsOpen))} aria-haspopup="true" aria-controls="parents-menu"><span>Parents</span><svg class="${ssrRenderClass([{ "rotate-180": unref(parentsOpen) }, "w-4 h-4 shrink-0 transition-transform"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><ul id="parents-menu" class="${ssrRenderClass([[
        unref(parentsOpen) ? "block" : "hidden md:block",
        unref(parentsOpen) && "md:!opacity-100 md:!visible md:!pointer-events-auto"
      ], "md:absolute md:left-0 md:top-full md:pt-1 md:-mt-1 md:min-w-[200px] md:opacity-0 md:invisible md:pointer-events-none md:group-hover:opacity-100 md:group-hover:visible md:group-hover:pointer-events-auto md:transition-all md:duration-200"])}"><li class="md:bg-white md:rounded-xl md:shadow-xl md:py-2 md:border border-violet-100"><!--[-->`);
      ssrRenderList(unref(parentsMenu), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/parents/${item.uid}`,
          class: "block py-2.5 px-4 md:py-2 md:px-4 text-violet-900 hover:bg-violet-100 md:hover:bg-violet-50",
          onClick: closeAll
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(`${ssrInterpolate(unref(asText)((_a = item.data) == null ? void 0 : _a.title))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(asText)((_b = item.data) == null ? void 0 : _b.title)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      if (unref(parentsMenu).length === 0 && !unref(parentsLoaded)) {
        _push(`<p class="py-2 px-4 text-violet-700 text-sm">Loading\u2026</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li></ul></li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: ["block py-3 md:py-2.5 px-4 rounded-lg text-violet-900 hover:bg-violet-100 transition-colors", { "bg-violet-100": unref(route).path.startsWith("/blog") }],
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Blog `);
          } else {
            return [
              createTextVNode(" Blog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: ["block py-3 md:py-2.5 px-4 rounded-lg text-violet-900 hover:bg-violet-100 transition-colors", { "bg-violet-100": unref(route).path === "/contact" }],
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact `);
          } else {
            return [
              createTextVNode(" Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="flex gap-1 py-3 md:py-0 px-4 border-t md:border-t-0 border-violet-200 mt-2 md:mt-0 md:ml-2"><a href="https://www.facebook.com/Bal-Krishna-Nursery-101302974825134/" target="_blank" rel="noopener" class="p-2.5 rounded-lg text-violet-700 hover:bg-violet-100 transition-colors" aria-label="Facebook"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a><a href="https://www.instagram.com/balkrishnanursery/" target="_blank" rel="noopener" class="p-2.5 rounded-lg text-violet-700 hover:bg-violet-100 transition-colors" aria-label="Instagram"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"></path><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg></a></li></ul></div></nav></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/img/logo.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const config = useRuntimeConfig();
    const rawBase = (_b = (_a = config.app) == null ? void 0 : _a.baseURL) != null ? _b : "/";
    const base = (typeof rawBase === "string" && rawBase !== "&" ? rawBase.replace(/\/$/, "") : "") || "";
    const ofstedImageSrc = base ? `${base}/img/Ofsted_Good_GP_Colour.png` : "/img/Ofsted_Good_GP_Colour.png";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "mt-auto bg-violet-50 shadow-inner text-violet-900 border-t border-violet-200 pt-12 pb-8" }, _attrs))}><div class="container mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10"><div><img${ssrRenderAttr("src", _imports_0)} alt="Bal Krishna Nursery" class="h-14 w-auto mb-4"><h3 class="font-display font-bold text-lg mb-2 text-violet-900">Bal Krishna Nursery</h3><p class="text-violet-800 text-sm leading-relaxed mb-4"> By Woolwich Temple. A caring start for every child. </p><div class="flex gap-3"><a href="https://www.facebook.com/Bal-Krishna-Nursery-101302974825134/" target="_blank" rel="noopener" class="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-200 text-violet-700 hover:bg-violet-300 transition-colors" aria-label="Facebook"><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a><a href="https://www.instagram.com/balkrishnanursery/" target="_blank" rel="noopener" class="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-200 text-violet-700 hover:bg-violet-300 transition-colors" aria-label="Instagram"><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"></path><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg></a></div></div><div><h4 class="font-display font-bold text-lg mb-4 border-b border-violet-200 pb-2 inline-block text-violet-900"> Quick Links </h4><ul class="space-y-2.5 text-sm"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-violet-800 hover:text-violet-900 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/our-nursery/our-values",
        class: "text-violet-800 hover:text-violet-900 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Our Nursery`);
          } else {
            return [
              createTextVNode("Our Nursery")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/parents",
        class: "text-violet-800 hover:text-violet-900 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Parents`);
          } else {
            return [
              createTextVNode("Parents")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "text-violet-800 hover:text-violet-900 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "text-violet-800 hover:text-violet-900 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/our-nursery/privacy-policy",
        class: "text-violet-800 hover:text-violet-900 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h4 class="font-display font-bold text-lg mb-4 border-b border-violet-200 pb-2 inline-block text-violet-900"> Contact Us </h4><address class="text-violet-800 text-sm not-italic space-y-3"><p>SKSS Temple Woolwich,<br>St. Margarets Grove,<br>London, SE18 7RL</p><p><a href="tel:+442037456070" class="hover:text-violet-900 transition-colors">020 3745 6070</a></p><p><a href="mailto:info@balkrishna.org" class="hover:text-violet-900 transition-colors">info@balkrishna.org</a></p></address></div><div><h4 class="font-display font-bold text-lg mb-4 border-b border-violet-200 pb-2 inline-block text-violet-900"> Ofsted </h4><img${ssrRenderAttr("src", unref(ofstedImageSrc))} alt="Ofsted Good" width="120" height="48" class="h-12 w-auto object-contain" loading="lazy"></div></div><div class="border-t border-violet-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-violet-800"><p>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Bal Krishna Nursery. All rights reserved.</p><div class="flex flex-wrap items-center justify-center gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/our-nursery/privacy-policy",
        class: "hover:text-violet-900 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "hover:text-violet-900 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = _sfc_main$2;
  const _component_Footer = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col font-sans text-violet-900 bg-gradient-to-b from-violet-50/80 via-white to-violet-50/80" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main class="flex-1">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-cMl-m1OS.mjs.map
