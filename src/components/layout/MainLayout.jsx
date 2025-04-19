import Footer from "./footer";
import Navbar from "./Navbar";
import Navigation from "./Navigation";
import SidebarCandidate from "./SidebarCadidate";
import SidebarEmployer from "./SidebarEmployer";
import { useLocation } from "react-router-dom";

export default function MainLayout({ children }) {
  const location = useLocation();

  const isCandidatePage = location.pathname.startsWith("/candidate/dashboard/") && 
                          !location.pathname.includes("set-up");
  const isEmployerPage = location.pathname.startsWith("/employer/dashboard/") &&
                          !location.pathname.includes("set-up");

  const hasSidebar = isCandidatePage || isEmployerPage;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Navigation />

      <div className="flex flex-1">
        {isCandidatePage && <SidebarCandidate />}
        {isEmployerPage && <SidebarEmployer />}
        
        <main className={`p-4 ${hasSidebar ? "relative left-50 max-w-[60%] min-h-screen" : "min-h-screen"} flex-1`}>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
