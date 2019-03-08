<template>
  <main id="content" role="main">
    <!-- Page Header -->
    <header class="masthead" v-bind:style="{ backgroundImage: 'url(' + this.fields.cover.url + ')' }">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Bal Krishna Nursery</h1>
              <span class="subheading">by Woolwich Temple</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        fields: {
          cover: this.randomCover()
        }
      }
    }
  }

</script>
