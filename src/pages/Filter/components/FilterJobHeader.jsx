import { useState, useEffect } from "react";
import {
  Stack,
  TextField,
  MenuItem,
  Button,
  FormControl,
  Select,
  InputLabel,
  Box,
} from "@mui/material";
import Education from "@/constants/Education";
import SalaryType from "@/constants/SalaryType";
import JobType from "@/constants/JobType";
import { getAllProvinces } from "@/services/addressService";
import {
  AttachMoneyOutlined,
  LocationOnOutlined,
  SchoolOutlined,
  WorkOutline,
} from "@mui/icons-material";

const FilterJobHeader = ({ filters, onFilterChange, onApply }) => {
  const [provinceList, setProvinceList] = useState([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const provincesResponse = await getAllProvinces();
        setProvinceList(provincesResponse.data || []);
      } catch (error) {
        console.error("Failed to fetch provinces:", error);
      }
    };

    fetchProvinces();
  }, []);

  const handleChange = (key) => (e) => {
    onFilterChange({ ...filters, [key]: e.target.value });
  };

  const renderSelect = (id, label, value, onChange, options, icon) => (
    <FormControl
      fullWidth
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
    >
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        onChange={onChange}
        startAdornment={
          <Box sx={{ mr: 1.5, display: "flex", alignItems: "center" }}>
            {icon}
          </Box>
        }
        sx={{
          pl: 1,
        }}
      >
        {options}
      </Select>
    </FormControl>
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onApply(0);
      }}
      className="mb-5"
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{
          bgcolor: "#fff",
          p: 2,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TextField
          label="Job Title"
          placeholder="Job Title, Keyword..."
          variant="standard"
          value={filters.title}
          onChange={handleChange("title")}
          fullWidth
        />
        {renderSelect(
          "province-select",
          "Province",
          filters.province_code,
          handleChange("province_code"),
          provinceList.map((p) => (
            <MenuItem key={p.code} value={p.code}>
              {p.full_name_en}
            </MenuItem>
          )),
          <LocationOnOutlined color="action" />
        )}

        {renderSelect(
          "jobType-select",
          "Job Type",
          filters.job_type,
          handleChange("job_type"),
          Object.values(JobType).map((opt) => (
            <MenuItem key={opt.upperCaseName} value={opt.upperCaseName}>
              {opt.name}
            </MenuItem>
          )),
          <WorkOutline color="action" />
        )}

        {renderSelect(
          "education-select",
          "Education",
          filters.education,
          handleChange("education"),
          Object.values(Education).map((opt) => (
            <MenuItem key={opt.upperCaseName} value={opt.upperCaseName}>
              {opt.name}
            </MenuItem>
          )),
          <SchoolOutlined color="action" />
        )}

        {renderSelect(
          "salaryType-select",
          "Salary Type",
          filters.salary_type,
          handleChange("salary_type"),
          Object.values(SalaryType).map((opt) => (
            <MenuItem key={opt.upperCaseName} value={opt.upperCaseName}>
              {opt.name}
            </MenuItem>
          )),
          <AttachMoneyOutlined color="action" />
        )}

        <Button
          type="submit"
          variant="contained"
          sx={{
            height: { xs: "48px", md: "56px" },
            fontSize: "0.9rem",
            fontWeight: "bold",
            bgcolor: "#1976d2",
            "&:hover": { bgcolor: "#1565c0" },
            minWidth: "120px",
          }}
        >
          Find Job
        </Button>
      </Stack>
    </form>
  );
};

export default FilterJobHeader;
