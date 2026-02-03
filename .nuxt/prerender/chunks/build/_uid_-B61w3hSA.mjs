import { i as useRoute, u as usePrismic, g as useAsyncData, h as createError, c as _sfc_main$3, e as _sfc_main$7, f as _sfc_main$a } from './server.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
  __name: "[uid]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const prismic = usePrismic();
    const uid = route.params.uid;
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `post-${uid}`,
      () => prismic.client.getByUID("blog", uid)
    )), __temp = await __temp, __restore(), __temp);
    if (!page.value) {
      throw createError({ statusCode: 404, statusMessage: "Post Not Found" });
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
      var _a, _b, _c, _d;
      const _component_PrismicText = _sfc_main$3;
      const _component_PrismicRichText = _sfc_main$7;
      const _component_PrismicLink = _sfc_main$a;
      if (unref(page)) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-cf8b05b4><section class="relative overflow-hidden" data-v-cf8b05b4>`);
        if ((_b = (_a = unref(page).data) == null ? void 0 : _a.cover) == null ? void 0 : _b.url) {
          _push(`<img${ssrRenderAttr("src", unref(page).data.cover.url)}${ssrRenderAttr("alt", (_c = unref(page).data.cover.alt) != null ? _c : "")} class="w-full h-[40vh] min-h-[240px] object-cover" data-v-cf8b05b4>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="absolute inset-0 bg-brand/40" data-v-cf8b05b4></div><div class="absolute inset-0 flex items-center justify-center" data-v-cf8b05b4><h1 class="font-display text-3xl md:text-4xl font-bold text-white text-center px-4 drop-shadow-lg" data-v-cf8b05b4>`);
        _push(ssrRenderComponent(_component_PrismicText, {
          field: unref(page).data.title
        }, null, _parent));
        _push(`</h1></div></section><article class="container mx-auto px-4 py-12 max-w-3xl" data-v-cf8b05b4><div class="rounded-2xl bg-white/95 backdrop-blur-sm border border-white/60 shadow-xl p-6 md:p-10" data-v-cf8b05b4><div class="prose prose-brand max-w-none mb-8" data-v-cf8b05b4>`);
        _push(ssrRenderComponent(_component_PrismicRichText, {
          field: unref(page).data.content
        }, null, _parent));
        _push(`</div>`);
        if ((_d = unref(page).data) == null ? void 0 : _d.cta_link) {
          _push(`<div class="mb-8" data-v-cf8b05b4>`);
          _push(ssrRenderComponent(_component_PrismicLink, {
            field: unref(page).data.cta_link,
            class: "inline-flex items-center px-8 py-4 rounded-xl bg-brand text-white font-display font-semibold hover:bg-brand-light transition-colors"
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
        _push(`<p class="text-brand/60 text-sm" data-v-cf8b05b4> Posted on ${ssrInterpolate(formatDate(unref(page).first_publication_date))}</p></div></article></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/post/[uid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _uid_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf8b05b4"]]);

export { _uid_ as default };
//# sourceMappingURL=_uid_-B61w3hSA.mjs.map
