import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid, InputAdornment, Alert } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const AccountSetting = () => {
  const [formData, setFormData] = useState({
    location: "",
    phone: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
    setErrors({ ...errors, [field]: "" }); // Xóa lỗi khi người dùng nhập
  };

  const handleSaveChanges = () => {
    const newErrors = {};
    if (!formData.location) newErrors.location = "Please enter your location.";
    if (!formData.phone) newErrors.phone = "Please enter your phone number.";
    if (!formData.email) newErrors.email = "Please enter your email address.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Saved Contact Information:", formData);
      alert("Contact Information saved successfully!");
    }
  };

  const handleChangePassword = () => {
    const newErrors = {};
    if (!formData.currentPassword) newErrors.currentPassword = "Please enter your current password.";
    if (!formData.newPassword) newErrors.newPassword = "Please enter your new password.";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your new password.";
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Password changed successfully!");
      alert("Password changed successfully!");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6, padding: 4 }}>
      {/* Contact Information */}
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
          Contact Information
        </Typography>
        <Grid container spacing={3}>
          {/* Map Location */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Map Location"
              placeholder="Enter your location"
              value={formData.location}
              onChange={handleChange("location")}
              error={!!errors.location}
              helperText={errors.location}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Phone */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone"
              placeholder="+880 Phone number.."
              value={formData.phone}
              onChange={handleChange("phone")}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange("email")}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        {/* Save Changes Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={handleSaveChanges}
        >
          Save Changes
        </Button>
      </Box>

      {/* Change Password */}
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
          Change Password
        </Typography>
        <Grid container spacing={3}>
          {/* Current Password */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Current Password"
              type="password"
              placeholder="Password"
              value={formData.currentPassword}
              onChange={handleChange("currentPassword")}
              error={!!errors.currentPassword}
              helperText={errors.currentPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityOff />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* New Password */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="New Password"
              type="password"
              placeholder="Password"
              value={formData.newPassword}
              onChange={handleChange("newPassword")}
              error={!!errors.newPassword}
              helperText={errors.newPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Visibility />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Confirm Password */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              placeholder="Password"
              value={formData.confirmPassword}
              onChange={handleChange("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Visibility />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        {/* Change Password Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={handleChangePassword}
        >
          Change Password
        </Button>
      </Box>
    </Box>
  );
};

export default AccountSetting;