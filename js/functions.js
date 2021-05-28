function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    var top = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({top: top, behavior: 'smooth'});
}