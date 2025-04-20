import { Stack, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SocialLinkRow from "../../layout/SocialLinkRow";
import { useNavigate } from "react-router-dom";
import { useProfileContext } from "@/context/ProfileContext";
import { useAuth } from "@/hooks/useAuth";

const AddSocialLinkForm = ({ fn }) => {
  const { updateUser } = useAuth();
  const navigate = useNavigate();

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
    const response = await fn(social_links);
    if (response.status == 200) {
      await updateUser();
    }
    // navigate("/congrats");
  };

  return (
    <Stack spacing={2.5} mb={3}>
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
        onClick={handleSubmit}
        className="w-[50%] h-15 self-center align-middle text-white px-4 py-4 mt-5 mb-5 rounded text-lg font-sans transition-all duration-200"
      >
        Save Changes
      </Button>
    </Stack>
  );
};

export default AddSocialLinkForm;
