import { CityWeatherModel } from './CityWeatherModel.model';

class _WeatherByCityService {
  private allWeather: CityWeatherModel[] = [];

  addACityWeather() {}

  getAllWeather(): CityWeatherModel[] {
    return this.allWeather;
  }

  getWeatherByCityName(cityName: string): CityWeatherModel | undefined {
    return (
      this.allWeather.find((weather) => weather.cityName === cityName) ||
      undefined
    );
  }
}

export const WeatherByCityService = new _WeatherByCityService();
