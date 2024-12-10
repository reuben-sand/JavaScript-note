const navbarToggler = document.querySelector('.navbar-toggler');
const navbarText = document.querySelector('.navbar-text');
navbarToggler.addEventListener('click',(e)=>{
    if(navbarToggler.getAttribute('aria-expanded') === 'true'){
        navbarText.style.flexBasis='100%';
    }else{
        setTimeout(() => {
            navbarText.style.flexBasis='auto';
          }, 350);
    }
});
const navbar = document.querySelector('.navbar');
const navbarTotalHeight = navbar.offsetHeight;
const elementHTML = document.documentElement;
const body = document.querySelector('body');
const chapterNavbar = document.querySelector('#chapter-nav');
const viewportHeight = window.innerHeight;
const aside = document.querySelector('aside');
const asideTowindowTop = aside.getBoundingClientRect().top;
const pageTowindowTop = document.documentElement.getBoundingClientRect().top;
const asideToPageTop = asideTowindowTop - pageTowindowTop;
(function(){
    elementHTML.style.scrollPaddingTop=navbarTotalHeight+'px';
    body.setAttribute('data-bs-offset',navbarTotalHeight+5);
    chapterNavbar.style.top = asideToPageTop + 'px';
    chapterNavbar.style.height = viewportHeight - asideToPageTop + 'px';
})();
const debounce= function(func ,delay){
    let timeoutId;
    return function(...args){
        clearTimeout(timeoutId);
        timeoutId= setTimeout(()=>{
            func.apply(this,args);
        },delay);
    };
}
const setChatperNavbarHeight = function(){
    const viewportHeight = window.innerHeight;
    chapterNavbar.style.height = viewportHeight - asideToPageTop  + 'px';
};
window.addEventListener("resize", debounce(setChatperNavbarHeight,250));