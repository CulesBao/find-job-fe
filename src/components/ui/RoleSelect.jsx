import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const RoleSelect = ({ onAccountRoleChange }) => {
  const [accountRole, setAccountRole] = React.useState("CANDIDATE");

  const handleRoleChange = (event) => {
    setAccountRole(event.target.value);
    onAccountRoleChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="account-select-label">Account Type</InputLabel>
        <Select
          labelId="account-select-label"
          id="account-select"
          value={accountRole}
          label="Account Type"
          onChange={handleRoleChange}
        >
          <MenuItem value="CANDIDATE">Candidate</MenuItem>
          <MenuItem value="EMPLOYER">Employer</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default RoleSelect;
