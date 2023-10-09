import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./VehicleTable.css"
import { Card, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteConfirmationDialog from "../DeleteConfirmation/DeleteConfirmationDialog";
import AddUpdateVehicleDialog from "../AddUpdateVehicleDialog/AddUpdateVehicleDialog";
import FireTruckIcon from '@mui/icons-material/FireTruck';




const rows = [
  {name:"Bus"},
  {name:"Truck"},
  {name:"Engine"}
];




const VehicleTable = () => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleOpenDialog = (row) => {
    setSelectedRow(row);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedRow(null);
    setIsDialogOpen(false);
  };

  const handleSave = (data) => {
    if (selectedRow) {
      console.log(`Updated: ${data.name}`);
    } 
    setSelectedRow(null);
    setIsDialogOpen(false);
  };

  const handleOpenDeleteDialog = (row) => {
    setSelectedRow(row);
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setSelectedRow(null);
    setIsDeleteDialogOpen(false);
  };

  const handleDelete = (rowToDelete) => {
    console.log(`Deleted: ${rowToDelete?.name}`);
    handleCloseDeleteDialog();
  };
  return (
    <div
      className="Table"
      style={{ marginTop: "10px", overflowY: "scroll", maxHeight: "400px" }}
    >
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        className="vehicleTable"
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Vehicle Name</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left" sx={{display:"felx",gap:"3px"}}>
                <IconButton aria-label="view" sx={{height:"24px"}}>
                    <VisibilityIcon sx={{fontSize:"20px",color:'#2196f3'}} />
                </IconButton>
                <IconButton aria-label="update" sx={{height:"24px"}} onClick={() => handleOpenDialog(row)}>
                    <EditIcon sx={{fontSize:"20px",color:'#FFA500'}} />
                  </IconButton>
                  <IconButton aria-label="delete" sx={{height:"24px"}} onClick={() => handleOpenDeleteDialog(row)}>
                    <DeleteIcon sx={{fontSize:"20px",color:'#f44336'}} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      <div className="vehicleTableCards">
      <Grid container spacing={2}>

        {
          rows.map((row)=>(
            <Grid item xs={12} sm={6}>
          <Card className="card">
            <div className="card-icon">
              <span className="per-icon">
                 <FireTruckIcon  className="icon"/>
              </span>
            </div>
            <div className="card-data">
            <table>
              <tr>
                <th>
                  <Typography variant="h3" sx={{fontSize:"12px"}}>Vehicle</Typography>
                </th>
                <td>
                  <Typography variant="body2" sx={{fontSize:"12px"}}>{row.name}</Typography>
                </td>
              </tr>
              
              <tr>
                <th></th><td className="actions">
                <IconButton aria-label="view" sx={{height:"24px"}}>
                    <VisibilityIcon sx={{fontSize:"20px",color:'#2196f3'}} />
                </IconButton>
                <IconButton aria-label="update" sx={{height:"24px"}} onClick={() => handleOpenDialog(row)}>
                    <EditIcon sx={{fontSize:"20px",color:'#FFA500'}}/>
                  </IconButton>
                  <IconButton aria-label="delete" sx={{height:"24px"}} onClick={() => handleOpenDeleteDialog(row)}>
                    <DeleteIcon sx={{fontSize:"20px",color:'#f44336'}} />
                  </IconButton>
                </td>
              </tr>
            </table>
            </div>
          </Card>
        </Grid> 
          ))
        }

      </Grid>
    </div>

      <DeleteConfirmationDialog isOpen={isDeleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        onDelete={handleDelete}
        selectedItem={selectedRow}/>
        <AddUpdateVehicleDialog isOpen={isDialogOpen} onClose={handleCloseDialog} onSave={handleSave} selectedItem={selectedRow} />
    </div>
  );
};

export default VehicleTable;
