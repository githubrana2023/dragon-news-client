import React from "react";
import Navbar from "../Pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import LeftSide from "../Share/LeftSide/leftSide";
import RightSide from "../Share/RightSide/RightSide";

const Main = () => {
  return (
    <div className="costom-container">
      <Navbar />

      <div className="grid grid-cols-[1fr_2fr_1fr]">
        <LeftSide />
        <Outlet />
        <RightSide />
      </div>
    </div>
  );
};

export default Main;
