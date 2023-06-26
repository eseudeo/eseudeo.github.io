const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "6c603ddc3335e5f4a7f6c538a6878a4e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} `;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
  weather.innerText = "";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
