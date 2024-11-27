//https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=3e21042a3d6fd8d08c46a8f421696292

let temp=document.getElementById('temperature');
let city=document.getElementById('city')
let humidity=document.getElementById('percentage');
let speed=document.getElementById('speed');
let btn=document.getElementById('btn');
let city_name="";
document.getElementById('input_city').addEventListener('input',(e)=>{
    city_name=(e.target.value)
})



async function getData(){
    const json_data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=3e21042a3d6fd8d08c46a8f421696292&units=metric`);
    const data=await json_data.json()
    
    temp.innerText=data.main.temp;
    humidity.innerText=data.main.humidity+"%";
    speed.innerText=data.wind.speed+"km/hr";
    city.innerText=data.name;
    document.getElementById('icon').setAttribute('src',`./images/${data.weather[0].main}.png`)


}

function fun(){
    getData();
}
btn.addEventListener('click',fun);