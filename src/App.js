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
import ResetPassword from "./components/Login/ResetPassword";
import ForgotPassword from "./components/Login/ForgotPassword";
import Notifications from "./pages/Notifications/Notifications";
import LoginAdmin from "./pages/Admin/Login/LoginAdmin";
import AdminHome from "./pages/Admin/Home/AdminHome";
import AdminLayout from "./components/Admin Layout/AdminLayout";
import Users from "./pages/Admin/Users/Users";
import Admins from "./pages/Admin/Admins/Admins";
import AllCommunities from "./components/Admin/AllCommunities";
import AllPosts from "./components/Admin/AllPosts";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="/"
            element={<Home />}></Route>
          <Route path="test" element={
            <Test />
          }></Route>
          {/* single profile  */}
          <Route path="profile/:userName" element={
            <SingleCommunity isprofile={true} />
          }>

          </Route>
          {/* communities */}
          <Route path="communities" element={
            <Communities />
          }></Route>
          {/* create community  */}
          <Route path="create-community" element={
            <CreateCommunity />
          }></Route>
          {/* single community page  */}
          <Route path="/singleCommunity" element={
            <SingleCommunity />
          }></Route>
          <Route path="/testing" element={<Profile />}></Route>
          <Route path="/notifications" element={
            <Notifications />
          }></Route>
        </Route>

        <Route path="/chats" element={<ProtectedRoute><LayoutHeader /></ProtectedRoute>}>
          <Route path="/chats"
            element={
              <Chats />
            }>
          </Route>
        </Route>

        <Route path="/login" element={
          <Login />
        }></Route>

        <Route path="/reset-password" element={<ForgotPassword />}></Route>
        <Route exact path="/reset-my-password" element={<ResetPassword />}></Route>
        <Route path="/explore" element={<LandingPage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>


        <Route path="/" element={<AdminLayout />}>
          <Route path="/admin" element={<AdminHome />}></Route>
          <Route path="/admin/users" element={<Users />}></Route>
          <Route path="/admin/admins" element={<Admins />}></Route>
          <Route path="/admin/communities" element={<AllCommunities />}></Route>
          <Route path="/admin/posts" element={<AllPosts />}></Route>
          {/* <Route path="/admin/"></Route> */}
        </Route>
        <Route path="/admin/login" element={<LoginAdmin />}></Route>
        <Route path="/error" element={<h1>404 not found</h1>}></Route>
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
