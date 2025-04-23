import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  TextField,
  MenuItem,
  Button,
  Select,
  FormControl,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import {
  PersonOutlineOutlined,
  BadgeOutlined,
  SchoolOutlined,
  LocationOnOutlined,
  WcOutlined,
} from "@mui/icons-material";
import Education from "@/constants/Education";
import GenderType from "@/constants/GenderType";
import { getAllProvinces } from "@/services/addressService";

const CandidateFindJob = () => {
  const [provinces, setProvinces] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    education: "",
    provinceCode: "",
    gender: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await getAllProvinces();
        setProvinces(res.data || []);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const handleChange = (field) => (e) =>
    setFormData((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = () => {
    console.log("Submitted:", formData);
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
        gap: 1,
      }}
    >
      {/* First Name */}
      <TextField
        placeholder="First Name"
        variant="outlined"
        value={formData.firstName}
        onChange={handleChange("firstName")}
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

      {/* Last Name */}
      <TextField
        placeholder="Last Name"
        variant="outlined"
        value={formData.lastName}
        onChange={handleChange("lastName")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BadgeOutlined color="action" />
            </InputAdornment>
          ),
        }}
        sx={{
          flex: 1,
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
      />

      {/* Education */}
      <FormControl
        variant="outlined"
        sx={{
          flex: 1,
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
      >
        <InputLabel id="education-label">Education</InputLabel>
        <Select
          labelId="education-label"
          label="Education"
          value={formData.education}
          onChange={handleChange("education")}
          displayEmpty
          startAdornment={
            <InputAdornment position="start">
              <SchoolOutlined color="action" />
            </InputAdornment>
          }
          sx={{
            "& .MuiSelect-select": { pl: 1 },
          }}
        >
          <MenuItem value="" disabled>
            Select Education
          </MenuItem>
          {Object.values(Education).map((edu) => (
            <MenuItem key={edu.upperCaseName} value={edu.upperCaseName}>
              {edu.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Province */}
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

      {/* Gender */}
      <FormControl
        variant="outlined"
        sx={{
          flex: 1,
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
      >
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          labelId="gender-label"
          label="Gender"
          value={formData.gender}
          onChange={handleChange("gender")}
          displayEmpty
          startAdornment={
            <InputAdornment position="start">
              <WcOutlined color="action" />
            </InputAdornment>
          }
          sx={{
            "& .MuiSelect-select": { pl: 1 },
          }}
        >
          <MenuItem value="" disabled>
            Select Gender
          </MenuItem>
          {Object.values(GenderType).map((g) => (
            <MenuItem key={g.upperCaseName} value={g.upperCaseName}>
              {g.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Submit */}
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

export default CandidateFindJob;
