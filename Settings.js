//background
function bg1() {
   document.getElementById("body").style.backgroundImage = "url(bg.png)";
}
function bg2() {
   document.getElementById("body").style.backgroundImage = "url(citywater.png)";
}
function bg3() {
   document.getElementById("body").style.backgroundImage = "url(Flowers.png)";
}
function bg4() {
   document.getElementById("body").style.backgroundImage = "url(Boardwalk.png)";
}
function custom_bg(event) {
  var reader = new FileReader();
  reader.onload = function() {
    document.getElementById("body").style.backgroundImage = `url(${reader.result})`;
    document.getElementById("body").style.backgroundSize = 'cover';
  }
  reader.readAsDataURL(event.target.files[0]);
}

//Color scheme

function color1() {
  document.getElementById("header").style.backgroundColor = "#75cbed";
}
function color2() {
  document.getElementById("header").style.backgroundColor = "red";
}
function color3() {
  document.getElementById("header").style.backgroundColor = "green";
}
function color4() {
  document.getElementById("header").style.backgroundColor = "lightgray";
}