import { put, takeEvery } from "redux-saga/effects";
import { GET_LIST } from "./actiontypes";
import { getListDataAction } from "./renderStore"
import axios from "axios";

function* getListData() {
  try {
    const res = yield axios.get("api/todolist");
    const action = getListDataAction(res.data);
    yield put (action)
  } catch (error) {
    console.log("请求todolist数据失败了", error);
  }
}

function* mySaga() {
  yield takeEvery(GET_LIST, getListData);
}

export default mySaga;
