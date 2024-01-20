import Navbar from "@/layouts/Navbar";
import React from "react";

function Dashboardlayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Dashboardlayout;
