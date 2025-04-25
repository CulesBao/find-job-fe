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
import { getAllProvinces } from "@/services/addressService";
import { LocationOnOutlined, PersonOutlineOutlined } from "@mui/icons-material";

const FilterEmployerHeader = ({ filters, onFilterChange, onApply }) => {
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onApply(0);
      }}
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
          label="Employer Name"
          placeholder="Employer Name..."
          variant="standard"
          value={filters.name}
          onChange={handleChange("name")}
          fullWidth
          InputProps={{
            startAdornment: (
              <Box sx={{ mr: 1.5, display: "flex", alignItems: "center" }}>
                <PersonOutlineOutlined color="action" />
              </Box>
            ),
          }}
        />

        <FormControl
          fullWidth
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          <InputLabel id="province-select-label">Province</InputLabel>
          <Select
            labelId="province-select-label"
            id="province-select"
            value={filters.province_code}
            onChange={handleChange("province_code")}
            startAdornment={
              <Box sx={{ mr: 1.5, display: "flex", alignItems: "center" }}>
                <LocationOnOutlined color="action" />
              </Box>
            }
            sx={{
              pl: 1,
            }}
          >
            <MenuItem value="">All Provinces</MenuItem>
            {provinceList.map((p) => (
              <MenuItem key={p.code} value={p.code}>
                {p.full_name_en}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          sx={{
            height: { xs: "48px", md: "56px" },
            fontSize: "0.9rem",
            fontWeight: "bold",
            bgcolor: "#1976d2",
            "&:hover": { bgcolor: "#1565c0" },
            minWidth: "160px",
          }}
        >
          Find Employer
        </Button>
      </Stack>
    </form>
  );
};

export default FilterEmployerHeader;
