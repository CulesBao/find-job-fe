import MainLayout from "@/components/layout/MainLayout";
import ViewDetailCandidate from "@/pages/DetailCandidate/ViewDetailCandidate";
import { Route, Routes } from "react-router-dom";

export default function CandidateRoutes() {
  const candidateRoutes = [
    {
      path: "details/:candidateId",
      element: <ViewDetailCandidate />,
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
