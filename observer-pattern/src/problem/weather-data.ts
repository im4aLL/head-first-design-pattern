import { getFakeData } from "./data-source/get-data";

export class WeatherData {
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
  }

  getTemperature(): number {
    return this.temperature;
  }

  getHumidity(): number {
    return this.humidity;
  }

  getPressure(): number {
    return this.pressure;
  }

  measurementsChanged() {
    // every time measurement changes it triggers this method
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementsChanged();
  }
}

// NO CHANGE ALLOWED
export function weatherDataEmulator(weatherData: WeatherData) {
  const { temperature, humidity, pressure } = getFakeData();

  weatherData.setMeasurements(temperature, humidity, pressure);
}
