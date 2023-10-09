import React from "react";
import "./QualificationPage.css";
import { Paper, Typography } from "@mui/material";
import QualificationTable from "../../components/QualificationTable/QualificationTable";

const QualificationPage = () => {
  const [stickyNav,setStickyNav] = React.useState("")
  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    windowHeight > 200 ? setStickyNav("sticky-nav") : setStickyNav("");
} 

React.useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
}, []);
  return (
    <div className="qualification-page">
      <Paper variant="outlined" sx={{ width: "100%" }}>
        <div className={`top-sec ${stickyNav}`} style={{display:'flex',padding:"5px 15px",justifyContent:"space-between",alignItems:"center"}}>
          <Typography variant="h4" sx={{fontSize: {xs:"20px",sm:"26px"},fontWeight:"bold",color:"gray"}}>Drivers List</Typography>
        </div>
        <QualificationTable/>
      </Paper>
    </div>
  );
};

export default QualificationPage;
