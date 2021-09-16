export const CHANGE_VALUE = "change_value";
export const ADD_ITEM = "add_item";
export const REMOVE_ITEM = "remove_item";

// 变更
export const changeValueAction = (e) => ({
    type: CHANGE_VALUE,
    value: e.target.value
});

// 新增
export const addItemAction = () => ({
    type: ADD_ITEM
});

// 移除
export const removeItemAction = (index) => ({
    type: REMOVE_ITEM,
    index
});