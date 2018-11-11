import React from "react";
import { Select } from "antd";

const Option = Select.Option;

const Customdropdown = props => {
  const handleChange = value => {
    props.onSort(value);
  };

  return (
    <Select
      showSearch
      style={{ width: 200 }}
      defaultValue="relevance"
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={value => handleChange(value)}
    >
      <Option value="relevance">Relevance</Option>
      <Option value="date">Date</Option>
    </Select>
  );
};

export default Customdropdown;
