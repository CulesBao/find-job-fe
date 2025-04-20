import { Menu, MenuItem } from "@mui/material";
import { Pencil, ReceiptText, Trash } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function DropdownMenu({ anchorEl, onClose, jobId }) {
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleEditClick = () => {
    navigate(`/dashboard/edit-job/${jobId}`);
    onClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MenuItem onClick={handleEditClick}>
        <Pencil size={16} color="gray" style={{ marginRight: 8 }} />
        Edit
      </MenuItem>

      <MenuItem component={Link} to={`/job/details/${jobId}`} onClick={onClose}>
        <ReceiptText size={16} color="gray" style={{ marginRight: 8 }} />
        View Detail
      </MenuItem>

      <MenuItem
        onClick={() => {
          onClose();
          console.log(`Delete job with ID: ${jobId}`);
        }}
        sx={{ color: "red" }}
      >
        <Trash size={16} color="red" style={{ marginRight: 8 }} />
        Delete job
      </MenuItem>
    </Menu>
  );
}

export default DropdownMenu;
