import { Routes, Route } from "react-router-dom";
import Client from "../pages/Client";
import Dashboard from "../pages/Dashboard";
import Employee from "../pages/Employee";
import Profile from "../pages/Employee/Profile";
import Payroll from "../pages/Payroll";
import Project from "../pages/Project";
import Timesheet from "../pages/Timesheet";
import Sidenav from "./Sidenav";
import Topbar from "./Topbar";
import Settings from "../pages/Settings";

const Layout = () => {
  return (
    <>
      <div className="main--container">
        <div className="sidenav">
          <Sidenav />
        </div>
        <div className="main--content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/project" element={<Project />} />
            <Route path="/client" element={<Client />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/employee/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/timesheet" element={<Timesheet />} />
            <Route path="/payroll" element={<Payroll />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Layout;
