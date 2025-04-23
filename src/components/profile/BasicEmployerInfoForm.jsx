import { Box, TextField, Button, Stack } from "@mui/material";
import { useProfileContext } from "@/context/ProfileContext";
import ProvinceSelect from "../select/ProvinceSeletect";
import DistrictSelect from "../select/DistrictSelect";

const BasicEmployerInfoForm = ({ fn }) => {
  const { basicEmployerProfile, setBasicEmployerProfile } = useProfileContext();

  const handleChange = (key) => (event) => {
    setBasicEmployerProfile((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: "100%",
        margin: "20px auto",
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack spacing={2.25}>
        <Stack direction="row" spacing={2.25} width="100%">
          <TextField
            label="Name"
            value={basicEmployerProfile.name}
            onChange={handleChange("name")}
            required
            fullWidth
          />
          <TextField
            label="Established In"
            type="date"
            value={basicEmployerProfile.established_in}
            onChange={handleChange("established_in")}
            fullWidth
          />
        </Stack>

        <Stack direction="row" spacing={2.25} width="100%">
          <TextField
            label="Website URL"
            type="url"
            value={basicEmployerProfile.website_url}
            onChange={handleChange("website_url")}
            fullWidth
          />
        </Stack>

        <Stack direction="row" spacing={2.25} width="100%">
          <ProvinceSelect
            value={basicEmployerProfile.province_code}
            onChange={handleChange("province_code")}
          />
          <DistrictSelect
            provinceCode={basicEmployerProfile.province_code}
            value={basicEmployerProfile.district_code}
            onChange={handleChange("district_code")}
          />
        </Stack>

        <TextField
          label="About"
          value={basicEmployerProfile.about}
          onChange={handleChange("about")}
          multiline
          rows={8}
          inputProps={{ minLength: 50, maxLength: 500 }}
          fullWidth
        />

        <TextField
          label="Vision"
          value={basicEmployerProfile.vision}
          onChange={handleChange("vision")}
          multiline
          rows={8}
          inputProps={{ minLength: 50, maxLength: 500 }}
          fullWidth
        />
      </Stack>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ width: "100%", height: 50, borderRadius: 2 }}
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
