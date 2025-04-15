import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import SocialType from "@/constants/SocialType";

const SocialLinkRow = ({ data, onChange, onRemove }) => {
  const selectedPlatform = SocialType[data.type];

  const socialOptions = Object.values(SocialType);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelect = (option) => {
    onChange({ ...data, type: option.type });
    handleClose();
  };

  return (
    <Stack direction="row" spacing={3} alignItems="flex-start">
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          height: 50,
          bgcolor: "#F9FAFB",
          borderRadius: "5px",
          border: "1px solid #F3F4F6",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={5}
          sx={{ ml: 6, mt: 1.125 }}
        >
          <Stack direction="row" alignItems="center" spacing={3}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ cursor: "pointer" }}
              onClick={handleClick}
            >
              {selectedPlatform && (
                <selectedPlatform.icon
                  sx={{ width: 16, height: 16, color: "#1877F2" }}
                />
              )}
              <Typography sx={{ width: 124, color: "#111827" }}>
                {selectedPlatform ? selectedPlatform.name : "Unknown"}
              </Typography>
              <KeyboardArrowDownIcon sx={{ width: 16, height: 16 }} />
            </Stack>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {socialOptions.map((option) => (
                <MenuItem
                  key={option.type}
                  onClick={() => handleSelect(option)}
                  selected={option.type === data.type}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <option.icon sx={{ width: 16, height: 16 }} />
                    <Typography>{option.name}</Typography>
                  </Stack>
                </MenuItem>
              ))}
            </Menu>
          </Stack>

          <Divider orientation="vertical" sx={{ height: 32 }} />

          <TextField
            variant="standard"
            placeholder="Profile link/url..."
            value={data.url}
            onChange={(e) => onChange({ ...data, url: e.target.value })}
            InputProps={{
              disableUnderline: true,
              sx: {
                color: "#9CA3AF",
                "& input::placeholder": {
                  color: "#9CA3AF",
                  opacity: 1,
                },
              },
            }}
          />
        </Stack>
      </Box>

      <IconButton
        onClick={onRemove}
        sx={{
          p: 1.625,
          bgcolor: "#F9FAFB",
          borderRadius: "5px",
        }}
      >
        <CancelIcon sx={{ width: 24, height: 24 }} />
      </IconButton>
    </Stack>
  );
};

export default SocialLinkRow;
