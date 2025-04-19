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
  Button,
  Collapse,
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
    education: "",
    salaryType: "",
    currencies: "",
  });

  const [provinceList, setProvinceList] = useState([]);
 
  const [showExperienceOptions, setShowExperienceOptions] = useState(true);
  const [showEducationOptions, setShowEducationOptions] = useState(true);
  const [showSalaryTypeOptions, setShowSalaryTypeOptions] = useState(true);
  const [showCurrencyOptions, setShowCurrencyOptions] = useState(true);

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

  const toggleExperienceOptions = () => {
    setShowExperienceOptions((prev) => !prev);
  };

  const toggleEducationOptions = () => {
    setShowEducationOptions((prev) => !prev);
  };

  const toggleSalaryTypeOptions = () => {
    setShowSalaryTypeOptions((prev) => !prev);
  };

  const toggleCurrencyOptions = () => {
    setShowCurrencyOptions((prev) => !prev);
  };

  const handleApply = () => {
    console.log("Applied filters:", filters);
  };

  return (
    <>
      {/* Remove any outer containers that might limit width */}
      <Box
        sx={{
          bgcolor: "#fff",
          p: { xs: 2, sm: 3 },
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          width: "100%",
          minWidth: "100%", 
          maxWidth: "100vw", 
          margin: 0,
          boxSizing: "border-box",
          position: "relative", 
          left: 0,
          right: 0,
        }}
      >
        {/* First row - search filters */}
        <Grid 
          container 
          spacing={30} 
          alignItems="center" 
          sx={{ 
            mb: 3,
            width: "100%",
            mx: 0 // Remove horizontal margin
          }}
        >
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <TextField
              label="Job Title"
              placeholder="Job Title, Keyword..."
              value={filters.jobTitle}
              onChange={handleChange("jobTitle")}
              fullWidth
              sx={{
                "& .MuiInputBase-root": { fontSize: "1rem" },
                "& .MuiInputLabel-root": { fontSize: "1rem" },
                width: "120%"
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
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
                "& .MuiInputBase-root": { fontSize: "1rem", fontWeight: "normal" },
                "& .MuiInputLabel-root": { fontSize: "1rem", fontWeight: "normal" },
                width: "120%"
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
          <Grid item xs={12} sm={6} md={3} lg={3}>
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
                width: "120%"
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
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Button
              variant="contained"
              fullWidth
              sx={{ 
                height: "56px", 
                fontSize: "0.9rem",
                fontWeight: "bold",
                bgcolor: "#1976d2",
                '&:hover': {
                  bgcolor: "#1565c0"
                },
                width: "100%"
              }}
              onClick={handleApply}
            >
              FIND JOB
            </Button>
          </Grid>
        </Grid>

            {/* Second row - filter options */}
            <Grid
      container
      spacing={30} 
      sx={{
        width: "100%", 
        mx: 0, 
      }}
    >
      {/* Experience */}
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <FormControl component="fieldset" sx={{ width: "100%" }}>
          <Typography
            variant="subtitle1"
            sx={{
              mb: 1,
              fontSize: "1.1rem",
              cursor: "pointer",
              fontWeight: "500",
            }}
            onClick={toggleExperienceOptions}
          >
            Experience
          </Typography>
          <Collapse in={showExperienceOptions}>
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
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: "0.9rem" },
                  }}
                />
              ))}
            </RadioGroup>
          </Collapse>
        </FormControl>
      </Grid>

      {/* Education */}
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <FormControl component="fieldset" sx={{ width: "100%" }}>
          <Typography
            variant="subtitle1"
            sx={{
              mb: 1,
              fontSize: "1.1rem",
              cursor: "pointer",
              fontWeight: "500",
            }}
            onClick={toggleEducationOptions}
          >
            Education
          </Typography>
          <Collapse in={showEducationOptions}>
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
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: "0.9rem" },
                  }}
                />
              ))}
            </RadioGroup>
          </Collapse>
        </FormControl>
      </Grid>

      {/* Salary Type */}
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <FormControl component="fieldset" sx={{ width: "100%" }}>
          <Typography
            variant="subtitle1"
            sx={{
              mb: 1,
              fontSize: "1.1rem",
              cursor: "pointer",
              fontWeight: "500",
            }}
            onClick={toggleSalaryTypeOptions}
          >
            Salary Type
          </Typography>
          <Collapse in={showSalaryTypeOptions}>
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
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: "0.9rem" },
                  }}
                />
              ))}
            </RadioGroup>
          </Collapse>
        </FormControl>
      </Grid>

      {/* Currency */}
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <FormControl component="fieldset" sx={{ width: "100%" }}>
          <Typography
            variant="subtitle1"
            sx={{
              mb: 1,
              fontSize: "1.1rem",
              cursor: "pointer",
              fontWeight: "500",
            }}
            onClick={toggleCurrencyOptions}
          >
            Currency
          </Typography>
          <Collapse in={showCurrencyOptions}>
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
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: "0.9rem" },
                  }}
                />
              ))}
            </RadioGroup>
          </Collapse>
        </FormControl>
      </Grid>
    </Grid>
      </Box>
    </>
  );
};
export default FilterPanel;