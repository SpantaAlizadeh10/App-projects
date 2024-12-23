const apiKey = "eb9671fdb92c77708e5fed1178ded9b3"; // Replace with your OpenWeatherMap API key
const getWeatherButton = document.getElementById("getWeather");
const weatherResult = document.getElementById("weatherResult");

getWeatherButton.addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value;

  if (!city) {
    weatherResult.innerHTML = "Please enter a city name.";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    if (!response.ok) {
      weatherResult.innerHTML = `Error: ${response.statusText}`;
      return;
    }

    const weatherData = await response.json();

    const { name, main, weather, wind } = weatherData;
    const temperature = main.temp;
    const description = weather[0].description;
    const humidity = main.humidity;
    const windSpeed = wind.speed;

    weatherResult.innerHTML = `
      <h2>Weather in ${name}</h2>
      <p><strong>Temperature:</strong> ${temperature}°C</p>
      <p><strong>Description:</strong> ${description}</p>
      <p><strong>Humidity:</strong> ${humidity}%</p>
      <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
    `;
  } catch (error) {
    weatherResult.innerHTML = `Error: ${error.message}`;
  }
});
