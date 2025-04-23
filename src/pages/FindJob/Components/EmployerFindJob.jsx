import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  FormControl,
  Select,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import { PersonOutlineOutlined, LocationOnOutlined } from "@mui/icons-material";
import { getAllProvinces } from "@/services/addressService";

const EmployerFindJob = () => {
  const [provinces, setProvinces] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    provinceCode: "",
  });

  // Fetch provinces from API
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const res = await getAllProvinces();
        setProvinces(res.data || []);
      } catch (error) {
        console.error("Failed to fetch provinces:", error);
      }
    };

    fetchProvinces();
  }, []);

  // Handle input changes
  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
  };

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      sx={{
        display: "flex",
        bgcolor: "#fff",
        p: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        borderRadius: 2,
        alignItems: "center",
        width: "100%",
        gap: 2,
      }}
    >
      {/* Name Field */}
      <TextField
        placeholder="Name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange("name")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonOutlineOutlined color="action" />
            </InputAdornment>
          ),
        }}
        sx={{
          flex: 1,
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
      />

      {/* Province Field */}
      <FormControl
        variant="outlined"
        sx={{
          flex: 1,
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
      >
        <InputLabel id="province-label">Province</InputLabel>
        <Select
          labelId="province-label"
          label="Province"
          value={formData.provinceCode}
          onChange={handleChange("provinceCode")}
          displayEmpty
          startAdornment={
            <InputAdornment position="start">
              <LocationOnOutlined color="action" />
            </InputAdornment>
          }
          sx={{
            "& .MuiSelect-select": { pl: 1 },
          }}
        >
          <MenuItem value="" disabled>
            Select Province
          </MenuItem>
          {provinces.map((prov) => (
            <MenuItem key={prov.code} value={prov.code}>
              {prov.full_name_en}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        sx={{
          height: "56px",
          px: 3,
          whiteSpace: "nowrap",
          textTransform: "none",
        }}
      >
        Find Job 
      </Button>
    </Box>
  );
};

export default EmployerFindJob;