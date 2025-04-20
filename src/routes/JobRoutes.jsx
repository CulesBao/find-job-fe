import MainLayout from "@/components/layout/MainLayout";
import ViewDetailJob from "@/pages/DetailJob/ViewDetailJob";
import FindJobPage from "@/pages/FindJob/FindJobPage";
import { Route, Routes } from "react-router-dom";

export function JobRoutes() {
  const jobRoutes = [
    { path: "details/:jobId", element: <ViewDetailJob /> },
    {
      path: "/",
      element: <FindJobPage />,
    },
  ];

  return (
    <Routes>
      {jobRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<MainLayout showSidebar={false}>{element}</MainLayout>}
        />
      ))}
    </Routes>
  );
}
