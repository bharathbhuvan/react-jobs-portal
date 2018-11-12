import React, { Component } from "react";
import { Select } from "antd";

const Option = Select.Option;

const optionval = [
  "php",
  "devops",
  "FPGA",
  ".Net",
  "Webdev",
  "Scala",
  "Full Stack"
];
const children = [];
for (let i = 0; i < optionval.length; i++) {
  children.push(<Option key={optionval[i]}>{optionval[i]}</Option>);
}

class EditableTagGroup extends Component {
  state = {
    size: "default"
  };
  // handleChange = value => {
  //   this.props.handleTag(value);
  //   let keywords = { keywords: [] };
  //   keywords.keywords.push(value);
  //   console.log(keywords);
  // };
  handleChange = (tags = []) => {
    let keywords = { keywords: [] };
    if (tags.length) {
      tags = tags.join();
      keywords.keywords.push(tags);
    }

    this.props.applyFilter(keywords);
  };
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        {this.props.getdec.getFieldDecorator("skills")(
          <Select
            mode="tags"
            size={size}
            placeholder="Please select skills"
            initialValue={[]}
            onChange={this.handleChange}
            style={{ width: "100%" }}
          >
            {children}
          </Select>
        )}
      </div>
    );
  }
}
export default EditableTagGroup;
