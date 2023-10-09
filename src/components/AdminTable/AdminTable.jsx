import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./AdminTable.css";
import { Card, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
import DeleteConfirmationDialog from "../DeleteConfirmation/DeleteConfirmationDialog";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';




const rows = [
  {
    id:1,
    name:"Suresh",
    phonenumber:"9878687687",
    email:"suresh@gmail.com"
  },
  {
    id:2,
    name:"Rajesh",
    phonenumber:"9878687687",
    email:"rajesh@gmail.com"
  },
  {
    id:3,
    name:"Ramesh",
    phonenumber:"9878687687",
    email:"ramesh@gmail.com"
  },
  {
    id:4,
    name:"Mallesh",
    phonenumber:"9878687687",
    email:"mallesh@gmail.com"
  }
];



const AdminTable = () => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);

  const navigate = useNavigate()
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
        className="adminTable"
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Mobile No</TableCell>
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
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.phonenumber}
                </TableCell>
                <TableCell align="left" sx={{display:"felx",gap:"3px"}}>
                <IconButton aria-label="view" sx={{height:"24px"}}>
                    <VisibilityIcon sx={{fontSize:"20px",color:'#2196f3'}} />
                </IconButton>
                <IconButton aria-label="update" sx={{height:"24px"}} onClick={()=>navigate("/admin/updateadmin/1")}>
                    <EditIcon sx={{fontSize:"20px",color:'#FFA500'}}/>
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


      <div className="adminTableCards">
      <Grid container spacing={2}>

        {
          rows.map((row)=>(
            <Grid item xs={12} sm={6}>
          <Card className="card">
            <div className="card-icon">
              <span className="per-icon">
                 <SupervisorAccountIcon  className="icon"/>
              </span>
            </div>
            <div className="card-data">
            <table>
              <tr>
                <th>
                  <Typography variant="h3" sx={{fontSize:"12px"}}>Name</Typography>
                </th>
                <td>
                  <Typography variant="body2" sx={{fontSize:"12px"}}>{row.name}</Typography>
                </td>
              </tr>
              <tr>
                <th>
                <Typography variant="h3" sx={{fontSize:"12px"}}>Mobile</Typography>
                </th>
                <td>
                <Typography variant="body2" sx={{fontSize:"12px"}}>{row.phonenumber}</Typography>
                </td>
              </tr>
              <tr>
                <th>
                <Typography variant="h3" sx={{fontSize:"12px"}}>Email</Typography>
                </th>
                <td>
                <Typography variant="body2" sx={{fontSize:"12px"}}>{row.email}</Typography>
                </td>
              </tr>
              <tr>
                <th></th><td className="actions">
                <IconButton aria-label="view" sx={{height:"24px"}}>
                    <VisibilityIcon sx={{fontSize:"20px",color:'#2196f3'}} />
                </IconButton>
                <IconButton aria-label="update" sx={{height:"24px"}} onClick={()=>navigate("/admin/updateadmin/1")}>
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
    </div>
  );
};

export default AdminTable;
