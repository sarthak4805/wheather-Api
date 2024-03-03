const apiKey = "5f05de4fbf3c106311bff1828dbf8580";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=5f05de4fbf3c106311bff1828dbf8580&units=metric";

const searchBox = document.querySelector(".search input");
   const searchbtn = document.querySelector(".search button")

async function weatherAll(city){
   const responce = await fetch(apiURL+ `&appid=$apiKey`);
   const data = await responce.json();
   console.log(data);
   
   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".humidity").innerHTML = data.main.humidity +" %";
   document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
   document.querySelector(".temp").innerHTML =  Math.round(data.main.temp) + "°C";
}
searchbtn .addEventListener ("click",()=>{
  weatherAll(searchBox.value);
})


