import React from "react";
import { Col, Icon, Button, Divider } from "antd";
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
      <div style={{ padding: `30px` }}>
        <p>
          <strong>TOP JOBS</strong>
        </p>
        <Divider />
        <div>
          <div className="left">
            <p>
              <strong>
                Senior Ruby on Rails Engineer{" "}
                <span style={{ float: `right` }}>$60/hr</span>
              </strong>
            </p>
            <p>Senior Ruby on Rails Engineer Senior Ruby on Rails Engineer</p>
          </div>
          <div className="left">
            <p>
              <strong>
                Senior Product Designer
                <span style={{ float: `right` }}>$60/hr</span>
              </strong>
            </p>
            <p>
              Senior Product Designer Senior Product Designer Senior Product
              Designer
            </p>
          </div>
        </div>
      </div>
      <div style={{ padding: `30px` }}>
        <p>
          <strong>MOST VIEWED THIS WEEK</strong>
        </p>
        <Divider />
        <div>
          <div className="left">
            <p>
              <strong>
                Senior Ruby on Rails Engineer{" "}
                <span style={{ float: `right` }}>$60/hr</span>
              </strong>
            </p>
            <p>Senior Ruby on Rails Engineer Senior Ruby on Rails Engineer</p>
          </div>
          <div className="left">
            <p>
              <strong>
                Senior Product Designer
                <span style={{ float: `right` }}>$60/hr</span>
              </strong>
            </p>
            <p>
              Senior Product Designer Senior Product Designer Senior Product
              Designer
            </p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default RightSideBar;
