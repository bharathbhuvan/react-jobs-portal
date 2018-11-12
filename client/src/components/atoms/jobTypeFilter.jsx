import React from "react";
import { Select } from "antd";

const Option = Select.Option;

const JobTypeFilter = props => {
  const handleChange = (value = "") => {
    let jobtype = { jobtype: [value.toLowerCase()] };
    props.applyFilter(jobtype);
  };
  return props.getdec.getFieldDecorator("jobtype")(
    <Select
      showSearch
      style={{ width: `100%` }}
      initialValue="Select a job type"
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
