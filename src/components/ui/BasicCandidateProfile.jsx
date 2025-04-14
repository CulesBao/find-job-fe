import GenderType from "@/constants/GenderType";
import CalendarToday from "@mui/icons-material/CalendarToday";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import FormatListBulleted from "@mui/icons-material/FormatListBulleted";
import FormatListNumbered from "@mui/icons-material/FormatListNumbered";
import FormatUnderlined from "@mui/icons-material/FormatUnderlined";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import LinkIcon from "@mui/icons-material/Link";
import StrikethroughS from "@mui/icons-material/StrikethroughS";
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const BasicCandidateProfile = () => {
  // Form field data for dropdowns
  const formFields = [
    [{ name: "Date of Birth", type: "date", placeholder: "dd/mm/yyyy" }],
    [
      {
        name: "Gender",
        type: "select",
        value: GenderType,
      },
    ],
    [
      { name: "Education", type: "select" },
      { name: "Experience", type: "select" },
    ],
  ];

  return (
    <Stack spacing={2.25}>
      {formFields.map((row, rowIndex) => (
        <Stack
          key={`row-${rowIndex}`}
          direction="row"
          spacing={2.25}
          width="100%"
        >
          {row.map((field, fieldIndex) => (
            <Stack
              key={`field-${rowIndex}-${fieldIndex}`}
              spacing={1}
              width="483px"
            >
              <Typography
                variant="body2"
                color="text.primary"
                sx={{ mt: "-1px" }}
              >
                {field.name}
              </Typography>

              {field.type === "select" ? (
                <Select
                  displayEmpty
                  value=""
                  renderValue={() => "Select..."}
                  sx={{
                    height: "48px",
                    bgcolor: "background.paper",
                    borderRadius: "5px",
                  }}
                  IconComponent={KeyboardArrowDown}
                >
                  <MenuItem disabled value="">
                    Select...
                  </MenuItem>
                </Select>
              ) : (
                <TextField
                  placeholder={field.placeholder}
                  fullWidth
                  sx={{
                    height: "48px",
                    "& .MuiOutlinedInput-root": {
                      height: "48px",
                      bgcolor: "background.paper",
                      borderRadius: "5px",
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <CalendarToday fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            </Stack>
          ))}
        </Stack>
      ))}

      <Stack spacing={1}>
        <Typography variant="body2" color="text.primary" sx={{ mt: "-1px" }}>
          Biography
        </Typography>
        <Box
          sx={{
            width: "984px",
            height: "248px",
            bgcolor: "background.paper",
            borderRadius: "5px",
            border: 1,
            borderColor: "divider",
            position: "relative",
            p: 2,
          }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ position: "absolute", top: "11px", left: "18px" }}
          >
            Write down your biography here. Let the employers know who you
            are...
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ position: "absolute", bottom: "10px", left: "10px" }}
          ></Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default BasicCandidateProfile;
