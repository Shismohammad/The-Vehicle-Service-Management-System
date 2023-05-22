import { Route, Routes, Link, Outlet } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";

import ServRegistration from "./Components/Registration/ServRegistration";
import CustRegistration from "./Components/Registration/CustRegistration";
import VehRegistration from "./Components/Registration/VehRegistration";
import CustomerHomePage from "./Components/HomePages/CustomerHomePage";
import LoginPage from "./Components/LoginPage/LoginPage";
import ViewServiceCenters from "./Components/UseCases/ViewServiceCenters";
import VehDetails from "./Components/UseCases/VehDetails";
import BookAppointment from "./Components/UseCases/BookAppointment";
import Booking from "./Components/UseCases/Booking";
import ServiceProgress from "./Components/UseCases/ServiceProgress";
import ServiceCenterHome from "./Components/HomePages/ServiceCenterHome";
import UpdateServiceProgress from "./Components/UseCases/UpdateServiceProgress";

import ViewServiceRequests from "./Components/UseCases/ViewServiceRequests";

import Home from "./Components/HomePages/Home";
import ForgotPassword from "./Components/UseCases/ForgotPassword";
import Logout from "./Components/Logout";
import ChangePassword from "./Components/UseCases/ChangePassword";
import AdminHome from "./Components/UseCases/AdminHome";
import Rating from "./Components/UseCases/Rating";

function App() {
  const mystate = useSelector((state) => state.logged);

  return (
    <div>
      <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
        <nav
          className="navbar navbar-expand-lg bg-light"
          style={{ boxShadow: "0 10px 10px 0 rgba(0,0,0,.4)" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              VSMS
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contactus">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/viewservicecenters">
                    Service Centers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/userlogin">
                    Login
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SignUp
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/customerregistration">
                        User
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/servicecenterregistration"
                      >
                        Service Center
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <div className="d-flex align-items-center justify-content-center">
          <div
            style={{ textAlign: "center" }}
            className="text-black shadow rounded-3 container-fluid"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="userlogin" element={<LoginPage />}></Route>
              <Route path="forgotpwd" element={<ForgotPassword />} />
              <Route
                path="customerregistration"
                element={<CustRegistration />}
              ></Route>
              <Route
                path="servicecenterregistration"
                element={<ServRegistration />}
              ></Route>
            </Routes>
            <Routes>
              <Route
                path="viewservicecenters"
                element={<ViewServiceCenters />}
              ></Route>
              {/* ---------------------------------- Customer ----------------------------------*/}
              <Route path="customerhome" element={<CustomerHomePage />}>
                <Route path="changePwd" element={<ChangePassword />}></Route>
                <Route
                  path="registervehicle"
                  element={<VehRegistration />}
                ></Route>
                <Route path="vehdetails" element={<VehDetails />}></Route>
                <Route
                  path="bookAppointment"
                  element={<BookAppointment />}
                ></Route>
                <Route
                  path="serviceprogress"
                  element={<ServiceProgress />}
                ></Route>
                <Route path="rate" element={<Rating />}></Route>
                <Route path="viewScLogin" element={<Booking />}></Route>
              </Route>
              {/* ---------------------------------- Customer ----------------------------------*/}

              {/* ---------------------------------- Service Center ----------------------------------*/}
              <Route path="serviceHome" element={<ServiceCenterHome />}>
                <Route
                  path="updateProgress"
                  element={<UpdateServiceProgress />}
                ></Route>

                <Route path="changePwd" element={<ChangePassword />}></Route>
              </Route>
              {/* ---------------------------------- Service Center ----------------------------------*/}
              {/*----------- Admin Home ----------*/}
              <Route path="adminHome" element={<AdminHome />}>
                <Route path="view" element={<ViewServiceRequests />}></Route>
                <Route path="changePwd" element={<ChangePassword />}></Route>
              </Route>
            </Routes>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
export default App;
