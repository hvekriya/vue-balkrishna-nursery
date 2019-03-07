<!-- Create file src/views/Page.vue -->

<template>
  <div>
    <header class="masthead" v-bind:style="{ backgroundImage: 'url(' + this.fields.cover.url + ')' }">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Parents</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="wrapper container">
      <prismic-edit-button :documentId="documentId" />
      <prismic-rich-text :field="fields.content" class="description" />
      <!-- FAQ Tabs -->
      <template v-for="(slice, index) in fields.slices">
        <template v-if="slice.slice_type === 'text'">
          <!-- Section heading -->
          <prismic-rich-text :field="slice.primary.intro" />
          <!-- Main card -->
          <div class="bd-example" data-example-id="">
            <div id="accordion" role="tablist" aria-multiselectable="true">
              <div class="card" v-for="(item, index) in slice.items" :key="'photo-' + index">
                <div class="card-header" role="tab" id="headingOne">
                  <div class="mb-0">
                    <a data-toggle="collapse" data-parent="#accordion" :href="'#collapse-' + index" aria-expanded="false"
                      :aria-controls="'#collapse-' + index" class="collapsed">
                      <prismic-rich-text :field="item.question" class="card-title mb-0" />
                    </a>
                  </div>
                </div>
                <div :id="'collapse-' + index" class="collapse" role="tabpanel" aria-labelledby="headingOne"
                  aria-expanded="false">
                  <div class="card-body">
                    <prismic-rich-text :field="item.answer" class="card-text text-black-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </template>
      <div class="cta-wrapper">
        <prismic-link :field="fields.ctaLink" class="cta">
          {{ $prismic.richTextAsPlain(fields.ctaText) }}
        </prismic-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Parents',
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
        this.$prismic.client.getSingle('parents')
          .then((document) => {
            if (document) {
              this.documentId = document.id
              this.fields.title = document.data.title
              this.fields.content = document.data.content
              this.fields.ctaLink = document.data.cta_link
              this.fields.ctaText = document.data.cta_text
              this.fields.slices = document.data.body
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
