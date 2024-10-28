// start show menu

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click' , () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click' , () => {
        navMenu.classList.remove('show-menu');
    });
}

// end show menu

// start remove menu mobile  

const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// end remove menu mobile  

// start add shadow header 

const shadowHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}
window.addEventListener('scroll' , shadowHeader);

// end add shadow header 

// start scroll up

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// end scroll up

// start sections active link 

const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link');
        } else {
        sectionsClass.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// end sections active link 

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
   //reset: true,
})

sr.reveal(`.home-data, .footer`)
sr.reveal(`.home-dish`, {delay: 500, distance: '100px', origin: 'bottom'})
sr.reveal(`.home-burger`, {delay: 1200, distance: '100px', duration: 1500})
sr.reveal(`.home-ingredient`, {delay: 1600, interval: 100})
sr.reveal(`.recipe-img, .delivery-img, .contact-image`, {origin: 'left'})
sr.reveal(`.recipe-data, .delivery-data, .contact-data`, {origin: 'right'})
sr.reveal(`.popular-card`, {interval: 100})