import React from "react";
import LeftSide from "../../Share/LeftSide/leftSide";
import { Outlet } from "react-router-dom";
import RightSide from "../../Share/RightSide/RightSide";

const NewsLayout = () => {
  return (
    <div className="grid grid-cols-[3fr_1fr] costom-container">
      <Outlet />
      <RightSide />
    </div>
  );
};

export default NewsLayout;
