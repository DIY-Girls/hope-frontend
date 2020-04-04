<template>
    <div class="icon-bar" id="nav">
    <img src="../assets/logo.png" alt="logo" class="logo" style="float:left; width:150px; height:70px;">
    <router-link class="fa fa-home" to="/"> Home </router-link>
    <router-link class="fa fa-map-marker" to="/dashboard"> Dashboard </router-link>
      <router-link class="fa fa-institution" to="/about"> About </router-link>
      <router-link style="float:right" class="fa fa-user" to="/profile"> Profile </router-link>
    <template v-if="email===''">
        <router-link v-show="logggedout" class="fa fa-sign-in" style="float:right" to="/login"> Login </router-link>
        <router-link v-show="loggedout" class="fa fa-pencil" style="float:right" to="/signup"> Sign-Up </router-link>
    </template>
    <template v-else>
        <button v-show="login" v-on:click="logout" class="fa fa-sign-out" style="float:right; width:150px; height: 70px; font-color:#f3e6fc; font-size:20px; background-color: black; color: #f3e6fc;"> Logout </button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.email = '';
      localStorage.userId = '';
      this.$router.push({ name: 'login' });
    }
  }
};

</script>

<style scoped>
#nav {
overflow: hidden;
background-color: #f3e6fc;
}

#nav a {
float: left;
color: black;
text-align: center;
padding: 25px;
text-decoration: none;
font-size: 20px;
}
#nav a:hover {
background-color: black;
color: #f3e6fc;
}
#nav a.active {
background-color: #f3e6fc;
}
</style>
