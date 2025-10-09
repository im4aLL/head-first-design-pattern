interface IObserver {
  update(temperature: number, humidity: number, pressure: number): void;
}

interface ISubject {
  registerObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notifyObservers(): void;
}

interface IDisplay {
  display(): void;
}

class WeatherStation implements ISubject {
  private temperature: number;
  private humidity: number;
  private pressure: number;

  private observers: IObserver[] = [];

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
    this.notifyObservers();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementsChanged();
  }

  registerObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  removeObserver(observer: IObserver): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    this.observers.forEach((observer) =>
      observer.update(this.temperature, this.humidity, this.pressure),
    );
  }
}

function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

const weatherStation = new WeatherStation();

setInterval(() => {
  const { temperature, humidity, pressure } = {
    temperature: getRandomFloat(10, 30),
    humidity: getRandomFloat(40, 60),
    pressure: getRandomFloat(1000, 1020),
  };

  weatherStation.setMeasurements(temperature, humidity, pressure);
}, 3000);

// we need to create three separate display
// display one will show temperature
// display two will show humidity
// display three will show pressure
// console log is fine

class DisplayOne implements IObserver, IDisplay {
  private temperature: number;

  constructor(weatherStation: WeatherStation) {
    weatherStation.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;

    this.display();
  }

  display() {
    console.log(`Temperature: ${this.temperature.toFixed(2)}°C`);
  }
}

class DisplayTwo implements IObserver, IDisplay {
  private humidity: number;

  constructor(weatherStation: WeatherStation) {
    weatherStation.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.humidity = humidity;

    this.display();
  }

  display() {
    console.log(`Humidity: ${this.humidity.toFixed(2)}%`);
  }
}

class DisplayThree implements IObserver, IDisplay {
  private pressure: number;

  constructor(weatherStation: WeatherStation) {
    weatherStation.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.pressure = pressure;

    this.display();
  }

  display() {
    console.log(`Pressure: ${this.pressure.toFixed(2)}hPa`);
  }
}

new DisplayOne(weatherStation);
new DisplayTwo(weatherStation);
new DisplayThree(weatherStation);
