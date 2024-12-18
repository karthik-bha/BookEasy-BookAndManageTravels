import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import downArrow from "../../assets/downarrow.svg";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [drowpDown, setdropDown] = useState(false);
  const handleClick = () => {
    setdropDown(!drowpDown);
  };

  return (
    <div>
      <div className="flex justify-between shadow-md rounded-lg overflow-auto bg-white ">
        <div className="mx-4 my-4 py-3">
          <span className="font-semibold text-[20px] md:text-2xl ">
            BookEasy
          </span>
          <span className="font-semibold text-1xl text-red-500 mx-1">
            ADMIN PANEL
          </span>
        </div>
        <div className="flex m-4 text-auto">
          <ul className="flex gap-6 mx-4 p-4">
            <NavLink to="/admin/dashboard/packages/viewOrmodify">
              <li className="hover:font-semibold ">View/Modify Packages</li>
            </NavLink>
            <NavLink to="/admin/dashboard/bookings">
              <li className="hover:font-semibold ">View Bookings</li>
            </NavLink>
          </ul>

          <div className="flex  justify-between py-4 ">
            <label className="font-bold   ">Welcome back, Admin!</label>
            <img
              src={downArrow}
              className="w-[20px] h-[20px] my-1 hover:cursor-pointer hover:group "
              onClick={handleClick}
            />

            {drowpDown && (
              <div className="absolute right-0 mt-6 bg-black text-white p-2 rounded shadow-lg">
                <button
                  onClick={() => {
                    navigate("/");
                    console.log("Logged out");
                  }}
                  className="block w-full text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
