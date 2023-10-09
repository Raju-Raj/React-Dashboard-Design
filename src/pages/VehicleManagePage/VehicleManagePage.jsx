import React from "react";
import "./VehicleManagePage.css";
import { Button, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import VehicleTable from "../../components/VehicleTable/VehicleTable";
import AddUpdateVehicleDialog from "../../components/AddUpdateVehicleDialog/AddUpdateVehicleDialog";

const VehicleManagePage = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleOpenDialog = (row) => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSave = (data) => {
    console.log(`Added: ${data.name}`)
    setIsDialogOpen(false);
  };
  return (
    <div className="vehicle-manage-page">
      <Paper variant="outlined" sx={{ width: "100%" }}>
        <div style={{display:'flex',padding:"5px 15px",justifyContent:"space-between",alignItems:"center"}}>
          <Typography variant="h4" sx={{fontSize: {xs:"20px",sm:"26px"},fontWeight:"bold",color:"gray"}}>Vehicle List</Typography>
          <Button onClick={() => handleOpenDialog()}  variant="contained" color="primary" endIcon={<AddIcon />} sx={{fontWeight:"700"}}>
            Add
          </Button>
        </div>

        <VehicleTable/>
      </Paper>
      <AddUpdateVehicleDialog isOpen={isDialogOpen} onClose={handleCloseDialog} onSave={handleSave}  />
    </div>
  );
};

export default VehicleManagePage;
