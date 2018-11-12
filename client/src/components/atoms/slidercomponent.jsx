import React, { Component } from "react";
import { Slider, InputNumber, Checkbox, Row, Col } from "antd";
export default class IntegerStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inpuValueOne: null,
      inpuValueTwo: null
    };
  }
  handleSlide = values => {
    if (values.length) {
      let maxsalperhr = { maxsalperhr: values };
      this.props.applyFilter(maxsalperhr);
    }
  };
  onChange = value => {
    this.props.getdec.setFieldsValue({
      minVal: parseInt(value[0]),
      maxVal: parseInt(value[1])
    });
    this.setState(
      {
        inpuValueOne: 0,
        inpuValueTwo: value[1]
      },
      this.handleSlide(value)
    );
  };
  clearVal = () => {
    this.props.getdec.setFieldsValue(
      {
        minVal: null,
        maxVal: null
      },
      this.setState(
        {
          inpuValueOne: null,
          inpuValueTwo: null
        },
        this.props.applyFilter({ maxsalperhr: [] })
      )
    );
    this.props.getdec.setFieldsValue({
      slider: [null, null]
    });
  };
  onInputOneChange = value => {
    if (value) {
      this.setState(
        {
          inpuValueOne: parseInt(value)
        },
        this.handleSlide([value, this.state.inpuValueTwo])
      );
    }
    this.props.getdec.setFieldsValue({
      slider: [this.state.inpuValueOne, this.state.inpuValueTwo]
    });
  };
  onInputTwoChange = value => {
    if (value) {
      this.setState(
        {
          inpuValueTwo: parseInt(value)
        },
        this.handleSlide([this.state.inpuValueOne, value])
      );
    }
    this.props.getdec.setFieldsValue({
      slider: [this.state.inpuValueOne, this.state.inpuValueTwo]
    });
  };
  render() {
    const marks = {
      1: "1",
      40: "40+"
    };

    return (
      <div className="container">
        <div style={{ margin: `10px 0` }}>
          <span>
            <strong>Pay rate/hr ($)</strong>
          </span>
          <span
            style={{ float: "right", cursor: "pointer" }}
            onClick={this.clearVal}
          >
            Clear
          </span>
        </div>
        <Row>
          <Col span={6}>
            {this.props.getdec.getFieldDecorator("minVal")(
              <InputNumber
                min={1}
                max={40}
                initialValue={1}
                style={{ marginRight: 16 }}
                onChange={this.onInputOneChange}
              />
            )}
          </Col>
          <Col span={6}>
            {this.props.getdec.getFieldDecorator("maxVal")(
              <InputNumber
                min={1}
                max={40}
                style={{ marginLeft: 16 }}
                onChange={this.onInputTwoChange}
              />
            )}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            {this.props.getdec.getFieldDecorator("slider")(
              <Slider
                range
                min={1}
                max={40}
                marks={marks}
                onChange={this.onChange}
              />
            )}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Checkbox name="selectOtherOptions" className="availability_box">
              <strong>Include profiles without pay rates</strong>
            </Checkbox>
          </Col>
        </Row>
      </div>
    );
  }
}
