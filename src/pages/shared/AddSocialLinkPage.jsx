import { useState } from "react";
import { Stack, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SocialLinkRow from "../../components/layout/SocialLinkRow";

const AddSocialLink = ({ data }) => {
  const [socials, setSocials] = useState(data || []);
  const handleAdd = () => {
    const nextId = socials.length > 0 ? socials[socials.length - 1].id + 1 : 1;
    setSocials([...socials, { id: nextId, type: "FACEBOOK", url: "" }]);
  };

  const handleChange = (id, newData) => {
    setSocials((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...newData } : item))
    );
  };

  const handleRemove = (id) => {
    setSocials((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Stack spacing={2.5}>
      {socials.map((item) => (
        <SocialLinkRow
          key={item.id}
          data={item}
          onChange={(newData) => handleChange(item.id, newData)}
          onRemove={() => handleRemove(item.id)}
        />
      ))}

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        fullWidth
        onClick={handleAdd}
        sx={{
          bgcolor: "grey.100",
          color: "text.primary",
          height: 44,
          justifyContent: "center",
          "&:hover": {
            bgcolor: "grey.200",
          },
          textTransform: "none",
        }}
      >
        Add New Social Link
      </Button>
    </Stack>
  );
};

export default AddSocialLink;
