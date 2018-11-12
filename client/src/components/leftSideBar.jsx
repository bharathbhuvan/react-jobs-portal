import React, { Component } from "react";
import { Form, Col, Input, Icon, Tooltip, Divider } from "antd";
import EditableTagGroup from "./atoms/Tags";
import CheckBox from "./atoms/checkbox";
import JobTypeFilter from "./atoms/jobTypeFilter";
import IntegerStep from "./atoms/slidercomponent";
const FormItem = Form.Item;
class LeftSideBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tags: []
  //   };
  // }
  handleSearch = event => {
    let locationVal = event.target.value.trim();
    if (locationVal) {
      let location = { location: [locationVal.toLowerCase()] };
      this.props.applyFilter(location);
    }
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
          <div style={{ paddingBottom: `15px` }}>
            <span>
              <strong>FILTERS</strong>
            </span>
            <span style={{ float: "right" }} onClick={this.handleClear}>
              Clear all filters
            </span>
          </div>
          <Divider />
          <div>
            <span>
              <strong>Skills</strong>
            </span>
            <span
              style={{ float: "right" }}
              onClick={() => {
                this.props.form.resetFields(
                  "skills",
                  this.props.applyFilter({ keywords: [] })
                );
              }}
            >
              Clear
            </span>
            <FormItem>
              <EditableTagGroup
                getdec={this.props.form}
                applyFilter={this.props.applyFilter}
              />
            </FormItem>
          </div>
          <div style={{ margin: `30px 0` }}>
            <span>
              <strong>Availability</strong>
              <Tooltip title="sortby availability">
                <Icon
                  type="info-circle"
                  style={{ fontSize: "18px" }}
                  theme="outlined"
                />
              </Tooltip>
            </span>
            <span
              style={{ float: "right" }}
              onClick={() => {
                this.props.form.resetFields(
                  "availability",
                  this.props.applyFilter({ type: [] })
                );
              }}
            >
              Clear
            </span>
            <FormItem>
              <CheckBox
                applyFilter={this.props.applyFilter}
                getdec={this.props.form}
              />
            </FormItem>
          </div>
          <div style={{ margin: `30px 0` }}>
            <span>
              <strong>Job type</strong>
              <Tooltip title="sortby jobtype">
                <Icon
                  type="info-circle"
                  style={{ fontSize: "18px" }}
                  theme="outlined"
                />
              </Tooltip>
            </span>
            <span
              style={{ float: "right" }}
              onClick={() => {
                this.props.form.resetFields(
                  "jobtype",
                  this.props.applyFilter({ jobtype: [] })
                );
              }}
            >
              Clear
            </span>
            <FormItem>
              <JobTypeFilter
                applyFilter={this.props.applyFilter}
                getdec={this.props.form}
              />
            </FormItem>
          </div>
          <div style={{ margin: `30px 0` }}>
            <div>
              <span>
                <strong>Countries</strong>
              </span>
              <span
                style={{ float: "right" }}
                onClick={() => {
                  this.props.form.resetFields(
                    "countries",
                    this.props.applyFilter({ location: [] })
                  );
                }}
              >
                Clear
              </span>
            </div>
            <FormItem>
              {getFieldDecorator("countries")(
                <Input
                  name="searchby-location"
                  placeholder="Enter State,Province or country"
                  onChange={e => {
                    this.handleSearch(e);
                  }}
                />
              )}
            </FormItem>
          </div>
          <FormItem>
            <IntegerStep
              handleSlide={this.props.handleSlide}
              getdec={this.props.form}
              applyFilter={this.props.applyFilter}
            />
          </FormItem>
        </Form>
      </Col>
    );
  }
}
const WrappedForm = Form.create()(LeftSideBar);
export default WrappedForm;
