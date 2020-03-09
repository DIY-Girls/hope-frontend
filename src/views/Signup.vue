<template>
<body>
<div class='formwrapper'>
<img src="logo.png" alt="logo" width = "200px"  height= "200px">
​
 <div class="field">
  
  <label class="label is-small">
  <label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-small" type="email" placeholder="First name">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
​
 <div class="field">
  <label class="label is-small"></label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-small" type="email" placeholder="Last name">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
 <div class="field">
  <label class="label is-small"></label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-small" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
 <div class="field">
  <label class="label is-small"></label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-small" type="email" placeholder="password">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
 <div class="field">
  <label class="label is-small"></label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-small" type="email" placeholder="D/O/B">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
 <div class="field">
  <label class="label is-small"></label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-small" type="email" placeholder="Sex">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
​
 <div class="field">
  <label class="label is-small"></label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-small" type="email" placeholder="Gender">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
 <div class="field">
  <label class="label is-small"></label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-small" type="email" placeholder="Address">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
​
​
	
	<div align= "center">
	<!--<input form="customer_name" type="submit" value="Submit">-->
	<button> submit  </button>
	<div id="result"></div>
	<!-- <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
​
<script>
 
 
 $(document).ready(function(){
 $("button").click(function(){
	$.post("https://obscure-ridge-56951.herokuapp.com/api/users",
	{ 
		name: "kiara", 
		gender: "boy",
		phone: "81869993",
		email: "@itsmekiara.buuhh",
	
	
	},
	function(data, status){
   console.log("data")
   console.log(data)
	}) 
	})
 })
 </script> -->
 
	<!--</form>-->
	</body>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Signup',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      gender: '',
      phone: '',
      sex: '',
      errorMessage: ''
    };
  },
  methods: {
    async signUp () {
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        gender: this.gender,
        password: this.password
      };
      try {
        let response = await axios.post('http://localhost:8080/api/users', data);
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
