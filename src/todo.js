import React, { Component } from "react";

import { Space, Input } from "antd";

import store from "./store";
import {
  getChangeAction,
  getAddAction,
  getDelAction,
  getListData
} from "./store/renderStore";

import TodoItem from "./todo.item";

const { Search } = Input;

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState();

    this.changeValue.bind(this);
    this.addItem.bind(this);
    this.removeItem.bind(this);
    this.changeStore = this.changeStore.bind(this);
    store.subscribe(this.changeStore);
  }
  componentDidMount() {
    console.log("执行了")
    const action = getListData();
    store.dispatch(action)
  }
  // ComponentDidMount() {
  //   console.log("执行了")
  // }

  render() {
    // const { list, inputValue } = this.state;
    return (
      <>
        <Space direction="vertical">
          <Search
            placeholder="请输入内容"
            onSearch={this.addItem}
            value={this.state.inputValue}
            onChange={(e) => this.changeValue(e)}
            enterButton={<span> 提交 </span>}
          />
          <TodoItem
            content={this.state.list}
            delFn={this.removeItem}
          ></TodoItem>
        </Space>
      </>
    );
  }

  changeStore() {
    this.setState(store.getState());
  }

  /** 改变输入框的值 */
  changeValue(e) {
    const action = getChangeAction(e);
    store.dispatch(action);
  }

  /** 添加 */
  addItem() {
    const action = getAddAction();
    store.dispatch(action);
  }

  /** 移除 */
  removeItem(index) {
    const action = getDelAction(index);
    store.dispatch(action);
  }
}

export default Todo;
