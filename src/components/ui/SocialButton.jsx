import SocialLinkType from "@/constants/SocialType";
import { IconButton } from "@mui/material";

const SocialButton = ({ type, url }) => {
  const social = SocialLinkType[type] || SocialLinkType.default;
  const Icon = social.icon;
  const link = url || social.url;

  return (
    <IconButton
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: "#444",
        "&:hover": {
          color: "#1976d2",
        },
      }}
      size="large"
    >
      <Icon />
    </IconButton>
  );
};
export default SocialButton;
