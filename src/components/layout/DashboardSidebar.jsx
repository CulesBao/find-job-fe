import { useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SaveIcon from "@mui/icons-material/Save";
import { useAuth } from "@/hooks/useAuth";

const DashboardSidebar = () => {
  const [active, setActive] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const basePath = "/dashboard";

  const menu = useMemo(() => {
    const candidateMenu = [
      {
        name: "Applied Jobs",
        icon: <WorkIcon fontSize="small" />,
        path: `${basePath}/applied-jobs`,
      },
      {
        name: "Saved Employers",
        icon: <FavoriteIcon fontSize="small" />,
        path: `${basePath}/saved-employers`,
      },
      {
        name: "Settings",
        icon: <SettingsIcon fontSize="small" />,
        path: `${basePath}/settings/profile`,
      },
    ];

    const employerMenu = [
      {
        name: "My Jobs",
        icon: <WorkIcon fontSize="small" />,
        path: `${basePath}/my-job`,
      },
      {
        name: "Post Job",
        icon: <PostAddIcon fontSize="small" />,
        path: `${basePath}/post-job`,
      },
      {
        name: "Saved Candidates",
        icon: <SaveIcon fontSize="small" />,
        path: `${basePath}/saved-candidate`,
      },
      {
        name: "Settings",
        icon: <SettingsIcon fontSize="small" />,
        path: `${basePath}/settings/profile`,
      },
    ];

    return user?.role === "CANDIDATE"
      ? candidateMenu
      : user?.role === "EMPLOYER"
      ? employerMenu
      : [];
  }, [user?.role, basePath]);

  useEffect(() => {
    const currentItem = menu.find((item) => location.pathname === item.path);
    if (currentItem) {
      setActive(currentItem.name);
    }
  }, [location.pathname, menu]);

  return (
    <div className="w-64 bg-white shadow-md p-4 text-sm text-gray-700 h-65 relative left-1/10 top-20">
      <div className="mb-6 font-semiboldw text-gray-500 uppercase text-xs">
        {user?.role === "CANDIDATE"
          ? "Candidate Dashboard"
          : "Employer Dashboard"}
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
    </div>
  );
};

export default DashboardSidebar;
