<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="/">
        <!-- <img class="img-fluid" src="img/logo.png" alt="logo"> -->
        Bal Krishna Nursery
      </a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" @click.native="$scrollToTop">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about" @click.native="$scrollToTop">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog" @click.native="$scrollToTop">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact" @click.native="$scrollToTop">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Header',

  }

</script>
