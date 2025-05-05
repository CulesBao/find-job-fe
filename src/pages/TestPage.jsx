import React from "react";
import FindJobFrame from "../pages/Dashboard/FindJobFrame";
import Frame from "../pages/Dashboard/Frame";
import Vanacies from "../pages/Dashboard/Vanacies";
import WorkingProcess from "../pages/Dashboard/WorkingProcess";
import Category from "../pages/Dashboard/Category";
import FeaturedJob from "../pages/Dashboard/FeaturedJob";
import TopCompanies from "../pages/Dashboard/TopCompanies";
export default function TestPage() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh", padding: "20px" }}>
      {/* Hiển thị FindJobFrame */}
      {/* Hiển thị Frame */}
      <Frame />
      <FindJobFrame />
      <Vanacies/>
      <WorkingProcess/>
      {/* Các thành phần khác */}
      <Category/>
        <FeaturedJob/>
        <TopCompanies/>


      
    </div>
  );
}