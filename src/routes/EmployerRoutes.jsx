import MainLayout from "@/components/layout/MainLayout";
import ViewDetailEmployer from "@/pages/DetailEmployer/ViewDetailEmployer";
import { Route, Routes } from "react-router-dom";

export default function EmployerRoutes() {
  const candidateRoutes = [
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
