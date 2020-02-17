/* global fetch */

import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";

import { actionTypes, failure, loadDataSuccess } from "./actions";

es6promise.polyfill();

function* loadDataSaga() {
  try {
    const res = yield fetch("http://api.tvmaze.com/search/shows?q=s");
    const data = yield res.json();
    console.log( data );
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga)
  ]);
}

export default rootSaga;
