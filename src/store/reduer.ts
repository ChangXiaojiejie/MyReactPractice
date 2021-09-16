import { CHANG_VALUE, ADD_VALUE, DEL_VALUE, GET_LIST_DATA } from "./actiontypes";

const defaultState = {
    inputValue: "",
    list: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default ((state = defaultState, action: any) => {
    if (action.type === CHANG_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
    }
    if (action.type === ADD_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(state.inputValue);
        newState.inputValue = "";
        return newState
    }
    if (action.type === DEL_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState
    }
    if(action.type === GET_LIST_DATA) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState
    }
    return state
});
