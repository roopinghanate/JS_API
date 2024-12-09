const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");

const locationNotFound = document.querySelector(".location-not-found");
const WeatherBody = document.querySelector(".weather-body");

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function checkWeather(city) {
  const api_key = "8466ddb183483f6efd4987ee5ba4b942";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );

  // console.log(weather_data);

  if (weather_data.cod === "404") {
    locationNotFound.style.display = "flex";
    WeatherBody.style.display = "none";
    return;
  }

  WeatherBody.style.display = "flex";

  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  windSpeed.innerHTML = `${weather_data.wind.speed}Km/H`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weatherImg.src = "images/cloud.png";
      break;
    case "Clear":
      weatherImg.src = "images/clear.png";
      break;
    case "Rain":
      weatherImg.src = "images/rain.png";
      break;
    case "Mist":
      weatherImg.src = "images/mist.png";
      break;
    case "Snow":
      weatherImg.src = "images/snow.png";
      break;
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
