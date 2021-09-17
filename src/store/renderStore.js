import axios from "axios";
import { ADD_VALUE, CHANG_VALUE, DEL_VALUE, GET_LIST_DATA, GET_LIST } from "./actiontypes";
export const getChangeAction = (e) => {
    return {
        type: CHANG_VALUE,
        value: e.target.value
    };
}

export const getAddAction = () => {
    return {
        type: ADD_VALUE
    };
}

export const getDelAction = (index) => {
    return {
        type: DEL_VALUE,
        index
    };
}
export const getList = () => {
    return {
        type: GET_LIST
    }
}

// 保存list数据的action
export const getListData = (data) => {
    return {
        type: GET_LIST_DATA,
        data
    }
}

// 异步通过接口获取list数据的action
export const getListDataAction = () => {
    // 默认store只能识别对象的action，但是使用了thunk，可以通过传入一个函数，在thunk中间件中会执行
    return (dispatch) => {
        axios.get("api/todolist").then(res => {
            const action = getListData(res.data);
            dispatch(action);
        }).catch((e) => {
            console.log("获取数据失败了", e)
        })
    }
}
