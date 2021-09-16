import { Space, Input, List } from "antd";
import { connect } from "react-redux";
import {
  addItemAction,
  changeValueAction,
  removeItemAction,
} from "./store/action.types";

const { Search } = Input;

const TodoList = (props) => {
  const { inputValue, list, addItem, removeItem, changeValue } = props;
  return (
    <Space direction="vertical">
      <Search
        placeholder="todo info"
        value={inputValue}
        onChange={(e) => changeValue(e)}
        onSearch={() => addItem()}
        enterButton={<span>提交</span>}
      />
      <List
        dataSource={list}
        bordered
        renderItem={(item, index) => {
          return (
            <List.Item onClick={() => removeItem(index)}> {item}</List.Item>
          );
        }}
      ></List>
    </Space>
  );
};

// 将store中的state派发到当前页面的props上
const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
  list: state.list,
});
// 自定义函数，将其派发到当前页面组件的props上
const mapDispatchToProps = (dispatch) => ({
  changeValue(e) {
    const action = changeValueAction(e);
    dispatch(action);
  },
  addItem() {
    const action = addItemAction();
    dispatch(action);
  },
  removeItem(index) {
    const action = removeItemAction(index);
    dispatch(action);
  },
});

// connect 用于连接，将mapStateToProps和mapDispatchToProps两个方法，连接到TodoList上
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
