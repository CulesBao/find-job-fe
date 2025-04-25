import MainLayout from "@/components/layout/MainLayout";
import ApplicationList from "@/pages/ApplicationList/ApplicationList";
import ViewDetailJob from "@/pages/DetailJob/ViewDetailJob";
import FilterJobPage from "@/pages/Filter/FilterJobPage";
import { Route, Routes } from "react-router-dom";

export function JobRoutes() {
  const jobRoutes = [
    { path: "details/:jobId", element: <ViewDetailJob /> },
    {
      path: "/",
      element: <FilterJobPage />,
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
        <Route
        path="/applications/:id"
        element={
          <MainLayout>
            <ApplicationList />
          </MainLayout>
        }
        />
    </Routes>
  );
}
