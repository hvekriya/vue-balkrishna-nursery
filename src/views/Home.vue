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
            <div class="site-heading">
              <h1>Bal Krishna Nursery</h1>
              <span class="subheading">by Woolwich Temple</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <prismic-rich-text :field="fields.content"/>
      <!-- Slices -->
      <!-- FAQ Tabs -->
      <FAQ :fields="fields"/>
      <!-- <h2>Featured articles</h2> -->
      <FeaturedArticles :fields="fields"/>
      <FAQ :fields="fields"/>
      <Banner :fields="fields"/>
      <Slider :fields="fields"/>
      <ImageSlice :fields="fields"/>

      <div class="cta-wrapper">
        <prismic-edit-button :documentId="documentId"/>
        <prismic-link
          :field="fields.ctaLink"
          class="cta"
        >{{ $prismic.richTextAsPlain(fields.ctaText) }}</prismic-link>
      </div>
    </div>
  </main>
</template>

<script>
import FeaturedArticles from "../components/FeaturedArticles";
import FAQ from "../components/FAQ";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import ImageSlice from "../components/ImageSlice";
export default {
  name: "Home",
  components: {
    FeaturedArticles,
    FAQ,
    Banner,
    Slider,
    ImageSlice
  },
  data() {
    return {
      documentId: "",
      fields: {
        // title: '',
        content: "",
        ctaLink: "",
        ctaText: "",
        slices: [],
        cover: "" // this.randomCover()
      }
    };
  },
  methods: {
    getContent() {
      this.$prismic.client.getSingle("home").then(document => {
        if (document) {
          this.documentId = document.id;
          // this.fields.title = document.data.title
          this.fields.content = document.data.content;
          this.fields.ctaLink = document.data.cta_link;
          this.fields.ctaText = document.data.cta_text;
          this.fields.slices = document.data.body;
          if (document.data.cover.url) {
            this.fields.cover = document.data.cover;
          }
        } else {
          this.$router.push({
            name: "not-found"
          });
        }
      });
    }
  },
  created() {
    this.getContent();
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent();
    next();
  }
};
</script>
