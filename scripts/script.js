/*
    Student Name: Your Name
    File Name: Script.js
    Date: Today's Date
 */

//Hamberger menu Function 

function hamburger(){
    
    var menu =document.getElementById("menu-links");
    
    var logo =document.getElementById("ffc-logo");
    
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    }else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
    
}

//Global variables

var video = document.getElementById("example");

var videoSource = document.getElementById("vid-src");

var descriptionSource = document.getElementById("despsrc");

//Function to display the burpees example video

function burpees() {
    videoSource.src = "media/burpees.mp4";
    video.style.display = "block";
    video.load();
}

function plank() {
    videoSource.src = "media/plank.mp4";
    video.style.display = "block";
    video.load();
}

function mountain() {
    videoSource.src = "media/mc.mp4";
    video.style.display = "block";
    video.load();
}

//Function to display a promo code

function discount() {
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "Promo Code: D25START";
    promo.style.color = "#ff0000";
    promo.style.fontSize = "2em";
}






