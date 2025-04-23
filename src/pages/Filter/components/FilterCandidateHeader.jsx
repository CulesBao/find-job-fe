import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Select,
  FormControl,
  InputLabel,
  InputAdornment,
  Stack,
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

const FilterCandidateHeader = ({ filters, onFilterChange, onApply }) => {
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const res = await getAllProvinces();
        setProvinces(res.data || []);
      } catch (e) {
        console.error("Failed to fetch provinces:", e);
      }
    };

    fetchProvinces();
  }, []);

  const handleChange = (field) => (e) => {
    onFilterChange({ ...filters, [field]: e.target.value });
  };

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onApply(0);
      }}
      sx={{
        bgcolor: "#fff",
        p: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        borderRadius: 2,
        width: "100%",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems="center"
      >
        <TextField
          label="First Name"
          placeholder="Enter first name"
          variant="outlined"
          value={filters.firstName}
          onChange={handleChange("firstName")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlineOutlined color="action" />
              </InputAdornment>
            ),
          }}
          fullWidth
        />

        <TextField
          label="Last Name"
          placeholder="Enter last name"
          variant="outlined"
          value={filters.lastName}
          onChange={handleChange("lastName")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BadgeOutlined color="action" />
              </InputAdornment>
            ),
          }}
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel id="education-label">Education</InputLabel>
          <Select
            labelId="education-label"
            value={filters.education}
            onChange={handleChange("education")}
            startAdornment={
              <InputAdornment position="start">
                <SchoolOutlined color="action" />
              </InputAdornment>
            }
          >
            <MenuItem value="">All Education Levels</MenuItem>
            {Object.values(Education).map((edu) => (
              <MenuItem key={edu.upperCaseName} value={edu.upperCaseName}>
                {edu.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="province-label">Province</InputLabel>
          <Select
            labelId="province-label"
            value={filters.provinceCode}
            onChange={handleChange("provinceCode")}
            startAdornment={
              <InputAdornment position="start">
                <LocationOnOutlined color="action" />
              </InputAdornment>
            }
          >
            <MenuItem value="">All Provinces</MenuItem>
            {provinces.map((prov) => (
              <MenuItem key={prov.code} value={prov.code}>
                {prov.full_name_en}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            value={filters.gender}
            onChange={handleChange("gender")}
            startAdornment={
              <InputAdornment position="start">
                <WcOutlined color="action" />
              </InputAdornment>
            }
          >
            <MenuItem value="">All Genders</MenuItem>
            {Object.values(GenderType).map((g) => (
              <MenuItem key={g.id} value={g.id}>
                {g.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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
          Apply Filters
        </Button>
      </Stack>
    </Box>
  );
};

export default FilterCandidateHeader;
