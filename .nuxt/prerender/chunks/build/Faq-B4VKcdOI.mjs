import { e as _sfc_main$7, c as _sfc_main$3 } from './server.mjs';
import { defineComponent, useSSRContext } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Faq",
  __ssrInlineRender: true,
  props: {
    slices: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrismicRichText = _sfc_main$7;
      const _component_PrismicText = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.slices, (slice, index) => {
        var _a, _b;
        _push(`<!--[-->`);
        if (slice.slice_type === "text") {
          _push(`<section class="my-12">`);
          if ((_a = slice.primary) == null ? void 0 : _a.intro) {
            _push(`<div class="prose prose-brand mb-6">`);
            _push(ssrRenderComponent(_component_PrismicRichText, {
              field: slice.primary.intro
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="space-y-3"><!--[-->`);
          ssrRenderList((_b = slice.items) != null ? _b : [], (item, i) => {
            _push(`<details class="group rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 overflow-hidden shadow-lg"><summary class="flex items-center justify-between cursor-pointer list-none px-6 py-4 font-display font-semibold text-ink hover:bg-surface-muted transition-colors">`);
            _push(ssrRenderComponent(_component_PrismicText, {
              field: item.question
            }, null, _parent));
            _push(`<span class="text-brand transition-transform group-open:rotate-180">\u25BC</span></summary><div class="px-6 pb-4 pt-0 text-ink-light border-t border-gray-100 prose prose-brand prose-sm max-w-none">`);
            _push(ssrRenderComponent(_component_PrismicRichText, {
              field: item.answer
            }, null, _parent));
            _push(`</div></details>`);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Faq-B4VKcdOI.mjs.map
