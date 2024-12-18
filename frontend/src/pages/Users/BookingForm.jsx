import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";

const BookingForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, price } = location.state || {}; // Destructure package details
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelerCnt: "",
    splReq: "",
    title: title || "",
    price: price || "",
  });
  const [loader, setLoader] = useState(false);

  const submitData = async (e) => {
    e.preventDefault();

    try {
      setLoader(true);
      
        const response = await axios.post(
          `https://bookeasy-backend.onrender.com/user/packages/bookings/submit`,
          formData
        );

        console.log("Successful Booking");
        const bookingDetails = response.data.data;

        // Navigate to the invoice page, passing the booking details and MongoDB id as state
        navigate(`/packages/${bookingDetails._id}/booking/invoice`, {
          state: { ...bookingDetails },
        });

        setLoader(false); // Hide loader after response is processed
   
    } catch (err) {
      setLoader(false);
      console.error("Error during booking:", err);
    }
  };

  return (
    <div className="h-screen max-w-[1300px] mx-auto px-4">
      <div className="sticky top-0 mx-auto ">
        <Navbar />
      </div>
      <div className="text-center ">
        <h1 className="text-4xl m-4 p-4 font-semibold">Book your trip here!</h1>
      </div>

      {loader ? (
        <div className=" h-screen text-center">
          <Loader />
          <h1 className="font-semibold">
            Confirming your trip, Please wait...
          </h1>
        </div>
      ) : (
        <div className="mx-auto flex justify-center my-15">
          <form
            className="max-w-[1000px] p-4 md:p-12 rounded-lg shadow-md bg-white"
            onSubmit={submitData}
          >
            <div className="flex justify-between my-4">
              <label className="font-semibold">Name</label>
              <input
                type="text"
                className="border border-gray-400 rounded-md mx-4 px-2"
                required
                value={formData.name}
                placeholder="Enter name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="flex justify-between my-4">
              <label className="font-semibold">E-Mail</label>
              <input
                type="email"
                className="border border-gray-400 rounded-md mx-4 px-2"
                required
                value={formData.email}
                placeholder="Enter E-mail"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="flex justify-between my-4">
              <label className="font-semibold">Phone</label>
              <input
                type="phone"
                className="border border-gray-400 rounded-md mx-4 px-2"
                required
                value={formData.phone}
                placeholder="Enter Phone.no"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div className="flex justify-between my-4">
              <label className="font-semibold">Traveler Count</label>
              <input
                type="number"
                className="border border-gray-400 rounded-md mx-4 px-2"
                required
                value={formData.travelerCnt}
                placeholder="Enter no of travelers"
                onChange={(e) =>
                  setFormData({ ...formData, travelerCnt: e.target.value })
                }
              />
            </div>
            <div className="flex justify-between my-4">
              <label className="font-semibold">Special Requests</label>
              <textarea
                className="border border-gray-400 rounded-md mx-4 px-2"
                value={formData.splReq}
                placeholder="Enter Special requests"
                onChange={(e) =>
                  setFormData({ ...formData, splReq: e.target.value })
                }
              ></textarea>
            </div>
            <div className="flex justify-between my-4">
              <label className="font-semibold">Package Name</label>
              <label className="font-bold mx-4">{title}</label>
            </div>
            <div className="flex justify-between my-4">
              <label className="font-semibold">Price</label>
              <label className="font-bold mx-4">{price}</label>
            </div>
            <div className="flex my-4">
              <div className="text-center border border-black flex mx-auto rounded-lg hover:bg-gradient-to-r hover:from-violet-400 hover:to-violet-600 hover:text-white hover:font-bold hover:border-none">
                <button className="px-6 py-4" type="submit">
                  Book your trip!
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      <div className="fixed bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default BookingForm;
