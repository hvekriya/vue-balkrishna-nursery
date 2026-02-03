import { u as usePrismic, g as useAsyncData, _ as __nuxt_component_0$1, c as _sfc_main$3 } from './server.mjs';
import { defineComponent, withAsyncContext, computed, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/h3/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/destr/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/hookable/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/ohash/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/klona/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/defu/dist/defu.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/scule/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unctx/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/pathe/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unhead/dist/server.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/devalue/index.js';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue-router/vue-router.node.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/@prismicio/client/dist/index.js';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/@prismicio/client/dist/richtext.js';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/esm-env/index.js';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/perfect-debounce/dist/index.mjs';
import 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const prismic = usePrismic();
    const { data: result } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "blog-list",
      () => prismic.client.getByType("blog", {
        orderings: [{ field: "document.first_publication_date", direction: "desc" }]
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
      const _component_PrismicText = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative overflow-hidden bg-surface-muted py-20"><div class="container mx-auto px-4 text-center"><h1 class="font-display text-4xl md:text-5xl font-bold text-ink">Blog</h1></div></section><div class="container mx-auto px-4 py-12 max-w-3xl"><div class="rounded-2xl bg-white/95 backdrop-blur-sm border border-white/60 shadow-xl p-6 md:p-10"><div class="space-y-10"><!--[-->`);
      ssrRenderList(unref(posts), (post) => {
        var _a;
        _push(`<article class="py-8 border-b border-surface-muted last:border-0"><h2 class="font-display text-2xl font-semibold text-ink mb-2">`);
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
        _push(`</h2><p class="text-ink/80 mb-2 line-clamp-2">${ssrInterpolate(readMore((_a = post.data) == null ? void 0 : _a.content, 200))}</p><p class="text-ink/60 text-sm mb-4"> Posted on ${ssrInterpolate(formatDate(post.first_publication_date))}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/post/${post.uid}`,
          class: "text-ink-light font-display font-semibold hover:underline"
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
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BuDWFd_l.mjs.map
