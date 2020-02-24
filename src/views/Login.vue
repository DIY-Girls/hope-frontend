<template>
  <div>
    <p style="background:red; color: white;">{{ errorMessage }}</p>
    <input v-model="email" name="email" placeholder="email">
    <input v-model="password" name="password" placeholder="password">
    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login () {
      try {
        const data = {
          email: this.email,
          password: this.password
        };
        const response = await axios.post('http://localhost:8080/api/auth/login', data);
        localStorage.setItem('email', this.email);
        localStorage.setItem('userId', response.data.userId);
        this.$router.push({ name: 'dashboard' });
      } catch (error) {
        console.log(error.response);
        this.errorMessage = error.response.data.message;
      }
    }
  }
};
</script>

<style>
</style>
