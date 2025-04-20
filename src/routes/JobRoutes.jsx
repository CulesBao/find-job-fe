import MainLayout from "@/components/layout/MainLayout";
import ViewDetailJob from "@/pages/DetailJob/ViewDetailJob";
import { Route, Routes } from "react-router-dom";

export function JobRoutes() {
  const jobRoutes = [{ path: "details/:jobId", element: <ViewDetailJob /> }];

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
