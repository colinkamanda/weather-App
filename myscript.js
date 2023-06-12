let inputValue = document.querySelector(".search-box")
let button = document.querySelector(".search-button")
let city= document.querySelector(".location .city")
let date = document.querySelector(".location .date")
let temp = document.querySelector(".current .temp")
let description = document.querySelector(".current .weather")

button.addEventListener("click", function (){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=f129906dd5033163828c1abd601f4ab2`)
        .then((response)=>response.json())
        .then(displayData)
        .catch((err)=> alert("please enter a correct City name"))
})

const displayData = (weather) => {
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let now = new Date();
    date.innerText =dateBuilder(now) ;
    temp.innerHTML = `${ Math.round(weather.main.temp)}℃`;
    description.innerText =`${weather.weather[0].description}`;
}


function dateBuilder(d) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day}, ${date} ${month} ${year}`;
  }
  
