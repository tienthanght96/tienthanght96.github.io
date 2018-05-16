import React from "react";
import '../Home.scss';
const HeaderText = ({title}) => (
  <div className="container-header-text">
    <h3 className="title-text">{title}</h3>
  </div>
);
export default HeaderText;