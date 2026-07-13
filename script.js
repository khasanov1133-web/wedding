// ======================================
// Wedding Invitation
// Ислам & Гулбону
// ======================================

// -------------------------
// Welcome Screen
// -------------------------

const welcome = document.getElementById("welcome");
const openInvitation = document.getElementById("openInvitation");

if(openInvitation){

openInvitation.addEventListener("click",()=>{

welcome.classList.add("hideWelcome");

setTimeout(()=>{

welcome.style.display="none";

},900);

});

}

// -------------------------
// Countdown
// -------------------------

const weddingDate = new Date("2026-08-15T18:00:00").getTime();

function updateCountdown(){

const now = new Date().getTime();

const distance = weddingDate - now;

if(distance<=0){

document.getElementById("days").textContent=0;
document.getElementById("hours").textContent=0;
document.getElementById("minutes").textContent=0;
document.getElementById("seconds").textContent=0;

return;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/60000);

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").textContent=days;
document.getElementById("hours").textContent=hours;
document.getElementById("minutes").textContent=minutes;
document.getElementById("seconds").textContent=seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);

// -------------------------
// Scroll Animation
// -------------------------

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.15});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});
// -------------------------
// Falling Petals
// -------------------------

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

const flowers=["🌸","🌹","🌺"];

petal.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(18+Math.random()*18)+"px";

petal.style.animationDuration=(7+Math.random()*6)+"s";

petal.style.opacity=Math.random()*0.5+0.5;

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},13000);

}

setInterval(createPetal,350);

// -------------------------
// Top Button
// -------------------------

const topButton=document.createElement("div");

topButton.id="topButton";

topButton.innerHTML="↑";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// -------------------------
// Buttons Animation
// -------------------------

document.querySelectorAll(".gold-button,.telegram-button").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-6px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});

// -------------------------
// Page Fade
// -------------------------

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

// -------------------------
// Video autoplay fix
// -------------------------

const heroVideo=document.querySelector(".hero-video");

if(heroVideo){

heroVideo.play().catch(()=>{

console.log("Автовоспроизведение запрещено браузером.");

});

}

// -------------------------
// RSVP
// -------------------------

const form=document.querySelector(".rsvp form");

if(form){

form.addEventListener("submit",()=>{

const button=form.querySelector("button");

button.disabled=true;

button.innerHTML="Спасибо ❤️";

});

}

// -------------------------
// Console
// -------------------------

console.log("💍 Wedding Invitation loaded successfully");
