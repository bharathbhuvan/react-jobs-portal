import React from "react";
import { Col } from "antd";
import EditableTagGroup from "./atoms/Tags";
import CheckBox from "./atoms/checkbox";
const RightSideBar = props => {
  return (
    <Col
      xs={24}
      sm={24}
      md={18}
      lg={5}
      xl={5}
      style={{ padding: 30 }}
      className="gutter-row"
    >
      <span>
        <strong>Skills</strong>
      </span>
      <span style={{ float: "right", paddingRight: 10 }}>Clear</span>
      <hr />
      <div>
        <span>
          <strong>Filter</strong>
        </span>
        <span style={{ float: "right", paddingRight: 10 }}>Clear Filter</span>
        <EditableTagGroup handleTag={props.handleTag} />
      </div>
      <div style={{ margin: `30px 0` }}>
        <span>
          <strong>Availability</strong>
        </span>
        <span style={{ float: "right", paddingRight: 10 }}>Clear</span>
        <CheckBox onCheck={props.onCheck} />
      </div>
    </Col>
  );
};

export default RightSideBar;
