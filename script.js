async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const output = document.getElementById('weatherOutput');

  if (!city) {
    output.innerHTML = "Please enter a city name.";
    return;
  }

  output.innerHTML = "Fetching mock weather data...";


  await new Promise(resolve => setTimeout(resolve, 1000));

  const mockWeatherData = {
    Chennai: { temp_c: 34, condition: "Sunny" },
    Mumbai: { temp_c: 30, condition: "Humid" },
    Delhi: { temp_c: 36, condition: "Hazy" },
    Bangalore: { temp_c: 28, condition: "Cloudy" },
    default: { temp_c: 31, condition: "Partly Cloudy" }
  };

  const data = mockWeatherData[city] || mockWeatherData["default"];

  output.innerHTML = `
    <h3>${city}, India</h3>
    <p><strong>Temperature:</strong> ${data.temp_c}°C</p>
    <p><strong>Condition:</strong> ${data.condition}</p>
  `;
}
