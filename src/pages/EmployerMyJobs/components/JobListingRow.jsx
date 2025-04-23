import { Box, Typography, IconButton, Paper } from "@mui/material";
import StatusBadge from "./StatusBadge";
import ActionButton from "./ActionButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DropdownMenu from "./DropDownMenu";
import { useState } from "react";
import { Users } from "lucide-react";

function JobListingRow({ job, isHighlighted }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper
      elevation={isHighlighted ? 3 : 1}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        p: 2,
        mb: 2,
        bgcolor: isHighlighted ? "primary.light" : "background.paper",
      }}
    >
      <Box flex={2} display="flex" flexDirection="column">
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {job.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={0.5}>
          {job.jobType} • {job.dayLeft}
        </Typography>
      </Box>

      <Box flex={1} display="flex" justifyContent="center">
        <StatusBadge status={job.isActive} />
      </Box>

      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={1}
      >
        <Users size={16} color="gray" />
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {job.applied_count} applications
        </Typography>
      </Box>

      <Box
        flex={1.5}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        gap={1}
      >
        <ActionButton label="View Applications" highlighted={isHighlighted} />
        <IconButton
          onClick={handleMenuOpen}
          aria-controls={anchorEl ? "dropdown-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={Boolean(anchorEl)}
        >
          <MoreVertIcon />
        </IconButton>
        <DropdownMenu
          anchorEl={anchorEl}
          onClose={handleMenuClose}
          jobId={job.id}
        />
      </Box>
    </Paper>
  );
}

export default JobListingRow;
