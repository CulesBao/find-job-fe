import { useState, useEffect } from "react";
import { Box, TextField, Button, Select, MenuItem, Stack, FormControl, InputLabel } from "@mui/material";
import {
  getAllProvinces,
  getDistrictsByProvinceId,
} from "@/services/addressService";
import { useProfileContext } from "@/context/ProfileContext";

const BasicEmployerInfoForm = ({ fn }) => {
  const { basicEmployerProfile, setBasicEmployerProfile } = useProfileContext();

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
      if (basicEmployerProfile.province_code) {
        try {
          const districtsResponse = await getDistrictsByProvinceId(
            basicEmployerProfile.province_code
          );
          setDistrictList(districtsResponse.data);

          // Reset district_code if it's no longer valid
          if (
            districtsResponse.data.every(
              (district) => district.code !== basicEmployerProfile.district_code
            )
          ) {
            setBasicEmployerProfile((prev) => ({ ...prev, district_code: "" }));
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
  }, [basicEmployerProfile.province_code]);

  const handleChange = (key) => (event) => {
    setBasicEmployerProfile((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", basicEmployerProfile);
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
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack spacing={2.25}>
        {/* Name and Established In */}
        <Stack direction="row" spacing={2.25} width="100%">
          <TextField
            label="Name"
            value={basicEmployerProfile.name}
            onChange={handleChange("name")}
            required
            inputProps={{ maxLength: 255 }}
            fullWidth
          />
          <TextField
            label="Established In"
            type="date"
            value={basicEmployerProfile.established_in}
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
            value={basicEmployerProfile.website_url}
            onChange={handleChange("website_url")}
            inputProps={{ maxLength: 255 }}
            fullWidth
          />
          <TextField
            label="Location"
            value={basicEmployerProfile.location}
            onChange={handleChange("location")}
            required
            fullWidth
          />
        </Stack>

        {/* Province and District */}
        <Stack direction="row" spacing={2.25} width="100%">
          <FormControl fullWidth required>
            <InputLabel id="province-label">City/Province</InputLabel>
            <Select
              labelId="province-label"
              value={basicEmployerProfile.province_code || ""}
              onChange={handleChange("province_code")}
              label="City/Province"
            >
              {provinceList.map((province) => (
                <MenuItem key={province.code} value={province.code}>
                  {province.full_name_en}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth required disabled={!isEnabledDistrictSelect}>
            <InputLabel id="district-label">District</InputLabel>
            <Select
              labelId="district-label"
              value={basicEmployerProfile.district_code || ""}
              onChange={handleChange("district_code")}
              label="District"
            >
              {districtList.map((district) => (
                <MenuItem key={district.code} value={district.code}>
                  {district.full_name_en}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>

        {/* About */}
        <TextField
          label="About"
          value={basicEmployerProfile.about}
          onChange={handleChange("about")}
          multiline
          rows={8} // Tăng số dòng để làm cho trường lớn hơn
          inputProps={{ minLength: 50, maxLength: 500 }}
          fullWidth
        />

        {/* Vision */}
        <TextField
          label="Vision"
          value={basicEmployerProfile.vision}
          onChange={handleChange("vision")}
          multiline
          rows={8} // Tăng số dòng để làm cho trường lớn hơn
          inputProps={{ minLength: 50, maxLength: 500 }}
          fullWidth
        />
      </Stack>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        onClick={async () => {
          try {
            await fn(basicEmployerProfile);
          } catch (error) {
            console.error("Error submitting data:", error);
          }
        }}
      >
        Save Changes
      </Button>
    </Box>
  );
};

export default BasicEmployerInfoForm;
