import React from "react";
import { Checkbox, Row, Col } from "antd";

const CheckBox = props => {
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  return (
    <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
      <Row>
        <Col span={8}>
          <Checkbox value="parttime">Part-time</Checkbox>
          <br />
          <Checkbox value="fulltime">full-time</Checkbox>
          <br />
        </Col>
      </Row>
    </Checkbox.Group>
  );
};

export default CheckBox;
