import { EcowittResponse } from '../interfaces/ecowitt.response';

export function mapEcowittResponse(response: EcowittResponse) {
  return {
    temperature: response.data.outdoor.temperature.list,
    feels_like: response.data.outdoor.feels_like.list,
    app_temp: response.data.outdoor.app_temp.list,
    dew_point: response.data.outdoor.dew_point.list,
    humidity: response.data.outdoor.humidity.list,
  };
}
