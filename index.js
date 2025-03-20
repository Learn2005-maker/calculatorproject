const monthName=document.getElementById("month-name");
const dayname=document.getElementById("day-name");
const daynum=document.getElementById("day-number");
const yearE1=document.getElementById("year");
const date=new Date();
const month=date.getMonth()
monthName.innerText=date.toLocaleString("en",{
    month:"long"
})
dayname.innerText=date.toLocaleString("en",{weekday:"long"})
daynum.innerText=date.getDate()
yearE1.innerHTML=date.getFullYear()
