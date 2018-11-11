import React, { Component } from "react";
import Home from "./components/home";
import searchApi from "./components/utils/Api";
import { message } from "antd";
import "./css/App.css";
const allFilters = {
  title: [],
  type: [],
  keywords: [],
  jobtype: [],
  location: []
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
        filter: true
      };
    });
  };

  onMutiFilter = () => {
    let totalJobs = [...this.state.allJobs];
    let filteredJobs = [];

    const filterKeys = Object.keys(allFilters);
    filteredJobs = totalJobs.filter((eachObj, index) => {
      return filterKeys.every(eachKey => {
        if (!allFilters[eachKey].length) {
          return true; // empty filter is ignored.
        }
        let searchExp = new RegExp(
          allFilters[eachKey].join("").replace(/,/gi, "|"),
          "gi"
        );
        return searchExp.test(
          typeof eachObj[eachKey] !== "undefined"
            ? eachObj[eachKey].toLowerCase()
            : ""
        );
      });
    });
    this.stateUpdate(filteredJobs);
  };
  handleTag = tags => {
    allFilters.keywords = [];
    console.log("arr", tags);
    tags = tags.join();
    allFilters.keywords.push(tags);

    this.onMutiFilter();
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
  onCountrySearch = value => {
    if (value.trim()) {
      allFilters.location[0] = value.trim().toLowerCase();
      this.onMutiFilter();
    }
  };
  onCheck = checkvalues => {
    allFilters.type[0] = checkvalues;
    this.onMutiFilter();
  };
  onfilterJobType = value => {
    allFilters.jobtype[0] = value.toLowerCase();
    this.onMutiFilter();
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
    for (let key in allFilters) {
      allFilters[key] = [""];
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
        jobTypeFilter={this.onfilterJobType}
        onSearch={this.onSearch}
        onPageChange={this.onPageChange}
        onSort={this.onSort}
        onCheck={this.onCheck}
        handleTag={this.handleTag}
        onCountrySearch={this.onCountrySearch}
        clearAll={this.clearAll}
      />
    );
  }
}

export default App;
