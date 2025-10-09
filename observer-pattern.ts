class WeatherStation {
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
    // this method get triggered when measurements are changed
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementsChanged();
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

class ExampleDisplay {
  display() {
    console.log(`value here`);
  }
}
