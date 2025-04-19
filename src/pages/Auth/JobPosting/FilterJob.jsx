import { useState, useEffect } from "react";
import { Stack, TextField, MenuItem, Button } from "@mui/material";
import Education from "@/constants/Education";
import SalaryType from "@/constants/SalaryType";
import JobType from "@/constants/JobType";
import { getAllProvinces } from "@/services/addressService";

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
        value={filters.jobTitle}
        onChange={handleChange("jobTitle")}
        fullWidth
        sx={{ minWidth: "250px" }}
      />

      <TextField
        select
        label="Province"
        value={filters.province}
        onChange={handleChange("province_code")}
        fullWidth
        sx={{ minWidth: "200px" }}
      >
        {provinceList.map((p) => (
          <MenuItem key={p.code} value={p.code}>
            {p.full_name_en}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Job Type"
        value={filters.jobType}
        onChange={handleChange("jobType")}
        fullWidth
        sx={{ minWidth: "200px" }}
      >
        {Object.values(JobType).map((opt) => (
          <MenuItem key={opt.upperCaseName} value={opt.upperCaseName}>
            {opt.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Education"
        value={filters.education}
        onChange={handleChange("education")}
        fullWidth
        sx={{ minWidth: "200px" }}
      >
        {Object.values(Education).map((opt) => (
          <MenuItem key={opt.upperCaseName} value={opt.upperCaseName}>
            {opt.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Salary Type"
        value={filters.salaryType}
        onChange={handleChange("salaryType")}
        fullWidth
        sx={{ minWidth: "200px" }}
      >
        {Object.values(SalaryType).map((opt) => (
          <MenuItem key={opt.upperCaseName} value={opt.upperCaseName}>
            {opt.name}
          </MenuItem>
        ))}
      </TextField>

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
          width: "200px",
        }}
        onClick={handleApply}
      >
        Find Job
      </Button>
    </Stack>
  );
};

export default FilterJob;
