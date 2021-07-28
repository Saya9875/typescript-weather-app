import { SearchState } from "../store/initialState";

export const UPDATE_PREFECTURE = "UPDATE_PREFECTURE";
export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_WEATHER = "UPDATE_WEATHER";
export const UPDATE_ERROR = "UPDATE_ERROR";

export const updatePrefecture = (prefecture: SearchState["prefecture"]) => {
  return {
    type: UPDATE_PREFECTURE,
    payload: {
      prefecture: prefecture
    }
  };
};

export const fetchData = () => {
  return {
    type: FETCH_DATA,
  };
};

export const updateWeather = (weather: SearchState) => {
  return {
    type: UPDATE_WEATHER,
    payload: {
      data: weather.data,
      pref: weather.pref,
      temperature: weather.temperature,
      description: weather.description
    },
  };
};

export const updateError = (error: SearchState["error"]) => {
  return {
    type: UPDATE_ERROR,
    payload: {
      error: error,
    }
  };
};


export type ActionUnion =
  | {
    type: typeof UPDATE_PREFECTURE,
    payload: {
      prefecture: string
    }
  }
  | {
    type: typeof UPDATE_WEATHER,
    payload: {
      data: {},
      pref: string,
      temperature: number,
      description: string
    }
  }
  | {
    type: typeof UPDATE_ERROR,
    payload: {
      error: string
    }
  };
