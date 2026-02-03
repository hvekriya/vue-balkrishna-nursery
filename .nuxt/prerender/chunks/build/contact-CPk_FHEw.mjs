import { defineComponent, reactive, ref, unref, mergeProps, useSSRContext } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent, ssrRenderStyle } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { i as useRoute } from './server.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full aspect-[16/9] min-h-[300px] bg-surface-muted" }, _attrs))}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.482508320774!2d0.0730143!3d51.4829364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a94bcbb09fff%3A0x5ec656b6ebf9f66b!2sBal%20Krishna%20Nursery%2C%20St.%20Margarets%20Grove%2C%20London%20SE18%207RL!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk" width="100%" height="100%" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Bal Krishna Nursery location" class="w-full h-full min-h-[300px]"></iframe></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Map.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const form = reactive({
      fullName: "",
      email: "",
      phone: "",
      message: ""
    });
    const honeypot = ref("");
    const sending = ref(false);
    const submitted = ref(false);
    const error = ref("");
    const route = useRoute();
    if (((_a = route.query) == null ? void 0 : _a.success) === "true") {
      submitted.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Map = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative overflow-hidden bg-surface-muted py-20"><div class="container mx-auto px-4 text-center"><h1 class="font-display text-4xl md:text-5xl font-bold text-ink">Contact Us</h1><p class="mt-2 text-ink/80 text-lg">Have questions? We love them.</p></div></section><div class="container mx-auto px-4 py-12 max-w-5xl"><div class="grid md:grid-cols-5 gap-10"><div class="md:col-span-3">`);
      if (unref(submitted)) {
        _push(`<div class="rounded-2xl bg-surface-muted/50 p-8 border border-surface-muted text-center"><p class="text-ink font-display font-semibold text-lg mb-2">Thank you for your message.</p><p class="text-ink/80">We&#39;ll get back to you as soon as we can.</p></div>`);
      } else {
        _push(`<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" class="rounded-2xl bg-white p-6 md:p-8 shadow-lg border border-surface-muted space-y-5"><input type="hidden" name="form-name" value="contact"><p class="hidden"><label>Don\u2019t fill this out if you\u2019re human: <input${ssrRenderAttr("value", unref(honeypot))} name="bot-field"></label></p><div><label for="full-name" class="block font-display font-semibold text-ink mb-1">Full name <span class="text-red-500">*</span></label><input id="full-name"${ssrRenderAttr("value", unref(form).fullName)} type="text" name="full-name" required class="w-full px-4 py-3 rounded-xl border border-surface-muted focus:border-primary focus:ring-2 focus:ring-focus outline-none transition" placeholder="Your name"></div><div><label for="email" class="block font-display font-semibold text-ink mb-1">Email <span class="text-red-500">*</span></label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" name="email" required class="w-full px-4 py-3 rounded-xl border border-surface-muted focus:border-primary focus:ring-2 focus:ring-focus outline-none transition" placeholder="you@example.com"></div><div><label for="phone" class="block font-display font-semibold text-ink mb-1">Phone number <span class="text-ink/60 text-sm font-normal">(optional)</span></label><input id="phone"${ssrRenderAttr("value", unref(form).phone)} type="tel" name="phone" class="w-full px-4 py-3 rounded-xl border border-surface-muted focus:border-primary focus:ring-2 focus:ring-focus outline-none transition" placeholder="020 1234 5678"></div><div><label for="message" class="block font-display font-semibold text-ink mb-1">Message <span class="text-red-500">*</span></label><textarea id="message" name="message" required rows="5" class="w-full px-4 py-3 rounded-xl border border-surface-muted focus:border-primary focus:ring-2 focus:ring-focus outline-none transition resize-y min-h-[120px]" placeholder="Your message...">${ssrInterpolate(unref(form).message)}</textarea></div>`);
        if (unref(error)) {
          _push(`<p class="text-red-600 text-sm">${ssrInterpolate(unref(error))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="submit"${ssrIncludeBooleanAttr(unref(sending)) ? " disabled" : ""} class="w-full md:w-auto px-8 py-4 rounded-xl bg-brand text-white font-display font-semibold hover:bg-brand-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed">${ssrInterpolate(unref(sending) ? "Sending\u2026" : "Send message")}</button></form>`);
      }
      _push(`</div><div class="md:col-span-2"><div class="rounded-2xl bg-surface-muted/50 p-6 border border-surface-muted sticky top-24"><h2 class="font-display font-semibold text-ink text-lg mb-4 flex items-center gap-2"><span class="text-accent">\u{1F4CD}</span> Our Location </h2><address class="text-ink/90 not-italic space-y-2"><strong>Bal Krishna Nursery</strong><br> SKSS Temple Woolwich,<br> St. Margarets Grove,<br> London, SE18 7RL </address><div class="mt-6 space-y-3"><p class="flex items-center gap-2 text-ink"><span>\u{1F4DE}</span><a href="tel:+442037456070" class="hover:text-brand underline">020 3745 6070</a></p><p class="flex items-center gap-2 text-ink"><span>\u2709\uFE0F</span><a href="mailto:info@balkrishna.org" class="hover:text-brand underline">info@balkrishna.org</a></p></div></div></div></div><div class="mt-12 rounded-2xl overflow-hidden shadow-lg">`);
      _push(ssrRenderComponent(_component_Map, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-CPk_FHEw.mjs.map
