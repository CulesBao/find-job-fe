import {
    FacebookOutlined,
    Instagram,
    Twitter,
    YouTube,
  } from "@mui/icons-material";
  function SocialMediaProfile() {
    return (
      <div className="fixed bottom-4 left-58 bg-white p-4 rounded-lg ">
        {/* Tiêu đề */}
        <p className="text-gray-700 font-medium mb-2">Follow us</p>
        {/* Danh sách Icon */}
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/cules.21"
            className="p-3 bg-white rounded-lg  "
          >
            <FacebookOutlined></FacebookOutlined>
            <br />
          </a>
          <a
            href="https://www.facebook.com/bestyuuta"
            className="p-3 bg-white rounded-lg   "
          >
            <Twitter></Twitter>
          </a>
          <a
            href="https://www.facebook.com/op.299"
            className="p-3 bg-white rounded-lg gap-2 "
          >
            <Instagram></Instagram>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61553961750255"
            className="p-3 bg-white rounded-lg gap-2 text-center"
          >
            <YouTube></YouTube>
          </a>
        </div>
      </div>
    );
  }
  
  export default SocialMediaProfile;