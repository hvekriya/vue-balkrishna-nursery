<template>
  <div class="row mb-2">
    <template v-for="(slice, index) in fields.slices">
      <template v-if="slice.slice_type === 'list_of_articles'">
        <div class="col-md-6" v-for="(item, index) in slice.items" :key="'photo-' + index">
          <div class="card mb-4 shadow p-3 mb-5 bg-white rounded border-0">
            <img
              class="bd-placeholder-img card-img-top"
              :src="item.article_cover.url"
              :alt="item.article_cover.alt"
            >
            <div class="card-body">
              <h5 class="card-title">
                <prismic-rich-text :field="item.article_title"/>
              </h5>
              <prismic-rich-text :field="item.article_description" class="card-text"/>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group w-100">
                  <a
                    :href="item.article_to_link.url"
                    class="body-link btn btn-primary"
                  >Continue reading</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "FeaturedArticles",
  props: ["fields"]
};
</script>
