let count=0;

const toggleBtn=document.getElementById("themeToggle");
const sizeSlider=document.getElementById("sizeSlider");
const circle=document.getElementById("circle");
const counter=document.getElementById("counter");
const body=document.body;

toggleBtn.addEventListener("click", ()=>{
    body.classList.toggle("dark");
});

sizeSlider.addEventListener("input", (e)=>{
    const size=e.target.value+"px";
    circle.style.width=size;
    circle.style.height=size;
});

circle.addEventListener("click", ()=>{
    count++;
    counter.textContent=count;
});