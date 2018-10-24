import React, { Component } from "react";
import { Input, Row, Col } from "antd";
import searchApi from "./Api";

class Search extends Component {
  state = {
    response: [],
    filterdresponse: []
  };

  componentDidMount() {
    searchApi()
      .then(res => {
        this.setState({
          response: res
        });
      })
      .catch(err => console.log(err));
  }
  handleSearch = val => {
    if (val) {
      let filterdresponse = this.state.response;
      filterdresponse = filterdresponse.filter(data => {
        return data.id === val;
      });
      this.setState({
        filterdresponse
      });
    }
  };
  render() {
    const Search = Input.Search;
    return (
      <Row type="flex" justify="center" align="middle" className="Home_search">
        <Col span={21}>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            required={true}
            onSearch={value => this.handleSearch(value)}
          />
        </Col>
      </Row>
    );
  }
}

export default Search;
