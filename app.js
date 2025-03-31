let valueSearch =document.getElementById("valueSearch");
let city =document.getElementById("city");
let temperature =document.getElementById("temperature");
let description =document.querySelector("description");
let cloudy =document.getElementById("cloudy");
let humidity =document.getElementById("humidity");
let pressure =document.getElementById("pressure");
let form = document.querySelector("form");
form.addEventListener('submit',(submit)=>{
    e.preventDefault();
    if (valueSearch.value != ""){
        getApi;
    }
})

let id='9505fd1df737e20152fbd78cdb289b6a';
let url='https://api.openweather.map.org/data/2.5/weather?units=metric&appid='+id;
const  getApi = () =>{
 fetch(url + '&q='+valueSearch.value)
 .then(Responseive =>Responseive.json())
 .then(data => {
    console.log(data);
    if(data.cod == 200){
        city.querySelector('figcaption').innerText =data.name;
        img.querySelector("img").src='https//flagsapi.com/'+data.sys.country+'/shiny/32.png'

    }
 })
}
