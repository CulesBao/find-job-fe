import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import PostAddIcon from "@mui/icons-material/PostAdd";
import WorkIcon from "@mui/icons-material/Work";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const SidebarEmployer = () => {
  const [active, setActive] = useState("Overview");

  const menu = [
    { name: "Overview", icon: <DashboardIcon fontSize="small" /> },
    { name: "Employers Profile", icon: <PersonIcon fontSize="small" /> },
    { name: "Post a Job", icon: <PostAddIcon fontSize="small" /> },
    { name: "My Jobs", icon: <WorkIcon fontSize="small" /> },
    { name: "Saved Candidate", icon: <BookmarkIcon fontSize="small" /> },
    { name: "Plans & Billing", icon: <CreditCardIcon fontSize="small" /> },
    { name: "Founding Info", icon: <PersonOutlineIcon fontSize="small" /> },
    { name: "Settings", icon: <SettingsIcon fontSize="small" /> },
  ];

  return (
    <div className="w-64 bg-white shadow-md p-4 text-sm text-gray-700 h-screen sticky top-0">
      <div className="mb-6 font-semibold text-gray-500 uppercase text-xs">
        Employers Dashboard
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
          </li>
        ))}
      </ul>
      <div className="border-t mt-4 pt-4">
        <li
          onClick={() => setActive("Log-out")}
          className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all ${
            active === "Log-out"
              ? "bg-blue-100 text-blue-600"
              : "hover:bg-gray-100"
          }`}
        >
          <div className="flex items-center space-x-2">
            <div
              className={`p-1 rounded ${
                active === "Log-out" ? "bg-blue-200" : ""
              }`}
            >
              <ExitToAppIcon fontSize="small" />
            </div>
            <span>Log-out</span>
          </div>
        </li>
      </div>
    </div>
  );
};

export default SidebarEmployer;
