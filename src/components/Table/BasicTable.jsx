import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./BasicTable.css";
import { Card, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
import DeleteConfirmationDialog from "../DeleteConfirmation/DeleteConfirmationDialog";
import PersonIcon from '@mui/icons-material/Person';


function createData(name, phonenumber,email, date, status) {
  return { name, phonenumber, email, date, status };
}

const rows = [
  createData("Naresh N", 18908424,"naresh@gmail.com", "30 Aug 2023", "Available"),
  createData("vivek kumar", 18908424,"vivek@gmail.com", "30 Aug 2023", "No Commit"),
  createData("Raju B", 18908424, "raju@gmail.com","30 Aug 2023", "Available"),
  createData("Sangamesh", 18908424, "sangamesh@gmail.com","30 Aug 2023", "Not Available"),
  createData("Mallesh", 18908424,"mallesh@gmail.com", "30 Aug 2023", "Available"),
  createData("Sourabh", 18908424,"sourabh@gmail.com", "30 Aug 2023", "No Commit"),
  createData("Ramu", 18908424, "ramu@gmail.com","30 Aug 2023", "Available"),
  createData("Rajesh", 18908424, "rajesh@gmail.com","30 Aug 2023", "Not Available"),
  createData("Rakesh", 18908424,"rakesh@gmail.com", "30 Aug 2023", "Available"),
  createData("Harish", 18908424,"harish@gmail.com", "30 Aug 2023", "No Commit"),
  createData("Srinu", 18908424, "srinu@gmail.com","30 Aug 2023", "Available"),
];

const makeStyles = (status) => {
  if (status === "Available") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
      width: "100%",
    };
  } else if (status === "Not Available") {
    return {
      background: "#ffcccb",
      color: "red",
    };
  } else {
    return {
      background: "#FFD580",
      color: "orange",
    };
  }
};

const BasicTable = () => {
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
    >
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        className="basicTable"
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Mobile NO</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Status</TableCell>
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
                <TableCell align="left">{row.phonenumber}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyles(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left" sx={{display:"felx",gap:"3px"}}>
                <IconButton aria-label="view" sx={{height:"24px"}}>
                    <VisibilityIcon sx={{fontSize:"20px",color:'#2196f3'}} />
                </IconButton>
                <IconButton aria-label="update" sx={{height:"24px"}} onClick={()=>navigate("/driversmanagement/updatedriver/1")}>
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


      <div className="basicTableCards">
      <Grid container spacing={2}>

        {
          rows.map((row)=>(
            <Grid item xs={12} sm={6}>
          <Card className="card">
            <div className="card-icon">
              <span className="per-icon">
                 <PersonIcon  className="icon"/>
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
                <th>
                <Typography variant="h3" sx={{fontSize:"12px"}} >Status</Typography>
                </th>
                <td>
                <span className="status" style={makeStyles(row.status)}>
                    {row.status}
                  </span>
                </td>
              </tr>
              <tr>
                <th></th><td className="actions">
                <IconButton aria-label="view" sx={{height:"24px"}}>
                    <VisibilityIcon sx={{fontSize:"20px",color:'#2196f3'}} />
                </IconButton>
                <IconButton aria-label="update" sx={{height:"24px"}} onClick={()=>navigate("/driversmanagement/updatedriver/1")}>
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

export default BasicTable;
