<template>
  <div>
    <template v-for="(slice, index) in fields.slices">
      <template v-if="slice.slice_type === 'banner_with_caption'">
        <div class="jumbotron" v-bind:style="{ backgroundImage: 'url(' + slice.primary.image_banner.url + ')' }">
          <prismic-rich-text :field="slice.primary.title_of_banner" class="display-4" />
          <prismic-rich-text :field="slice.primary.description" class="lead" />
          <hr class="my-4">
          <p class="lead">
            <a class="btn btn-primary btn-lg" :href="slice.primary.button_link.url" role="button">
              {{slice.primary.button_label[0].text}}
            </a>
          </p>
        </div>
      </template>
    </template>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    props: ['fields']
  }

</script>
