import { useState, useEffect } from "react";
import { Stack, TextField, MenuItem, Button, FormControl, Select, InputLabel } from "@mui/material";
import Education from "@/constants/Education";
import SalaryType from "@/constants/SalaryType";
import JobType from "@/constants/JobType";
import { getAllProvinces } from "@/services/addressService";
import { AttachMoneyOutlined, LocationOnOutlined, SchoolOutlined, WorkOutline } from "@mui/icons-material";

const FilterJob = () => {
  const [filters, setFilters] = useState({
    jobTitle: "",
    province_code: "",
    jobType: "",
    education: "",
    salaryType: "",
  });

  const [provinceList, setProvinceList] = useState([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      const provincesResponse = await getAllProvinces();
      setProvinceList(provincesResponse.data);
    };
    fetchProvinces();
    return () => {
      setProvinceList([]);
    };
  }, []);

  const handleChange = (key) => (e) => {
    setFilters((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleApply = () => {
    console.log("Applied filters:", filters);
    event.preventDefault();
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Find Job</h2>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          bgcolor: "#fff",
          p: 2,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          alignItems: "center",
          width: "100%",
          maxWidth: "100vw",
          boxSizing: "border-box",
        }}
      >
        <TextField
          label="Job Title"
          placeholder="Job Title, Keyword..."
          variant="standard"
          value={filters.jobTitle}
          onChange={handleChange("jobTitle")}
          fullWidth
          sx={
            {"& .MuiOutlinedInput-notchedOutline":{ border: "none"}}
          }
        />

        <FormControl fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}>
          <InputLabel 
            id="province-label"
            sx={{
              transform: filters.province ? undefined : "translate(50px, 18px) scale(1)",
              "&.Mui-focused, &.MuiFormLabel-filled": {
                transform: "translate(14px, -9px) scale(0.75)"
              }
            }}
          >
            Province
          </InputLabel>
          <Select
            labelId="province-label"
            value={filters.province}
            onChange={handleChange("province_code")}
            label="Province"
            startAdornment={
                <LocationOnOutlined color="action" />
            }
          >
            {provinceList.map((p) => (
              <MenuItem key={p.code} value={p.code}>
                {p.full_name_en}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}>
          <InputLabel 
            id="jobType-label"
            sx={{
              transform: filters.jobType ? undefined : "translate(50px, 18px) scale(1)",
              "&.Mui-focused, &.MuiFormLabel-filled": {
                transform: "translate(16px, -9px) scale(0.75)"
              }
            }}
          >
            Job Type
          </InputLabel>
          <Select
            labelId="jobType-label"
            value={filters.jobType}
            onChange={handleChange("jobType")}
            label="Job Type"
            startAdornment={
              <WorkOutline color="action" sx={{ mr: 1 }} />
            }
          >
            {Object.values(JobType).map((opt) => (
              <MenuItem key={opt.upperCaseName} value={opt.upperCaseName}>
                {opt.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}>
          <InputLabel 
            id="education-label"
            sx={{
              transform: filters.education ? undefined : "translate(50px, 18px) scale(1)",
              "&.Mui-focused, &.MuiFormLabel-filled": {
                transform: "translate(14px, -9px) scale(0.75)"
              }
            }}
          >
            Education
          </InputLabel>
          <Select
            labelId="education-label"
            value={filters.education}
            onChange={handleChange("education")}
            label="Education"
            startAdornment={
              <SchoolOutlined color="action" sx={{ mr: 1 }} />
            }
          >
            {Object.values(Education).map((opt) => (
              <MenuItem key={opt.upperCaseName} value={opt.upperCaseName}>
                {opt.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}>
          <InputLabel 
            id="salaryType-label"
            sx={{
              transform: filters.salaryType ? undefined : "translate(50px, 18px) scale(1)",
              "&.Mui-focused, &.MuiFormLabel-filled": {
                transform: "translate(14px, -9px) scale(0.75)"
              }
            }}
          >
            Salary Type
          </InputLabel>
          <Select
            labelId="salaryType-label"
            value={filters.salaryType}
            onChange={handleChange("salaryType")}
            label="Salary Type"
            startAdornment={
              <AttachMoneyOutlined color="action" sx={{ mr: 1 }} />
            }
          >
            {Object.values(SalaryType).map((opt) => (
              <MenuItem key={opt.upperCaseName} value={opt.upperCaseName}>
                {opt.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          sx={{
            height: "56px",
            fontSize: "0.9rem",
            fontWeight: "bold",
            bgcolor: "#1976d2",
            "&:hover": {
              bgcolor: "#1565c0",
            },
            minWidth: "120px",
          }}
          onClick={handleApply}
        >
          Find Job
        </Button>
      </Stack>
    </div>
  );
};

export default FilterJob;
