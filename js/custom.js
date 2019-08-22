var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === './images/image01.jpg') {
      myImage.setAttribute ('src','./images/image02.jpg');
    } else {
      myImage.setAttribute ('src','./images/image01.jpg');
    }
}