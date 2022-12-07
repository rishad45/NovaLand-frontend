import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import "./style.scss";
import './app.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import LandingPage from "./pages/Landing Page/LandingPage";
import Login from "./pages/Login Page/Login";
import Signup from "./pages/SignUp Page/Signup";
import MobileNavbar from "./components/MobileBottomNavbar/MobileNavbar";

function App() {
  // const {currentUser} = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext)
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div className="mobile-bottom-navBar">
          <MobileNavbar />
        </div>
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout />
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/explore",
      element: <LandingPage />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
