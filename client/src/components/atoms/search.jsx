import React from "react";
import { Input, Row, Col } from "antd";

const Search = props => {
  const handleSearch = val => {
    props.onSearch(val);
  };

  const Search = Input.Search;

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      className="Home_search"
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
    >
      <Col span={22} style={{ paddingRight: `0px`, paddingLeft: `0px` }}>
        <Search
          placeholder="Search by keywords (PHP,Devops,Cloud)"
          enterButton="Search"
          size="large"
          required={true}
          id="searchJobs"
          onSearch={value => handleSearch(value)}
        />
      </Col>
    </Row>
  );
};

export default Search;
