const geo = document.getElementById("geo");

geo.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeatherByLocation, handleError);
  } else {
    displayError("Geolocation is not supported by this browser.");
  }
});

async function getWeatherByLocation(position) {
  const { latitude, longitude } = position.coords;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b016c1ce3429a759f8629125360b4898`
    );
    const data = await response.json();
    displaeather(data);
  } catch (error) {
    console.error(error);
  }
}

function displaeather(data) {
  const temperature = Math.round(data.main.temp - 273.15);
  const description = data.weather[0].description;
  const cityName = data.name;
  const long = data.coord.lon;
  const lati = data.coord.lat;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
      <h2>${cityName}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Description: ${description}</p>
      <p>Longitude: ${long}</p>
      <p>Latitude: ${lati}</p>
    `;
}

function handleError(error) {
  let errorMessage = "";
  switch (error.code) {
    case error.PERMISSION_DENIED:
      errorMessage = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      errorMessage = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      errorMessage = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      errorMessage = "An unknown error occurred.";
      break;
  }
  displayError(errorMessage);
}

function displayError(message) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Error: ${message}</p>`;
}
