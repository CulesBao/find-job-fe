import { Stack, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SocialLinkRow from "../../layout/SocialLinkRow";
import { useProfileContext } from "@/components/context/ProfileContext";

const AddSocialLinkForm = ({ fn }) => {
  const { socialLinks, setSocialLinks } = useProfileContext();
  const handleAdd = () => {
    const nextId =
      socialLinks.length > 0 ? socialLinks[socialLinks.length - 1].id + 1 : 1;
    setSocialLinks([...socialLinks, { id: nextId, type: "FACEBOOK", url: "" }]);
  };

  const handleChange = (id, newData) => {
    setSocialLinks((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...newData } : item))
    );
  };

  const handleRemove = (id) => {
    setSocialLinks((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = async () => {
    const social_links = socialLinks.map((item) => {
      const { id, ...rest } = item;
      return rest;
    });
    await fn(social_links);
    setSocialLinks(social_links);
  };

  return (
    <Stack spacing={2.5}>
      {socialLinks.map((item) => (
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
      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        sx={{
          bgcolor: "primary.main",
          height: 44,
          justifyContent: "center",
          "&:hover": {
            bgcolor: "primary.dark",
          },
          textTransform: "none",
        }}
      >
        Save Changes
      </Button>
    </Stack>
  );
};

export default AddSocialLinkForm;
