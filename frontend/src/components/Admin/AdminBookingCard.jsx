import React, { useState } from "react";
import axios from "axios";
import Loader from "../Loader";

const AdminBookingCard = ({ bookingDetails, onDelete }) => {
  const [loader, setLoader] = useState(false);

  const deleteBooking = async (_id) => {
    try {
      setLoader(true);
      const resp = await axios.delete(
        `https://bookeasy-backend.onrender.com/admin/bookings/${_id}/delete`
      );
      console.log("Booking deleted successfully:", resp.data);

      setLoader(false);
      
      // Call the parent's update function to remove the deleted booking
      onDelete(_id);
    } catch (err) {
      setLoader(false);
      console.error(err);
    }
  };

  return (
    <div>
      {loader ? (
        <div className="h-full text-center">
          <Loader />
          <h1 className="font-semibold">Deleting Package...</h1>
        </div>
      ) : (
        <div className=" h-full bg-inherit p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {bookingDetails.map((items, index) => (
              <ul
                key={items._id}
                className="overflow-auto shadow-md rounded-xl p-4 bg-white"
              >
                <div className="flex justify-between ">
                  <label className="font-semibold">BookingId: </label>
                  <li>{items._id}</li>
                </div>
                <div className="flex justify-between ">
                  <label className="font-semibold">Name: </label>
                  <li>{items.name}</li>
                </div>
                <div className="flex justify-between ">
                  <label className="font-semibold">E-Mail: </label>
                  <li>{items.email}</li>
                </div>
                <div className="flex justify-between ">
                  <label className="font-semibold">Phone: </label>
                  <li>{items.phone}</li>
                </div>
                <div className="flex justify-between ">
                  <label className="font-semibold">Traveler count:</label>
                  <li>{items.travelerCnt}</li>
                </div>
                <div className="flex justify-between">
                  <label className="font-semibold">Special Requests:</label>
                  <div className="text-right ">
                    <li>{items.splReq}</li>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <label className="font-semibold">Package: </label>
                  <li>{items.title}</li>
                </div>
                <div className="flex justify-between ">
                  <label className="font-semibold">Price: </label>
                  <li>{items.price}</li>
                </div>
                <div className="flex justify-between ">
                  <label className="font-semibold">Total Cost: </label>
                  <li>{items.totalCost}</li>
                </div>
                <div className="text-center">
                  <button
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-400 to-red-600 text-white hover:font-bold hover:bg-gradient-to-r hover:from-red-300 hover:to-red-500"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent any form submission or page reload
                      deleteBooking(items._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBookingCard;
