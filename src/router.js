import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(view) {
  return () => import( /* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: loadView('Home')
    },
    // Blog
    {
      path: '/blog',
      name: 'Blog',
      component: loadView('Blog')
    },
    {
      path: '/post/:uid',
      name: 'Post',
      component: loadView('Post')
    },
    // Other pages
    {
      path: '/not-found',
      name: 'not-found',
      component: loadView('NotFound')
    },
    {
      path: '*',
      redirect: {
        name: 'not-found'
      }
    }
  ],
})
