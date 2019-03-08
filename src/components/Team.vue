<template>
  <div>
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
  </div>
</template>

<script>
  export default {
    name: 'Team',
    props: ['fields']
  }

</script>
