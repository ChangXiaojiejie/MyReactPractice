import { ADD_VALUE, CHANG_VALUE, DEL_VALUE, GET_LIST_DATA, GET_LIST } from "./actiontypes";
export const getChangeAction = (e: any) => {
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

export const getDelAction = (index: number) => {
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

export const getListDataAction = (data: any) => {
    return {
        type: GET_LIST_DATA,
        data
    }
}

// export const getListData = () => {
//     return (dispatch: any) => {
//         axios.get("api/todolist").then((res: any) => {
//             const action = getListDataAction(res.data);
//             dispatch(action);
//         }).catch( (e: any) => {
//             console.log("错误信息", e)
//         })
       
//     }
// }