import React, { Component } from 'react'
import { Card, Space, Input, Button } from 'antd'

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.handleAddItem = this.handleAddItem.bind(this)
        this.handleItemChange = this.handleItemChange.bind(this)
        this.state = {
            items: [],
            text: ''
        }
    }

    handleItemChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleAddItem(e) {
        e.preventDefault()
        if (this.state.text.length === 0) {
            return
        }
        const newItem = {
            id: Date.now(),
            text: this.state.text
        }
        this.setState({
            items: this.state.items.concat(newItem),
            text: ''
        })
        alert(JSON.stringify(newItem))
    }
    render() {
        const items = this.state.items

        return (
            <Card title="Create a Todo" style={{ width: 400 }}>
                <Space>
                    <Input placeholder="Add Item" size="large" onChange={this.handleItemChange} value={this.state.text} />
                    <Button type="primary" onClick={this.handleAddItem}>Add #{this.state.items.length + 1}</Button>
                </Space>
            </Card>
        )
    }
}
