import { Box } from "@mui/material";
import SocialButton from "../../../components/button/SocialButton";

const normalizeUrl = (url) => {
  if (!/^https?:\/\//i.test(url)) {
    return `https://${url}`;
  }
  return url;
};

const FollowSocialLink = ({ socialLinks }) => {
  return (
    <Box className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-black mb-6">Follow us on:</h3>

      <Box className="flex flex-wrap gap-3">
        {socialLinks.map((link) => (
          <SocialButton
          type={link.type}
          url={normalizeUrl(link.url)}
          key={link.id}
        />
        ))}
      </Box>
    </Box>
  );
};

export default FollowSocialLink;
