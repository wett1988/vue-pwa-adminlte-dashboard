<template>
 
 
<!--
  <div>Signin</div>
  
-->

 
<div class="login-box">
  <div class="login-logo">
    <a href="/"><b>Admin</b>LTE</a>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">Sign in to start your session</p>

    <form @submit.prevent="login">
      <div class="form-group has-feedback">
        <input type="email" class="form-control" placeholder="Email" v-model="form.email">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" class="form-control" placeholder="Password" v-model="form.password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
        <div class="col-xs-8">
          <div class="checkbox icheck">
            <label>
              <input type="checkbox"> Remember Me
            </label>
          </div>
        </div>
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="submit" class="btn btn-primary btn-block btn-flat">Login</button>
        </div>
        <!-- /.col -->
      </div>
    </form>

<!--
    <div class="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using
        Facebook</a>
      <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using
        Google+</a>
    </div>
-->
    <!-- /.social-auth-links -->

<!--    <a href="#">I forgot my password</a><br>-->
<!--    <a href="register.html" class="text-center">Register a new membership</a>-->
    
    <router-link :to="{ name: 'register'}" class="text-center">Register</router-link>

  </div>
  <!-- /.login-box-body -->
</div>
<!-- /.login-box -->
  
</template>
<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      let redirect = this.$auth.redirect()
      this.$auth.login({
        data: {
          username: 'admin',
          password: 'secret'
        },
        redirect: {
          name: redirect ? redirect.from.name : 'home'
        },
        fetchUser: true,
        success () {
          console.log('success ')
          console.log(this.$auth.user())
        },
        error (res) {
          console.log('error ' + this.context)
          this.error = res.data
        }
      })
    }
  }
}
</script>