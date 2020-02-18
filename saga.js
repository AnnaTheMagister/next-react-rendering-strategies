import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";

import { actionTypes, loadFullListError, loadFullListSuccess } from "./actions";
import { showList } from "./pages/api/showList";
import useSWR from "swr";

const localhost = 'http://localhost:3000';

es6promise.polyfill();

function* loadFullListSaga() {
  try {
    let data = [];
    for (const show of showList) {
      const res = yield fetch(`http://api.tvmaze.com/shows/${show.id}`);
      data = [...data, yield res.json()];
      // yield delay(200);
      yield put(loadFullListSuccess(data));
    }
  } catch (err) {
    yield put(loadFullListError(err));
  }
}

function* loadShowListSaga() {
  try {
    const res = yield fetch(`${localhost}/api/showList`);
    const data = yield res.json();
    yield put(loadFullListSuccess(data));
  } catch (err) {
    yield put(loadFullListError(err));
  }
}


function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOAD_FULL_LIST, loadFullListSaga)
  ]);
}

export default rootSaga;
