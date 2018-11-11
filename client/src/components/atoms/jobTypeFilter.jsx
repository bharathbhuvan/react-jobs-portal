import React from "react";
import { Select } from "antd";

const Option = Select.Option;

const JobTypeFilter = props => {
  const handleChange = value => {
    props.jobTypeFilter(value);
  };

  return props.getdec.getFieldDecorator("jobtype", {
    initialValue: Option.initialValue
  })(
    <Select
      showSearch
      style={{ width: `100%` }}
      defaultValue="Select a job type"
      placeholder="Select a job type"
      optionFilterProp="children"
      onChange={value => handleChange(value)}
    >
      <Option value="permanent">Permanent</Option>
      <Option value="contract">Contract</Option>
    </Select>
  );
};

export default JobTypeFilter;
