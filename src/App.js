import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages/home/Home";
import './app.scss'
import LandingPage from "./pages/Landing Page/LandingPage";
import Login from "./pages/Login Page/Login";
import Signup from "./pages/SignUp Page/Signup";
import Test from "./components/test/Test";
import ProtectedRoute from "./components/AuthComponents/ProtectedRoute";
import PublicRoute from "./components/AuthComponents/PublicRoute";
import Layout from "./components/Layout/Layout";
import Profile from "./pages/Profile/Profile";
import Communities from "./pages/Communities/Communities";
import CreateCommunity from "./pages/CreateCommunity/CreateCommunity";
import SingleCommunity from "./pages/SingleCommunity/SingleCommunity";
import Chats from "./pages/Chats/Chats";
import LayoutHeader from "./components/LayoutHeader/LayoutHeader";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/"
            element={
              <ProtectedRoute><Home /></ProtectedRoute>
            }></Route>
          <Route path="test" element={
            <ProtectedRoute><Test /></ProtectedRoute>
          }></Route>
          {/* single profile  */}
          <Route path="profile" element={<Profile />}></Route>
          {/* communities */}
          <Route path="communities" element={
            <ProtectedRoute><Communities /></ProtectedRoute>
          }></Route>
          {/* create community  */}
          <Route path="create-community" element={
            <ProtectedRoute><CreateCommunity /></ProtectedRoute>
          }></Route>
          {/* single community page  */}
          <Route path="/singleCommunity" element={
            <ProtectedRoute><SingleCommunity /></ProtectedRoute>
          }></Route>

        </Route>
        <Route path="/login" element={
          <Login />
        }></Route>
        <Route path="/explore" element={<LandingPage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<LayoutHeader />}>
          <Route path="/chats"
                element={<Chats/>}> 
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
