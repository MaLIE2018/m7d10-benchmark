import { Forecast } from "../../types/forecast";

const Init: Forecast = {
  cod: "",
  message: 0,
  cnt: 0,
  list: [
    {
      dt: 0,
      main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        sea_level: 0,
        grnd_level: 0,
        humidity: 0,
        temp_kf: 0,
      },
      weather: [
        {
          id: 0,
          main: "",
          description: "",
          icon: "",
        },
      ],
      clouds: { all: 0 },
      wind: {
        speed: 0,
        deg: 0,
        gust: 0,
      },
      visibility: 0,
      pop: 0,
      sys: {
        pod: "",
      },
      dt_txt: "",
      rain: { "3h": 0 },
    },
  ],
  city: {
    id: 0,
    name: "",
    coord: { lat: 0, lon: 0 },
    country: "",
    population: 0,
    timezone: 0,
    sunrise: 0,
    sunset: 0,
  },
};

function foreCastReducers(state: Forecast = Init, action: any): Forecast {
  switch (action.type) {
    case "SET_FORECAST":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default foreCastReducers;
