import { call, put, takeEvery, select } from 'redux-saga/effects'
import { UPDATE_WEATHER, UPDATE_ERROR, FETCH_DATA } from '../actions/actions'
import { APIKEY } from '../../constant'
import { State } from '../store/initialState'

export function* fetchData(): any {
  const prefecture :string = yield select((state :State) => state.search.prefecture)
  const response: Response = yield call(fetch, `https://api.openweathermap.org/data/2.5/weather?q=${prefecture}&units=metric&lang=ja&APPID=${APIKEY}`)
  //console.log(response)
  const apiData: any = yield response.json()
  if (prefecture === apiData.name) {
    yield put({
      type: UPDATE_WEATHER,
      payload: {
        data: apiData,
        pref: apiData.name,
        description: apiData.weather[0].description,
        temperature: apiData.main.temp
      }
    })
  } else {
    yield put({
      type: UPDATE_ERROR,
      payload: {
        error: "都道府県名を入力してから検索ボタンを押してね"
      }
    })
  }
  //console.log(prefecture)
}

export default function* searchSaga() {
  yield takeEvery(FETCH_DATA, fetchData)
}
