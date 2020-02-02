<template>
  <div>
    <input v-model="email" name="email" placeholder="email">
    <input v-model="password" name="password" placeholder="password">
    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const data = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:8080/api/auth/login', data)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style>
</style>
