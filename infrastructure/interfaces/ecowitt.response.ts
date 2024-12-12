export interface EcowittResponse {
  code: number;
  msg:  string;
  time: string;
  data: Data;
}

export interface Data {
  outdoor: Outdoor;
}

export interface Outdoor {
  temperature: AppTemp;
  feels_like:  AppTemp;
  app_temp:    AppTemp;
  dew_point:   AppTemp;
  humidity:    AppTemp;
}

export interface AppTemp {
  unit: string;
  list: { [key: string]: string };
}
