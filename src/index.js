import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";

import { Layout, Row, Col, Card, Space, Input, Button } from 'antd';
import Navbar from './Components/Navbar';
import ListTodo from './Components/ListTodo';

const { Footer, Content } = Layout;


class App extends React.Component {
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
  }

  render() {
    const data = this.state.items
    return (
      <div>
        <Layout className="layout" style={{ height: '100vh' }}>
          <Navbar />
          <Content style={{ padding: '20px 50px' }}>

            <div className="site-layout-content">
              <Row>
                <Col xs={6} sm={16} md={14} lg={10} xl={8}>
                  <Card title="Create a Todo" style={{ width: 400 }}>
                    <Space>
                      <Input placeholder="Add Item" size="large" onChange={this.handleItemChange} value={this.state.text} />
                      <Button type="primary" onClick={this.handleAddItem}>Add #{this.state.items.length + 1}</Button>
                    </Space>
                  </Card>
                </Col>
                <Col xs={18} sm={8} md={10} lg={14} xl={16}>
                  <ListTodo data={data} />
                </Col>
              </Row>
            </div>
          </Content>
          <Footer>@GraceAmondi</Footer>
        </Layout>
      </div >
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
