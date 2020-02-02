<template>
  <div class="wrapper container">
    <h2>Our recent blog articles</h2>
    <br />
    <div class="container">
      <div class="row">
        <div class="mx-auto">
          <div class="post" v-for="(item, index) in posts" :key="'posts-' + index">
            <div class="post-preview">
              <h5 class="post-title" v-for="(title, index) in item.data.title">
                <a :href="'/post/' + item.uid">{{ title.text }}</a>
              </h5>
              <p class="post-meta">
                {{ item.data.content | readMore(200, '...') }}
                <a
                  :href="'/post/' + item.uid"
                  class="text-primary"
                >
                  Read
                  more
                </a>
              </p>
              <p class="post-meta">
                <i class="glyphicon glyphicon-calendar"></i>
                Posted on {{item.first_publication_date | formatDate}}
              </p>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="btn-group w-100">
          <a href="/blog" class="body-link btn btn-primary">View more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentBlog",

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
          orderings: "[document.first_publication_date desc]",
          pageSize: 4
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