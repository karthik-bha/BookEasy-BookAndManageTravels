import { Routes, Route } from "react-router-dom";
import React from "react"; // Importing React is necessary for JSX
import Home from "./pages/Users/Home";
import UserPackages from "./pages/Users/UserPackages";

import BookingForm from "./pages/Users/BookingForm";
import Invoice from "./pages/Users/Invoice";
import LandingPage from "./pages/LandingPage";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminBookings from "./pages/Admin/AdminBookings";
import AdminPackages from "./pages/Admin/AdminPackages";

function App() {
  return (
    <div className="bg-gradient-to-r from-white via-slate-300 to-slate-500  ">
      <div>
        <Routes>
          {/* user routes  */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/packages" element={<UserPackages />} />
          <Route path="/packages/:id/booking" element={<BookingForm />} />
          <Route path="/packages/:id/booking/invoice" element={<Invoice />} />

          {/* admin routes  */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/dashboard/bookings" element={<AdminBookings />} />
          <Route
            path="/admin/dashboard/packages/viewOrmodify"
            element={<AdminPackages />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
