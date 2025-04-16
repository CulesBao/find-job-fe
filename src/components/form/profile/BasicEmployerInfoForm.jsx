import { useState, useEffect } from "react";
import { Box, TextField, Button, Select, MenuItem, Stack } from "@mui/material";
import {
  getAllProvinces,
  getDistrictsByProvinceId,
} from "@/services/addressService";

const BasicEmployerInfoForm = () => {
  const [formData, setFormData] = useState({
    about: "",
    established_in: "",
    name: "",
    vision: "",
    website_url: "",
    province_code: "",
    district_code: "",
    location: "",
  });

  const [provinceList, setProvinceList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [isEnabledDistrictSelect, setIsEnabledDistrictSelect] = useState(false);

  // Fetch provinces
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const provincesResponse = await getAllProvinces();
        setProvinceList(provincesResponse.data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchProvinces();
  }, []);

  // Fetch districts based on province selection
  useEffect(() => {
    const fetchDistricts = async () => {
      if (formData.province_code) {
        try {
          const districtsResponse = await getDistrictsByProvinceId(
            formData.province_code
          );
          setDistrictList(districtsResponse.data);

          // Reset district_code if it's no longer valid
          if (
            districtsResponse.data.every(
              (district) => district.code !== formData.district_code
            )
          ) {
            setFormData((prev) => ({ ...prev, district_code: "" }));
          }

          setIsEnabledDistrictSelect(true);
        } catch (error) {
          console.error("Error fetching districts:", error);
        }
      } else {
        setDistrictList([]);
        setIsEnabledDistrictSelect(false);
      }
    };

    fetchDistricts();
  }, [formData.province_code]);

  const handleChange = (key) => (event) => {
    setFormData((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add API call or form submission logic here
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: "100%", // Chiều rộng tối đa là 100% của trang
        margin: "20px auto", // Thay padding bằng margin
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack spacing={2.25}>
        {/* Name and Established In */}
        <Stack direction="row" spacing={2.25} width="100%">
          <TextField
            label="Name"
            value={formData.name}
            onChange={handleChange("name")}
            required
            inputProps={{ maxLength: 255 }}
            fullWidth
          />
          <TextField
            label="Established In"
            type="date"
            value={formData.established_in}
            onChange={handleChange("established_in")}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Stack>

        {/* Website URL and Location */}
        <Stack direction="row" spacing={2.25} width="100%">
          <TextField
            label="Website URL"
            type="url"
            value={formData.website_url}
            onChange={handleChange("website_url")}
            inputProps={{ maxLength: 255 }}
            fullWidth
          />
          <TextField
            label="Location"
            value={formData.location}
            onChange={handleChange("location")}
            required
            fullWidth
          />
        </Stack>

        {/* Province and District */}
        <Stack direction="row" spacing={2.25} width="100%">
          <Select
            value={formData.province_code}
            onChange={handleChange("province_code")}
            required
            fullWidth
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select Province
            </MenuItem>
            {provinceList.map((province) => (
              <MenuItem key={province.code} value={province.code}>
                {province.full_name_en}
              </MenuItem>
            ))}
          </Select>
          <Select
            value={formData.district_code}
            onChange={handleChange("district_code")}
            required
            fullWidth
            displayEmpty
            disabled={!isEnabledDistrictSelect}
          >
            <MenuItem value="" disabled>
              Select District
            </MenuItem>
            {districtList.map((district) => (
              <MenuItem key={district.code} value={district.code}>
                {district.full_name_en}
              </MenuItem>
            ))}
          </Select>
        </Stack>

        {/* About */}
        <TextField
          label="About"
          value={formData.about}
          onChange={handleChange("about")}
          multiline
          rows={8} // Tăng số dòng để làm cho trường lớn hơn
          inputProps={{ minLength: 50, maxLength: 500 }}
          fullWidth
        />

        {/* Vision */}
        <TextField
          label="Vision"
          value={formData.vision}
          onChange={handleChange("vision")}
          multiline
          rows={8} // Tăng số dòng để làm cho trường lớn hơn
          inputProps={{ minLength: 50, maxLength: 500 }}
          fullWidth
        />
      </Stack>

      {/* Submit Button */}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Save Changes
      </Button>
    </Box>
  );
};

export default BasicEmployerInfoForm;
