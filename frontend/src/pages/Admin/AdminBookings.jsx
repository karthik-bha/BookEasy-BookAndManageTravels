import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import Footer from "../../components/Footer";
import AdminBookingCard from "../../components/Admin/AdminBookingCard";
import axios from "axios";
import Loader from "../../components/Loader";

const AdminBookings = () => {
  const [bookingData, setbookingData] = useState([]);
  const [loading, setLoading] = useState(false);

  // API to get all bookings
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const bookingdata = await axios.get(
          "https://bookeasy-backend.onrender.com/admin/bookings"
        );
        setbookingData(bookingdata.data);
        
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log("Error fetching data");
      }
    };
    fetchData();
  }, []);

  // Function to update bookingData after deletion
  const updateBookingData = (_id) => {
    setbookingData((prevData) =>
      prevData.filter((booking) => booking._id !== _id)
    );
  };

  return (
    <div className="max-w-[1300px] mx-auto px-4">
      <div className="sticky top-0 mx-auto ">
        <AdminNavbar />
      </div>
      <div>
        <div className="text-center">
          <h1 className="text-3xl p-10">All Bookings</h1>
        </div>

        {loading ? (
          <div className="h-screen text-center">
            <Loader />
            <h1 className="font-semibold">
              Retrieving Bookings, Please wait...
            </h1>
          </div>
        ) : (
          <div className="h-screen ">
            <AdminBookingCard
              bookingDetails={bookingData}
              onDelete={updateBookingData}
            />
          </div>
        )}
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default AdminBookings;
