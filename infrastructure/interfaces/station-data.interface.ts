export interface StationData {
  temperatures: { [key: string]: string };
  feels_like: { [key: string]: string };
  app_temp: { [key: string]: string };
  dew_point: { [key: string]: string };
  humidity: { [key: string]: string };
}