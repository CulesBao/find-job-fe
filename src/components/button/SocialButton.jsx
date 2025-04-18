import SocialLinkType from "@/constants/SocialType";
import { IconButton, Tooltip } from "@mui/material";

const SocialButton = ({ type, url }) => {
  const social = SocialLinkType[type] || SocialLinkType.default;
  const Icon = social.icon;
  const link = url || social.url;

  return (
    <Tooltip title={social.name || "Social Link"} arrow>
      <IconButton
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "#444",
          backgroundColor: "#f5f5f5",
          "&:hover": {
            color: "#fff",
            backgroundColor: social.color || "#1976d2",
          },
          width: 48,
          height: 48,
          borderRadius: "50%",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
        size="large"
      >
        <Icon fontSize="inherit" />
      </IconButton>
    </Tooltip>
  );
};

export default SocialButton;
