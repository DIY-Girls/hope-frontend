<template>
<div>
This is the home page :)!
</div>
</template>
<script>
export default {
  name: 'Home'
};
</script>
<style scoped>
</style>
<!DOCTYPE html>
<html>
<head>
<title>H. O. P. E.</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body,h1,h2,h3,h4,h5,h6
{
font-family: "Lato", sans-serif;
}
body, html
{
height: 100%;
color:#777;
<!--#382345;-->
<!-- #f3e6fc-->
line-height: 1.8;
}
/* Create a Parallax Effect */
.bgimg-1, .bgimg-2, .bgimg-3
{
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}
/* First image (Logo. Full height) */
.bgimg-1
{
background-color:#f3e6fc;
<!--background-image: url('');-->
min-height: 90%;
}
/* Second image (Portfolio) */
.bgimg-2
{
background-image: url("/w3images/parallax2.jpg");
min-height: 400px;
}
/* Third image (Contact) */
.bgimg-3
{
background-image: url("/w3images/parallax3.jpg");
min-height: 400px;
}
.w3-wide
{
letter-spacing: 10px;
}
.w3-hover-opacity
{
cursor: pointer;
}
/* Turn off parallax scrolling for tablets and phones */
@media only screen and (max-device-width: 1600px)
{
.bgimg-1, .bgimg-2, .bgimg-3
{
background-attachment: scroll;
min-height: 400px;
}
}
</style>
</head>
<body>
<!-- Navbar (sit on top) -->
<div class="w3-top">
<div class="w3-bar" id="myNavbar">
<a class="w3-bar-item w3-button w3-hover-#382345 w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);"
onclick="toggleFunction()" title="Toggle Navigation Menu">
<i class="fa fa-bars"></i>
</a>
<a href="#home" class="w3-bar-item w3-button" style= "color:#382345" >
<i class= "fa fa-home fa-lg"></i>
HOME
</a>
<a href="#about" class="w3-bar-item w3-button w3-hide-small" style= "color:#382345;">
<i class="fa fa-user fa-lg"></i>
ABOUT
</a>
<a href="#MISSION" class="w3-bar-item w3-button w3-hide-small" style= "color:#382345;">
<i class="fa fa-th fa-lg"></i>
MISSION
</a>
<a href="#contact" class="w3-bar-item w3-button w3-hide-small" style= "color:#382345;">
<i class="fa fa-envelope fa-lg"></i>
CONTACT
</a>
<a href="#" class="w3-bar-item w3-button w3-hide-small w3-right" style= "color:#382345;">
<i class="fa fa-user fa-lg" style="color:#382345;"></i>
SIGN IN
</a>
</div>
<!-- Navbar on small screens -->
<div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
<a href="#about" class="w3-bar-item w3-button" onclick="toggleFunction()">
ABOUT
</a>
<a href="#MISSION" class="w3-bar-item w3-button" onclick="toggleFunction()">
MISSION
</a>
<a href="#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">
CONTACT
</a>
<a href="#" class="w3-bar-item w3-button">
SIGN IN
</a>
</div>
</div>
<!-- First Parallax Image with Logo Text -->
<div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
<div class="w3-display-middle" style="white-space:nowrap;">
<img src="default.png" style="width:470px;height:210px;" alt="logo">
</div>
</div>
<!-- Container (About Section) -->
<div class="w3-content w3-container w3-padding-64" id="about">
<h3 class="w3-center">
ABOUT H.O.P.E
</h3>
<p class="w3-center">
<em>
Our project's purpose
</em>
</p>
<p>
We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpaqui officia deserunt
mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
ex ea commodo consequat.
</p>
<div class="w3-row">
<div class="w3-col m6 w3-center w3-padding-large">
<p>
<b>
<i class="fa fa-user w3-margin-right"></i>
  Our Project
