<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/profile">Profile</router-link>
        <router-link to="/login">Login</router-link>
        <button v-on:click="logout">Logout</button>
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
