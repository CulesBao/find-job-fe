import { TextField } from "@mui/material";

export default function Email({
  id = "email",
  label = "Email",
  value,
  onChange,
}) {
  return (
    <TextField
      className="w-full"
      id={id}
      value={value}
      label={label}
      onChange={onChange}
      variant="outlined"
    />
  );
}
