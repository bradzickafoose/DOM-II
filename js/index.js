const body = document.querySelector("body");
const mainNavigation = document.querySelector(".main-navigation");
const logo = document.querySelector(".logo-heading");
const nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav-link");
const h2 = document.querySelectorAll('h2');
const destination = document.querySelector('.destination');
const destinationBtn = document.querySelector('.destination .btn');
const footer = document.querySelector('.footer')
const copyright = document.querySelector('.footer p');

const introImage = document.querySelector('.intro img');
const changeImg = document.querySelector('.intro img');

// Event 1 - mouseenter 
logo.addEventListener("mouseenter", () => {
    logo.style.transform = "scale(1.2)";
    logo.style.transition = "all 0.4s";
    logo.style.color = "white";
    logo.style.fontWeight = "bold";
    logo.style.fontFamily = "cursive";
    logo.style.letterSpacing = "2rem";
    logo.style.cursor = "crosshair";
})

// Event 2 - mouseleave
logo.addEventListener("mouseleave", () => {
    logo.style.transform = "scale(1.0)";
    logo.style.transition = "all 0.4s";
    logo.style.color = "black"
    logo.style.fontFamily = "";
    logo.style.letterSpacing = "";
    logo.style.cursor = "";
})

// Event 3 - dblclick
changeImg.addEventListener("dblclick", () => {
  changeImg.src= "https://media.gq.com/photos/56f0285c8de0bfd84dd08377/16:9/w_1600,h_900,c_limit/burt-reynolds-cosmo-2.jpg"
})

// Event 4 - wheel
body.addEventListener('wheel', () => {
    TweenLite.to(logo, 1, {rotation: 360, ease:Power2.easeOut});
})

// Event 4 - load
window.addEventListener('load', () => {
    TweenLite.to(logo, 0, {y:-100});
    TweenLite.to(logo, 1, {ease:Bounce.easeOut, y:0});
    navLink.forEach((e) => e.style = 'border-bottom: 2px solid transparent;')
});

window.addEventListener('load', () => {
    TweenLite.to(nav, 0, {y:-100});
    TweenLite.to(nav, 1, {ease:Bounce.easeOut, y:0});
    navLink.forEach((e) => e.style = 'border-bottom: 2px solid transparent;')
});

window.addEventListener('load', () => {
    TweenLite.to(mainNavigation, 0, {y:-100});
    TweenLite.to(mainNavigation, 1, {ease:Bounce.easeOut, y:0});
    navLink.forEach((e) => e.style = 'border-bottom: 2px solid transparent;')
});

// Event 5 - mousedown
body.addEventListener('mousedown', () => {
    body.setAttribute('style', 'opacity: 1;');
    body.style.filter = 'grayscale(100%)'
});

// Event 5 - mouseup
body.addEventListener('mouseup', () => {
    body.setAttribute('style', 'opacity: none;');
});

// Event 6 - resize (viewport)
window.addEventListener('resize', () => {
    logo.setAttribute('style', 'color: purple;');
})
window.addEventListener('resize', () => {
    h2.forEach((element) => element.style.color = 'purple');
})

// Event 7 - copy (CMD + V)
footer.addEventListener('copy', () => {
    footer.style = 'background-color: purple';
})

copyright.addEventListener('copy', () => {
    copyright.style = 'font-weight: 800; color: #fff';
})

// Event 8 - keydown
window.addEventListener('keydown', (e) => {
    var p = document.createElement('p'),
        a = document.createElement('a');
    p.textContent = `${e.key}`;
    a.textContent = 'Go back to the homepage...or else. 🔪';
    a.href = 'http://127.0.0.1:5500/index.html';

    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    body.appendChild(p);
    p.style.margin = "50vh 35vw 0";
    body.appendChild(a);
    a.style.margin = "50vh 35vw";
})


// Stop the navigation items from refreshing the page using `preventDefault()`
navLink.forEach((element) => {
    element.addEventListener('mouseover', (e) => e.target.style = 'border-bottom: 2px solid black;');
    element.addEventListener('mouseleave', (e) => e.target.style = 'border-bottom: 2px solid transparent;');
})

navLink.forEach((element) => {
    element.addEventListener("click", (e) => e.preventDefault());
})

// Nest two similar events somewhere in the site and prevent the event propogation properly
destination.addEventListener('mousedown', () => {
    console.log("Destination");
});

destinationBtn.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    console.log("Button");
});
