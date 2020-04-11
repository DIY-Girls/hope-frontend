<template>
  <div class="cont">
    <div class="form sign-in">
      <h2>Welcome back</h2>
      <br>
      <img src="../assets/avatar.png" alt="Avatar" class="avatar center" >
      <br>
      <p class="errorMessage"> {{errorMessage}} </p>
      <label for="uname">
        <span> Email </span>
        <br>
        <input v-model="email" type="text" placeholder="Email" name="Email" required>
      </label>
      <label>
        <span> Password </span>
        <br>
        <input v-model="password" type="text" placeholder="Password" name="password" required>
      </label>
      <br>
      <label>
      <button @click="login" id="login-button" class="login-button center" type="submit"><i class="fa fa-sign-in"> Login </i></button>
      <br>
      <p class="forgot-pass"> Forgot Password? </p>
      </label>
      <br>
      <br>
    </div>
    <div class="sub-cont">
      <div class="img">
        <div class="img__text m-up">
          <div class="transbox">
            <h2> New Here to </h2>
            <h1> H. O. P. E. </h1>
            <p>The SFHS STEM Magnet DIY Girls Invent Team is an all-female group made up of 22 high school students, who are determined to innovate a device designed to secure the safety and well-being of vulnerable people between the ages of 13-19. </p>
            <br>
            <br>
            <router-link to="/signup" tag="button" id="button" class="center"><i class="fa fa-pencil"> Sign-Up </i></router-link>
            <br>
          </div>
        </div>
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
    box-sizing: 0;
    margin: 0;
    padding: 0;
    padding-bottom: 2px;
  }

body
  {
    background: #dcbef0;
  }

img.avatar 
  {
    width: 30%;
    border-radius: 50%;
  }

.errorMessage
  {
    color: red;
  }

.cont 
  {
    overflow: auto;
    position: relative;
    width: 75%;
    height: fixed;
    margin: 40px auto 100px;
    margin-bottom: 23px;
    background: #f3e6fc;
    border: 2px solid black;
  }

.form 
  {
    position: relative;
    width: 70%;
    height: 100%;
    padding: 80px 30px 0;
  }

.sub-cont
  {
    overflow: auto;
    position: absolute;
    right: 0%;
    top: 0;
    width: 35%;
    height: 100%;
  }

button, #login-button 
  {
    text-align: center;
    display: block;
    margin: 0 auto;
    width: 125px;
    height: 36px;
    border-radius: 30px;
    font-size: 15px;
    cursor: pointer;
    border: 1px solid black;
    outline: none;
    justify-content: center;
    display: flex;
    left: 50%;
    margin: 0;
    position: absolute;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #f3e6fc;
    background: black;
    font-size:15px;
  } 

button:hover, #login-button:hover 
  {
    background-color: #f3e6fc;
    color: black;
  }

.img 
  {
    overflow: auto;
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding-top: 30%;
    content: '';
    right: 0;
    top: 0;
    background-image: url(../assets/location.png);
    display:flex;
    background-size: cover;
    content: '';
  }

div.form h2, div.transbox h2 
  {
    margin-bottom: 20px;
    font-weight: normal;
    width: 100%;
    font-size: 30px;
    text-align: center;
  }

div.form h1, div.transbox h1 
  {
    margin-bottom: 20px;
    font-weight: bold;
    width: 100%;
    font-size: 35px;
    padding: -1px;
    text-align: center;
  }

div.form p, div.transbox p 
  {
    margin-bottom: 20px;
    font-weight: bold;
    width: 100%;
    font-size: 15px;
    text-align: center;
    line-height: 1.5;
  }

span, label 
  {
    display: block;
    width: 260px;
    margin: 25px auto 0;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    color: black;
    text-transform: uppercase;
  }

div.transbox {
  margin: 30px;
  background-color: #d7e9e7;
  border: 1px solid rgb(116, 61, 61);
  opacity: 0.75;
  color: black;
  padding: 10px;
}

input 
  {
    width: 100%;
    outline:0;
    border-width: 0 0 2px;
    border-color: black;
    text-align: center;
    background: none;
    font-size: 15px;
  }

.forgot-pass 
  {
    margin-top: 15px;
    text-align: center;
    font-size: 15px;
    color: black;
  }

</style>
