import { all, takeEvery, call, put } from "redux-saga/effects";
import { getUsers as getUsersFunc } from "../slices/userSlice";
export function* helloWorldSaga() {
  console.log("Hello World");
}

async function getUserApi(url) {
  const resp = await fetch(url);
  const data = resp.json();
  return data;
}

function* getUsers() {
  const resp = yield call(
    getUserApi,
    "https://jsonplaceholder.typicode.com/users"
  );
  yield put(getUsersFunc(resp));
}

function* watchGetUsers() {
  yield takeEvery("GET_USERS", getUsers);
}

export function* rootSaga() {
  yield all([helloWorldSaga(), watchGetUsers()]);
}
