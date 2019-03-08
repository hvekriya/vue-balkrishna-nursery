<!-- Create file src/views/Page.vue -->

<template>
  <div>
    <header class="masthead" v-bind:style="{ backgroundImage: 'url(' + this.fields.cover.url + ')' }">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>About us</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="wrapper container">
      <prismic-edit-button :documentId="documentId" />
      <prismic-rich-text :field="fields.content" class="description" />

      <div class="cta-wrapper">
        <prismic-link :field="fields.ctaLink" class="cta">
          {{ $prismic.richTextAsPlain(fields.ctaText) }}
        </prismic-link>
      </div>

      <!-- Slices -->
      <Team :fields="fields" />
      <Slider :fields="fields" />

    </div>
  </div>
</template>

<script>
  import Slider from '../components/Slider'
  import Team from '../components/Team'
  export default {
    name: 'About',
    components: {
      Slider,
      Team
    },
    data() {
      return {
        documentId: '',
        fields: {
          title: null,
          content: null,
          ctaLink: null,
          ctaText: null,
          slices: [],
          cover: {
            "dimensions": {
              "width": 1191,
              "height": 1684
            },
            "alt": null,
            "copyright": null,
            "url": "https://balkrishna.cdn.prismic.io/balkrishna/a948adfe837dbfe0f4f1963c366b74f0950de6e6_logo.png"
          }
        }
      }
    },
    methods: {
      getContent() {
        this.$prismic.client.getSingle('about-us')
          .then((document) => {
            if (document) {
              this.documentId = document.id
              this.fields.title = document.data.title
              this.fields.content = document.data.content
              this.fields.ctaLink = document.data.cta_link
              this.fields.ctaText = document.data.cta_text
              this.fields.slices = document.data.body;
              if (document.data.cover.url) {
                this.fields.cover = document.data.cover
              }
            } else {
              this.$router.push({
                name: 'not-found'
              })
            }
          })
      }
    },
    created() {
      this.getContent()
    },
    beforeRouteUpdate(to, from, next) {
      this.getContent()
      next()
    }
  }

</script>
