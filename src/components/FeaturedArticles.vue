<template>
  <div class="row mb-2">
    <template v-for="(slice, index) in fields.slices">
      <template v-if="slice.slice_type === 'list_of_articles'">

        <div class="col-md-6" v-for="(item, index) in slice.items" :key="'photo-' + index">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <!-- <strong class="d-inline-block mb-2 text-primary">World</strong> -->
              <prismic-rich-text :field="item.article_title" class="mb-0" />
              <!-- <div class="mb-1 text-muted">Nov 12</div> -->
              <prismic-rich-text :field="item.article_description" class="card-text mb-auto" />
              <a :href="item.article_to_link.url" class="stretched-link">Continue reading</a>
            </div>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'FeaturedArticles',
    props: ['fields']
  }

</script>
