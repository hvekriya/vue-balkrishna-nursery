<!-- Create file src/views/Page.vue -->

<template>
  <div>
    <header
      class="masthead animated fadeInDown"
      v-bind:style="{ backgroundImage: 'url(' + this.fields.cover.url + ')' }"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <prismic-rich-text :field="fields.title" />
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="wrapper container">
      <prismic-edit-button :documentId="documentId" />
      <prismic-rich-text :field="fields.content" class="description" />

      <!-- Slices -->
      <!-- FAQ Tabs -->
      <FAQ :fields="fields" />

      <div class="cta-wrapper">
        <prismic-link
          :field="fields.ctaLink"
          class="cta"
        >{{ $prismic.richTextAsPlain(fields.ctaText) }}</prismic-link>
      </div>
    </div>
  </div>
</template>

<script>
import FAQ from "../components/FAQ";
export default {
  name: "Parents",
  components: {
    FAQ,
  },
  data() {
    return {
      documentId: "",
      fields: {
        title: "",
        content: "",
        ctaLink: "",
        ctaText: "",
        slices: [],
        cover: this.randomCover(),
      },
    };
  },
  methods: {
    getContent(uid) {
      this.$prismic.client.getByUID("parents", uid).then((document) => {
        if (document) {
          this.documentId = document.id;
          this.fields.title = document.data.title;
          this.fields.content = document.data.content;
          this.fields.ctaLink = document.data.cta_link;
          this.fields.ctaText = document.data.cta_text;
          this.fields.slices = document.data.body;
          if (document.data.cover.url) {
            this.fields.cover = document.data.cover;
          }
        } else {
          this.$router.push({
            name: "not-found",
          });
        }
      });
    },
  },
  created() {
    this.getContent(this.$route.params.uid);
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent(to.params.uid);
    next();
  },
};
</script>
