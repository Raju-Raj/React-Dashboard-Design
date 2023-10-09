import React from "react";
import "./AdminPage.css";
import { Button, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import AdminTable from "../../components/AdminTable/AdminTable";

const AdminPage = () => {
  const navigate=useNavigate()
  return (
    <div className="admins-page">
      <Paper variant="outlined" sx={{ width: "100%" }}>
        <div style={{display:'flex',padding:"5px 15px",justifyContent:"space-between",alignItems:"center"}}>
          <Typography variant="h4" sx={{fontSize: {xs:"20px",sm:"26px"},fontWeight:"bold",color:"gray"}}>Admins</Typography>
          <div style={{display:'flex',gap:'5px'}}>
          <Button variant="contained" color="secondary" sx={{fontWeight:"700"}}>
            Profile
          </Button>
          <Button onClick={()=>navigate("/admin/addadmin")} variant="contained" color="primary" endIcon={<AddIcon />} sx={{fontWeight:"700"}}>
            Add
          </Button>
          </div>
        </div>
        <AdminTable/>
      </Paper>
    </div>
  );
};

export default AdminPage;
