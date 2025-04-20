import MainLayout from "@/components/layout/MainLayout";
import DashboardRedirect from "@/hooks/DashboardRedirect";
import RoleBasedRoute from "@/hooks/RoleBasedRoute";
import { useAuth } from "@/hooks/useAuth";
import CandidateAppliedJobs from "@/pages/CandidateAppliedJobs/CandidateAppliedJobs";
import CandidateFavoriteJob from "@/pages/CandidateFavoriteJob/CandidateFavoriteJob";
import CandidateJobAlert from "@/pages/CandidateJobAlert/CandidateJobAlert";
import CandidateSettingRoutes from "@/pages/CandidateSetting/CandidateSettingRoutes";
import EmployerMyJobs from "@/pages/EmployerMyJobs/EmployerMyJobs";
import EmployerPostJob from "@/pages/EmployerPostJob/EmployerPostJob";
import EmployerSavedCdd from "@/pages/EmployerSavedCdd/EmployerSavedCdd";
import EmployerSettingRoutes from "@/pages/EmployerSetting/EmployerSettingRoutes";
import { createJob, updateJobById } from "@/services/jobService";
import { Route, Routes } from "react-router-dom";

export default function DashboardRoutes() {
  const { user } = useAuth();

  const candidateRoutes = [
    { path: "*", element: <DashboardRedirect /> },
    { path: "applied-jobs", element: <CandidateAppliedJobs /> },
    { path: "settings/*", element: <CandidateSettingRoutes /> },
    { path: "job-alert", element: <CandidateJobAlert /> },
    { path: "favorite-jobs", element: <CandidateFavoriteJob /> },
  ];

  const employerRoutes = [
    { path: "*", element: <DashboardRedirect /> },
    { path: "settings/*", element: <EmployerSettingRoutes /> },
    { path: "my-job", element: <EmployerMyJobs /> },
    { path: "post-job", element: <EmployerPostJob fn={createJob} /> },
    { path: "saved-candidate", element: <EmployerSavedCdd /> },
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
