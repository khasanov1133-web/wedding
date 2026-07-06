// =====================================================
// Wedding Invitation
// Ислам & Гулбону
// =====================================================

// ======================
// Welcome Screen
// ======================

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

// ======================
// Countdown
// ======================

const weddingDate = new Date("2026-08-15T12:30:00").getTime();

function countdown(){

const now = new Date().getTime();

const distance = weddingDate - now;

if(distance <= 0){

document.getElementById("days").innerHTML="0";
document.getElementById("hours").innerHTML="0";
document.getElementById("minutes").innerHTML="0";
document.getElementById("seconds").innerHTML="0";

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

// ======================
// Scroll Animation
// ======================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:0.15

});

sections.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

// ======================
// Button Top
// ======================

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

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
