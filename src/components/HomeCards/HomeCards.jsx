import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import "./HomeCards.css";
import GroupsIcon from '@mui/icons-material/Groups';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import { useNavigate } from "react-router-dom";

const HomeCards = () => {
  const navigate = useNavigate()
  return (
    <div className="homeCards">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Card
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent:"space-around",
              alignItems: "center",
              padding: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              "&:hover": {
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                cursor: "pointer",
              },
            }}
            onClick={()=>navigate("/driversmanagement")}
          >
            <div style={{height:"75px",width:"75px",background:"orange",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <GroupsIcon sx={{fontSize:"40px",color:"#FFFFFF",fontWeight:"bold"}}/>
            </div>
            <div >
            <Typography variant="h2" sx={{ fontSize: {xs:"18px",md:"22px"}, color: "gray" }}>
              Total Drivers
            </Typography>
            <div className="card-content">
              <div className="card-content-top">
                <Typography
                  variant="h2"
                  sx={{ color: "orange", fontSize: "24px", fontWeight: "bold" }}
                >
                  25+
                </Typography>
              </div>
              <div className="card-content-bottom">
                <div className="top">
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "18px", color:"gray",fontWeight: "bold" }}
                  >
                    16
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "green", fontSize: "12px", fontWeight: "700" }}
                  >
                    Active
                  </Typography>
                </div>
                <div className="bottom">
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "18px",color:"gray", fontWeight: "bold" }}
                  >
                    8
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "red", fontSize: "12px", fontWeight: "700" }}
                  >
                    InActive
                  </Typography>
                </div>
              </div>
            </div>
            </div>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Card
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent:"space-around",
              alignItems: "center",
              padding: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              "&:hover": {
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                cursor: "pointer",
              },
            }}
            onClick={()=>navigate("/vehiclemanagement")}
          >
            <div style={{height:"75px",width:"75px",background:"orange",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <FireTruckIcon sx={{fontSize:"40px",color:"#FFFFFF",fontWeight:"bold"}}/>
            </div>
            <div >
            <Typography variant="h2" sx={{ fontSize: {xs:"18px",md:"22px"}, color: "gray" }}>
              Total Vehicles
            </Typography>
            <div className="card-content">
              <div className="card-content-top">
                <Typography
                  variant="h2"
                  sx={{ color: "orange", fontSize: "24px", fontWeight: "bold" }}
                >
                  23+
                </Typography>
              </div>
              <div className="card-content-bottom">
                <div className="top">
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "18px",color:"gray", fontWeight: "bold" }}
                  >
                    14
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "green", fontSize: "12px", fontWeight: "700" }}
                  >
                    Active
                  </Typography>
                </div>
                <div className="bottom">
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "18px",color:"gray", fontWeight: "bold" }}
                  >
                    9
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "red", fontSize: "12px", fontWeight: "700" }}
                  >
                    InActive
                  </Typography>
                </div>
              </div>
            </div>
            </div>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          
        </Grid>

        
       
      </Grid>
    </div>
  );
};

export default HomeCards;
