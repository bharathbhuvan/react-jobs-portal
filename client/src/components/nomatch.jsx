import React from "react";
import { Col } from "antd";
const Nomatch = props => {
  return (
    <Col
      span={12}
      style={{
        backgroundColor: "#fff",
        minHeight: 380,
        display: "flex",
        justifyContent: "center",
        padding: `20px 50px`,
        marginBottom: `50px`
      }}
    >
      <h3>Match Not Found</h3>
    </Col>
  );
};

export default Nomatch;
