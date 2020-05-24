import React, { Component } from 'react'
import { List } from "antd"

export default class ListTodo extends Component {
    render() {
        const data = this.props.data
        return (
            <div>
                <List
                    size="small"
                    header={<div style={{ fontWeight: 'bold' }}>My Todo List</div>}
                    footer={<div style={{ color: 'green' }}>{data.length} Tasks in Total</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item key={item.id}>{item.text}</List.Item>}
                />
            </div>
        )
    }
}
