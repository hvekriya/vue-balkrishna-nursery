<template>
  <main id="content" role="main">
    <!-- Page Header -->
    <header class="masthead" v-bind:style="{ backgroundImage: 'url(' + this.fields.cover.url + ')' }">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="page-heading">
              <h1>Contact Us</h1>
              <span class="subheading">Have questions? We love them.</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="alert alert-success" role="alert" v-if="sent">
            Thank you! We will be in touch soon!
          </div>
          <div class="alert alert-danger" role="alert" v-if="error">
            Please try again!
          </div>
          <p>Want to get in touch? Fill out the form below to send me a message and we will get back to you as soon as
            possible!</p>
          <form id="contactForm" name="contact" method="post" @submit.prevent="handleSubmit" data-netlify="true"
            data-netlify-honeypot="bot-field">
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="Name" id="name" required
                  data-validation-required-message="Please enter your name." v-model="form.name">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Email Address</label>
                <input type="email" class="form-control" placeholder="Email Address" id="email" required
                  data-validation-required-message="Please enter your email address." v-model="form.email">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group col-xs-12 floating-label-form-group controls">
                <label>Phone Number</label>
                <input type="tel" class="form-control" placeholder="Phone Number" id="phone" required
                  data-validation-required-message="Please enter your phone number." v-model="form.phone">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Message</label>
                <textarea rows="5" class="form-control" placeholder="Message" id="message" required
                  data-validation-required-message="Please enter a message." v-model="form.message"></textarea>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <br>
            <div id="success"></div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary" id="sendMessageButton">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'ContactUs',
    data() {
      return {
        fields: {
          cover: this.randomCover()
        },
        form: {
          name: '',
          email: '',
          phone: '',
          message: ''
        },
        sent: false,
        error: false,
      }
    },
    methods: {
      encode(data) {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&");
      },
      handleSubmit() {
        const axiosConfig = {
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        };
        axios.post(
            "/contact",
            this.encode({
              "form-name": "contact",
              ...this.form
            }),
            axiosConfig
          )
          .then(() => {
            this.sent = true
            this.name = ''
            this.email = ''
            this.phone = ''
            this.message = ''
            this.error = false
          })
          .catch(() => {
            this.error = true
          });
      }
    },
  }

</script>
