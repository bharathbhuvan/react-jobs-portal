import React from "react";
import { Layout } from "antd";
const { Header } = Layout;
const HeaderComponent = () => {
  return (
    <Header style={{ backgroundColor: `#fff` }}>
      <img
        src="../images/logo-header.jpg"
        alt="Hubstaff Talent"
        className="logo"
      />
    </Header>
  );
};

export default HeaderComponent;
