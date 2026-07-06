// =======================================
// Wedding Invitation
// Ислам & Гулбону
// =======================================

// ==========================
// Welcome Screen
// ==========================

const welcome = document.getElementById("welcome");
const openInvitation = document.getElementById("openInvitation");

if (openInvitation) {

openInvitation.addEventListener("click", () => {

welcome.classList.add("hideWelcome");

setTimeout(() => {

welcome.style.display = "none";

},1000);

});

}

// ==========================
// Countdown
// ==========================

const weddingDate = new Date("2026-08-15T12:30:00").getTime();

function updateCountdown(){

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance / (1000*60*60*24));

const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

const seconds = Math.floor((distance % (1000*60)) / 1000);

document.getElementById("days").innerText =
distance > 0 ? days : 0;

document.getElementById("hours").innerText =
distance > 0 ? hours : 0;

document.getElementById("minutes").innerText =
distance > 0 ? minutes : 0;

document.getElementById("seconds").innerText =
distance > 0 ? seconds : 0;

}

updateCountdown();

setInterval(updateCountdown,1000);

// ==========================
// Scroll Animation
// ==========================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.15});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});
// ==========================
// Petals
// ==========================

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=
5+Math.random()*6+"s";

petal.style.fontSize=
18+Math.random()*18+"px";

petal.style.opacity=
0.5+Math.random()*0.5;

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},11000);

}

setInterval(createPetal,350);

// ==========================
// Top Button
// ==========================

const topButton=document.createElement("div");

topButton.id="topButton";

topButton.innerHTML="↑";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ==========================
// RSVP
// ==========================

const form=document.getElementById("rsvpForm");

if(form){

form.addEventListener("submit",()=>{

const button=form.querySelector("button");

button.innerHTML="Спасибо ❤️";

button.disabled=true;

});

}

// ==========================
// Rings Animation
// ==========================

const rings=document.querySelector(".hero-ring img");

if(rings){

setInterval(()=>{

rings.style.transform="scale(1.06)";

setTimeout(()=>{

rings.style.transform="scale(1)";

},600);

},3500);

}

// ==========================
// Gold Button Hover
// ==========================

document.querySelectorAll(".gold-button").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="";

});

});

// ==========================
// Smooth Fade
// ==========================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

// ==========================
// Console
// ==========================

console.log(

"❤️ Wedding Invitation by ChatGPT"

);
