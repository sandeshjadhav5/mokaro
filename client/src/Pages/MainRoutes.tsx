import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default MainRoutes;
