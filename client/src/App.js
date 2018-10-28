import React, { Component } from "react";
import Home from "./components/home";
import searchApi from "./components/utils/Api";
import { message } from "antd";
import "./css/App.css";

class App extends Component {
  state = {
    allJobs: [],
    jobFilter: [],
    currentPage: 1,
    isSearch: ""
  };
  DateSort = (a, b) => {
    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
  };
  componentDidMount() {
    searchApi()
      .then(searchResults => {
        this.setState({
          allJobs: searchResults
        });
      })
      .catch(err => console.log(err));
  }
  onPageChange = page => {
    console.log(page);
    this.setState({
      currentPage: page
    });
  };
  onSearch = val => {
    if (val) {
      let jobFilter = this.state.allJobs;
      jobFilter = jobFilter.filter(data => {
        const { title } = data;
        return title.toLowerCase().search(val.toLowerCase()) >= 0;
      });
      this.setState({
        jobFilter,
        isSearch: val,
        currentPage: 1
      });
    } else {
      message.info("Plese enter keywords");
      this.setState({
        isSearch: ""
      });
    }
  };
  onSort = sortby => {
    if (sortby === "date") {
      let jobFilter = this.state.jobFilter.length
        ? this.state.jobFilter
        : [...this.state.allJobs];
      jobFilter = jobFilter.filter(data => {
        const { created_at } = data;
        return created_at;
      }, jobFilter.sort(this.DateSort));
      this.setState({
        jobFilter
      });
    } else {
      let searchSort = this.state.isSearch
        ? this.state.jobFilter
        : [...this.state.allJobs];
      searchSort = searchSort.filter(data => {
        return data;
      }, searchSort.reverse());

      this.setState({
        jobFilter: this.state.isSearch ? searchSort : [...this.state.allJobs]
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
