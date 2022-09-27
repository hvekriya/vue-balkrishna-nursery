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
        <div class="col-md-8 col-lg-8">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdgWa4vX275F3OMxM2B5XXvX6FP3ndSgbfP9RqR6u_FyEObtQ/viewform?embedded=true"
            class="contact-form"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >Loading...</iframe>
        </div>
        <div class="col-md-4 col-lg-4">
          <form>
            <legend>
              <i class="fas fa-map-marker-alt"></i> Our Location
            </legend>
            <address>
              <strong>Bal Krishna Nursery</strong>
              <br />SKSS Temple Woolwich,
              <br />St. Margarets Grove,
              <br />London, SE18 7RL
              <br />
              <br />
              <i class="fas fa-phone"></i>
              <a href="tel:+442037456070" itemprop="telephone">020 3745 6070</a>
              <br />
              <i class="fas fa-envelope"></i>
              <a href="mailto:info@balkrishna.org">info@balkrishna.org</a>
            </address>
          </form>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-4">
      <div class="row">
        <Map />
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
