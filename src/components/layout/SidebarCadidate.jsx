// Sidebar.jsx
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

const SidebarCandidate = () => {
  const [active, setActive] = useState("Job Alert");

  const menu = [
    { name: "Overview", icon: <DashboardIcon fontSize="small" /> },
    { name: "Applied Jobs", icon: <WorkIcon fontSize="small" /> },
    { name: "Favorite Jobs", icon: <FavoriteIcon fontSize="small" /> },
    {
      name: "Job Alert",
      icon: <NotificationsIcon fontSize="small" />,
      badge: 0,
    },
    { name: "Settings", icon: <SettingsIcon fontSize="small" /> },
  ];

  return (
    <div className="w-64 bg-white shadow-md p-4 text-sm text-gray-700 h-screen sticky top-0">
      <div className="mb-6 font-semibold text-gray-500 uppercase text-xs">
        Candidate Dashboard
      </div>
      <ul className="space-y-1">
        {menu.map((item) => (
          <li
            key={item.name}
            onClick={() => setActive(item.name)}
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
    </div>
  );
};

export default SidebarCandidate;
