import React from "react";
import { Input, Row, Col } from "antd";

const Search = props => {
  const handleSearch = val => {
    props.onSearch(val);
  };
  const Search = Input.Search;
  return (
    <Row type="flex" justify="center" align="middle" className="Home_search">
      <Col span={18}>
        <Search
          placeholder="Search by keywords (PHP,Devops,Cloud)"
          enterButton="Search"
          size="large"
          required={true}
          onSearch={value => handleSearch(value)}
        />
      </Col>
    </Row>
  );
};

export default Search;
