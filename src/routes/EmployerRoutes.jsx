import MainLayout from "@/components/layout/MainLayout";
import ViewDetailEmployer from "@/pages/DetailEmployer/ViewDetailEmployer";
import FilterEmployerPage from "@/pages/Filter/FilterEmployerPage";
import { Route, Routes } from "react-router-dom";

export default function EmployerRoutes() {
  const candidateRoutes = [
    {
      path: "/",
      element: <FilterEmployerPage />,
    },
    {
      path: "details/:employerId",
      element: <ViewDetailEmployer />,
    },
  ];

  return (
    <Routes>
      {candidateRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<MainLayout showSidebar={false}>{element}</MainLayout>}
        />
      ))}
    </Routes>
  );
}
