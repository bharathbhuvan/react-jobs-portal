import React from "react";
import { Col, Icon, Button } from "antd";
const RightSideBar = () => {
  return (
    <Col xs={24} sm={24} md={18} lg={5} xl={5} className="gutter-row">
      <div className="lefside-bar">
        <Icon type="deployment-unit" theme="outlined" />
        <h2>Track time</h2>
        <p>Pay only for the hours worked</p>
        <Button type="primary" justfy-content="center" size="default">
          SignUp
        </Button>
      </div>
    </Col>
  );
};

export default RightSideBar;
