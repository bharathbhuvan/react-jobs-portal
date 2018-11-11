import React, { Component } from "react";
import { Form, Col, Input } from "antd";
import EditableTagGroup from "./atoms/Tags";
import CheckBox from "./atoms/checkbox";
import JobTypeFilter from "./atoms/jobTypeFilter";
const FormItem = Form.Item;
class LeftSideBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tags: []
  //   };
  // }
  handleSearch = event => {
    if (event.target.value) this.props.onCountrySearch(event.target.value);
  };
  handleClear = () => {
    this.props.form.resetFields();
    this.props.clearAll();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Col
        style={{ padding: `0 30px` }}
        xs={24}
        sm={24}
        md={18}
        lg={6}
        xl={6}
        className="gutter-row"
      >
        <Form layout="vertical">
          <span>
            <strong>Filter</strong>
          </span>
          <span
            style={{ float: "right", paddingRight: 10 }}
            onClick={this.handleClear}
          >
            Clear Filter
          </span>
          <hr />
          <div>
            <span>
              <strong>Skills</strong>
            </span>
            <span style={{ float: "right", paddingRight: 10 }}>Clear</span>
            <FormItem>
              <EditableTagGroup handleTag={this.props.handleTag} />
            </FormItem>
          </div>
          <div style={{ margin: `30px 0` }}>
            <span>
              <strong>Availability</strong>
            </span>
            <span style={{ float: "right", paddingRight: 10 }}>Clear</span>
            <FormItem>
              <CheckBox onCheck={this.props.onCheck} getdec={this.props.form} />
            </FormItem>
          </div>
          <div style={{ margin: `30px 0` }}>
            <span>
              <strong>Job type</strong>
            </span>
            <span style={{ float: "right", paddingRight: 10 }}>Clear</span>
            <FormItem>
              <JobTypeFilter
                jobTypeFilter={this.props.jobTypeFilter}
                getdec={this.props.form}
              />
            </FormItem>
          </div>
          <div style={{ margin: `30px 0` }}>
            <div>
              <span>
                <strong>Countries</strong>
              </span>
              <span style={{ float: "right", paddingRight: 10 }}>Clear</span>
            </div>
            <FormItem>
              {getFieldDecorator("countries")(
                <Input
                  name="test-field"
                  placeholder="Enter State,Province or country"
                  onChange={e => {
                    this.handleSearch(e);
                  }}
                />
              )}
            </FormItem>
          </div>
        </Form>
      </Col>
    );
  }
}
const WrappedHorizontalLoginForm = Form.create()(LeftSideBar);
export default WrappedHorizontalLoginForm;
