import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminCard = () => {
    const navigate = useNavigate();
    return (
      <div className="flex flex-wrap mx-auto justify-center">
        <div className="text-center   h-screen p-10  ">
          <div class="bg-gradient-to-r from-white via-gray-200 to-gray-400 rounded-xl">
            <h1 className=" text-2xl p-10 h-auto  font-semibold text-black md:p-20 md:text-4xl">
              What would you like to do?
            </h1>

            <div className=" flex flex-col md:flex md:justify-center gap-5 max-w-[500px] mx-auto py-10 px-3 ">
              <button
                className=" bg-gradient-to-r from-violet-400 to-violet-600 px-4 py-2 rounded-lg text-white hover:font-semibold hover:bg-violet-400"
                onClick={() => navigate("/admin/dashboard/bookings")}
              >
                View Bookings
              </button>
              <button
                className=" bg-gradient-to-r from-violet-400 to-violet-600 px-4 py-2 rounded-lg text-white hover:font-semibold hover:bg-violet-400"
                onClick={() =>
                  navigate("/admin/dashboard/packages/viewOrmodify")
                }
              >
                View/Modify Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AdminCard
