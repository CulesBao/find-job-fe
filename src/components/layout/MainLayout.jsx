import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SidebarCandidate from "./SidebarCadidate";
import SidebarEmployer from "./SidebarEmployer";

export default function MainLayout({ children }) {
  const location = useLocation();

  const hideNavbarPaths = [
    "/auth",
    "/candidate/set-up",
    "/employer/set-up",
  ];

  const shouldHideNavbar = hideNavbarPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  const isCandidatePage = location.pathname.startsWith("/candidate/") &&
                          !location.pathname.includes("set-up");

  const isEmployerPage = location.pathname.startsWith("/employer/") &&
                          !location.pathname.includes("set-up");

  const hasSidebar = isCandidatePage || isEmployerPage;

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <div className="flex">
  {isCandidatePage && <SidebarCandidate />}
  {isEmployerPage && <SidebarEmployer />}
  <main className={`p-4 ${hasSidebar ? "" : ""} flex-1`}>
    {children}
  </main>
</div>

    </>
  );
}
