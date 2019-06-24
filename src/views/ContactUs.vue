<template>
  <main id="content" role="main">
    <!-- Page Header -->
    <header
      class="masthead animated fadeInDown"
      v-bind:style="{ backgroundImage: 'url(' + this.fields.cover.url + ')' }"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="page-heading">
              <h1>Contact Us</h1>
              <span class="subheading">Have questions? We love them.</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdgWa4vX275F3OMxM2B5XXvX6FP3ndSgbfP9RqR6u_FyEObtQ/viewform?embedded=true"
          width="640"
          height="856"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >Loading...</iframe>
      </div>
    </div>
    <div class="container-fluid mt-4">
      <div class="row">
        <Map/>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import Map from "../components/Map";
export default {
  name: "ContactUs",
  components: {
    Map
  },
  data() {
    return {
      fields: {
        cover: this.randomCover()
      }
    };
  }
};
</script>
