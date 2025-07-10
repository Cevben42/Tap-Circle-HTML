let count=0;

const toggleBtn=document.getElementById("themeToggle");
const sizeSlider=document.getElementById("sizeSlider");
const circle=document.getElementById("circle");
const counter=document.getElementById("counter");
const body=document.body;
//Toggle for dark/light mode
toggleBtn.addEventListener("click", ()=>{
    body.classList.toggle("dark");
});
//resize circle slider
sizeSlider.addEventListener("input", (e)=>{
    const size=e.target.value+"px";
    circle.style.width=size;
    circle.style.height=size;
});
//Click counter
circle.addEventListener("click", ()=>{
    count++;
    counter.textContent=count;
});
