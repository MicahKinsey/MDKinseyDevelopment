var links = document.getElementsByClassName('landing-nav');
var screens = document.getElementsByClassName('fullscreen');
var landing = document.getElementById('landing');
var about = document.getElementById('about');
var portfolio = document.getElementById('portfolio');
var contact = document.getElementById('contact');
var landingLink = document.getElementById('landing-link');
var aboutLink = document.getElementById('about-link');
var portfolioLink = document.getElementById('portfolio-link');
var contactLink = document.getElementById('contact-link');

var sky = document.getElementById('sky');
var moon = document.getElementById('moon');
var mid = document.getElementById('midground');

var heights;
function resetHeights() {
    heights = [0];
    for(var i = 0; i < screens.length; i++) {
        heights.push(screens[i].scrollHeight + heights[i]);
    }
}
resetHeights();

window.addEventListener("resize", resetHeights);


function scrollCheck() {
    var y = window.scrollY;
    
    //Parallax stuff
    sky.style.webkitTransform = 'rotateZ(' + ((y - 500) / 50) +'deg) scale(1.3)';
    
    moon.style.top = (y * 0.7);
    
    mid.style.top = (y * 0.2);
    //var fore = document.getElementById('foreground');
    //fore.style.top = 80 - (y * .5);

    //Link active stuff
    for(var l = 0; l < links.length; l++) {
        if(y >= heights[l] && y < heights[(l + 1)]) {
            links[l].classList.add('active');
        }
        else {
            links[l].classList.remove('active');
        }
    }
}