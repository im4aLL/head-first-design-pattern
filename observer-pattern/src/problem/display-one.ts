import type { IWeatherData } from "./interfaces/weather-data.interface";
import type { IObserver } from "./interfaces/observer.interface";
import type { ISubject } from "./interfaces/subject.interface";

export class DisplayOne implements IObserver<IWeatherData> {
  private data: number | undefined;

  constructor(subject: ISubject<IWeatherData>) {
    subject.registerObserver(this);
  }

  update(data: IWeatherData): void {
    this.data = data.temperature;
  }

  display(): string {
    return `Current temperature: ${this.data}°C`;
  }
}
