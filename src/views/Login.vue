<template>
<div class="row">
<div class="column1">
<br>
<br>    
<br>
<br>
<h2 align="center">
<font size = "6" color="white">
Welcome to
</font>
</h2>
<h2 align="center">
<font size = "6" color="#e6ccff" >
H.O.P.E.
</font>
</h2>
<h2 align = "center">
<font size = "5" color = "grey">
Help Out People Escape 
</font>
</h2>
<p align = "center"> 
<font size = "5" color="white" >  
The SFHS STEM Magnet DIY Girls Invent Team is an all-female group made up of 22 high school students, 
who are determined to innovate a device designed to secure the safety and well-being of vulnerable 
people between the ages of 13-19. 
</font>
</p>
</div>
<div class="column" style="background-color:#f3e6fc;">

<div class="container">
<img src="../assets/avatar.png" alt="Avatar" class="avatar center" >
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
/* eslint no-trailing-spaces: off*/ 
* 
{
box-sizing: border-box;
font-family: 'Indie Flower';
}

/* Create two equal columns that floats next to each other */
.column1 
{
float: left;
width: 50%;
padding: 10px;
height: 650px; /* Should be removed. Only for demonstration */
background: url(../assets/location.jpg);
}
.column 
{
float: left;
width: 50%;
padding: 10px;
height: 650px; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after 
{
content: "";
display: table;
clear: both;
}

/* Full-width input fields */
input[type=text], input[type=password] 
{
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
box-sizing: border-box;
}

/* Set a style for all buttons */
button 
{
background-color: #4CAF50;
color: white;
padding: 14px 20px;
margin: 8px 0;
border: none;
cursor: pointer;
width: 100%;
}

button:hover 
{
opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn 
{
width: auto;
padding: 10px 18px;
background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer 
{
text-align: center;
margin: 24px 0 12px 0;
position: relative;
}

img.avatar 
{
width: 40%;
border-radius: 50%;
}
.container 
{
padding: 16px;
}

span.psw 
{
float: right;
padding-top: 16px;
}

/* The Modal (background) */
.modal 
{
display: none; /* Hidden by default */
position: fixed; /* Stay in place */
z-index: 1; /* Sit on top */
left: 0;
top: 0;
width: 100%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
padding-top: 60px;
}

/* Modal Content/Box */
.modal-content 
{
background-color: #fefefe;
margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
border: 1px solid #888;
width: 80%; /* Could be more or less, depending on screen size */
}
</style>
