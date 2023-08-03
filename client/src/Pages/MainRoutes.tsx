import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Calculate from "./Calculate";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate" element={<Calculate />} />
      </Routes>
    </div>
  );
}
export default MainRoutes;
