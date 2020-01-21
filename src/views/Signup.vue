<template>
    <div class="signupForm">
        <form>
            <label>Email: </label>
            <input type="email" name="email">
            <label>Password: </label>
            <input type="password" name="password">
            <input type="submit" value="Signup">
        </form>
    </div>
</template>

<script>

export default {
  name: 'Signup',
  methods: {
      signUp() {
          // Within this method:
          // make a call to the api @ 
          //    api/users as a POST request 
          // make this request using axios
      }
  }
}
</script>

<style scoped>
</style>
