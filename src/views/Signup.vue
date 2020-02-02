<template>
    <div class="formWrapper">
      <input v-model="name" type="text" name="name" placeholder="name">
      <input v-model="email" type="email" name="email" placeholder="Email">
      <input v-model="password" type="password" name="password" placeholder="password">
      <input v-model="phone" type="text" name="phone" placeholder="phone">
      <input v-model="sex" type="text" name="sex" placeholder="sex">
      <input v-model="gender" type="text" name="gender" placeholder="gender">
      <button v-on:click="signUp">Submit</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Signup',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      gender: '',
      phone: '',
      sex: ''
    }
  },
  methods: {
    signUp () {
      console.log('here')
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        gender: this.gender,
        password: this.password
      }
      axios.post('http://localhost:8080/api/users', data)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
  .formWrapper {
    position: absolute;
    background-color: thistle;
    width: 300px;
    border: 15px  mauve;
    padding: 50px;
    margin: 20px;
  }
</style>
