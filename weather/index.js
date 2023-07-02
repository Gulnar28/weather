let form=document.querySelector("form");
let info=document.querySelector(".weather");

form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    let inp=document.querySelector("input").value;
    const YOUR_ACCESS_KEY='f960bcba87999b57e43f2a3354fc3584'
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=${YOUR_ACCESS_KEY}`);
    let result=await response.json();
console.log(response)
console.log(info);
info.innerHTML=`${result.name}`
})