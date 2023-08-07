import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Calculate from "./Calculate";
import AllInvoices from "./AllInvoices";
import SingleInvoice from "./SingleInvoice";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/invoices" element={<AllInvoices />} />
        <Route path="/invoices/:id" element={<SingleInvoice />} />
      </Routes>
    </div>
  );
}
export default MainRoutes;
