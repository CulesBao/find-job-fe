import { useProfileContext } from "@/components/context/ProfileContext";
import Education from "@/constants/Education";
import GenderType from "@/constants/GenderType";
import {
  getAllProvinces,
  getDistrictsByProvinceId,
} from "@/services/addressService";
import { Button, MenuItem, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const BaiscCandidateInfoForm = ({ fn }) => {
  const { basicCandidateProfile, setBasicCandidateProfile } =
    useProfileContext();

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

  useEffect(() => {
    const fetchDistricts = async () => {
      if (basicCandidateProfile.province_code) {
        const districtsResponse = await getDistrictsByProvinceId(
          basicCandidateProfile.province_code
        );
        setDistrictList(districtsResponse.data);

        // Reset district_code nếu không hợp lệ
        if (
          districtsResponse.data.every(
            (district) => district.code !== basicCandidateProfile.district_code
          )
        ) {
          setBasicCandidateProfile((prev) => ({ ...prev, district_code: "" }));
        }

        setIsEnabledDistrictSelect(true);
      } else {
        setDistrictList([]);
        setBasicCandidateProfile((prev) => ({ ...prev, district_code: "" }));
        setIsEnabledDistrictSelect(false);
      }
    };

    fetchDistricts();
  }, [basicCandidateProfile.province_code]);

  const handleChange = (key) => (event) => {
    setBasicCandidateProfile((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };
  const onSubmit = async () => {
    try {
      await fn(basicCandidateProfile);
      setBasicCandidateProfile((prev) => ({
        ...prev,
        ...basicCandidateProfile,
      }));
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="align-middle flex flex-col gap-4 w-full justify-center">
        <Stack spacing={2.25}>
          <Stack direction="row" spacing={2.25} width="100%">
            <TextField
              label="First Name"
              value={basicCandidateProfile.first_name}
              onChange={handleChange("first_name")}
              fullWidth
              sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
            />
            <TextField
              label="Last name"
              value={basicCandidateProfile.last_name}
              onChange={handleChange("last_name")}
              fullWidth
              sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
            />
          </Stack>

          <Stack direction="row" spacing={2.25} width="100%">
            <TextField
              label="Date of birth"
              type="date"
              value={basicCandidateProfile.date_of_birth}
              onChange={handleChange("date_of_birth")}
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
            />
            <TextField
              select
              label="Education"
              value={basicCandidateProfile.education}
              onChange={handleChange("education")}
              fullWidth
              sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
            >
              {Object.values(Education).map((option) => (
                <MenuItem
                  key={option.upperCaseName}
                  value={option.upperCaseName}
                >
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </Stack>

          <Stack direction="row" spacing={2.25} width="100%">
            <TextField
              select
              label="Gender"
              value={basicCandidateProfile.gender ?? ""}
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
              value={basicCandidateProfile.phone_number}
              onChange={handleChange("phone_number")}
              placeholder="+00 000 000 0000"
              fullWidth
              sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
            />
          </Stack>

          <Stack direction={"row"} spacing={2.25} width="100%">
            <TextField
              select
              label="City/Province"
              value={basicCandidateProfile.province_code || ""}
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
              value={basicCandidateProfile.district_code || ""}
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
            value={basicCandidateProfile.bio}
            onChange={handleChange("bio")}
            placeholder="Write down your biography here. Let the employers know who you are..."
            fullWidth
            sx={{
              bgcolor: "background.paper",
              borderRadius: "5px",
            }}
          />
          <Button variant="contained" onClick={onSubmit}>
            Save Changes
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default BaiscCandidateInfoForm;
