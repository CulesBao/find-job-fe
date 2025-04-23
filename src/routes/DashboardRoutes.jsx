import MainLayout from "@/components/layout/MainLayout";
import DashboardRedirect from "@/hooks/DashboardRedirect";
import RoleBasedRoute from "@/hooks/RoleBasedRoute";
import { useAuth } from "@/hooks/useAuth";
import CandidateAppliedJobs from "@/pages/CandidateDashboard/CandidateAppliedJobs";
import CandidateSavedEmployers from "@/pages/CandidateDashboard/CandidateSavedEmployers";
import EmployerMyJobs from "@/pages/EmployerMyJobs/EmployerMyJobs";
import EmployerPostJob from "@/pages/EmployerDashboard/EmployerPostJob";
import EmployerSavedCandidate from "@/pages/EmployerDashboard/EmployerSavedCandidate";
import { createJob, updateJobById } from "@/services/jobService";
import { Route, Routes } from "react-router-dom";
import SettingRoutes from "./SettingRoutes";

export default function DashboardRoutes() {
  const { user } = useAuth();

  const candidateRoutes = [
    { path: "*", element: <DashboardRedirect /> },
    { path: "applied-jobs", element: <CandidateAppliedJobs /> },
    { path: "settings/*", element: <SettingRoutes /> },
    { path: "saved-employers", element: <CandidateSavedEmployers /> },
  ];

  const employerRoutes = [
    { path: "*", element: <DashboardRedirect /> },
    { path: "settings/*", element: <SettingRoutes /> },
    { path: "my-job", element: <EmployerMyJobs /> },
    { path: "post-job", element: <EmployerPostJob fn={createJob} /> },
    { path: "saved-candidate", element: <EmployerSavedCandidate /> },
    {
      path: "edit-job/:jobId",
      element: <EmployerPostJob fn={updateJobById} />,
    },
  ];

  const routes =
    user?.role === "CANDIDATE"
      ? candidateRoutes
      : user?.role === "EMPLOYER"
      ? employerRoutes
      : [];

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <MainLayout>
              <RoleBasedRoute allowedRoles={[user?.role.toLowerCase()]}>
                {element}
              </RoleBasedRoute>
            </MainLayout>
          }
        />
      ))}
    </Routes>
  );
}
