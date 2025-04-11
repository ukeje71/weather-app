let valueSearch =document.getElementById("valueSearch");
let city =document.getElementById("city");
let temperature = document.getElementById("temperature");
let description =document.querySelector(".description");
let cloudy =document.getElementById("cloudy");
let humidity =document.getElementById("humidity");
let pressure =document.getElementById("pressure");
let form = document.querySelector("form");
let flag=document.getElementById("flag");
let weather =document.getElementById("weather");
form.addEventListener('submit',(event) => {
    event.preventDefault();
    if (valueSearch.value != ''){
        searchWeather();
    }
})

let id='9b89417f1cde6a57c878c774a4fe2746';
let url='https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
const  searchWeather = () =>{ 
 fetch(url + '&q=' + valueSearch.value)
 .then(responsive =>responsive.json())
 .then(data => {
    console.log(data);

    if(data.cod ==200){
        city.innerText = data.name;
        flag.src ='https://flagsapi.com/'+data.sys.country+'/shiny/32.png';
        weather.src ='http://openweathermap.org/img/w/'+data.weather[0].icon+'.png'
        temperature.textContent=data.main.temp;
         
    }
 })
}