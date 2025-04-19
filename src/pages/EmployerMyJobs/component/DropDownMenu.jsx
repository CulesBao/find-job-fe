import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

function DropdownMenu({ anchorEl, onClose, jobId }) {
  const open = Boolean(anchorEl);

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MenuItem component={Link} to={`/jobs/${jobId}`} onClick={onClose}>
        View Detail
      </MenuItem>
    </Menu>
  );
}

export default DropdownMenu;
