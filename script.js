const apiKey = `02e2c8342c8d63a222eb4799cfd1cea2`
// const city = "karachi";

async function fetchWeatherData(city) {
try{    const responce = await fetch
        (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        if(!responce.ok){
            throw new Error("unable to fatch weather");
        }

    const data = await responce.json();

    // console.log(data);

    updateWeatherUi(data);

}
catch(error){
    console.error(error);
}}

const cityElement =document.querySelector(".city");
const temperature = document.querySelector(".temp");
const windSpeed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");
const visibility = document.querySelector(".visibility-distanc");
const descriptionText = document.querySelector(".description-text")
const date = document.querySelector(".date");

// fetchWeatherData();

function updateWeatherUi(data){
cityElement.textContent = data.name;
temperature.textContent = data.main.temp;
windSpeed.textContent = `${data.wind.speed} km/h`;
humidity.textContent = `${data.main.humidity}%`
visibility.textContent = `${data.visibility/1000} km`;
descriptionText.textContent = data.weather[0].description;

const currentDate = new Date();
date.textContent = currentDate.toDateString();

}

const formElement = document.querySelector(".search-foam");
const inputElement = document.querySelector(".city-input");
formElement.addEventListener('submit',function(e){
    e.preventDefault();
    const city = inputElement.value;
    if(city !== "") {
        fetchWeatherData(city);
        inputElement.value = "";
    }

});