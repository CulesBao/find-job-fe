import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  FormControl,
  TextField,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  Badge,
  Button,
  Checkbox,
} from "@mui/material";
import Education from "@/constants/Education";
import SalaryType from "@/constants/SalaryType";
import Currency from "@/constants/Currency";
import JobType from "@/constants/JobType";
import { getAllProvinces } from "@/services/addressService";

const experienceOptions = [
  "Freshers",
  "1 - 2 Years",
  "2 - 4 Years",
  "4 - 6 Years",
  "6 - 8 Years",
  "8 - 10 Years",
  "10 - 15 Years",
  "15+ Years",
];

const FilterPanel = () => {
  const [filters, setFilters] = useState({
    jobTitle: "",
    province: "",
    jobType: "",
    experience: "",
    education: "", // Change to a single value
    salaryTypes: [],
    currencies: "",
  });

  const [provinceList, setProvinceList] = useState([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      const provincesResponse = await getAllProvinces();
      setProvinceList(provincesResponse.data);
    };
    fetchProvinces();
  }, []);

  const handleChange = (key) => (e) => {
    setFilters((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleApply = () => {
    console.log("Applied filters:", filters);
  };

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        p: 4,
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        maxWidth: 1200,
        mx: "auto",
      }}
    >
      {/* Top row: inputs + small Apply button */}
      <Grid container spacing={2} alignItems="center" sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Job Title"
            placeholder="Job Title, Keyword..."
            value={filters.jobTitle}
            onChange={handleChange("jobTitle")}
            fullWidth
            sx={{
              "& .MuiInputBase-root": { fontSize: "1rem" },
              "& .MuiInputLabel-root": { fontSize: "1rem" },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <TextField
    select
    label="Province"
    value={filters.province}
    onChange={handleChange("province")}
    fullWidth
    SelectProps={{
        displayEmpty: true,
        renderValue: (selected) => {
        if (!selected) return "Province";
        const prov = provinceList.find((p) => p.code === selected);
        return prov ? prov.full_name_en : selected;
        },
    }}
    sx={{
        "& .MuiInputBase-root": { fontSize: "1rem", fontWeight: "normal" }, // Chỉnh font chữ bình thường
        "& .MuiInputLabel-root": { fontSize: "1rem", fontWeight: "normal" }, // Chỉnh font chữ bình thường
    }}
    >
    <MenuItem value="" disabled>
        Province
    </MenuItem>
    {provinceList.map((p) => (
        <MenuItem key={p.code} value={p.code}>
        {p.full_name_en}
        </MenuItem>
    ))}
    </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            label="Job Type"
            value={filters.jobType}
            onChange={handleChange("jobType")}
            fullWidth
            SelectProps={{
              displayEmpty: true,
              renderValue: (selected) => {
                if (!selected) return "Job Type";
                const opt = Object.values(JobType).find(
                  (o) => o.upperCaseName === selected
                );
                return opt ? opt.name : selected;
              },
            }}
            sx={{
              "& .MuiInputBase-root": { fontSize: "1rem" },
              "& .MuiInputLabel-root": { fontSize: "1rem" },
            }}
          >
            <MenuItem value="" disabled>
              Job Type
            </MenuItem>
            {Object.values(JobType).map((opt) => (
              <MenuItem key={opt.upperCaseName} value={opt.upperCaseName}>
                {opt.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            fullWidth
            size="small"
            sx={{ height: "56px", fontSize: "0.9rem" }}
            onClick={handleApply}
          >
            Find Job 
          </Button>
        </Grid>
      </Grid>

      {/* Bottom row: Experience + checkboxes */}
      <Grid container spacing={3}>
        {/* Experience column */}
        <Grid item xs={12} sm={6} md={3}>
          <FormControl component="fieldset" fullWidth>
            <Typography variant="subtitle1" sx={{ mb: 1, fontSize: "1.1rem" }}>
              Experience
            </Typography>
            <RadioGroup
              value={filters.experience}
              onChange={handleChange("experience")}
            >
              {experienceOptions.map((opt) => (
                <FormControlLabel
                  key={opt}
                  value={opt}
                  control={<Radio />}
                  label={opt}
                  sx={{ "& .MuiFormControlLabel-label": { fontSize: "0.9rem" } }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
    {/* Education column */}
    <Grid item xs={12} sm={6} md={3}>
    <FormControl component="fieldset" fullWidth>
        <Typography variant="subtitle1" sx={{ mb: 1, fontSize: "1.1rem" }}>
        Education
        </Typography>
        <RadioGroup
        value={filters.education}
        onChange={handleChange("education")}
        >
        {Object.values(Education).map((opt) => (
            <FormControlLabel
            key={opt.upperCaseName}
            value={opt.upperCaseName}
            control={<Radio />}
            label={opt.name}
            sx={{ "& .MuiFormControlLabel-label": { fontSize: "0.9rem" } }}
            />
        ))}
        </RadioGroup>
    </FormControl>
    </Grid>

            {/* Salary Type column */}
    <Grid item xs={12} sm={6} md={3}>
    <FormControl component="fieldset" fullWidth>
        <Typography variant="subtitle1" sx={{ mb: 1, fontSize: "1.1rem" }}>
        Salary Type
        </Typography>
        <RadioGroup
        value={filters.salaryType}
        onChange={handleChange("salaryType")}
        >
        {Object.values(SalaryType).map((opt) => (
            <FormControlLabel
            key={opt.upperCaseName}
            value={opt.upperCaseName}
            control={<Radio />}
            label={opt.name}
            sx={{ "& .MuiFormControlLabel-label": { fontSize: "0.9rem" } }}
            />
        ))}
        </RadioGroup>
    </FormControl>
    </Grid>

    {/* Currency column */}
    <Grid item xs={12} sm={6} md={3}>
    <FormControl component="fieldset" fullWidth>
        <Typography variant="subtitle1" sx={{ mb: 1, fontSize: "1.1rem" }}>
        Currency
        </Typography>
        <RadioGroup
        value={filters.currencies}
        onChange={handleChange("currencies")}
        >
        {Object.values(Currency).map((opt) => (
            <FormControlLabel
            key={opt.code}
            value={opt.code}
            control={<Radio />}
            label={`${opt.name} (${opt.symbol})`}
            sx={{ "& .MuiFormControlLabel-label": { fontSize: "0.9rem" } }}
            />
        ))}
        </RadioGroup>
    </FormControl>
    </Grid>
      </Grid>
    </Box>
  );
};

export default FilterPanel;