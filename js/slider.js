var sliderImg = document.getElementById('slider-image');
var sliderTitle = document.getElementById('slider-title');
var sliderDescription = document.getElementById('slider-description');
var sliderCircleHolder = document.getElementById('slider-circle-holder');
var sliderImgUrlBase = 'img/slider/';
var sliderList = [
    {url:'slider-nypl-01.png', title:'NYPL Web App Migration', description:'Desc. 1'},
    {url:'slider-dmdeejays-01.png', title:'Dance Masters Entertainment', description:'<h1>Description</h1><p>this is a description</p>'},
];
var listLength = sliderList.length;
var sliderIndex = 0;

function sliderSetup() {
    //add the appropriate number of slider dots
    for(var s = 0; s < sliderList.length; s++) {
        sliderCircleHolder.innerHTML += '<img name="slider-dot" src="img/svg/circle-empty.svg" style="height: 15px;" onclick="imgClickDot(' + s + ')">';
    }
    imgChangeSrc();
}

function imgFadeIn() {
    sliderImg.style.opacity = 0;
    for(var i = 10; i > 0; i--) {
        setTimeout(function(){
            sliderImg.style.opacity = parseFloat(sliderImg.style.opacity) + 0.1;
        }, 100);
    }
}
function imgFadeOut() {
    sliderImg.style.opacity = 1;
    for(var i = 10; i > 0; i--) {
        setTimeout(function(){
            sliderImg.style.opacity -= 0.1;
        }, 100);
    }
}

function imgClickDot(number) {
    sliderIndex = number;
    imgFadeOut();
    setTimeout(imgChangeSrc, 250);
    setTimeout(imgFadeIn, 250);
}

function imgChangeSrc() {
    sliderImg.src = sliderImgUrlBase + sliderList[sliderIndex].url;
    sliderTitle.innerHTML = sliderList[sliderIndex].title;
    sliderDescription.innerHTML = sliderList[sliderIndex].description;
    sliderDotActive();
}

function imgNext() {
    if(sliderIndex >= listLength - 1) {
        sliderIndex = 0;
    }
    else {
        sliderIndex += 1;
    }
    imgFadeOut();
    setTimeout(imgChangeSrc, 250);
    setTimeout(imgFadeIn, 250);
}

function imgPrev() {
    if(sliderIndex <= 0) {
        sliderIndex = listLength - 1;
    }
    else {
        sliderIndex -= 1;
    }
    imgFadeOut();
    setTimeout(imgChangeSrc, 250);
    setTimeout(imgFadeIn, 250);
}

function imgSelectIndex(index) {
    sliderIndex = index;
    imgChangeSrc();
    //needs more code to change 'active' circles
}

function sliderDotActive() {
    var dots = document.getElementsByName('slider-dot');
    for(var d = 0; d < dots.length; d++) {
        if(d == sliderIndex) {
            dots[d].src = 'img/svg/circle.svg';
        }
        else {
            dots[d].src = 'img/svg/circle-empty.svg';
        }
    }
}

function resizeSliderImg() {
    var width = sliderImg.width;
    var height = width / 1.777; //1.777
    sliderImg.height = height;
    //console.log('resizing slider image to: ' + width + ' ' + height);
}
sliderSetup();
resizeSliderImg();
window.addEventListener("resize", resizeSliderImg);