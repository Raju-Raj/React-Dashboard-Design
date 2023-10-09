import React from "react";
import "./Sidebar.css";
import {
  Box,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupIcon from "@mui/icons-material/Group";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CarRentalIcon from "@mui/icons-material/CarRental";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { useLocation, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({menuBar,setMenuBar}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const listItemStyle = {
    cursor: "pointer",
    position: "relative",
    marginBottom: "10px",
    "&:hover": {
      background: "#ffffff47",
      borderRadius: "0px 5px 5px 0px",
      "&:before": {
        content: '""',
        position: "absolute",
        left: "0",
        top: "0",
        height: "100%",
        width: "8px",
        background: "orange",
        borderRadius: "0px 5px 5px 0px",
      },
    },
  };

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };
  return (
    <Card variant="outlined" className={menuBar ? "sidebar shown" : "sidebar"}>
      <Box variant="div" className="logo">
        <div>
          <img
            src="https://scontent.fhyd11-2.fna.fbcdn.net/v/t39.30808-6/279050924_354283636736657_3573637647336651546_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RcH41YRMUJEAX9tNoKl&_nc_ht=scontent.fhyd11-2.fna&oh=00_AfDEzhbC7CA_Vw9dl7gDNR53v0mqdZ2DYn1KBZjSquNQlQ&oe=64F2532E"
            alt=""
          />
        </div>
      </Box>

      <List className="list" sx={{ marginTop: "-50%" }}>
        <ListItem
          className={isActive("/home") ? "active listItem" : "listItem"}
          sx={listItemStyle}
          onClick={() => {
            navigate("/home")
            setMenuBar(false)
          }}
        >
          <ListItemIcon sx={{ color: "#FFFFFF", fontSize: 22 }}>
            <span className="icon">
            <DashboardIcon />
            <span className="text">Dasboard</span>
            </span>
          </ListItemIcon>
          <ListItemText className="listItemText" sx={{display:{sm:"none",md:"inline-block"}}}>
            <Typography variant="body2" sx={{ fontSize: "14px" }}>
              Dashboard
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem
          className={isActive("/driversmanagement") ? "active" : ""}
          sx={listItemStyle}
          onClick={() =>{ 
          navigate("/driversmanagement")
          setMenuBar(false)
        }}
        >
          <ListItemIcon sx={{ color: "#FFFFFF", fontSize: 22 }}>
            <span className="icon">
            <GroupIcon />
            <span className="text">Users</span>
            </span>
          </ListItemIcon>
          <ListItemText className="listItemText" sx={{display:{sm:"none",md:"inline-block"}}}>
            <Typography variant="body2" sx={{ fontSize: "14px" }}>
              Drivers
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem
          className={isActive("/vehiclemanagement") ? "active" : ""}
          sx={listItemStyle}
          onClick={() =>{ 
            navigate("/vehiclemanagement")
            setMenuBar(false)
          }}
        >
          <ListItemIcon sx={{ color: "#FFFFFF", fontSize: 22 }}>
            <span className="icon">
            <CarRentalIcon />
            <span className="text">Vehicle</span>
            </span>
          </ListItemIcon>
          <ListItemText className="listItemText" sx={{display:{sm:"none",md:"inline-block"}}}>
            <Typography variant="body2" sx={{ fontSize: "14px" }}>
              Vehicle
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem
          className={isActive("/qualificationmanagement") ? "active" : ""}
          sx={listItemStyle}
          onClick={() =>{
            navigate("/qualificationmanagement")
            setMenuBar(false)
        }}
        >
          <ListItemIcon sx={{ color: "#FFFFFF", fontSize: 22 }}>
            <span className="icon">
            <AnalyticsIcon />
            <span className="text">Qualification</span>
            </span>
          </ListItemIcon>
          <ListItemText className="listItemText" sx={{display:{sm:"none",md:"inline-block"}}}>
            <Typography variant="body2" sx={{ fontSize: "14px" }}>
              Qualification
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem
          className={isActive("/admin") ? "active" : ""}
          sx={listItemStyle}
          onClick={() =>{ 
            navigate("/admin")
            setMenuBar(false)
          }}
        >
          <ListItemIcon sx={{ color: "#FFFFFF", fontSize: 22 }}>
            <span className="icon">
            <AccountCircleIcon />
            <span className="text">Admin</span>
            </span>
          </ListItemIcon>
          <ListItemText className="listItemText" sx={{display:{sm:"none",md:"inline-block"}}}>
            <Typography variant="body2" sx={{ fontSize: "14px" }}>
              Admin Users
            </Typography>
          </ListItemText>
        </ListItem>
      </List>

      <List>
        <ListItem className="logBtn" sx={listItemStyle}>
          <ListItemIcon sx={{ color: "#FFFFFF", fontSize: 22 }}>
            <span className="icon">
            <LogoutIcon />
            <span className="text">Logout</span>
            </span>
          </ListItemIcon>
          <ListItemText className="listItemText" sx={{display:{sm:"none",md:"inline-block"}}}>
            <Typography variant="body2" sx={{ fontSize: "14px" }}>
              Logout
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <IconButton className="closeIcon" onClick={()=>setMenuBar(false)}>
      <CloseIcon sx={{fontWeight:"bold"}}/>
      </IconButton>
      <IconButton className="moblogIcon">
      <LogoutIcon sx={{fontWeight:"bold" , fontSize:"12px"}}/>
      <span>Logout</span>
      </IconButton>
    </Card>
  );
};

export default Sidebar;
