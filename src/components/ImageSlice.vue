<template>
  <div>
    <template v-for="(slice, index) in fields.slices">
      <template v-if="slice.slice_type === 'image'">
        <img
          :src="slice.primary.image_banner.url"
          :alt="slice.primary.image_banner.alt"
          class="img-fluid"
        >
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "ImageSlice",
  props: ["fields"]
};
</script>
