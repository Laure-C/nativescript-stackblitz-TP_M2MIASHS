import {} from '';

class _WeatherByCityService {
  private allWeather: WeatherByCity[] = [];

  addACityWeather() {}

  getAllWeather(): WeatherByCity[] {
    return this.allWeather;
  }

  getWeatherByCityName(cityName: string): WeatherByCity | undefined {
    return (
      this.allWeather.find((weather) => weather.cityName === cityName) ||
      undefined
    );
  }
}

export const WeatherByCityService = new _WeatherByCityService();
