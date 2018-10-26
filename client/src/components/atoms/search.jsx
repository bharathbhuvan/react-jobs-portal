import React from "react";
import { Input, Row, Col } from "antd";

const Search = props => {
  const handleSearch = val => {
    if (val) {
      props.onSearch(val);
    }
  };
  const Search = Input.Search;
  return (
    <Row type="flex" justify="center" align="middle" className="Home_search">
      <Col span={21}>
        <Search
          placeholder="input search text"
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
