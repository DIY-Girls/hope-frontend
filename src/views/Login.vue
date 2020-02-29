<template>
<div class="row">	
<div class="column1">
<br>
<br>    
<br>
<br>
<h2 align="center">
<font size = "6" color="white" face = "Comic sans MS">
Welcome to
</font>
</h2>
<h2 align="center">
<font size = "6" color="#e6ccff" face = "Comic sans MS" >
H.O.P.E.
</font>
</h2>
<h2 align = "center">
<font size = "5" color = "grey" face = "Comic sans MS">
Help Out People Escape 
</font>
</h2>
<p align = "center"> 
<font size = "5" color="white" face = "Comic sans MS">  
The SFHS STEM Magnet DIY Girls Invent Team is an all-female group made up of 22 high school students, 
who are determined to innovate a device designed to secure the safety and well-being of vulnerable 
people between the ages of 13-19. 
</font>
</p>
</div>
<div class="column" style="background-color:#f3e6fc;">

<div class="container">
<img src="avatar.png" alt="Avatar" class="avatar center" >
<br>
<label for="uname">
<b>Email</b>
</label>
<input type="text" placeholder="Email" name="Email" required>

<label for="psw">
<b>Password</b>
</label>
<input type="password" placeholder="Enter Password" name="psw" required>

<button type="submit">
Login
</button>

<label>
<input type="checkbox" checked="checked" name="remember"> Remember me
</label>
</div>

<div class="container" style="background-color:#f1f1f1">
<button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">
Cancel
</button>

<span class="psw">
Forgot 
<a href="#">
password?
</a>
<br>
Don't have an Account?
<a href="index.html">
Sign-Up
</a>
</span>
</div>
</div>
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
        const response = await axios.post('https://obscure-ridge-56951.herokuapp.com/api/auth/login', data);
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