</b>
</p>
<br>
</div>
<!-- Hide this text on small devices -->
<div class="w3-col m6 w3-hide-small w3-padding-large">
<p>
Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.
</p>
</div>
</div>
</div>
<div class="w3-row w3-center w3-#f3e6fc w3-padding-16"> <!--style="background-color:#382345;" -->
<font color = "white">
<div class="w3-quarter w3-section">
<span class="w3-xlarge">22</span>
<br>
Creative Minds
</div>
<div class="w3-quarter w3-section">
<span class="w3-xlarge">5</span>
<br>
Categorized Teams
</div>
<div class="w3-quarter w3-section">
<span class="w3-xlarge">15+</span>
<br>
Hours of work a week
</div>
<div class="w3-quarter w3-section">
<span class="w3-xlarge">150+</span>
<br>
Meetings
</div>
</font>
</div>
<!-- Second Parallax Image with Mission Statement Text -->
<div class="bgimg-2 w3-display-container w3-opacity-min">
<div class="w3-display-middle">
<span class="w3-xxlarge w3-text-white w3-wide">MISSION</span>
</div>
</div>
<!-- Container (Mission Statement Section) -->
<div class="w3-content w3-container w3-padding-64" id="MISSION">
<h3 class="w3-center">
MISSION  STATEMENT
</h3>
<p class="w3-center">
<em>
Here are some of my latest lorem work ipsum tipsum.
<br>
Click on the images to make them bigger
</em>
</p>
<br>
<!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) -->
<div class="w3-row-padding w3-center">
<div class="w3-col m3">
<img src="/w3images/p1.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="The mist over the mountains">
</div>
<div class="w3-col m3">
<img src="/w3images/p2.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Coffee beans">
</div>
<div class="w3-col m3">
<img src="/w3images/p3.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Bear closeup">
</div>
<div class="w3-col m3">
<img src="/w3images/p4.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Quiet ocean">
</div>
</div>
<div class="w3-row-padding w3-center w3-section">
<div class="w3-col m3">
<img src="/w3images/p5.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="The mist">
</div>
<div class="w3-col m3">
<img src="/w3images/p6.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="My beloved typewriter">
</div>
<div class="w3-col m3">
<img src="/w3images/p7.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Empty ghost train">
</div>
<div class="w3-col m3">
<img src="/w3images/p8.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Sailing">
</div>
</div>
</div>
<!-- Modal for full size images on click-->
<div id="modal01" class="w3-modal w3-black" onclick="this.style.display='none'">
<span class="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image">
<i class="fa fa-remove"></i>
</span>
<div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
<img id="img01" class="w3-image">
<p id="caption" class="w3-opacity w3-large"></p>
</div>
</div>
<!-- Third Parallax Image with Mission Statement Text -->
<!--****--><div style="background-color:#382345">
<div class="bgimg-3 w3-display-container w3-opacity-min">
<div class="w3-display-middle">
<span class="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
</div>
</div>
<!-- Footer -->
<footer class="w3-center w3-#382345 w3-padding-64 ">
<!-- w3-opacity w3-hover-opacity-off-->
<a href="#home" class="w3-button w3-light-grey">
<i class="fa fa-arrow-up w3-margin-right"></i>
To the top
</a>
<div class="w3-xlarge w3-section" style ="background-color= #e6ccff">
<a href="https://www.instagram.com/hopebysfhsdiygirls2019/?hl=en" target="_blank">
<i class="fa fa-instagram w3-hover-opacity"></i>
</a>
</div>
</footer>
<!--****--></div>
<script>
// Modal Image Gallery
function onClick(element)
{
document.getElementById("img01").src = element.src;
document.getElementById("modal01").style.display = "block";
var captionText = document.getElementById("caption");
captionText.innerHTML = element.alt;
}
// Change style of navbar on scroll
window.onscroll = function()
{
myFunction();
}
function myFunction()
{
var navbar = document.getElementById("myNavbar");
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
{
navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
}
else
{
navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
}
}
// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction()
{
var x = document.getElementById("navDemo");
if (x.className.indexOf("w3-show") == -1)
{
x.className += " w3-show";
}
else
{
x.className = x.className.replace(" w3-show", "");
}
}
</script>
</body>
<body>
<img src="hope logo.png" alt="logo">
</body>
</html>
