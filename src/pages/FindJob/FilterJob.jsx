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
    province: "", 
    jobType: "",
    education: "",
    salaryType: "",
  });
  const [provinceList, setProvinceList] = useState([]);
  
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const provincesResponse = await getAllProvinces();
        setProvinceList(provincesResponse.data);
      } catch (error) {
        console.error("Failed to fetch provinces:", error);
      }
    };
    fetchProvinces();
    return () => {
      setProvinceList([]);
    };
  }, []);
  
  const handleChange = (key) => (e) => {
    setFilters((prev) => ({ ...prev, [key]: e.target.value }));
  };
  
  const handleApply = (event) => {
    if (event) event.preventDefault();
    console.log("Applied filters:", filters);
  };

  const EnhancedSelect = ({ label, value, onChange, options, icon, id }) => {
    return (
      <FormControl 
        fullWidth 
        sx={{ 
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
          "& .MuiInputLabel-root, & .MuiSelect-select": { cursor: "pointer" }
        }}
      >
        <div 
          onClick={() => {
            const selectElement = document.getElementById(id);
            if (selectElement) selectElement.click();
          }}
          style={{ cursor: "pointer", width: "100%" }}
        >
          <InputLabel 
            id={`${id}-label`}
          >
            {label}
          </InputLabel>
        </div>
        <Select
          labelId={`${id}-label`}
          id={id}
          value={value}
          onChange={onChange}
          label={label}
          startAdornment={icon}
        >
          {options}
        </Select>
      </FormControl>
    );
  };

  return (
    <div>
      <form onSubmit={handleApply}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
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
            sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" }}}
          />
          
          <EnhancedSelect
            id="province-select"
            label="Province"
            value={filters.province}
            onChange={handleChange("province")}
            icon={<LocationOnOutlined color="action" />}
            options={provinceList.map((p) => (
              <MenuItem key={p.code} value={p.code}>
                {p.full_name_en}
              </MenuItem>
            ))}
          />
          
          <EnhancedSelect
            id="jobType-select"
            label="Job Type"
            value={filters.jobType}
            onChange={handleChange("jobType")}
            icon={<WorkOutline color="action" sx={{ mr: 1 }} />}
            options={Object.values(JobType).map((opt) => (
              <MenuItem key={opt.upperCaseName} value={opt.upperCaseName}>
                {opt.name}
              </MenuItem>
            ))}
          />
          
          <EnhancedSelect
            id="education-select"
            label="Education"
            value={filters.education}
            onChange={handleChange("education")}
            icon={<SchoolOutlined color="action" sx={{ mr: 1 }} />}
            options={Object.values(Education).map((opt) => (
              <MenuItem key={opt.upperCaseName} value={opt.upperCaseName}>
                {opt.name}
              </MenuItem>
            ))}
          />
          
          <EnhancedSelect
            id="salaryType-select"
            label="Salary Type"
            value={filters.salaryType}
            onChange={handleChange("salaryType")}
            icon={<AttachMoneyOutlined color="action" sx={{ mr: 1 }} />}
            options={Object.values(SalaryType).map((opt) => (
              <MenuItem key={opt.upperCaseName} value={opt.upperCaseName}>
                {opt.name}
              </MenuItem>
            ))}
          />
          
          <Button
            type="submit"
            variant="contained"
            sx={{
              height: { xs: "48px", md: "56px" },
              fontSize: "0.9rem",
              fontWeight: "bold",
              bgcolor: "#1976d2",
              "&:hover": {
                bgcolor: "#1565c0",
              },
              minWidth: "120px",
            }}
          >
            Find Job
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default FilterJob;