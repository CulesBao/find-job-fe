import Education from "@/constants/Education";
import GenderType from "@/constants/GenderType";
import {
  getAllProvinces,
  getDistrictsByProvinceId,
} from "@/services/addressService";
import { Button, MenuItem, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const BaiscCandidateInfoPage = ({ initialData }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    day_of_birth: "",
    education: "",
    gender: "",
    phone: "",
    bio: "",
    province_code: "",
    district_code: "",
  });

  const [provinceList, setProvinceList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [isEnabledDistrictSelect, setIsEnabledDistrictSelect] = useState(false);

  // Fetch provinces
  useEffect(() => {
    const fetchProvinces = async () => {
      const provincesResponse = await getAllProvinces();
      setProvinceList(provincesResponse.data);
    };

    fetchProvinces();
  }, []);

  // Fetch districts based on province selection
  useEffect(() => {
    const fetchDistricts = async () => {
      if (formData.province_code) {
        const districtsResponse = await getDistrictsByProvinceId(
          formData.province_code
        );
        setDistrictList(districtsResponse.data);

        // If the district_code from formData is no longer valid, reset it
        if (
          districtsResponse.data.every(
            (district) => district.code !== formData.district_code
          )
        ) {
          setFormData((prev) => ({ ...prev, district_code: "" }));
        }

        setIsEnabledDistrictSelect(true);
      } else {
        setDistrictList([]);
        setIsEnabledDistrictSelect(false);
      }
    };

    fetchDistricts();
  }, [formData.province_code]);

  // Set form data when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
  }, [initialData]);

  const handleChange = (key) => (event) => {
    setFormData((prev) => ({ ...prev, [key]: event.target.value }));
  };

  return (
    <Stack spacing={2.25}>
      <Stack direction="row" spacing={2.25} width="100%">
        <TextField
          label="First Name"
          value={formData.first_name}
          onChange={handleChange("first_name")}
          fullWidth
          sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
        />
        <TextField
          label="Last name"
          value={formData.last_name}
          onChange={handleChange("last_name")}
          fullWidth
          sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
        />
      </Stack>

      <Stack direction="row" spacing={2.25} width="100%">
        <TextField
          label="Date of birth"
          type="date"
          value={formData.day_of_birth}
          onChange={handleChange("day_of_birth")}
          fullWidth
          InputLabelProps={{ shrink: true }}
          sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
        />
        <TextField
          select
          label="Education"
          value={formData.education}
          onChange={handleChange("education")}
          fullWidth
          sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
        >
          {Object.values(Education).map((option) => (
            <MenuItem key={option.upperCaseName} value={option.upperCaseName}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </Stack>

      <Stack direction="row" spacing={2.25} width="100%">
        <TextField
          select
          label="Gender"
          value={formData.gender}
          onChange={handleChange("gender")}
          fullWidth
          sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
        >
          {Object.values(GenderType).map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Phone Number"
          value={formData.phone}
          onChange={handleChange("phone")}
          placeholder="+00 000 000 0000"
          fullWidth
          sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
        />
      </Stack>

      <Stack direction={"row"} spacing={2.25} width="100%">
        <TextField
          select
          label="City/Province"
          value={formData.province_code}
          onChange={handleChange("province_code")}
          fullWidth
          sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
        >
          {provinceList.map((option) => (
            <MenuItem key={option.code} value={option.code}>
              {option.full_name_en}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="District"
          value={formData.district_code}
          onChange={handleChange("district_code")}
          fullWidth
          disabled={!isEnabledDistrictSelect}
          sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
        >
          {districtList.map((option) => (
            <MenuItem key={option.code} value={option.code}>
              {option.full_name_en}
            </MenuItem>
          ))}
        </TextField>
      </Stack>

      <TextField
        label="Biography"
        multiline
        rows={10}
        value={formData.bio}
        onChange={handleChange("bio")}
        placeholder="Write down your biography here. Let the employers know who you are..."
        fullWidth
        sx={{
          maxWidth: "984px",
          bgcolor: "background.paper",
          borderRadius: "5px",
        }}
      />
      <Button variant="contained">Save Changes</Button>
    </Stack>
  );
};

export default BaiscCandidateInfoPage;
