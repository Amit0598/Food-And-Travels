


var imgArray = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
var i = 1;


function header() {
    if (i >= 7) {
        i = 0;
        document.getElementById("header").style.backgroundImage = `url(./ASSET/image/gallery/${imgArray[i]})`
    }
    else {

        document.getElementById("header").style.backgroundImage = `url(./ASSET/image/gallery/${imgArray[i]})`

    }
    i++;
    var time = setTimeout(header, 5000)
}
function nextimg() {
    i++;
    if (i >= 7) {
        i = 0;
        document.getElementById("header").style.backgroundImage = `url(./ASSET/image/gallery/${imgArray[i]})`
    }
    else {

        document.getElementById("header").style.backgroundImage = `url(./ASSET/image/gallery/${imgArray[i]})`

    }

}
function preimg() {
    i--;
    if (i <= 0) {
        i = 6;
        document.getElementById("header").style.backgroundImage = `url(./ASSET/image/gallery/${imgArray[i]})`
    }
    else {

        document.getElementById("header").style.backgroundImage = `url(./ASSET/image/gallery/${imgArray[i]})`

    }

}
var img = document.images;
console.log(img)
for (i = 0; i < img.length; i++) {
    img[i].src = `./ASSET/image/gallery/${i}.jpg`

}
function fun1(imgval) {
    document.getElementById("b1").setAttribute("src", `./ASSET/image/gallery/${imgval}.jpg`)
    document.getElementById("div1").style.transform = "scale(1)"
    document.getElementById("container").style.filter="blur(5px)"
}
function close1() {
    document.getElementById("div1").style.transform = " scale(0)"
    document.getElementById("container").style.filter="blur(0px)"
}
    
