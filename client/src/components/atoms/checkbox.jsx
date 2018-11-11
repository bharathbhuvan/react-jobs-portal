import React, { Component } from "react";
import { Checkbox, Row, Col } from "antd";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  onChange = checkedValues => {
    this.props.onCheck(checkedValues);
  };
  render() {
    return this.props.getdec.getFieldDecorator("availability")(
      <Checkbox.Group style={{ width: "100%" }} onChange={this.onChange}>
        <Row>
          <Col>
            <Checkbox value="part time">Part-time</Checkbox>
            <br />
            <Checkbox value="full time">Full-time</Checkbox>

            <br />
          </Col>
        </Row>
      </Checkbox.Group>
    );
  }
}

export default CheckBox;
