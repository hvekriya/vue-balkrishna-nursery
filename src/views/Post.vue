<!-- Create file src/views/Page.vue -->

<template>
  <div>
    <header class="masthead" style="background-image: url('img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>{{ $prismic.richTextAsPlain(fields.title) }}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="wrapper container">
      <prismic-edit-button :documentId="documentId" />
      <prismic-image :field="fields.cover" class="img-responsive" />
      <prismic-rich-text :field="fields.content" class="description" />
      <div class="cta-wrapper">
        <prismic-link :field="fields.ctaLink" class="cta">
          {{ $prismic.richTextAsPlain(fields.ctaText) }}
        </prismic-link>
      </div>
      <hr>
      <h5>Posted on {{fields.postedDate | formatDate }}</h5>
      <hr>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Post',
    data() {
      return {
        documentId: '',
        fields: {
          title: null,
          content: null,
          ctaLink: null,
          ctaText: null,
          postedDate: null,
          cover: null
        }
      }
    },
    methods: {
      getContent(uid) {
        this.$prismic.client.getByUID('blog', uid)
          .then((document) => {
            if (document) {
              this.documentId = document.id
              this.fields.title = document.data.title
              this.fields.content = document.data.content
              this.fields.ctaLink = document.data.cta_link
              this.fields.ctaText = document.data.cta_text
              this.fields.postedDate = document.first_publication_date
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
      this.getContent(this.$route.params.uid)
    },
    beforeRouteUpdate(to, from, next) {
      this.getContent(to.params.uid)
      next()
    }
  }

</script>
