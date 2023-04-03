

function validated() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "amit@gmail.com" && password == "12345") {

        window.location.assign("foodtravel.html")
    }
    else {
        alert("invalid input");
        return;
    }
}

const logcont = document.querySelector('.logcont');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const btnPopup = document.querySelector('.button');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    logcont.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logcont.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    logcont.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
    logcont.classList.remove('active-popup');
});

function msg() {
    var date = new Date();
    var time = date.getHours();
    if (time < 1 && time >= 0) {
        document.getElementById("myname").innerHTML = "MID NIGHT"
    }
    if (time <5 && time >= 1) {
        document.getElementById("myname").innerHTML = "YEARLY MORNING"
    }
    if (time < 12 && time >=5) {
        document.getElementById("myname").innerHTML = "GOOD MORNING"
    }
    if (time < 17 && time >= 12) {1
        document.getElementById("myname").innerHTML = "GOOD AFTERMOON"
    }
    if (time <20 && time >= 17) {
        document.getElementById("myname").innerHTML = "GOOD  EVENING"
    }
    if (time < 24 && time >=20) {
        document.getElementById("myname").innerHTML = "GOOD NIGHT"
    }
}

function a() {
    var scale = "0"
    document.getElementById("good").style.scale = scale;
    document.getElementById("myname").style.color = "transparent";
}
function clock() {
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();

    var h = "0";
    var hh1=hh;
    if (hh1 > 12) {
        h = hh1 - 12;
        if(h<10){
            document.getElementById("hh").innerHTML = "0" + h
        }
        else{
            document.getElementById("hh").innerHTML =  h
        }
    }
    else {
        document.getElementById("hh").innerHTML = h
    }
    if (mm < 10) {
        document.getElementById("mm").innerHTML = "0" + mm;
    }
    else {
        document.getElementById("mm").innerHTML = mm;
    }
    if (ss < 10) {
        document.getElementById("ss").innerHTML = "0" + ss;
    }
    else {
        document.getElementById("ss").innerHTML = ss;
    }
    if (hh > 12) {
        document.getElementById("AM").innerHTML = "PM"
    }
    else {
        document.getElementById("AM").innerHTML = "AM"

    }
    
}
function date(){
    var date = new Date();
    var mo = date.getMonth();
    var dt = date.getDate();
    var yy = date.getFullYear();
    var day = date.getDay();

    if(day == "1")
    {
        document.getElementById("day").innerHTML="Monday"
    }
    if(day == "2")
    {
        document.getElementById("day").innerHTML="Tuesday."
    }
    if(day == "3")
    {
        document.getElementById("day").innerHTML="Wednesday."
    }
    if(day == "4")
    {
        document.getElementById("day").innerHTML=" Thursday."
    }
    if(day == "5")
    {
        document.getElementById("day").innerHTML=" Friday."
    }
    if(day == "6")
    {
        document.getElementById("day").innerHTML="Saturday."
    }
    if(day == "7")
    {
        document.getElementById("day").innerHTML="Sunday."
    }
}
function dateee(){
    var date = new Date();
    var mo = date.getMonth();
    var dt = date.getDate();
    var yy = date.getFullYear();
    var mm= mo+=1;
    var d = dt + "/" + mm + "/" + yy;
    document.getElementById("date").innerHTML=d
}

function gallery1(){
    window.location.assign("Gallery.html")
}
date();
dateee();
setInterval(clock, 10);
