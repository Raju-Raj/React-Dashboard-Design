import {
  Box,
  Button,
  Paper,
  SnackbarContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./AdminForm.css";
import { useNavigate, useParams } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";

const AdminForm = () => {
  const { id } = useParams(); // Get the "id" parameter from the URL
  const isUpdating = Boolean(id);
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState(false);

  const { firstName, lastName, password, confirmPassword, email } = formData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "confirmPassword" && formData.password !== value) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isUpdating) {
      console.log(formData);
      setSnackbarOpen(true);
      setSnackbarMessage("Updated Successfull!");
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    } else {
      console.log(formData);
      setSnackbarOpen(true);
      setSnackbarMessage("Added Successfull!");
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    }
  };
  return (
    <div className="admin-form">
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
            {isUpdating ? "UPDATE" : "ADD"} ADMIN
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
                fullWidth
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

export default AdminForm;
