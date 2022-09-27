<template>
  <div>
    <template v-for="(slice, index) in fields.slices">
      <template v-if="slice.slice_type === 'text'">
        <!-- Section heading -->
        <prismic-rich-text :field="slice.primary.intro" />
        <!-- Main card -->
        <div class="bd-example" data-example-id>
          <div id="accordion" role="tablist" aria-multiselectable="true">
            <div
              class="card"
              v-for="(item, index) in slice.items"
              :key="'photo-' + index"
            >
              <div class="card-header" role="tab" id="headingOne">
                <div class="mb-0">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    :href="'#collapse-' + index"
                    aria-expanded="false"
                    :aria-controls="'#collapse-' + index"
                    class="collapsed"
                  >
                    <h5>{{ item.question[0].text }}</h5>
                  </a>
                </div>
              </div>
              <div
                :id="'collapse-' + index"
                class="collapse"
                role="tabpanel"
                aria-labelledby="headingOne"
                aria-expanded="false"
              >
                <div class="card-body">
                  <prismic-rich-text
                    :field="item.answer"
                    class="card-text text-black-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<style>
.card {
  margin-bottom: 10px;
}
</style>


<script>
export default {
  name: "FAQ",
  props: ["fields"],
};
</script>
