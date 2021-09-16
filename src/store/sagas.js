import { put, takeEvery } from "redux-saga/effects";
import { GET_LIST } from "./actiontypes";
import { getListDataAction } from "./renderStore"
import axios from "axios";

// 获取数据的函数
function* getListData() {
  try {
    // 使用异步的方式，拿到请求的结果
    const res = yield axios.get("api/todolist");
    // 获取到新的action
    const action = getListDataAction(res.data);
    // 派发新的action
    yield put (action)
  } catch (error) {
    console.log("请求todolist数据失败了", error);
  }
}

// 监控派发内容是 GET_LIST，都要执行一次 getListData函数
function* mySaga() {
  yield takeEvery(GET_LIST, getListData);
}

export default mySaga;
