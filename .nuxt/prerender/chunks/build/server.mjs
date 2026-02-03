import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineComponent, watchEffect, unref, openBlock, createBlock, withCtx, createTextVNode, toDisplayString, createCommentVNode, computed, createElementBlock, resolveDynamicComponent, normalizeProps, guardReactiveProps, renderSlot, toValue, getCurrentInstance, onServerPrefetch, hasInjectionContext, inject, shallowRef, h, resolveComponent, mergeProps, Fragment, renderList, ref, watch, nextTick, createVNode, normalizeClass, toRef, provide, cloneVNode, defineAsyncComponent, shallowReactive, Suspense, useSSRContext, createApp, onErrorCaptured, reactive, effectScope, getCurrentScope, isReadonly, isRef, isShallow, isReactive, toRaw } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue/index.mjs';
import { $fetch } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/ofetch/dist/node.mjs';
import { u as useHead$1, h as headSymbol, b as baseURL } from '../_/renderer.mjs';
import { createHooks } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/unctx/dist/index.mjs';
import { createError as createError$1, sanitizeStatusCode, appendHeader, getRequestHeader, setCookie, getCookie, deleteCookie } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/h3/dist/index.mjs';
import { routerKey, useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue-router/vue-router.node.mjs';
import { defu } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/defu/dist/defu.mjs';
import { parseQuery, hasProtocol, joinURL, withQuery, isScriptProtocol, withTrailingSlash, withoutTrailingSlash } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/ufo/dist/index.mjs';
import { isFilled, asText, asImageWidthSrcSet, asImagePixelDensitySrcSet, asLinkAttrs, asHTML, createClient, documentToLinkField, asImageSrc, asDate, cookie, filter, asLink } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/@prismicio/client/dist/index.js';
import { asTree } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/@prismicio/client/dist/richtext.js';
import { DEV } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/esm-env/index.js';
import { debounce } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/perfect-debounce/dist/index.mjs';
import { parse } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import destr from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/destr/dist/index.mjs';
import { isEqual } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/klona/dist/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderSuspense, ssrRenderVNode } from 'file:///Users/hvekriya/Documents/git/vue-balkrishna-nursery/node_modules/vue/server-renderer/index.mjs';
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

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const appLayoutTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const appId = "nuxt-app";
const crawlLinks = true;
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.21.0";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    const unresolvedPluginsForThisPlugin = plugin2.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin2.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin2.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = /* @__PURE__ */ Symbol("layout-meta");
const PageRouteSymbol = /* @__PURE__ */ Symbol("route");
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext["~renderResponse"] = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return options?.replace ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const error2 = /* @__PURE__ */ useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  if (typeof error !== "string" && error.statusText) {
    error.message ??= error.statusText;
  }
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const matcher = (m, p) => {
  return [];
};
const _routeRulesMatcher = (path) => defu({}, ...matcher().map((r) => r.data).reverse());
const routeRulesMatcher$1 = _routeRulesMatcher;
function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  try {
    return routeRulesMatcher$1(path);
  } catch (e) {
    console.error("[nuxt] Error matching route rules.", e);
    return {};
  }
}
const _routes = [
  {
    name: "prismic-preview",
    path: "/preview",
    component: () => import('./PrismicPreview-Cw-KyHp4.mjs')
  },
  {
    name: "index",
    path: "/",
    component: () => import('./index-RklS1zOx.mjs')
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import('./contact-CPk_FHEw.mjs')
  },
  {
    name: "slug",
    path: "/:slug(.*)*",
    component: () => import('./_...slug_-DiDBx48e.mjs')
  },
  {
    name: "not-found",
    path: "/not-found",
    component: () => import('./not-found-HFWD-pTg.mjs')
  },
  {
    name: "blog",
    path: "/blog",
    component: () => import('./index-BuDWFd_l.mjs')
  },
  {
    name: "post-uid",
    path: "/post/:uid()",
    component: () => import('./_uid_-B61w3hSA.mjs')
  },
  {
    name: "parents-uid",
    path: "/parents/:uid()",
    component: () => import('./_uid_-DiXZl8S4.mjs')
  },
  {
    name: "parents",
    path: "/parents",
    component: () => import('./index-CBwiS-1Y.mjs')
  },
  {
    name: "our-nursery-uid",
    path: "/our-nursery/:uid()",
    component: () => import('./_uid_-CIUYyBeL.mjs')
  }
];
const _wrapInTransition = (props, children) => {
  return { default: () => children.default?.() };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = route?.meta.key ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    const hashScrollBehaviour = useRouter().options?.scrollBehaviorType ?? "auto";
    if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior: hashScrollBehaviour };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    const hookToWait = nuxtApp._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve) => {
      if (from === START_LOCATION) {
        resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour));
        return;
      }
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
  if (savedPosition) {
    return savedPosition;
  }
  const isPageNavigation = isChangingPage(to, from);
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: isPageNavigation ? defaultHashScrollBehaviour : "instant"
    };
  }
  return {
    left: 0,
    top: 0
  };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    status: result && (result.status || result.statusCode) || 404,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    statusText: result && (result.statusText || result.statusMessage) || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = routerOptions.history?.(routerBase) ?? createMemoryHistory(routerBase);
    const routes2 = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes: routes2
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    router.afterEach((to, from) => {
      if (to.matched.at(-1)?.components?.default === from.matched.at(-1)?.components?.default) {
        syncCurrentRoute();
      }
    });
    const route = { sync: syncCurrentRoute };
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    if (!nuxtApp.ssrContext?.islandContext) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if (failure?.type === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if (nuxtApp.ssrContext?.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        const routeRules = getRouteRules({ path: to.path });
        if (routeRules.appMiddleware) {
          for (const key in routeRules.appMiddleware) {
            if (routeRules.appMiddleware[key]) {
              middlewareEntries.add(key);
            } else {
              middlewareEntries.delete(key);
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await namedMiddleware[entry2]?.().then((r) => r.default || r) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            if (false) ;
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  status: 404,
                  statusText: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach((to) => {
      if (to.matched.length === 0) {
        return nuxtApp.runWithContext(() => showError(createError({
          status: 404,
          fatal: false,
          statusText: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function injectHead(nuxtApp) {
  const nuxt = nuxtApp || tryUseNuxtApp();
  return nuxt?.ssrContext?.head || nuxt?.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  });
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext["~payloadReducers"][name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Wrapper",
  props: {
    wrapper: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return _ctx.wrapper ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.wrapper), normalizeProps(mergeProps({ key: 0 }, _ctx.$attrs)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16)) : renderSlot(_ctx.$slots, "default", { key: 1 });
    };
  }
});
const prismicKey = /* @__PURE__ */ Symbol("prismic");
const usePrismic = () => {
  return inject(prismicKey, { options: { endpoint: "" } });
};
const version = "5.3.0";
const devMsg = (slug) => {
  return `https://prismic.dev/msg/vue/v${version}/${slug}`;
};
const isInternalURL = (url) => {
  const isInternal = /^\/(?!\/)/.test(url);
  const isSpecialLink = !isInternal && !/^https?:\/\//i.test(url);
  return isInternal && !isSpecialLink;
};
const defaultWrapper$1 = "div";
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...{ name: "DeprecatedPrismicRichText" },
  __name: "DeprecatedPrismicRichText",
  props: {
    field: {
      type: Array
    },
    fallback: {
      type: String
    },
    linkResolver: {
      type: Function
    },
    serializer: {
      type: [Object, Function]
    },
    wrapper: {
      type: [String, Object, Function]
    }
  },
  setup(__props) {
    const props = __props;
    const { options } = usePrismic();
    const html = computed(() => {
      if (!isFilled.richText(props.field)) {
        return props.fallback ?? "";
      }
      const linkResolver2 = props.linkResolver ?? options.linkResolver;
      const serializer = props.serializer ?? options.richTextSerializer;
      return asHTML(props.field, { linkResolver: linkResolver2, serializer });
    });
    const root = ref(null);
    const maybeRouter = inject(routerKey, null);
    let links = [];
    const navigate = function(event) {
      event.preventDefault();
      maybeRouter == null ? void 0 : maybeRouter.push(this.href);
    };
    const addListeners = () => {
      const node = root.value && "$el" in root.value ? root.value.$el : root.value;
      if (node && "querySelectorAll" in node) {
        links = Array.from(node.querySelectorAll("a")).map((element) => {
          const href = element.getAttribute("href");
          if (href && isInternalURL(href)) {
            const listener = navigate.bind({ href });
            element.addEventListener("click", listener);
            return { element, listener };
          } else {
            return false;
          }
        }).filter((link) => link);
      }
    };
    const removeListeners = () => {
      links.forEach(
        ({ element, listener }) => element.removeEventListener("click", listener)
      );
      links = [];
    };
    watch(html, () => {
      removeListeners();
      nextTick(addListeners);
    });
    return (_ctx, _cache) => {
      return unref(isFilled).richText(__props.field) || __props.fallback ? (openBlock(), createBlock(resolveDynamicComponent(__props.wrapper || defaultWrapper$1), {
        key: 0,
        ref_key: "root",
        ref: root,
        innerHTML: html.value
      }, null, 8, ["innerHTML"])) : createCommentVNode("", true);
    };
  }
});
const defaultWrapper = "div";
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...{ name: "PrismicEmbed" },
  __name: "PrismicEmbed",
  props: {
    field: {},
    wrapper: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return unref(isFilled).embed(_ctx.field) ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.wrapper || defaultWrapper), {
        key: 0,
        "data-oembed": _ctx.field.embed_url,
        "data-oembed-type": _ctx.field.type,
        "data-oembed-provider": _ctx.field.provider_name,
        innerHTML: _ctx.field.html
      }, null, 8, ["data-oembed", "data-oembed-type", "data-oembed-provider", "innerHTML"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$1 = ["src", "srcset", "alt", "width", "height"];
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...{ name: "PrismicImage" },
  __name: "PrismicImage",
  props: {
    field: {},
    imgixParams: {},
    alt: {},
    fallbackAlt: {},
    width: {},
    height: {},
    widths: {},
    pixelDensities: {}
  },
  setup(__props) {
    const props = __props;
    const { options } = usePrismic();
    if (DEV) {
      watchEffect(() => {
        if (typeof props.alt === "string" && props.alt !== "") {
          console.warn(
            `[PrismicImage] The "alt" prop can only be used to declare an image as decorative by passing an empty string (alt="") but was provided a non-empty string. You can resolve this warning by removing the "alt" prop or changing it to alt="". For more details, see ${devMsg(
              "alt-must-be-an-empty-string"
            )}`
          );
        }
        if (typeof props.fallbackAlt === "string" && props.fallbackAlt !== "") {
          console.warn(
            `[PrismicImage] The "fallbackAlt" prop can only be used to declare an image as decorative by passing an empty string (fallbackAlt="") but was provided a non-empty string. You can resolve this warning by removing the "fallbackAlt" prop or changing it to fallbackAlt="". For more details, see ${devMsg(
              "alt-must-be-an-empty-string"
            )}`
          );
        }
        if (props.widths && props.pixelDensities) {
          console.warn(
            `[PrismicImage] Only one of "widths" or "pixelDensities" props can be provided. You can resolve this warning by removing either the "widths" or "pixelDensities" prop. "widths" will be used in this case.`
          );
        }
      });
    }
    const castInt = (input) => {
      if (typeof input === "number" || typeof input === "undefined") {
        return input;
      } else {
        const parsed = Number.parseInt(input);
        if (Number.isNaN(parsed)) {
          return void 0;
        } else {
          return parsed;
        }
      }
    };
    const image = computed(() => {
      var _a, _b;
      if (!isFilled.imageThumbnail(props.field)) {
        return;
      }
      let src;
      let srcSet;
      if (props.widths || !props.pixelDensities) {
        const res = asImageWidthSrcSet(props.field, {
          ...props.imgixParams,
          widths: props.widths === "defaults" ? (_a = options.components) == null ? void 0 : _a.imageWidthSrcSetDefaults : props.widths
        });
        src = res.src;
        srcSet = res.srcset;
      } else if (props.pixelDensities) {
        const res = asImagePixelDensitySrcSet(props.field, {
          ...props.imgixParams,
          pixelDensities: props.pixelDensities === "defaults" ? (_b = options.components) == null ? void 0 : _b.imagePixelDensitySrcSetDefaults : props.pixelDensities
        });
        src = res.src;
        srcSet = res.srcset;
      }
      const ar = props.field.dimensions.width / props.field.dimensions.height;
      const castedWidth = castInt(props.width);
      const castedHeight = castInt(props.height);
      let resolvedWidth = castedWidth ?? props.field.dimensions.width;
      let resolvedHeight = castedHeight ?? props.field.dimensions.height;
      if (castedWidth != null && castedHeight == null) {
        resolvedHeight = castedWidth / ar;
      } else if (castedWidth == null && castedHeight != null) {
        resolvedWidth = castedHeight * ar;
      }
      return {
        src,
        srcSet,
        alt: props.alt ?? (props.field.alt || props.fallbackAlt),
        width: Math.round(resolvedWidth),
        height: Math.round(resolvedHeight)
      };
    });
    return (_ctx, _cache) => {
      return image.value ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: image.value.src,
        srcset: image.value.srcSet,
        alt: image.value.alt,
        width: image.value.width,
        height: image.value.height
      }, null, 8, _hoisted_1$1)) : createCommentVNode("", true);
    };
  }
});
const defaultInternalComponent = "router-link";
const defaultExternalComponent = "a";
const defaultExternalRelAttribute = "noreferrer";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...{ name: "PrismicLink" },
  __name: "PrismicLink",
  props: {
    linkResolver: {},
    rel: { type: [String, Function] },
    internalComponent: {},
    externalComponent: {},
    field: {},
    document: {}
  },
  setup(__props) {
    const props = __props;
    const { options } = usePrismic();
    const rawAttrs = computed(() => {
      return asLinkAttrs(props.field || props.document, {
        linkResolver: props.linkResolver || options.linkResolver,
        rel(args) {
          var _a;
          const maybeRel = props.rel || ((_a = options.components) == null ? void 0 : _a.linkRel);
          if (maybeRel) {
            return typeof maybeRel === "function" ? maybeRel(args) : maybeRel;
          }
          return args.isExternal ? defaultExternalRelAttribute : void 0;
        }
      });
    });
    const component = computed(() => {
      var _a, _b;
      return isInternalURL(rawAttrs.value.href || "") ? props.internalComponent || ((_a = options.components) == null ? void 0 : _a.linkInternalComponent) || defaultInternalComponent : props.externalComponent || ((_b = options.components) == null ? void 0 : _b.linkExternalComponent) || defaultExternalComponent;
    });
    const attrs = computed(() => {
      return component.value === "a" ? {
        href: rawAttrs.value.href,
        target: rawAttrs.value.target,
        rel: rawAttrs.value.rel
      } : {
        to: rawAttrs.value.href,
        target: rawAttrs.value.target,
        rel: rawAttrs.value.rel
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(component.value), normalizeProps(guardReactiveProps(attrs.value)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(props.field && "text" in props.field ? props.field.text : void 0), 1)
          ])
        ]),
        _: 3
      }, 16);
    };
  }
});
const _hoisted_1 = ["dir"];
const _hoisted_2 = ["dir"];
const _hoisted_3 = ["dir"];
const _hoisted_4 = ["dir"];
const _hoisted_5 = ["dir"];
const _hoisted_6 = ["dir"];
const _hoisted_7 = ["dir"];
const _hoisted_8 = { key: 7 };
const _hoisted_9 = { key: 8 };
const _hoisted_10 = { key: 9 };
const _hoisted_11 = ["dir"];
const _hoisted_12 = ["dir"];
const _hoisted_13 = { key: 12 };
const _hoisted_14 = { key: 13 };
const _hoisted_15 = {
  key: 14,
  class: "block-img"
};
const _hoisted_16 = { key: 0 };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...{ name: "PrismicRichTextDefaultComponent" },
  __name: "PrismicRichTextDefaultComponent",
  props: {
    node: {},
    linkResolver: {}
  },
  setup(__props) {
    const props = __props;
    const dir = computed(() => {
      return "direction" in props.node && props.node.direction === "rtl" ? "rtl" : void 0;
    });
    return (_ctx, _cache) => {
      return _ctx.node.type === "heading1" ? (openBlock(), createElementBlock("h1", {
        key: 0,
        dir: dir.value
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_1)) : _ctx.node.type === "heading2" ? (openBlock(), createElementBlock("h2", {
        key: 1,
        dir: dir.value
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_2)) : _ctx.node.type === "heading3" ? (openBlock(), createElementBlock("h3", {
        key: 2,
        dir: dir.value
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_3)) : _ctx.node.type === "heading4" ? (openBlock(), createElementBlock("h4", {
        key: 3,
        dir: dir.value
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_4)) : _ctx.node.type === "heading5" ? (openBlock(), createElementBlock("h5", {
        key: 4,
        dir: dir.value
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_5)) : _ctx.node.type === "heading6" ? (openBlock(), createElementBlock("h6", {
        key: 5,
        dir: dir.value
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_6)) : _ctx.node.type === "paragraph" ? (openBlock(), createElementBlock("p", {
        key: 6,
        dir: dir.value
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_7)) : _ctx.node.type === "preformatted" ? (openBlock(), createElementBlock("pre", _hoisted_8, [
        renderSlot(_ctx.$slots, "default")
      ])) : _ctx.node.type === "strong" ? (openBlock(), createElementBlock("strong", _hoisted_9, [
        renderSlot(_ctx.$slots, "default")
      ])) : _ctx.node.type === "em" ? (openBlock(), createElementBlock("em", _hoisted_10, [
        renderSlot(_ctx.$slots, "default")
      ])) : _ctx.node.type === "list-item" ? (openBlock(), createElementBlock("li", {
        key: 10,
        dir: dir.value
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_11)) : _ctx.node.type === "o-list-item" ? (openBlock(), createElementBlock("li", {
        key: 11,
        dir: dir.value
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_12)) : _ctx.node.type === "group-list-item" ? (openBlock(), createElementBlock("ul", _hoisted_13, [
        renderSlot(_ctx.$slots, "default")
      ])) : _ctx.node.type === "group-o-list-item" ? (openBlock(), createElementBlock("ol", _hoisted_14, [
        renderSlot(_ctx.$slots, "default")
      ])) : _ctx.node.type === "image" ? (openBlock(), createElementBlock("p", _hoisted_15, [
        _ctx.node.linkTo ? (openBlock(), createBlock(_sfc_main$a, {
          key: 0,
          field: _ctx.node.linkTo
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$b, { field: _ctx.node }, null, 8, ["field"])
          ]),
          _: 1
        }, 8, ["field"])) : (openBlock(), createBlock(_sfc_main$b, {
          key: 1,
          field: _ctx.node
        }, null, 8, ["field"]))
      ])) : _ctx.node.type === "embed" ? (openBlock(), createBlock(_sfc_main$c, {
        key: 15,
        field: _ctx.node.oembed
      }, null, 8, ["field"])) : _ctx.node.type === "hyperlink" ? (openBlock(), createBlock(_sfc_main$a, {
        key: 16,
        field: _ctx.node.data,
        "link-resolver": _ctx.linkResolver
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["field", "link-resolver"])) : _ctx.node.type === "label" ? (openBlock(), createElementBlock("span", {
        key: 17,
        class: normalizeClass(_ctx.node.data.label)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)) : (openBlock(true), createElementBlock(Fragment, { key: 18 }, renderList(_ctx.node.text.split("\n"), (line, index) => {
        return openBlock(), createElementBlock(Fragment, { key: line }, [
          index > 0 ? (openBlock(), createElementBlock("br", _hoisted_16)) : createCommentVNode("", true),
          createTextVNode(toDisplayString(line), 1)
        ], 64);
      }), 128));
    };
  }
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...{ name: "PrismicRichTextSerialize" },
  __name: "PrismicRichTextSerialize",
  props: {
    components: {},
    children: {},
    linkResolver: {}
  },
  setup(__props) {
    const CHILD_TYPE_RENAMES = {
      "list-item": "listItem",
      "o-list-item": "oListItem",
      "group-list-item": "list",
      "group-o-list-item": "oList"
    };
    const props = __props;
    function getComponent(child) {
      var _a;
      return ((_a = props.components) == null ? void 0 : _a[CHILD_TYPE_RENAMES[child.type] || child.type]) || _sfc_main$9;
    }
    return (_ctx, _cache) => {
      const _component_PrismicRichTextSerialize = resolveComponent("PrismicRichTextSerialize", true);
      return openBlock(true), createElementBlock(Fragment, null, renderList(props.children, (child) => {
        return openBlock(), createBlock(resolveDynamicComponent(getComponent(child)), {
          key: JSON.stringify(child),
          node: child.node,
          "link-resolver": getComponent(child) === _sfc_main$9 ? props.linkResolver : void 0
        }, {
          default: withCtx(() => [
            child.children.length ? (openBlock(), createBlock(_component_PrismicRichTextSerialize, {
              key: 0,
              children: child.children,
              components: _ctx.components,
              "link-resolver": _ctx.linkResolver
            }, null, 8, ["children", "components", "link-resolver"])) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1032, ["node", "link-resolver"]);
      }), 128);
    };
  }
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...{ name: "PrismicRichText" },
  __name: "PrismicRichText",
  props: {
    field: {
      type: Array
    },
    fallback: {
      type: [String, Object, Function]
    },
    components: {
      type: Object
    },
    linkResolver: {
      type: Function
    },
    serializer: {
      type: [Object, Function]
    },
    wrapper: {
      type: [String, Object, Function]
    }
  },
  setup(__props) {
    const props = __props;
    const { options } = usePrismic();
    const resolvedComponents = computed(() => {
      var _a;
      return props.components || ((_a = options.components) == null ? void 0 : _a.richTextComponents);
    });
    const resolvedLinkResolver = computed(() => {
      return props.linkResolver || options.linkResolver;
    });
    const children = computed(() => {
      return asTree(props.field || []).children;
    });
    const isModern = computed(() => {
      var _a;
      if (props.components) {
        return true;
      }
      if (props.serializer) {
        return false;
      }
      if ((_a = options.components) == null ? void 0 : _a.richTextComponents) {
        return true;
      }
      if (options.richTextSerializer) {
        return false;
      }
      return true;
    });
    if (DEV) {
      watchEffect(() => {
        if (props.components && props.serializer) {
          console.warn(
            `[PrismicRichText] Only one of "components" or "serializer" (deprecated) props can be provided. You can resolve this warning by removing either the "components" or "serializer" prop. "components" will be used in this case.`
          );
        }
      });
    }
    return (_ctx, _cache) => {
      return isModern.value && (unref(isFilled).richText(__props.field) || __props.fallback) ? (openBlock(), createBlock(_sfc_main$e, {
        key: 0,
        wrapper: __props.wrapper
      }, {
        default: withCtx(() => [
          children.value.length ? (openBlock(), createBlock(_sfc_main$8, {
            key: 0,
            children: children.value,
            components: resolvedComponents.value,
            "link-resolver": resolvedLinkResolver.value
          }, null, 8, ["children", "components", "link-resolver"])) : (openBlock(), createBlock(resolveDynamicComponent(__props.fallback), { key: 1 }))
        ]),
        _: 1
      }, 8, ["wrapper"])) : !isModern.value ? (openBlock(), createBlock(_sfc_main$d, {
        key: 1,
        field: __props.field,
        fallback: typeof __props.fallback === "string" ? __props.fallback : void 0,
        "link-resolver": __props.linkResolver,
        serializer: __props.serializer,
        wrapper: __props.wrapper
      }, null, 8, ["field", "fallback", "link-resolver", "serializer", "wrapper"])) : createCommentVNode("", true);
    };
  }
});
const table = () => ({
  table: { type: Object, required: true }
});
const thead = () => ({
  head: { type: Object, required: true }
});
const tbody = () => ({
  body: { type: Object, required: true }
});
const tr = () => ({
  row: {
    type: Object,
    required: true
  }
});
const th = () => ({
  cell: { type: Object, required: true }
});
const td = () => ({
  cell: { type: Object, required: true }
});
const defaultTableComponents = {
  table: defineComponent({
    props: table(),
    setup(props, { slots }) {
      return () => h("table", slots.default ? slots.default() : []);
    }
  }),
  thead: defineComponent({
    props: thead(),
    setup(props, { slots }) {
      return () => h("thead", slots.default ? slots.default() : []);
    }
  }),
  tbody: defineComponent({
    props: tbody(),
    setup(props, { slots }) {
      return () => h("tbody", slots.default ? slots.default() : []);
    }
  }),
  tr: defineComponent({
    props: tr(),
    setup(props, { slots }) {
      return () => h("tr", slots.default ? slots.default() : []);
    }
  }),
  th: defineComponent({
    props: th(),
    setup(props, { slots }) {
      return () => h("th", slots.default ? slots.default() : []);
    }
  }),
  td: defineComponent({
    props: td(),
    setup(props, { slots }) {
      return () => h("td", slots.default ? slots.default() : []);
    }
  })
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...{ name: "PrismicTableRow" },
  __name: "PrismicTableRow",
  props: {
    row: {},
    components: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(props.components.tr), { row: _ctx.row }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.row.cells, (cell) => {
            return openBlock(), createElementBlock(Fragment, {
              key: cell.key
            }, [
              cell.type === "header" ? (openBlock(), createBlock(resolveDynamicComponent(props.components.th), {
                key: 0,
                cell
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$7, {
                    field: cell.content,
                    components: _ctx.components
                  }, null, 8, ["field", "components"])
                ]),
                _: 2
              }, 1032, ["cell"])) : (openBlock(), createBlock(resolveDynamicComponent(props.components.td), {
                key: 1,
                cell
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$7, {
                    field: cell.content,
                    components: props.components
                  }, null, 8, ["field", "components"])
                ]),
                _: 2
              }, 1032, ["cell"]))
            ], 64);
          }), 128))
        ]),
        _: 1
      }, 8, ["row"]);
    };
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{ name: "PrismicTable" },
  __name: "PrismicTable",
  props: {
    field: {},
    fallback: {},
    components: {}
  },
  setup(__props) {
    const props = __props;
    const mergedComponents = computed(() => ({
      ...defaultTableComponents,
      ...props.components
    }));
    return (_ctx, _cache) => {
      return unref(isFilled).table(_ctx.field) ? (openBlock(), createBlock(resolveDynamicComponent(mergedComponents.value.table), mergeProps({
        key: 0,
        table: _ctx.field
      }, _ctx.$attrs), {
        default: withCtx(() => [
          _ctx.field.head ? (openBlock(), createBlock(resolveDynamicComponent(mergedComponents.value.thead), {
            key: 0,
            head: _ctx.field.head
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.field.head.rows, (row) => {
                return openBlock(), createBlock(_sfc_main$6, {
                  key: row.key,
                  row,
                  components: mergedComponents.value
                }, null, 8, ["row", "components"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["head"])) : createCommentVNode("", true),
          (openBlock(), createBlock(resolveDynamicComponent(mergedComponents.value.tbody), {
            body: _ctx.field.body
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.field.body.rows, (row) => {
                return openBlock(), createBlock(_sfc_main$6, {
                  key: row.key,
                  row,
                  components: mergedComponents.value
                }, null, 8, ["row", "components"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["body"]))
        ]),
        _: 1
      }, 16, ["table"])) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.fallback), { key: 1 }));
    };
  }
});
const TODOSliceComponent = DEV ? /* @__PURE__ */ defineComponent({
  name: "TODOSliceComponent",
  props: {
    slice: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const type = computed(() => {
      return "slice_type" in props.slice ? props.slice.slice_type : props.slice.type;
    });
    watchEffect(() => {
      console.warn(`[SliceZone] Could not find a component for Slice type "${type.value}"`, props.slice);
    });
    return () => {
      return h("section", {
        "data-slice-zone-todo-component": "",
        "data-slice-type": type.value
      }, [`Could not find a component for Slice type "${type.value}"`]);
    };
  }
}) : () => null;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{ name: "SliceZone" },
  __name: "SliceZone",
  props: {
    slices: {},
    components: {},
    defaultComponent: {},
    context: {},
    wrapper: {}
  },
  setup(__props) {
    const props = __props;
    const { options } = usePrismic();
    const renderedSlices = computed(() => {
      return props.slices.map((slice, index) => {
        var _a, _b;
        const type = "slice_type" in slice ? slice.slice_type : slice.type;
        const key = "id" in slice && typeof slice.id === "string" ? slice.id : `${index}-${JSON.stringify(slice)}`;
        const is = ((_a = props.components) == null ? void 0 : _a[type]) || props.defaultComponent || ((_b = options.components) == null ? void 0 : _b.sliceZoneDefaultComponent);
        if (!is) {
          return { is: TODOSliceComponent, key, props: { slice } };
        }
        if (slice.__mapped) {
          const { __mapped, ...mappedProps } = slice;
          return { is, key, props: mappedProps };
        }
        return {
          is,
          key,
          props: {
            slice,
            index,
            context: props.context,
            slices: props.slices
          }
        };
      });
    });
    return (_ctx, _cache) => {
      return _ctx.slices ? (openBlock(), createBlock(_sfc_main$e, {
        key: 0,
        wrapper: _ctx.wrapper
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(renderedSlices.value, (renderedSlice) => {
            return openBlock(), createBlock(resolveDynamicComponent(renderedSlice.is), mergeProps({
              key: renderedSlice.key,
              ref_for: true
            }, renderedSlice.props), null, 16);
          }), 128))
        ]),
        _: 1
      }, 8, ["wrapper"])) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{ name: "PrismicText" },
  __name: "PrismicText",
  props: {
    field: {},
    fallback: {},
    separator: {},
    wrapper: {}
  },
  setup(__props) {
    const props = __props;
    if (DEV) {
      watchEffect(() => {
        if (typeof props.field === "string") {
          throw new Error(
            `[PrismicText] The "field" prop only accepts a Rich Text or title field's value but was provided a different type of field instead (e.g. a Key Text or Select field). You can resolve this error by rendering the field value inline without <PrismicText>. For more details, see ${devMsg(
              "prismictext-works-only-with-rich-text-and-title-fields"
            )}`
          );
        }
      }, {});
    }
    return (_ctx, _cache) => {
      return unref(isFilled).richText(_ctx.field) || _ctx.fallback ? (openBlock(), createBlock(_sfc_main$e, {
        key: 0,
        wrapper: _ctx.wrapper
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(asText)(_ctx.field) || _ctx.fallback), 1)
        ]),
        _: 1
      }, 8, ["wrapper"])) : createCommentVNode("", true);
    };
  }
});
const createPrismic = (options) => {
  let client;
  if (options.client) {
    client = options.client;
  } else {
    client = createClient(options.endpoint, options.clientConfig);
  }
  const prismicClient = {
    client,
    filter,
    cookie
  };
  const prismicHelpers = {
    asText,
    asHTML: (richTextField, ...config) => {
      const [configOrLinkResolver, maybeHTMLSerializer] = config;
      return asHTML(richTextField, typeof configOrLinkResolver === "function" || configOrLinkResolver == null ? {
        linkResolver: configOrLinkResolver || options.linkResolver,
        serializer: maybeHTMLSerializer || options.richTextSerializer
      } : {
        linkResolver: options.linkResolver,
        serializer: options.richTextSerializer,
        ...configOrLinkResolver
      });
    },
    asLink: (linkField, config) => {
      return asLink(linkField, typeof config === "function" ? { linkResolver: config } : {
        linkResolver: options.linkResolver,
        // TODO: For some reasons, TypeScript narrows the type to "unknown" where it's supposed to be a union
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...config
      });
    },
    asLinkAttrs: (linkField, config) => {
      return asLinkAttrs(linkField, {
        // TODO: We can't really retrieve the generic type here, this might cause some unexpected type error in some edge-case scenario
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        linkResolver: options.linkResolver,
        ...config
      });
    },
    asDate,
    asImageSrc,
    asImageWidthSrcSet,
    asImagePixelDensitySrcSet,
    isFilled,
    documentToLinkField
  };
  const prismic = {
    options,
    ...prismicClient,
    ...prismicHelpers,
    install(app) {
      app.provide(prismicKey, this);
      app.config.globalProperties.$prismic = this;
      if (options.injectComponents !== false) {
        app.component(_sfc_main$a.name, _sfc_main$a);
        app.component(_sfc_main$c.name, _sfc_main$c);
        app.component(_sfc_main$b.name, _sfc_main$b);
        app.component(_sfc_main$5.name, _sfc_main$5);
        app.component(_sfc_main$3.name, _sfc_main$3);
        app.component(_sfc_main$7.name, _sfc_main$7);
        app.component(_sfc_main$4.name, _sfc_main$4);
      }
    }
  };
  return prismic;
};
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const onNuxtReady = (callback) => {
  {
    return;
  }
};
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (_isAutoKeyNeeded(args[0], args[1])) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  options.server ??= true;
  options.default ??= getDefault;
  options.getCachedData ??= getDefaultCachedData;
  options.lazy ??= false;
  options.immediate ??= true;
  options.deep ??= asyncDataDefaults.deep;
  options.dedupe ??= "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  function createInitialFetch() {
    const initialFetchOptions = { cause: "initial", dedupe: options.dedupe };
    if (!nuxtApp._asyncData[key.value]?._init) {
      initialFetchOptions.cachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
      nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialFetchOptions.cachedData);
    }
    return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
  }
  const initialFetch = createInitialFetch();
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
    pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
    status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
    error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
    refresh: (...args2) => {
      if (!nuxtApp._asyncData[key.value]?._init) {
        const initialFetch2 = createInitialFetch();
        return initialFetch2();
      }
      return nuxtApp._asyncData[key.value].execute(...args2);
    },
    execute: (...args2) => asyncReturn.refresh(...args2),
    clear: () => {
      const entry2 = nuxtApp._asyncData[key.value];
      if (entry2?._abortController) {
        try {
          entry2._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
        } finally {
          entry2._abortController = void 0;
        }
      }
      clearNuxtDataByKey(nuxtApp, key.value);
    }
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
async function refreshNuxtData(keys) {
  {
    return Promise.resolve();
  }
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    {
      nuxtApp._asyncData[key].pending.value = false;
    }
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key] ??= asyncDataDefaults.errorValue;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = !nuxtApp.ssrContext?.["~sharedPrerenderCache"] ? _handler : (nuxtApp2, options2) => {
    const value = nuxtApp2.ssrContext["~sharedPrerenderCache"].get(key);
    if (value) {
      return value;
    }
    const promise = Promise.resolve().then(() => nuxtApp2.runWithContext(() => _handler(nuxtApp2, options2)));
    nuxtApp2.ssrContext["~sharedPrerenderCache"].set(key, promise);
    return promise;
  };
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData != null;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: shallowRef(!hasCachedData),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if (isDefer(opts.dedupe ?? options.dedupe)) {
          return nuxtApp._asyncDataPromises[key];
        }
      }
      if (opts.cause === "initial" || nuxtApp.isHydrating) {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData != null) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = asyncDataDefaults.errorValue;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      {
        asyncData.pending.value = true;
      }
      if (asyncData._abortController) {
        asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
      }
      asyncData._abortController = new AbortController();
      asyncData.status.value = "pending";
      const cleanupController = new AbortController();
      const promise = new Promise(
        (resolve, reject) => {
          try {
            const timeout = opts.timeout ?? options.timeout;
            const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
            if (mergedSignal.aborted) {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
              return;
            }
            mergedSignal.addEventListener("abort", () => {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
            }, { once: true, signal: cleanupController.signal });
            return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = asyncDataDefaults.errorValue;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (nuxtApp._asyncDataPromises[key] && nuxtApp._asyncDataPromises[key] !== promise) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (asyncData._abortController?.signal.aborted) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
          asyncData.status.value = "idle";
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        {
          asyncData.pending.value = false;
        }
        cleanupController.abort();
        delete nuxtApp._asyncDataPromises[key];
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key]?._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key]?._init) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
            asyncData.data.value = asyncDataDefaults.value;
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => asyncDataDefaults.value;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
  const list = signals.filter((s) => !!s);
  if (typeof timeout === "number" && timeout >= 0) {
    const timeoutSignal = AbortSignal.timeout?.(timeout);
    if (timeoutSignal) {
      list.push(timeoutSignal);
    }
  }
  if (AbortSignal.any) {
    return AbortSignal.any(list);
  }
  const controller = new AbortController();
  for (const sig of list) {
    if (sig.aborted) {
      const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
      try {
        controller.abort(reason);
      } catch {
        controller.abort();
      }
      return controller.signal;
    }
  }
  const onAbort = () => {
    const abortedSignal = list.find((s) => s.aborted);
    const reason = abortedSignal?.reason ?? new DOMException("Aborted", "AbortError");
    try {
      controller.abort(reason);
    } catch {
      controller.abort();
    }
  };
  for (const sig of list) {
    sig.addEventListener?.("abort", onAbort, { once: true, signal: cleanupSignal });
  }
  return controller.signal;
}
function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
function prerenderRoutes(path) {
  const paths = toArray$1(path);
  appendHeader(useRequestEvent(), "x-nitro-prerender", paths.map((p) => encodeURIComponent(p)).join(", "));
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => {
    const decoded = decodeURIComponent(val);
    const parsed = destr(decoded);
    if (typeof parsed === "number" && (!Number.isFinite(parsed) || String(parsed) !== decoded)) {
      return decoded;
    }
    return parsed;
  },
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  opts.filter ??= (key) => key === name;
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? opts.default?.());
  const cookie2 = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie2.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies ||= {};
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie2.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie2.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie2.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie2;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve, props.trailingSlash);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink?.({ ...props, to });
    const href = computed(() => {
      const effectiveTrailingSlash = props.trailingSlash ?? options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return applyTrailingSlashBehavior(href2, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") {
        return router.resolve(to.value)?.href ?? null;
      }
      return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: link?.isActive ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: link?.isExactActive ?? computed(() => to.value === router.currentRoute.value.path),
      route: link?.route ?? computed(() => router.resolve(to.value)),
      async navigate(_e) {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Behavior
      trailingSlash: {
        type: String,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      const router = useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      shallowRef(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", {
          ref: el,
          href: href.value || null,
          // converts `""` to `null` to prevent the attribute from being added as empty (`href=""`)
          rel,
          target,
          onClick: (event) => {
            if (isExternal.value || hasTarget.value) {
              return;
            }
            event.preventDefault();
            return props.replace ? router.replace(href.value) : router.push(href.value);
          }
        }, slots.default?.());
      };
    }
  });
}
const __nuxt_component_0$1 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
function _client() {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const prismicConfig = config.public.prismic;
  const endpoint = prismicConfig?.endpoint || process.env.NUXT_PUBLIC_PRISMIC_ENDPOINT || "balkrishna";
  const clientConfig = prismicConfig?.clientConfig || {};
  return createClient(endpoint, {
    routes: clientConfig.routes ?? [
      { type: "home", path: "/" },
      { type: "our-nursery", path: "/our-nursery/:uid" },
      { type: "parents", path: "/parents/:uid" },
      { type: "blog", path: "/post/:uid" }
    ],
    accessToken: clientConfig.accessToken || process.env.NUXT_PUBLIC_PRISMIC_ACCESS_TOKEN || ""
  });
}
const linkResolver = void 0;
const richTextSerializer = void 0;
const linkRel = void 0;
const richTextComponents = void 0;
const sliceZoneDefaultComponent = void 0;
const plugin_dZwLP3pabhznAX15ySw1eaAQmwVOMPFRcNoLlER2dWI = /* @__PURE__ */ defineNuxtPlugin({
  name: "prismic:setup",
  parallel: true,
  async setup(nuxtApp) {
    let __temp, __restore;
    const options = (/* @__PURE__ */ useRuntimeConfig()).public.prismic;
    let client;
    if (typeof _client === "function") {
      try {
        client = ([__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => _client())), __temp = await __temp, __restore(), __temp);
      } catch (error) {
        console.error("[@nuxtjs/prismic] An error happened while resolving your Prismic custom client, disabling Prismic module gracefully...", error);
        client = createClient(
          "error-resolving-custom-client",
          { ...options, documentAPIEndpoint: void 0 }
        );
      }
    } else {
      client = _client;
    }
    const endpoint = options.environment || options.endpoint || client?.documentAPIEndpoint || "";
    const prismicPlugin = createPrismic({
      ...options,
      endpoint,
      // TypeScript expects either an endpoint of a client, not both
      client,
      linkResolver,
      richTextSerializer,
      injectComponents: false,
      // Handled at module level
      components: {
        linkInternalComponent: __nuxt_component_0$1,
        linkExternalComponent: __nuxt_component_0$1,
        ...options.components,
        linkRel,
        richTextComponents,
        sliceZoneDefaultComponent
      }
    });
    nuxtApp.vueApp.use(prismicPlugin);
    if (options.preview) {
      const previewCookie = useCookie("io.prismic.preview").value;
      {
        const req = useRequestEvent()?.node.req;
        if (req) {
          prismicPlugin.client.enableAutoPreviewsFromReq(req);
        }
      }
      if (previewCookie) {
        try {
          const session = typeof previewCookie === "string" ? JSON.parse(decodeURIComponent(previewCookie)) : previewCookie;
          if (Object.keys(session).some((key) => key in session && typeof session[key] === "object" && session[key] !== null && "preview" in session[key] && session[key].preview)) {
            let afterEachCalled = false;
            onNuxtReady(() => {
              if (!afterEachCalled) {
                refreshNuxtData();
              }
            });
            useRouter().afterEach(() => {
              afterEachCalled = true;
              refreshNuxtData();
            });
          }
        } catch (error) {
          console.warn("Failed to parse Prismic preview cookie", error);
        }
      }
    }
    if (options.toolbar && prismicPlugin.client?.repositoryName) {
      useHead({
        script: [{
          key: "prismic-preview",
          src: `https://static.cdn.prismic.io/prismic.min.js?repo=${prismicPlugin.client.repositoryName}&new=true`,
          async: true,
          defer: true,
          crossorigin: "anonymous"
        }]
      });
    } else {
      useCookie("io.prismic.preview").value = null;
    }
    return {
      provide: { prismic: prismicPlugin }
    };
  }
});
let routes;
const prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk = /* @__PURE__ */ defineNuxtPlugin(async () => {
  let __temp, __restore;
  if (routes && !routes.length) {
    return;
  }
  routes ||= Array.from(processRoutes(([__temp, __restore] = executeAsync(() => routerOptions.routes?.(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes));
  const batch = routes.splice(0, 10);
  prerenderRoutes(batch);
});
const OPTIONAL_PARAM_RE = /^\/?:.*(?:\?|\(\.\*\)\*)$/;
function shouldPrerender(path) {
  return crawlLinks;
}
function processRoutes(routes2, currentPath = "/", routesToPrerender = /* @__PURE__ */ new Set()) {
  for (const route of routes2) {
    if (OPTIONAL_PARAM_RE.test(route.path) && !route.children?.length && shouldPrerender()) {
      routesToPrerender.add(currentPath);
    }
    if (route.path.includes(":")) {
      continue;
    }
    const fullPath = joinURL(currentPath, route.path);
    {
      routesToPrerender.add(fullPath);
    }
    if (route.children) {
      processRoutes(route.children, fullPath, routesToPrerender);
    }
  }
  return routesToPrerender;
}
const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  plugin_dZwLP3pabhznAX15ySw1eaAQmwVOMPFRcNoLlER2dWI,
  prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk
];
const layouts = {
  default: defineAsyncComponent(() => import('./default-cMl-m1OS.mjs').then((m) => m.default || m))
};
const routeRulesMatcher = _routeRulesMatcher;
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const nuxtLayoutProps = {
  name: {
    type: [String, Boolean, Object],
    default: null
  },
  fallback: {
    type: [String, Object],
    default: null
  }
};
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: nuxtLayoutProps,
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const shouldUseEagerRoute = !injectedRoute || injectedRoute === useRoute();
    const route = shouldUseEagerRoute ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route?.meta.layout ?? routeRulesMatcher(route?.path).appLayout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = shallowRef();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    let lastLayout;
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route?.meta.layoutTransition ?? appLayoutTransition;
      const previouslyRenderedLayout = lastLayout;
      lastLayout = layout.value;
      return _wrapInTransition(hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, route.meta.layoutProps ?? {}, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              isRenderingNewLayout: (name) => {
                return name !== previouslyRenderedLayout && name === layout.value;
              },
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    },
    isRenderingNewLayout: {
      type: Function,
      required: true
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        // When name=false, always return true so NuxtPage doesn't skip rendering
        isCurrent: (route) => name === false || name === (route.meta.layout ?? routeRulesMatcher(route.path).appLayout ?? "default")
      });
    }
    const injectedRoute = inject(PageRouteSymbol);
    const isNotWithinNuxtPage = injectedRoute && injectedRoute === useRoute();
    if (isNotWithinNuxtPage) {
      const vueRouterRoute = useRoute$1();
      const reactiveChildRoute = {};
      for (const _key in vueRouterRoute) {
        const key = _key;
        Object.defineProperty(reactiveChildRoute, key, {
          enumerable: true,
          get: () => {
            return props.isRenderingNewLayout(props.name) ? vueRouterRoute[key] : injectedRoute[key];
          }
        });
      }
      provide(PageRouteSymbol, shallowReactive(reactiveChildRoute));
    }
    return () => {
      if (!name || typeof name === "string" && !(name in layouts)) {
        return context.slots.default?.();
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    route: {
      type: Object,
      required: true
    },
    vnode: Object,
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      if (!props.vnode) {
        return props.vnode;
      }
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    router.afterEach(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col items-center justify-center bg-surface px-4 font-sans text-ink" }, _attrs))}><h1 class="font-display text-4xl font-bold text-ink mb-4">${ssrInterpolate(__props.error.statusCode === 404 ? "Page not found" : "Something went wrong")}</h1><p class="text-ink/80 mb-8 text-center max-w-md">${ssrInterpolate(__props.error.statusCode === 404 ? "Sorry, we couldn't find the page you're looking for." : __props.error.message)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center px-8 py-4 rounded-xl bg-brand text-white font-display font-semibold hover:bg-brand-light transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back to home `);
          } else {
            return [
              createTextVNode(" Back to home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = /* @__PURE__ */ useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext && (ssrContext["~renderResponse"] || ssrContext._renderResponse)) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry_default = ((ssrContext) => entry(ssrContext));

export { __nuxt_component_0$1 as _, useRouter as a, useHead as b, _sfc_main$3 as c, _sfc_main$b as d, entry_default as default, _sfc_main$7 as e, _sfc_main$a as f, useAsyncData as g, createError as h, useRoute as i, useRuntimeConfig as j, usePrismic as u };
//# sourceMappingURL=server.mjs.map
