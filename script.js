const input = document.querySelector(".searchbox")
const locate = document.querySelector(".city")
const date = document.querySelector(".date")
const temp = document.querySelector(".temp")
const hiLow = document.querySelector(".hi-low")
const weather = document.querySelector(".weather")
const body = document.querySelector("body")

input.addEventListener("input",()=>{
  const ip = input.value;
  getCity(ip);
})

async function getCity(city){
  const res = await fetch(`https://openweathermap.org/data/2.5/weather?q=${city}&appid=439d4b804bc8187953eb36d2a8c26a02`);
  const data = await res.json()
  let d = new Date()
  let currentWeather = data.weather[0].main;
  
  
  locate.innerHTML = data.name+", "+data.sys.country;
  date.innerHTML = getDate(d);
  temp.innerHTML = `${(data.main.temp).toFixed(0)}°c`
  weather.innerHTML = currentWeather;
  hiLow.innerText = `${Math.round(data.main.temp_min)}°c / ${Math.round(data.main.temp_max)}°c`
  
  changeBackground(currentWeather);
}

function getDate(d){
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  let day = days[d.getDay()]
  let date = d.getDate()
  let month = months[d.getMonth()]
  let year = d.getFullYear() 
  
  return `${day}, ${date} ${month} ${year}`
}

function changeBackground(item) {
  let imageURL
  switch (item){
      case "Rain":
      case "Drizzle":
          body.style.backgroundImage=`url("./img/rain.jpg")`;
          break;
      case "Clouds":
          body.style.backgroundImage=`url("./img/clouds.jpg")`;
          break;
      case "Clear":
          body.style.backgroundImage=`url("./img/clear.jpg")`;
          break;
      case "Sunny":
          body.style.backgroundImage=`url("./img/sunny.jpg")`;
          break;
      case "Mist":
          body.style.backgroundImage=`url("./img/mist.jpg")`;
          break;
      case "Snow":          
      body.style.backgroundImage=`url("./img/snow.jpg")`;
          break;
      case "Haze":
      case "Smoke":
      case "Dust":
      case "Fog":
      case "Sand":
      case "Squall":
      body.style.backgroundImage=`url("./img/haze.jpg")`;
          break;
      case "Thunderstorm":          
body.style.backgroundImage=`url("https://./img/rain.jpg")`;
      break;
    default:      body.style.backgroundImage=`url("./img/background.png")`;
          }
}