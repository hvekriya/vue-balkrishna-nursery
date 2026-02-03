import { e as _sfc_main$7, f as _sfc_main$a, c as _sfc_main$3, d as _sfc_main$b } from './server.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue/index.mjs';
import { ssrRenderList, ssrRenderStyle, ssrRenderComponent, ssrRenderAttrs } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue/server-renderer/index.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Banner",
  __ssrInlineRender: true,
  props: {
    slices: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrismicRichText = _sfc_main$7;
      const _component_PrismicLink = _sfc_main$a;
      const _component_PrismicText = _sfc_main$3;
      _push(`<!--[-->`);
      ssrRenderList(__props.slices, (slice, index) => {
        var _a, _b, _c, _d, _e, _f;
        _push(`<!--[-->`);
        if (slice.slice_type === "banner_with_caption" && ((_b = (_a = slice.primary) == null ? void 0 : _a.image_banner) == null ? void 0 : _b.url)) {
          _push(`<section class="relative rounded-2xl overflow-hidden my-12 min-h-[320px] flex items-center justify-center text-center bg-white/60 backdrop-blur-sm border border-white/40 shadow-xl" style="${ssrRenderStyle({ backgroundImage: `url(${slice.primary.image_banner.url})`, backgroundSize: "cover", backgroundPosition: "center" })}"><div class="absolute inset-0 bg-brand/50"></div><div class="relative z-10 px-6 py-12 text-white max-w-2xl">`);
          if ((_c = slice.primary) == null ? void 0 : _c.title_of_banner) {
            _push(`<div class="font-display text-3xl md:text-4xl font-bold mb-4 prose prose-invert prose-lg max-w-none [&amp;_p]:mb-2 [&amp;_p:last-child]:mb-0">`);
            _push(ssrRenderComponent(_component_PrismicRichText, {
              field: slice.primary.title_of_banner
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if ((_d = slice.primary) == null ? void 0 : _d.description) {
            _push(`<div class="text-lg opacity-95 mb-6 prose prose-invert prose-lg max-w-none [&amp;_p]:mb-2 [&amp;_p:last-child]:mb-0">`);
            _push(ssrRenderComponent(_component_PrismicRichText, {
              field: slice.primary.description
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if ((_f = (_e = slice.primary) == null ? void 0 : _e.button_link) == null ? void 0 : _f.url) {
            _push(ssrRenderComponent(_component_PrismicLink, {
              field: slice.primary.button_link,
              class: "inline-flex items-center px-6 py-3 rounded-xl bg-white text-brand font-display font-semibold hover:bg-surface transition-colors"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_PrismicText, {
                    field: slice.primary.button_label
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_PrismicText, {
                      field: slice.primary.button_label
                    }, null, 8, ["field"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ImageSlice",
  __ssrInlineRender: true,
  props: {
    slices: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrismicImage = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.slices, (slice, index) => {
        var _a, _b;
        _push(`<!--[-->`);
        if (slice.slice_type === "image" && ((_b = (_a = slice.primary) == null ? void 0 : _a.image_banner) == null ? void 0 : _b.url)) {
          _push(`<div class="my-8 rounded-2xl overflow-hidden shadow-lg">`);
          _push(ssrRenderComponent(_component_PrismicImage, {
            field: slice.primary.image_banner,
            class: "w-full h-auto"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageSlice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=ImageSlice-Bk5ifv0V.mjs.map
