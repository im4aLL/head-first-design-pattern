function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function getFakeData() {
  return {
    temperature: getRandomFloat(10, 30),
    humidity: getRandomFloat(40, 60),
    pressure: getRandomFloat(1000, 1020),
  };
}
