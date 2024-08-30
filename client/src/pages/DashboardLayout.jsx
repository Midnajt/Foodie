import { Outlet, useLoaderData } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import { checkDefaultTheme } from "../App";
import Wrapper from "../assets/wrappers/Dashboard";
import Navbar from "../components/Navbar";
// import SmallSideBar from "../components/SmallSidebar";
// import BigSidebar from "../components/BigSidebar";

export const loader = async () => {
  console.log("dashboard loader");
  const user = { user: "user" };
  return user;
};

const DashboardContext = createContext();

function DashboardLayout() {
  const { user } = useLoaderData();
  const [showSidebar, setShowBar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSidebar = () => {
    console.log("toggleSidebar");
    setShowBar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("logoutUser");
  };

  return (
    <DashboardContext.Provider value={{ user, showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar, logoutUser }}>
      <Wrapper>
        <main className='dashboard'>
          {/* <SmallSideBar /> */}
          {/* <BigSidebar /> */}
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
}

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
