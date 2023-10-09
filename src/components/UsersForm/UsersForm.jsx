import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  SnackbarContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./UsersForm.css";
import { useNavigate, useParams } from "react-router-dom";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import Snackbar from "@mui/material/Snackbar";

const UsersForm = () => {
  const { id } = useParams();
  const isUpdating = Boolean(id);
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    vehicles: [],
  });

  const [passwordError, setPasswordError] = useState(false);

  const {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    confirmPassword,
    vehicles,
  } = formData;

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "checkbox") {
      const updateVehicles = vehicles.includes(value)
        ? vehicles.filter((val) => val !== value)
        : [...vehicles, value];
      setFormData((prev) => ({ ...prev, vehicles: updateVehicles }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (name === "confirmPassword" && formData.password !== value) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(isUpdating){
      console.log(formData);
    setSnackbarOpen(true);
    setSnackbarMessage("Updated Successfull!");
    setTimeout(() => {
      navigate("/driversmanagement");
    }, 1000);
    }else{
      console.log(formData);
    setSnackbarOpen(true);
    setSnackbarMessage("Added Successfull!");
    setTimeout(() => {
      navigate("/driversmanagement");
    }, 1000);
    }
  };
  return (
    <div className="user-form">
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{margin:"10px"}}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontSize: "24px",
              margin: "10px",
              fontWeight: "600",
              color: "#09c1ce",
            }}
          >
            {isUpdating ? "UPDATE" : "ADD"} DRIVER
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div className="form-group">
              <TextField
                label="First Name"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
              />
              <TextField
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <TextField
                label="Email"
                name="email"
                value={email}
                onChange={handleInputChange}
                type="email"
              />
              <TextField
                label="Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleInputChange}
                type="tel"
              />
            </div>
            <div className="form-group">
              <TextField
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              <TextField
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleInputChange}
                helperText={passwordError ? "Passwords do not match" : ""}
              />
            </div>

            <div>
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ fontWeight: "bold" }}>
                  Vehicles
                </FormLabel>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={vehicles.includes("bus")}
                        onChange={handleInputChange}
                        name="bus"
                        value="bus"
                      />
                    }
                    label={
                      <div
                        style={{
                          display: "flex",
                          gap: "5px",
                          alignItems: "center",
                        }}
                      >
                        <DirectionsBusIcon
                          style={{ color: "gray", fontSize: "20px" }}
                        />
                        <span style={{ fontSize: "16px" }}>Bus</span>
                      </div>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.vehicles.includes("truck")}
                        onChange={handleInputChange}
                        name="truck"
                        value="truck"
                      />
                    }
                    label={
                      <div
                        style={{
                          display: "flex",
                          gap: "5px",
                          alignItems: "center",
                        }}
                      >
                        <FireTruckIcon
                          style={{ color: "gray", fontSize: "20px" }}
                        />
                        <span style={{ fontSize: "16px" }}>Truck</span>
                      </div>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={vehicles.includes("bike")}
                        onChange={handleInputChange}
                        name="bike"
                        value="bike"
                      />
                    }
                    label={
                      <div
                        style={{
                          display: "flex",
                          gap: "5px",
                          alignItems: "center",
                        }}
                      >
                        <TwoWheelerIcon
                          style={{ color: "gray", fontSize: "20px" }}
                        />
                        <span style={{ fontSize: "16px" }}>Bike</span>
                      </div>
                    }
                  />
                </div>
              </FormControl>
            </div>

            {isUpdating ? (
              <Button type="submit" variant="contained" color="primary">
                Update
              </Button>
            ) : (
              <Button type="submit" variant="contained" color="primary">
                Add
              </Button>
            )}
          </form>
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          message={snackbarMessage}
        >
          <SnackbarContent
            message={snackbarMessage}
            className="custom-snackbar"
          />
        </Snackbar>
      </Paper>
    </div>
  );
};

export default UsersForm;
