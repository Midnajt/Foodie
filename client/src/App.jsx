import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Error, Landing, Register, Login, DashboardLayout } from "./pages";
import { loader as dashboardLoader } from "./pages/DashboardLayout";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        // children: [],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
