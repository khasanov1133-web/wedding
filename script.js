// =====================================
// Wedding Invitation
// Ислам & Гулбону
// =====================================

// ---------------------
// Welcome
// ---------------------

const welcome=document.getElementById("welcome");

const openBtn=document.getElementById("openInvitation");

if(openBtn){

openBtn.onclick=()=>{

welcome.classList.add("hideWelcome");

setTimeout(()=>{

welcome.style.display="none";

},800);

}

}

// ---------------------
// Countdown
// ---------------------

const weddingDate=new Date("2026-08-15T18:00:00").getTime();

function countdown(){

const now=new Date().getTime();

const distance=weddingDate-now;

if(distance<0){

return;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/60000);

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

}

countdown();

setInterval(countdown,1000);

// ---------------------
// Scroll Animation
// ---------------------

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});
// =====================================
// Falling Rose Petals
// =====================================

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

const petals=["🌹","🌸","🌺"];

petal.innerHTML=petals[Math.floor(Math.random()*petals.length)];

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(18+Math.random()*18)+"px";

petal.style.animationDuration=(8+Math.random()*6)+"s";

petal.style.opacity=Math.random()*.5+.5;

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},14000);

}

setInterval(createPetal,350);

// =====================================
// Scroll To Top
// =====================================

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

// =====================================
// Video Autoplay
// =====================================

const video=document.querySelector(".hero-video");

if(video){

video.play().catch(()=>{

console.log("Автовоспроизведение запрещено.");

});

}

// =====================================
// Button Hover Animation
// =====================================

document.querySelectorAll(".gold-btn,.telegram-btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});

// =====================================
// Fade In Page
// =====================================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

// =====================================
// RSVP Animation
// =====================================

const form=document.querySelector(".rsvp form");

if(form){

form.addEventListener("submit",()=>{

const btn=form.querySelector("button");

btn.innerHTML="Спасибо ❤️";

btn.disabled=true;

});

}

// =====================================
// Console
// =====================================

console.log("💍 Wedding Invitation Loaded");
