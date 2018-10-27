import React from "react";
import { Layout, Row, Col, Tag, Pagination, Button, Icon } from "antd";
import Search from "./components/atoms/search";
import Dropdown from "./components/atoms/dropdown";
import EditableTagGroup from "./components/atoms/Tags";
import CheckBox from "./components/atoms/checkbox";
import htmlToReact from "html-to-react";
import "./App.css";

const Home = props => {
  const { Header, Footer } = Layout;
  const htmlToReactParser = new htmlToReact.Parser();
  const { current, paging } = props;

  const paginfInfo = {
    indexOfLastTodo: current * paging,
    jobList:
      props.filterdresponse.length > 0 ? props.filterdresponse : props.response,
    get currentList() {
      const indexOfFirstTodo = this.indexOfLastTodo - paging;
      return this.jobList.slice(indexOfFirstTodo, this.indexOfLastTodo);
    },
    get totalList() {
      return props.filterdresponse.length > 0
        ? props.filterdresponse.length
        : props.response.length;
    },
    handlePage: function(page) {
      props.onPageChange(page);
    }
  };
  const { currentList, totalList, handlePage } = paginfInfo;

  // const renderLeftSideBar = () => {
  //   return (
  //     <div>
  //       <hr />
  //       <CheckboxGroup
  //         options={plainOptions}
  //         defaultValue={["Apple"]}
  //         onChange={onChange}
  //       />
  //     </div>
  //   );
  // };
  // const renderRightSideBar = () => {
  //   return <div>side</div>;
  // };
  return (
    <Layout className="container Home">
      <Header>Header</Header>
      <Search onSearch={props.onSearch} />
      <Layout className="container">
        <Row type="flex" justify="center">
          <Col
            xs={24}
            sm={24}
            md={18}
            lg={5}
            xl={5}
            style={{ padding: 30 }}
            className="gutter-row"
          >
            <span>
              <strong>Skills</strong>
            </span>
            <span style={{ float: "right", paddingRight: 10 }}>Clear</span>
            <hr />
            <div>
              <span>
                <strong>Filter</strong>
              </span>
              <span style={{ float: "right", paddingRight: 10 }}>
                Clear Filter
              </span>
              <EditableTagGroup />
            </div>
            <div style={{ margin: `30px 0` }}>
              <span>
                <strong>Availability</strong>
              </span>
              <span style={{ float: "right", paddingRight: 10 }}>Clear</span>
              <CheckBox />
            </div>
          </Col>
          {props.isFound ? (
            <Col
              xs={24}
              sm={24}
              md={18}
              lg={12}
              xl={12}
              className="gutter-row"
              style={{
                backgroundColor: "#fff",
                minHeight: 380,
                marginBottom: `50px`
              }}
            >
              <Row
                type="flex"
                justify="space-between"
                gutter={16}
                style={{ padding: `20px 50px` }}
              >
                <Col>
                  <strong>{`RESULTS (${totalList})`}</strong>
                </Col>
                <Col>
                  <Dropdown onSort={props.onSort} />
                </Col>
              </Row>
              {currentList.map((data, index) => (
                <div key={data.id}>
                  <Row
                    xs={24}
                    type="flex"
                    gutter={16}
                    justify="center"
                    style={{ padding: `20px 50px` }}
                  >
                    <Col xs={24}>
                      <h3 className="h3-large">{data.title}</h3>
                      <Tag color={data.label}>
                        <span>{data.type}</span>
                      </Tag>

                      <p>
                        <span>{data.company} </span>{" "}
                        <span>{data.location}</span>
                      </p>

                      {htmlToReactParser.parse(
                        `${data.description.substr(0, 100)} ...`
                      )}

                      {data.keywords &&
                        data.keywords
                          .split(",")
                          .map((keyword, index) => (
                            <Tag key={`keyword-${index}`}>{keyword}</Tag>
                          ))}
                    </Col>
                  </Row>
                  {currentList.length - 1 !== index && <hr />}
                </div>
              ))}
              {props.isFound && (
                <Pagination
                  current={props.current}
                  onChange={page => handlePage(page)}
                  total={totalList}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 50
                  }}
                />
              )}
            </Col>
          ) : (
            <Col
              span={12}
              style={{
                backgroundColor: "#fff",
                minHeight: 380,
                display: "flex",
                justifyContent: "center",
                padding: `20px 50px`,
                marginBottom: `50px`
              }}
            >
              <h3>Match Not Found</h3>
            </Col>
          )}

          <Col xs={24} sm={24} md={18} lg={5} xl={5} className="gutter-row">
            <div className="lefside-bar">
              <Icon type="deployment-unit" theme="outlined" />
              <h2>Track time</h2>
              <p>Pay only for the hours worked</p>
              <Button type="primary" justfy-content="center" size="default">
                SignUp
              </Button>
            </div>
          </Col>
        </Row>
      </Layout>

      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Home;
