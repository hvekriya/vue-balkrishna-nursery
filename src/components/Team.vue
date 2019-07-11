<template>
  <div>
    <!-- Team Members -->

    <template v-for="(slice, index) in fields.slices">
      <template v-if="slice.slice_type === 'team'">
        <prismic-rich-text :field="slice.primary.team_section" />
        <div class="row">
          <div
            class="col-xl-3 col-md-6 mb-4"
            v-for="(item, index) in slice.items"
            :key="'photo-' + index"
          >
            <div class="card border-0 shadow">
              <prismic-image
                :field="item.portrait"
                class="card-img-top"
                alt="item.portrait[index].alt"
              />
              <div class="card-body text-center">
                <h5 class="card-title">{{item.name[0].text}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{item.position[0].text}}</h6>
                <prismic-rich-text :field="item.description" class="card-text" />
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
  name: "Team",
  props: ["fields"]
};
</script>
