import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer  from "../reducers/index";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware()

//Redux Devtoolsの導入
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

//sagaの起動
sagaMiddleware.run(rootSaga)

export default store

