<template>
  <footer id="footer" class="footer">
    <div class="container-fluid">
      <div class="row">
        <div id="map"></div>
      </div>
      <div class="copyright">
        <center>
          <p>&copy; Bal Krishna Nursery {{ new Date().getFullYear() }}
            <br>
            <router-link to="/our-nursery/privacy-policy" @click.native="$scrollToTop">Privacy Policy</router-link>
          </p>
          <img class="img-fluid" src="img/logo.svg" alt="logo">
        </center>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'MainFooter',

  }

</script>
