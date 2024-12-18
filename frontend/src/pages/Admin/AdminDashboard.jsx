import React from "react";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import Footer from "../../components/Footer";
import AdminCard from "../../components/Admin/AdminCard";

const AdminDashboard = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4">
      <div className="sticky top-0 mx-auto ">
        <AdminNavbar />
      </div>
      <div>
        <AdminCard />
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboard;
