const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("search");
const resultDiv = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  const city = searchInput.value;
  if (city.trim() !== "") {
    getWeather(city);
  }
});

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b016c1ce3429a759f8629125360b4898`
    );
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error(error);
  }
}

const displayWeather = (data) => {
  const temperature = Math.round(data.main.temp - 273.15);
  const description = data.weather[0].description;
  const long = data.coord.lon;
  const lati = data.coord.lat;
  const cityName = data.name;

  resultDiv.innerHTML = `
      <h2>${cityName}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Description: ${description}</p>
      <p>Longitude: ${long}</p>
      <p>Latitude: ${lati}</p>
    `;
};
