import React, { Component } from 'react'
import { Layout,Menu } from 'antd'

const {Header} = Layout

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">My Todo App</Menu.Item>
                    </Menu>
                </Header>
            </div>
        )
    }
}
