import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./QualificationTable.css";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { Card, Grid, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';


function createData(name, phonenumber,vehicles, status) {
  return { name,phonenumber,vehicles, status };
}

const rows = [
  createData("Naresh N",9878768086,["bus","truck"], "Available"),
  createData("vivek kumar",9878768086,["bus","bike"], "No Commit"),
  createData("Raju B",9878768086, ["bike"], "Available"),
  createData("Sangamesh",9878768086,["truck","bike"],  "Not Available"),
  createData("Mallesh",9878768086,["bus","truck","bike"], "Available"),
  createData("Sourabh",9878768086, ["bike"], "No Commit"),
  createData("Ramu", 9878768086,["bus","truck","bike"], "Available"),
  createData("Rajesh",9878768086,["truck","bike"],  "Not Available"),
  createData("Rakesh",9878768086,["bus","truck","bike"], "Available"),
  createData("Harish", 9878768086,["bike"], "No Commit"),
  createData("Mahesh", 9878768086,["bus","truck","bike"], "Available"),
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


const QualificationTable = () => {
  const [stickyNav,setStickyNav] = React.useState("")
  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    windowHeight > 100 ? setStickyNav("sticky-nav") : setStickyNav("");
} 

React.useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
}, []);

    const [selectedVehicles, setSelectedVehicles] = React.useState({
        bus: false,
        truck: false,
        bike: false,
      });
    
      const [showAvailableOnly, setShowAvailableOnly] = React.useState(false);
    
      const handleCheckboxChange = (event) => {
        setSelectedVehicles({
          ...selectedVehicles,
          [event.target.name]: event.target.checked,
        });
      };
    
      const handleAvailableChange = (event) => {
        setShowAvailableOnly(event.target.checked);
      };
    
      const filteredRows = rows.filter((row) => {
        if (showAvailableOnly && row.status !== "Available") {
          return false;
        }
        if (
          selectedVehicles.bus &&
          !row.vehicles.includes("bus")
        ) {
          return false;
        }
        if (
          selectedVehicles.truck &&
          !row.vehicles.includes("truck")
        ) {
          return false;
        }
        if (
          selectedVehicles.bike &&
          !row.vehicles.includes("bike")
        ) {
          return false;
        }
        return true;
      });
  return (
    <div className="qualification-table">
      
      <div  className={`filters ${stickyNav}`}>
        <div>
        <Typography variant="h4" sx={{fontSize:"18px",fontWeight:"bold",color:"gray"}}>Filters :</Typography>
        <div className="checkbox">
        <input
            type="checkbox"
            name="bus"
            checked={selectedVehicles.bus}
            onChange={handleCheckboxChange}
          />
          <label>
          Bus
        </label>
        </div>
        <div className="checkbox">
        <input
            type="checkbox"
            name="truck"
            checked={selectedVehicles.truck}
            onChange={handleCheckboxChange}
          />
           <label>
          Truck
        </label>
        </div>
        <div className="checkbox">
        <input
            type="checkbox"
            name="bike"
            checked={selectedVehicles.bike}
            onChange={handleCheckboxChange}
          />
        <label>
          Bike
        </label>
        </div>
        <div className="checkbox">
        <input
            type="checkbox"
            checked={showAvailableOnly}
            onChange={handleAvailableChange}
          />
        <label>
          Available
        </label>
        </div>
      </div>
      </div>

      <div
      className="Table"
      style={{ marginTop: "10px", overflowY: "scroll", maxHeight: "400px" }}
    >
        
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        className="qualificationTable"
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Mobile No</TableCell>
              <TableCell align="left">Bus</TableCell>
              <TableCell align="left">Truck</TableCell>
              <TableCell align="left">Bike</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">
                    {row.phonenumber}
                </TableCell>
                <TableCell align="left">
                    {row.vehicles.includes("bus") ? <DoneIcon sx={{color:"green",fontSize:"22px"}}/> : <CloseIcon sx={{color:"red",fontSize:"20px"}}/>}
                </TableCell>
                <TableCell align="left">
                   {row.vehicles.includes("truck") ? <DoneIcon sx={{color:"green",fontSize:"22px"}}/> : <CloseIcon sx={{color:"red",fontSize:"20px"}}/>}
                </TableCell>
                <TableCell align="left">
                  {row.vehicles.includes("bike") ? <DoneIcon sx={{color:"green",fontSize:"22px"}}/> : <CloseIcon sx={{color:"red",fontSize:"20px"}}/>}
                </TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyles(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      <div className="qualificationTableCards">
      <Grid container spacing={2}>

        {
          filteredRows.map((row)=>(
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
                <Typography variant="h3" sx={{fontSize:"12px"}}>Bus</Typography>
                </th>
                <td>
                <Typography variant="body2" sx={{fontSize:"12px"}}>
                {row.vehicles.includes("bus") ? <DoneIcon sx={{color:"green",fontSize:"22px"}}/> : <CloseIcon sx={{color:"red",fontSize:"20px"}}/>}
                </Typography>
                </td>
              </tr>
              <tr>
                <th>
                <Typography variant="h3" sx={{fontSize:"12px"}}>Truck</Typography>
                </th>
                <td>
                <Typography variant="body2" sx={{fontSize:"12px"}}>
                {row.vehicles.includes("truck") ? <DoneIcon sx={{color:"green",fontSize:"22px"}}/> : <CloseIcon sx={{color:"red",fontSize:"20px"}}/>}
                </Typography>
                </td>
              </tr>
              <tr>
                <th>
                <Typography variant="h3" sx={{fontSize:"12px"}}>Bike</Typography>
                </th>
                <td>
                <Typography variant="body2" sx={{fontSize:"12px"}}>
                {row.vehicles.includes("bike") ? <DoneIcon sx={{color:"green",fontSize:"22px"}}/> : <CloseIcon sx={{color:"red",fontSize:"20px"}}/>}
                </Typography>
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
              
            </table>
            </div>
          </Card>
        </Grid> 
          ))
        }

      </Grid>
    </div>

    </div>
    </div>
  );
};

export default QualificationTable;
