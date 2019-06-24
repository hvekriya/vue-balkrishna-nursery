<template>
  <footer id="footer" class="footer">
    <div class="container-fluid">
      <div class="copyright">
        <center>
          <p>
            &copy; Bal Krishna Nursery {{ new Date().getFullYear() }}
            <br>
            <router-link
              to="/our-nursery/privacy-policy"
              @click.native="$scrollToTop"
              class="body-link"
            >Privacy Policy</router-link>
          </p>
          <div class="img-fluid"> 
            
          </div>
          <img class="img-fluid" src="img/logo.png" alt="logo">
        </center>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter"
};
</script>
