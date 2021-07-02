import { currentWeatherState } from "../types/types";

const Init: currentWeatherState = {
  currentWeather: {
    coord: {
      lon: 0,
      lat: 0,
    },
    weather: [{ id: 0, main: "", description: "", icon: "" }],
    base: "",
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
    },
    visibility: 0,
    wind: { speed: 0, deg: 0, gust: 0 },
    clouds: {
      all: 0,
    },
    dt: 0,
    sys: {
      type: 0,
      id: 0,
      country: "",
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    id: 0,
    name: "",
    cod: 0,
  },
};

function currentWeatherReducers(
  state: currentWeatherState = Init,
  action: any
): currentWeatherState {
  switch (action.type) {
    case "SET_CURRENT_WEATHER":
      return { ...state, currentWeather: { ...action.payload } };
    default:
      return state;
  }
}

export default currentWeatherReducers;