import AuthPage from "../Auth/AuthPage";
import Constructions from "./Constructions";
export const constructionRoutes = [
  {
    path: "/constructions",
    element: <Constructions />,
    children: [
      {
        path: ":id", // Nested route
        element: <AuthPage />,
      },
    ],
  },
];
