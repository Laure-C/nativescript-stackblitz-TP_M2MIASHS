export interface CityWeatherModel {
  cityName: String;
  country: String;
  temperature: number; //°C
  summary: String;
  icon: String;
  date: Date;
  precipitation: number; //pourcentages
  vent: number; //km/h
  humidité: number; //pourcentages
}
