<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
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
            <router-link class="nav-link" to="/" @click.native="$scrollToTop">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about" @click.native="$scrollToTop">About</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >Our Nursery</a>
            <div class="dropdown-menu">
              <router-link
                class="dropdown-item"
                to="/our-nursery/curriculum"
                @click.native="$scrollToTop"
              >Curriculum</router-link>
              <router-link
                class="dropdown-item"
                to="/our-nursery/food"
                @click.native="$scrollToTop"
              >Food</router-link>
              <router-link
                class="dropdown-item"
                to="/our-nursery/fees-and-funding"
                @click.native="$scrollToTop"
              >
                Fees
                and funding
              </router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/parents" @click.native="$scrollToTop">Parents</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog" @click.native="$scrollToTop">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact" @click.native="$scrollToTop">Contact</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link btn btn-outline-success" to="/contact" @click.native="$scrollToTop">Contact</router-link>
          </li>-->
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
      menuIsActive: false
    };
  },
  methods: {
    toggleNav() {
      this.menuIsActive = !this.menuIsActive;
    }
  }
};
</script>
