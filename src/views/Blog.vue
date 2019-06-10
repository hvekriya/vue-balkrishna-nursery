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
              <h1>Blog</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="wrapper container">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post" v-for="(item, index) in posts" :key="'posts-' + index">
              <div class="post-preview">
                <h2 class="post-title" v-for="(title, index) in item.data.title">
                  <a :href="'/post/' + item.uid">{{ title.text }}</a>
                </h2>
                <p class="post-meta">
                  {{ item.data.content | readMore(200, '...') }}
                  <a :href="'/post/' + item.uid">
                    Read
                    more
                  </a>
                </p>
                <ul class="list-inline list-unstyled">
                  <li>
                    <span>
                      <i class="glyphicon glyphicon-calendar"></i>
                      Posted on {{item.first_publication_date | formatDate}}
                    </span>
                  </li>
                </ul>
              </div>
              <hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      posts: "",
      fields: {
        cover: this.randomCover()
      }
    };
  },
  methods: {
    getContent() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "blog"), {
          orderings: "[my.blog.date desc]"
        })
        .then(document => {
          if (document) {
            this.posts = document.results;
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
