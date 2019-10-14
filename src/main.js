import 'babel-polyfill'
import Vue from "vue";
import PrismicVue from "prismic-vue";
import linkResolver from "./prismic/link-resolver";
import htmlSerializer from "./prismic/html-serializer";
import moment from "moment";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";
import router from "./router";
import "./registerServiceWorker";

const accessToken = process.env.VUE_APP_PRISMIC;

Vue.config.productionTip = false;

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer,
  apiOptions: {
    accessToken
  }
});

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAP_API
  }
});

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY");
  }
});

Vue.filter("readMore", function(text, length, suffix) {
  let newText = text
    .map(a => a.text)
    .filter(b => b)
    .join(" ");
  return newText.substring(0, length) + suffix;
});

Vue.filter("truncate", function(value) {
  if (value.length > 20) {
    value = value.substring(0, 17) + "...";
  }
  return value;
});

Vue.mixin({
  methods: {
    randomCover: () => {
      let coverList = [
        {
          url:
            "https://balkrishna.cdn.prismic.io/balkrishna/6896f63e22fa9cee3f7f08d191532933c8186937_abc.jpg"
        },
        {
          url:
            "https://balkrishna.cdn.prismic.io/balkrishna/d7678442e32d849198e6457f01f9556c5510d654_legojpg.jpg"
        },
        {
          url:
            "https://balkrishna.cdn.prismic.io/balkrishna/5536b5de1e1dd00784c8b7a6eb6644192bee5643_pencil.jpg"
        },
        {
          url:
            "https://balkrishna.cdn.prismic.io/balkrishna/ddb2a7afc3d6e8220b1a8854f70bb845a2f74231_colored-pencils.jpg"
        }
      ];
      let random = Math.floor(Math.random() * coverList.length);
      return coverList[random];
    }
  }
});

Vue.prototype.$scrollToTop = () => window.scrollTo(0, 0);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
