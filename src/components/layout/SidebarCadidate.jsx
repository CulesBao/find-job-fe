import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const SidebarCandidate = () => {
  const [active, setActive] = useState("Applied Jobs");
  const navigate = useNavigate();

  const menu = [
    { name: "Applied Jobs", icon: <WorkIcon fontSize="small" />, path: "/candidate/dashboard/applied-jobs" },
    { name: "Favorite Jobs", icon: <FavoriteIcon fontSize="small" />, path: "/candidate/dashboard/favorite-jobs" },
    { name: "Job Alert", icon: <NotificationsIcon fontSize="small" />, path: "/candidate/dashboard/job-alert", badge: 0 },
    { name: "Settings", icon: <SettingsIcon fontSize="small" />, path: "/candidate/dashboard/settings" },
  ];

  useEffect(() => {
      const currentItem = menu.find(item => location.pathname.startsWith(item.path));
      if (currentItem) {
        setActive(currentItem.name);
      }
    }, [location.pathname]);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      navigate("/auth/login", { replace: true });
    }
  };

  return (
    <div className="w-64 bg-white shadow-md p-4 text-sm text-gray-700 h-85 relative left-1/10 top-20">
      <div className="mb-6 font-semibold text-gray-500 uppercase text-xs">
        Candidate Dashboard
      </div>
      <ul className="space-y-1">
        {menu.map((item) => (
          <li
            key={item.name}
            onClick={() => {
              setActive(item.name);
              navigate(item.path);
            }}
            className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all ${
              active === item.name
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center space-x-2">
              <div
                className={`p-1 rounded ${
                  active === item.name ? "bg-blue-200" : ""
                }`}
              >
                {item.icon}
              </div>
              <span>{item.name}</span>
            </div>
            {item.badge !== undefined && (
              <span className="bg-gray-200 text-xs font-semibold px-2 py-0.5 rounded">
                {item.badge.toString().padStart(2, "0")}
              </span>
            )}
          </li>
        ))}
      </ul>
      <div className="border-t mt-4 pt-4">
        <li
          onClick={() => {
            setActive("Log Out");
            handleLogout();
          }}
          className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all ${
            active === "Log Out"
              ? "bg-blue-100 text-blue-600"
              : "hover:bg-gray-100"
          }`}
        >
          <div className="flex items-center space-x-2">
            <div
              className={`p-1 rounded ${
                active === "Log Out" ? "bg-blue-200" : ""
              }`}
            >
              <ExitToAppIcon fontSize="small" />
            </div>
            <span>Log Out</span>
          </div>
        </li>
      </div>
    </div>
  );
};

export default SidebarCandidate;
