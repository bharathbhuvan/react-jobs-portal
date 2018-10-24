import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import Search from "./components/search";
import "./App.css";

class Home extends Component {
  render() {
    const { Header, Footer } = Layout;
    return (
      <div className="Home">
        <Layout className="container">
          <Header>Header</Header>
          <Search />
          <Layout className="container" style={{ padding: `0 100px` }}>
            <Row type="flex" justify="space-between">
              <Col span={6}>sidebar</Col>
              <Col
                span={10}
                style={{ backgroundColor: "#fff", minHeight: 380 }}
              >
                Content
              </Col>
              <Col span={6}>sidebar</Col>
            </Row>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default Home;
