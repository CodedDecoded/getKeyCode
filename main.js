window.addEventListener('keydown', function(e){
    e.preventDefault();
var fontarr = ["Nunito", "Quicksand", "Varela Round", "Pacifico", "Merienda", "Kalam", "Concert One", "Patrick Hand", "Chewy", "Kelly Slab", "Calligraffitti", "Baloo Bhaina", "Zeyada", "Chelsea Market", "Clicker Script", "Kurale", "Vibur", "Sniglet", "Euphoria Script"];
document.getElementById("keycode").style.fontFamily = fontarr[Math.floor(Math.random() * fontarr.length)];
let keycode = document.getElementById("keycode");
keycode.innerHTML = e.keyCode;
let keyname = document.getElementById("keyname");
if(e.keyCode == "32")
keyname.innerHTML = "spacebar";
else
keyname.innerHTML = e.key;
});