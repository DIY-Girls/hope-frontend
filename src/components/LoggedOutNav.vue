<template>
  <div class="icon-bar" id="nav">
    <img src="../assets/logo.png" alt="logo" class="logo">
    <router-link class="fa fa-home" to="/"> Home </router-link>
    <router-link class="fa fa-map-marker" to="/dashboard"> Dashboard </router-link>
    <router-link class="fa fa-institution" to="/about"> About </router-link>
    <router-link class="fa fa-sign-in" style="float:right" to="/login"> Login </router-link>
    <router-link class="fa fa-pencil" style="float:right" to="/signup"> Sign-Up </router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.email = '';
      localStorage.userId = '';
      this.email = '';
      this.$router.push({ name: 'login' });
    }
  }
};
</script>

<style scoped>
img.logo {
  float:left; 
  width:150px; 
  height:65px;
}

#nav {
  width: 100%;
  overflow: auto;
  background-color: #f3e6fc;
  text-align:center;
}

#nav a {
  float: left;
  padding: 22.5px 20px;
  color: black;
  text-decoration: none;
  font-size: 20px;
}

#nav a:hover {
  background-color: black;
  color: #f3e6fc;
}
.active {
  background-color: #f3e6fc;
}
@media screen and (max-width: 500px){
  #nav a {
    float: none;
    display: block;
  }
}
</style>
