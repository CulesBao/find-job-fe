import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ActionButton({ id, label, highlighted = true }) {
  return (
    <Button
      component={Link}
      to={`/job/${id}`}
      variant={highlighted ? "contained" : "outlined"}
      color={highlighted ? "primary" : "inherit"}
      sx={{ textTransform: "capitalize", textDecoration: "none" }}
    >
      {label}
    </Button>
  );
}
