import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const CompanyInfo = () => {
  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  const handleBannerUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBanner(URL.createObjectURL(file));
    }
  };

  const handleRemoveLogo = () => {
    setLogo(null);
  };

  const handleRemoveBanner = () => {
    setBanner(null);
  };

  const handleSaveChanges = () => {
    const newErrors = {};
    if (!companyName) newErrors.companyName = "Please enter the company name.";
    if (!logo) newErrors.logo = "Please upload a logo.";
    if (!banner) newErrors.banner = "Please upload a banner.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Saved changes:", { logo, banner, companyName });
      alert("Company information saved successfully!");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: 4,
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Logo & Banner Image
      </Typography>

      {/* Logo and Banner Upload */}
      <Box sx={{ display: "flex", gap: 3, width: "100%" }}>
        {/* Logo Upload */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Box
            sx={{
              width: "100%",
              height: 200,
              backgroundColor: "#e0e0e0",
              borderRadius: 2,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: errors.logo ? "2px solid red" : "none",
            }}
          >
            {logo ? (
              <img
                src={logo}
                alt="Logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <Typography variant="body2" color="text.secondary">
                Upload Logo
              </Typography>
            )}
          </Box>
          <Typography variant="body2" sx={{ mt: 1, color: "red" }}>
            {errors.logo}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {logo ? (
              <>
                <Button size="small" onClick={handleRemoveLogo}>
                  Remove
                </Button>
                <Button size="small" component="label">
                  Replace
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleLogoUpload}
                  />
                </Button>
              </>
            ) : (
              <Button size="small" component="label">
                Upload
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleLogoUpload}
                />
              </Button>
            )}
          </Typography>
        </Box>

        {/* Banner Upload */}
        <Box sx={{ flex: 2, textAlign: "center" }}>
          <Box
            sx={{
              width: "100%",
              height: 200,
              backgroundColor: "#e0e0e0",
              borderRadius: 2,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: errors.banner ? "2px solid red" : "none",
            }}
          >
            {banner ? (
              <img
                src={banner}
                alt="Banner"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <Typography variant="body2" color="text.secondary">
                Banner Image
              </Typography>
            )}
          </Box>
          <Typography variant="body2" sx={{ mt: 1, color: "red" }}>
            {errors.banner}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {banner ? (
              <>
                <Button size="small" onClick={handleRemoveBanner}>
                  Remove
                </Button>
                <Button size="small" component="label">
                  Replace
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleBannerUpload}
                  />
                </Button>
              </>
            ) : (
              <Button size="small" component="label">
                Upload
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleBannerUpload}
                />
              </Button>
            )}
          </Typography>
        </Box>
      </Box>

      {/* Company Name */}
      <TextField
        label="Company name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        error={!!errors.companyName}
        helperText={errors.companyName}
        fullWidth
      />

      {/* Save Changes Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSaveChanges}
        sx={{ alignSelf: "center" }}
      >
        Save Changes
      </Button>
    </Box>
  );
};

export default CompanyInfo;