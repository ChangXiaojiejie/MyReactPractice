import React, { Component } from "react";
import { List } from "antd";

class TodoItem extends Component {
  render() {
    const data = this.props.content || [];
    return (
      <>
        <List
          bordered
          dataSource={data}
          renderItem={(item, index) => <List.Item onClick={ () => this.props.delFn(index) }>{item}</List.Item>}
        />
      </>
    );
  }
}

export default TodoItem;
