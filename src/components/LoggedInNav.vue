<template>
  <div class="icon-bar" id="nav">
    <img src="../assets/logo.png" alt="logo" class="logo">
    <router-link class="fa fa-home" to="/"> Home </router-link>
    <router-link class="fa fa-map-marker" to="/dashboard"> Dashboard </router-link>
    <router-link class="fa fa-institution" to="/about"> About </router-link>
    <button class="button button1" v-on:click="logout"><i class="fa fa-sign-out"> Logout </i></button>
    <router-link style="float:right" class="fa fa-user" to="/profile"> Profile </router-link>
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
.button1 {
  border: none;
  padding: 22.5px 20px;
  text-align:center;
  text-decoration:none;
  font-size: 20px;
  display: inline-box; 
  cursor: pointer;
  border-radius:0px;
  width: 125px; 
  height: 65px; 
  float: right;
  background-color: black;
  color: #f3e6fc;
}

.button1:hover {
  background-color: #f3e6fc;
  color: black;
}
</style>
