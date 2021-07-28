export interface State {
  search: SearchState;
}

export interface SearchState {
  prefecture?: string;
  data?: {};
  pref?: string;
  temperature?: number;
  description?: string;
  error?: string;
}

export const initialState: State = {
  search: {
    prefecture: "東京都",
    data: {},
    pref: "",
    temperature: 0,
    description: "",
    error: "",
  }
};
