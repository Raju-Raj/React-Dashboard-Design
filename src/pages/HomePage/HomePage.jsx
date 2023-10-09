import React from "react";
import "./HomePage.css";
import BasicTable from "../../components/Table/BasicTable";
import HomeCards from "../../components/HomeCards/HomeCards";

const HomePage = () => {
  return (
    <div className="home-page">
      <HomeCards/>
      <h3 style={{marginTop:"10px",fontWeight:"bold",color:"gray"}}>Drivers Status</h3>
      <BasicTable/>
    </div>
  );
};

export default HomePage;
