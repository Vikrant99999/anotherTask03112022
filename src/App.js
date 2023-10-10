import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideMenu from "./components/SideBar/SideMenu";
import TopBar from "./components/SideBar/TopBar";
import BottomBar from "./components/SideBar/BottomBar";

import Dashboard from "./pages/admin/dashboard/Dashboard";
import AllBookings from "./pages/admin/Booking/AllBooking";
import AddBooking from "./pages/admin/Booking/AddBooking";
import EditBooking from "./pages/admin/Booking/EditBooking";
import AllRooms from "./pages/admin/Room/AllRooms";
import RoomType from "./pages/admin/Room/RoomType";
import LandingPage from "./pages/loginSignup/LandingPage";
import LoginSignup from "./pages/loginSignup/LoginSignup";
import Header from "./components/Header";
import GetStarted from "./pages/loginSignup/GetStarted";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* login process routes */}
          <Route exact path={"/"} element={<LandingPage />} />
          <Route
            exact
            path={"/login"}
            element={
              <>
                <Header />
                <LoginSignup />
              </>
            }
          />
          <Route
            exact
            path={"/onboarding"}
            element={
              <>
                <Header />
                <GetStarted />
              </>
            }
          />

          {/* admin dashboard routes */}
          <Route
            path={"/feed"}
            element={
              <>
                <SideMenu />
                <TopBar />
                <Dashboard />
                <BottomBar />
              </>
            }
          />
          <Route
            path={"/allbookings"}
            element={
              <>
                <SideMenu />
                <TopBar />
                <AllBookings />
                <BottomBar />
              </>
            }
          />
          <Route
            path={"/booking/new/add"}
            element={
              <>
                <SideMenu />
                <TopBar />
                <AddBooking />
                <BottomBar />
              </>
            }
          />
          <Route
            path={"/booking/edit"}
            element={
              <>
                <SideMenu />
                <TopBar />
                <EditBooking />
                <BottomBar />
              </>
            }
          />
          <Route
            path={"/allrooms"}
            element={
              <>
                <SideMenu />
                <TopBar />
                <AllRooms />
                <BottomBar />
              </>
            }
          />
          <Route
            path={"/room/type"}
            element={
              <>
                <SideMenu />
                <TopBar />
                <RoomType />
                <BottomBar />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
