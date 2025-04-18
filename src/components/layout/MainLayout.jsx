import Navbar from "./Navbar";
import Navigation from "./Navigation";
import SidebarCandidate from "./SidebarCadidate";
import SidebarEmployer from "./SidebarEmployer";
import { useLocation } from "react-router-dom";

export default function MainLayout({ children }) {
  const location = useLocation();

  const isCandidatePage = location.pathname.startsWith("/candidate/") && 
                          !location.pathname.includes("set-up");
  const isEmployerPage = location.pathname.startsWith("/employer/") &&
                          !location.pathname.includes("set-up");

  const hasSidebar = isCandidatePage || isEmployerPage;

  return (
    <>
      <Navbar />
      <Navigation />
      <div className="flex">
        {isCandidatePage && <SidebarCandidate />}
        {isEmployerPage && <SidebarEmployer />}
        <main className={`p-4 ${hasSidebar ? "relative left-50 max-w-[60%]" : ""} flex-1`}>
          {children}
        </main>
      </div>
    </>
  );
}
