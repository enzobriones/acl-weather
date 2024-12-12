import axios from "axios";

export const ecowittApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_ECOWITT_BASE_URL,
  params: {
    application_key: process.env.EXPO_PUBLIC_ECOWITT_APPLICATION_KEY,
    api_key: process.env.EXPO_PUBLIC_ECOWITT_API_KEY,
  },
});
