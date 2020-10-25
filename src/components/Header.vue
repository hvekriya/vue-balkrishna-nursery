<template>
  <!-- Navigation -->
  <nav
    class="navbar navbar-expand-md navbar-dark fixed-top bg-dark shadow"
    id="mainNav"
  >
    <div class="container">
      <a class="navbar-brand" href="/">Bal Krishna Nursery</a>
      <button
        class="hamburger hamburger--spring navbar-toggler navbar-toggler-right"
        v-bind:class="{ 'is-active': menuIsActive }"
        type="button"
        v-on:click="toggleNav"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" @click.native="$scrollToTop"
              >Home</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              :class="{
                'router-link-exact-active': subIsActive('/our-nursery'),
              }"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Our Nursery</a
            >
            <div class="dropdown-menu">
              <!-- <router-link
                v-for="(item, index) in ourNurseryMenu"
                :key="'menu-' + index"
                class="dropdown-item"
                :to="'/our-nursery/' + item.uid"
                @click.native="$scrollToTop"
              >{{item.data.title[0].text}}</router-link>-->

              <router-link
                class="dropdown-item"
                to="/our-nursery/our-values"
                @click.native="$scrollToTop"
                >Our vision and values</router-link
              >
              <router-link
                class="dropdown-item"
                to="/our-nursery/curriculum"
                @click.native="$scrollToTop"
                >Curriculum</router-link
              >
              <router-link
                class="dropdown-item"
                to="/our-nursery/food"
                @click.native="$scrollToTop"
                >Food</router-link
              >
              <router-link
                class="dropdown-item"
                to="/our-nursery/fees-and-funding"
                @click.native="$scrollToTop"
              >
                Fees and funding
              </router-link>
              <router-link
                class="dropdown-item"
                to="/our-nursery/meet-the-team"
                @click.native="$scrollToTop"
                >Meet the team</router-link
              >
              <router-link
                class="dropdown-item"
                to="/our-nursery/vacancy"
                @click.native="$scrollToTop"
                >Vacancy</router-link
              >
              <router-link
                class="dropdown-item"
                to="/our-nursery/policies"
                @click.native="$scrollToTop"
                >Policies</router-link
              >
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              :class="{ 'router-link-exact-active': subIsActive('/parents') }"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Parents</a
            >
            <div class="dropdown-menu">
              <router-link
                v-for="(item, index) in parentsMenu"
                :key="'menu-' + index"
                class="dropdown-item"
                :to="'/parents/' + item.uid"
                @click.native="$scrollToTop"
                >{{ item.data.title[0].text }}</router-link
              >
            </div>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/blog"
              @click.native="$scrollToTop"
              >Blog</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/our-nursery/covid-19"
              @click.native="$scrollToTop"
              >COVID-19</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/contact"
              @click.native="$scrollToTop"
              >Contact</router-link
            >
          </li>
          <!-- SPACER-->
          <li class="nav-item mr-4"></li>
          <!-- SPACER-->

          <li class="nav-item social-media">
            <a
              class="nav-link"
              href="https://www.facebook.com/Bal-Krishna-Nursery-101302974825134/"
            >
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li class="nav-item social-media">
            <a
              class="nav-link"
              href="https://www.instagram.com/balkrishnanursery/"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuIsActive: false,
      ourNurseryMenu: "",
      parentsMenu: "",
    };
  },
  methods: {
    toggleNav() {
      this.menuIsActive = !this.menuIsActive;
    },
    subIsActive(input) {
      console.log(input);
      const paths = Array.isArray(input) ? input : [input];
      return paths.some((path) => {
        return this.$route.path.indexOf(path) === 0;
      });
    },
    getOurNurseryMenu() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "our-nursery"))
        .then((document) => {
          if (document) {
            this.ourNurseryMenu = document.results;
          } else {
            this.ourNurseryMenu = "";
          }
        });
    },
    getParentsMenu() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "parents"))
        .then((document) => {
          if (document) {
            this.parentsMenu = document.results;
          } else {
            this.parentsMenu = "";
          }
        });
    },
  },
  created() {
    this.getOurNurseryMenu();
    this.getParentsMenu();
  },
  beforeRouteUpdate(to, from, next) {
    this.getOurNurseryMenu();
    this.getParentsMenu();
    next();
  },
};
</script>
