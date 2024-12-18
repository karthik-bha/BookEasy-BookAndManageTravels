import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
const AdminLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const authenticateAdmin = async (e) => {
    e.preventDefault();
    const formData = {
      userId: "Admin456",
      password: "pass123",
    };

    try {
      setLoading(true);
    
        const resp = await axios.post(
          "https://bookeasy-backend.onrender.com/admin/authenticate",
          formData
        );
        console.log("Authentication Successful", resp.data);
      
        navigate("/admin/dashboard");
          setLoading(false);

    } catch (err) {
      setLoading(false);
      console.error("Error during authentication:", err);
    }
  };

  return (
    <div className="h-screen max-w-[1300px] mx-auto px-4 flex flex-col">
    
        {loading ? (
          <div className="h-auto m-auto justify-center">
          <Loader />
          <h1 className="font-semibold">Please wait while we log you in...</h1>
          </div>
        ) : (
          <>
              <div className="justify-center mx-auto my-auto h-auto flex text-center flex-col  bg-white rounded-lg p-10 ">
            <div className="p-4">
              <h1 className=" text-4xl ">Login to the Admin Panel</h1>
            </div>
            <form
              className="p-4  max-w-[300px] mx-auto"
              onSubmit={authenticateAdmin}
            >
              <div className="flex justify-between gap-5 my-5">
                <label className="font-semibold">UserId</label>
                <input
                  disabled
                  className="border border-black rounded-md mx-5"
                  type="text"
                  value="Admin456"
                ></input>
              </div>
              <div className="flex justify-between gap-5 my-5">
                <label className="font-semibold">Password</label>
                <input
                  disabled
                  className="border border-black rounded-md"
                  type="password"
                  value="pass123"
                ></input>
              </div>
              <div className="flex mx-auto justify-center my-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-300 to-purple-400 px-4 py-2 rounded-md hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-500 hover:text-white"
                >
                  Login
                </button>
              </div>
            </form>
                </div>
          </>
        )}
      </div>

  );
};

export default AdminLogin;
