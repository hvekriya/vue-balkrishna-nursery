import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: loadView("Home")
    },
    // Our Nursery
    {
      path: "/our-nursery/:uid",
      name: "OurNursery",
      component: loadView("OurNursery")
    },
    {
      path: "/parents",
      name: "Parents",
      component: loadView("Parents")
    },
    // Blog
    {
      path: "/blog",
      name: "Blog",
      component: loadView("Blog")
    },
    {
      path: "/post/:uid",
      name: "Post",
      component: loadView("Post")
    },
    {
      path: "/contact",
      name: "ContactUs",
      component: loadView("ContactUs")
    },
    // Other pages
    {
      path: "/admin",
      beforeEnter(to, from, next) {
        // Put the full page url including the protocol http(s) below
        window.location = "https://balkrishna.prismic.io";
      }
    },
    {
      path: "/not-found",
      name: "not-found",
      component: loadView("NotFound")
    },
    {
      path: "*",
      redirect: {
        name: "not-found"
      }
    }
  ]
});
