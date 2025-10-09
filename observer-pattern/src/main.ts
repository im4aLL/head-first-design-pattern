import { WeatherData, weatherDataEmulator } from "./problem/weather-data";
import type { IWeatherData } from "./problem/interfaces/weather-data.interface";
import { DisplayOne } from "./problem/display-one";

const weatherDataInstance = new WeatherData();
const displayOneInstance = new DisplayOne(weatherDataInstance);

// TODO: Implement displayOne function
function displayOne(): string {
  return displayOneInstance.display();
}

// TODO: Implement displayTwo function
function displayTwo(): string {
  return `should show humidity only`;
}

// TODO: Implement displayThree function
function displayThree(): string {
  return `should show pressure only`;
}

// display items
// In future more display can be added
const displayItems = [displayOne, displayTwo, displayThree];

// ========================================================
// NO CHANGE ALLOWED BEYOND THIS LINE
// ========================================================
function mainDisplay(weatherData: IWeatherData): string {
  return `
    <div>
      ${weatherData.temperature}°C <br>
      ${weatherData.humidity}% humidity <br>
      ${weatherData.pressure}hPa <br>
    </div>
  `;
}

function renderApp(
  weatherData: IWeatherData,
  displayItems: Array<() => string>,
) {
  const mainDisplayHtml = mainDisplay(weatherData);
  const displayHtml = displayItems
    .map((item) => `<p>${item.name}</p><div>${item()}</div>`)
    .join("\n");

  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <p>Main Display</p>
    ${mainDisplayHtml}

    <p>Other display</p>
    ${displayHtml}
  `;
}

// weather data emulator
setInterval(() => {
  weatherDataEmulator(weatherDataInstance);

  const weatherData = {
    temperature: weatherDataInstance.getTemperature(),
    humidity: weatherDataInstance.getHumidity(),
    pressure: weatherDataInstance.getPressure(),
  };

  renderApp(weatherData, displayItems);
}, 3000);

renderApp(
  {
    temperature: 0,
    humidity: 0,
    pressure: 0,
  },
  displayItems,
);
