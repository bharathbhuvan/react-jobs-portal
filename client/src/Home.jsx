import React from "react";
import { Layout, Row, Col, Tag, Pagination } from "antd";
import Search from "./components/atoms/search";
import Dropdown from "./components/atoms/dropdown";
import htmlToReact from "html-to-react";
import "./App.css";

const Home = props => {
  const { Header, Footer } = Layout;
  const htmlToReactParser = new htmlToReact.Parser();
  const response =
    props.filterdresponse.length > 0 ? props.filterdresponse : props.response;
  const handlePage = page => {
    props.onPageChange(page);
  };
  const { current, paging } = props;
  const indexOfLastTodo = current * paging;
  const indexOfFirstTodo = indexOfLastTodo - paging;
  const currentTodos = response.slice(indexOfFirstTodo, indexOfLastTodo);
  const totalResults =
    props.filterdresponse.length > 0
      ? props.filterdresponse.length
      : props.response.length;
  return (
    <Layout className="container Home">
      <Header>Header</Header>
      <Search results={props.filterdresponse} onSearch={props.onSearch} />
      <Layout className="container" style={{ padding: `0 100px` }}>
        <Row type="flex" justify="space-between" gutter={16}>
          <Col span={5}>sidebar</Col>
          <Col span={12} style={{ backgroundColor: "#fff", minHeight: 380 }}>
            <Row
              type="flex"
              justify="space-between"
              gutter={16}
              style={{ padding: `20px 50px` }}
            >
              <Col>
                <strong>{`RESULTS ${totalResults}`}</strong>
              </Col>
              <Col>
                <Dropdown onSort={props.onSort} />
              </Col>
            </Row>
            {currentTodos.map((data, index) => (
              <div>
                <Row
                  xs={12}
                  key={data.id}
                  type="flex"
                  gutter={16}
                  justify="space-between"
                  style={{ padding: `20px 50px` }}
                >
                  <Col xs={24}>
                    <h3>{data.title}</h3>
                    <Tag color={data.label}>
                      <span>{data.type}</span>
                    </Tag>
                    <p>
                      <span>{data.company}</span>
                      <span>{data.location}</span>
                    </p>
                    <p>
                      {htmlToReactParser.parse(data.description.substr(0, 100))}
                    </p>
                    {data.keywords &&
                      data.keywords
                        .split(",")
                        .map((keyword, index) => (
                          <Tag key={`keyword-${index}`}>{keyword}</Tag>
                        ))}
                  </Col>
                </Row>
                {currentTodos.length - 1 !== index && <hr />}
              </div>
            ))}
          </Col>
          <Col span={5}>sidebar</Col>
        </Row>
        <Pagination
          current={props.current}
          onChange={page => handlePage(page)}
          total={totalResults}
          style={{ display: "flex", justifyContent: "center", margin: 50 }}
        />
      </Layout>

      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Home;
