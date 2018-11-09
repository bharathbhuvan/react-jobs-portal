import React from "react";
import { Layout, Row } from "antd";
import Search from "./atoms/search";
import Header from "./header";
import RightSideBar from "./rightsidebar";
import SearchResults from "./searchResults";
import LeftSideBar from "./leftSideBar";

const Home = props => {
  const { Footer } = Layout;
  return (
    <Layout className="container Home">
      <Header>Header</Header>
      <Search onSearch={props.onSearch} />
      <Layout className="container" id="jobContainer">
        <Row type="flex" justify="center">
          <LeftSideBar onCheck={props.onCheck} />
          <SearchResults {...props} />
          <RightSideBar />
        </Row>
      </Layout>

      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Home;
