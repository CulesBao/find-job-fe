import { useAuth } from "@/hooks/useAuth";
import Navbar from "./Navbar";
import Navigation from "./Navigation";
import DashboardSidebar from "./DashboardSidebar";

export default function MainLayout({ children, showSidebar = true }) {
  const { user } = useAuth();
  const hasSidebar = (user?.role === "CANDIDATE" || user?.role === "EMPLOYER") && showSidebar ;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Navigation />

      <div className="flex flex-1">
        {hasSidebar && <DashboardSidebar />}

        <main
          className={`p-4 ${
            hasSidebar
              ? "relative left-50 max-w-[60%] min-h-screen"
              : "min-h-screen max-w-[80%] mx-auto"
          } flex-1`}
        >
          {children}
        </main>
      </div>

    </div>
  );
}
