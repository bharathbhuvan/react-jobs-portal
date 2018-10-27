import React, { Component } from "react";
import Home from "./Home";
import searchApi from "./components/Api";
import { message } from "antd";
import "./App.css";

class App extends Component {
  state = {
    response: [],
    filterdresponse: [],
    current: 1,
    paging: 10,
    isFound: true,
    isSearch: ""
  };
  DateSort = (a, b) => {
    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
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
  onPageChange = page => {
    console.log(page);
    this.setState({
      current: page
    });
  };
  onSearch = val => {
    if (val) {
      let filterdresponse = this.state.response;
      filterdresponse = filterdresponse.filter(data => {
        const { title } = data;
        return title.toLowerCase().search(val.toLowerCase()) >= 0;
      });
      if (filterdresponse.length) {
        this.setState({
          filterdresponse,
          isFound: true,
          isSearch: val,
          current: 1
        });
      } else {
        this.setState({
          isFound: false
        });
      }
    } else {
      message.info("Plese enter keywords");
      this.setState({
        isSearch: ""
      });
    }
  };
  onSort = sortby => {
    if (sortby === "date") {
      let filterdresponse = this.state.filterdresponse.length
        ? this.state.filterdresponse
        : [...this.state.response];
      filterdresponse = filterdresponse.filter(data => {
        const { created_at } = data;
        return created_at;
      }, filterdresponse.sort(this.DateSort));
      this.setState({
        filterdresponse
      });
    } else {
      let searchSort = this.state.isSearch
        ? this.state.filterdresponse
        : [...this.state.response];
      searchSort = searchSort.filter(data => {
        return data;
      }, searchSort.reverse());

      this.setState({
        filterdresponse: this.state.isSearch
          ? searchSort
          : [...this.state.response]
      });
    }
  };
  render() {
    return (
      <Home
        {...this.state}
        onSearch={this.onSearch}
        onPageChange={this.onPageChange}
        onSort={this.onSort}
      />
    );
  }
}

export default App;
