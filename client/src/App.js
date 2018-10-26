import React, { Component } from "react";
import Home from "./Home";
import searchApi from "./components/Api";
import "./App.css";

class App extends Component {
  state = {
    response: [],
    filterdresponse: [],
    current: 1,
    paging: 10
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
          filterdresponse
        });
      }
    }
  };
  onSort = sortby => {
    let filterdresponse = this.state.filterdresponse.length
      ? this.state.filterdresponse
      : this.state.response;
    if (sortby === "date") {
      filterdresponse = filterdresponse.filter(data => {
        const { created_at } = data;
        return created_at;
      }, filterdresponse.sort(this.DateSort));
      this.setState({
        ...this.state.filterdresponse,
        filterdresponse
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
