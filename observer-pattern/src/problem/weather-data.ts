import { getFakeData } from "./data-source/get-data";
import type { IObserver } from "./interfaces/observer.interface";
import type { ISubject } from "./interfaces/subject.interface";
import type { IWeatherData } from "./interfaces/weather-data.interface";

export class WeatherData implements ISubject<IWeatherData> {
  private temperature: number;
  private humidity: number;
  private pressure: number;
  private observers: IObserver<IWeatherData>[] = [];

  constructor() {
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
  }

  registerObserver(observer: IObserver<IWeatherData>): void {
    this.observers.push(observer);
  }

  removeObserver(observer: IObserver<IWeatherData>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(data: IWeatherData): void {
    this.observers.forEach((observer) => observer.update(data));
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
    this.notifyObservers({
      temperature: this.temperature,
      humidity: this.humidity,
      pressure: this.pressure,
    });
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
