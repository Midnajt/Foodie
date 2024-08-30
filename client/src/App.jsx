import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Error, Landing, Register, Login, Reset, DashboardLayout, Welcome, Plan, Dishes, AddDish, EditDish, Shopping, Profile } from "./pages";
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
        path: "reset",
        element: <Reset />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <Welcome />,
          },
          {
            path: "plan",
            element: <Plan />,
          },
          {
            path: "dishes",
            element: <Dishes />,
          },
          {
            path: "addDish",
            element: <AddDish />,
          },
          {
            path: "editDish",
            element: <EditDish />,
          },
          {
            path: "shopping",
            element: <Shopping />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
