import React from "react";
import "./UsersPage.css";
import { Button, Paper, Typography } from "@mui/material";
import BasicTable from "../../components/Table/BasicTable";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const [stickyNav,setStickyNav] = React.useState("")
  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    windowHeight > 100 ? setStickyNav("sticky-nav") : setStickyNav("");
} 

React.useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
}, []);
  const navigate=useNavigate()
  return (
    <div className="users-page">
      <Paper variant="outlined" sx={{ width: "100%" }}>
        <div className={`top-sec ${stickyNav}`} style={{display:'flex',padding:"5px 15px",justifyContent:"space-between",alignItems:"center"}}>
          <Typography variant="h4" sx={{fontSize: {xs:"20px",sm:"26px"},fontWeight:"bold",color:"gray"}}>Drivers List</Typography>
          <Button onClick={()=>navigate("/driversmanagement/adddriver")} variant="contained" color="primary" endIcon={<AddIcon />} sx={{fontWeight:"700"}}>
            Add
          </Button>
        </div>

        <BasicTable />
      </Paper>
    </div>
  );
};

export default UsersPage;
