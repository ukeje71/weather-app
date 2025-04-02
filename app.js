let valueSearch =document.getElementById("valueSearch");
let city =document.getElementById("city");
let temperature = document.getElementById("temperature");
let description =document.querySelector(".description");
let cloudy =document.getElementById("cloudy");
let humidity =document.getElementById("humidity");
let pressure =document.getElementById("pressure");
let form = document.querySelector("form");
form.addEventListener('submit',(event) => {
    event.preventDefault();
    if (valueSearch.value != ''){
        searchWeather();
    }
})

let id='9caba1bb58bdfca7cc24fd8fea34e1ef';
let url=' https://api.openweathermap.org/data/2.5/weather?q=${city}&appid='+ id;
const  searchWeather = () =>{ 
 fetch(url + '&q=' + valueSearch.value)
 .then(responsive =>responsive.json())
 .then(data => {
    console.log(data);
 })
}