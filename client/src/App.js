import React, { Component } from "react";
import Home from "./components/home";
import searchApi from "./components/utils/Api";
import { message } from "antd";
import "./css/App.css";
let allFilters = {
  title: [],
  type: [],
  keywords: [],
  jobtype: [],
  location: [],
  maxsalperhr: []
};
class App extends Component {
  state = {
    allJobs: [],
    jobFilter: [],
    currentPage: 1,
    isSearch: "",
    filter: false
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
    this.setState(
      {
        currentPage: page
      },
      () => {
        const elmnt = document.getElementById("jobContainer");
        elmnt.scrollIntoView();
      }
    );
  };
  stateUpdate = jobFilter => {
    this.setState((prevstate, props) => {
      return {
        jobFilter,
        filter: true,
        currentPage: 1
      };
    });
  };

  onMutiFilter = objKeys => {
    let totalJobs = [...this.state.allJobs];
    let filteredJobs = [];
    allFilters = Object.assign({}, allFilters, objKeys);
    console.log(allFilters);
    const filterKeys = Object.keys(allFilters);
    filteredJobs = totalJobs.filter((eachObj, index) => {
      return filterKeys.every(eachKey => {
        if (eachKey === "maxsalperhr" && allFilters.maxsalperhr.length > 0) {
          return (
            eachObj[eachKey] >= allFilters.maxsalperhr[0] &&
            eachObj[eachKey] <= allFilters.maxsalperhr[1]
          );
        }
        if (!allFilters[eachKey].length) {
          return true; // empty filter is ignored.
        }
        let searchExp = new RegExp(
          allFilters[eachKey].join("").replace(/,/gi, "|"),
          "gi"
        );
        if (typeof eachObj[eachKey] !== "undefined") {
          return searchExp.test(
            eachObj[eachKey].length > 0 ? eachObj[eachKey].toLowerCase() : ""
          );
        }
        return null;
      });
    });
    this.stateUpdate(filteredJobs);
  };
  onSearch = val => {
    if (val.trim()) {
      allFilters.title = [];
      allFilters.title.push(val.toLowerCase());
      this.setState(
        {
          isSearch: val
        },
        this.onMutiFilter()
      );
    } else {
      message.info("Plese enter keywords");
      this.setState({
        isSearch: ""
      });
    }
  };

  onSort = sortby => {
    if (sortby === "date") {
      let jobFilter = this.state.filter
        ? this.state.jobFilter
        : [...this.state.allJobs];
      jobFilter = jobFilter.filter(data => {
        const { created_at } = data;
        return created_at;
      }, jobFilter.sort(this.DateSort));
      this.setState({
        jobFilter,
        filter: true
      });
    } else {
      let searchSort = this.state.filter
        ? this.state.jobFilter
        : [...this.state.allJobs];
      searchSort = searchSort.filter(data => {
        return data;
      }, searchSort.reverse());

      this.setState({
        jobFilter: searchSort,
        filter: true
      });
    }
  };
  clearAll = () => {
    document.getElementById("searchJobs").value = "";
    for (let key in allFilters) {
      allFilters[key] = [];
    }
    this.setState({
      jobFilter: [],
      filter: false
    });
  };
  render() {
    return (
      <Home
        {...this.state}
        onSearch={this.onSearch}
        onPageChange={this.onPageChange}
        onSort={this.onSort}
        clearAll={this.clearAll}
        applyFilter={this.onMutiFilter}
      />
    );
  }
}

export default App;
