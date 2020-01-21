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
  name: 'Signup'
}
</script>

<style scoped>
.signupForm {
    display:block;
}

label {
    display: inline-block;
}
</style>
