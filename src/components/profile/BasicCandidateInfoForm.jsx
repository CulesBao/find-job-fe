import { useProfileContext } from "@/context/ProfileContext";
import Education from "@/constants/Education";
import GenderType from "@/constants/GenderType";
import { Button, MenuItem, Stack, TextField } from "@mui/material";
import { useAuth } from "@/hooks/useAuth";
import ProvinceSelect from "../select/ProvinceSeletect";
import DistrictSelect from "../select/DistrictSelect";

const BaiscCandidateInfoForm = ({ fn }) => {
  const { updateUser } = useAuth();
  const { basicCandidateProfile, setBasicCandidateProfile } =
    useProfileContext();

  const handleChange = (key) => (event) => {
    setBasicCandidateProfile((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  const onSubmit = async () => {
    const response = await fn(basicCandidateProfile);
    if (response.status === 200) {
      updateUser();
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
            <ProvinceSelect
              value={basicCandidateProfile.province_code}
              onChange={handleChange("province_code")}
            />
            <DistrictSelect
              provinceCode={basicCandidateProfile.province_code}
              value={basicCandidateProfile.district_code}
              onChange={handleChange("district_code")}
            />
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
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%", height: 50, borderRadius: 2 }}
            onClick={onSubmit}
            className="w-[50%] h-15 self-center text-white px-4 py-4 mt-5 mb-5 rounded text-lg font-sans transition-all duration-200"
          >
            Save Changes
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default BaiscCandidateInfoForm;
