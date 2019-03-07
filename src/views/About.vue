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
      <!-- Team Members -->
      <h2>Our Team</h2>
      <div class="row">
        <template v-for="(slice, index) in fields.slices">
          <template v-if="slice.slice_type === 'team'">
            <div class="col-xl-3 col-md-6 mb-4" v-for="(item, index) in slice.items" :key="'photo-' + index">
              <div class="card border-0 shadow">
                <prismic-image :field="item.portrait" class="card-img-top" alt="item.portrait[index].alt" />
                <div class="card-body text-center">
                  <prismic-rich-text :field="item.first_and_lastname" class="card-title mb-0" />
                  <prismic-rich-text :field="item.position" class="card-text text-black-50" />
                </div>
              </div>
            </div>
          </template>
        </template>
      </div>
      <!-- Gallery -->
      <template v-for="(slice, index) in fields.slices">
        <template v-if="slice.slice_type === 'image_gallery'">
          <hooper :progress="true" :autoPlay="true" :playSpeed="2000" style="height: 100%">
            <slide v-for="(item, index) in slice.items" :key="'photo-' + index">
              <prismic-image :field="item.gallery_image" class="img-fluid" />
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
          </hooper>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
  import {
    Hooper,
    Slide,
    Navigation as HooperNavigation
  } from 'hooper'
  import 'hooper/dist/hooper.css'
  export default {
    name: 'About',
    components: {
      Hooper,
      Slide,
      HooperNavigation
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
