import React, { useState } from "react";
import axios from "axios";
import AddPackagesPopUp from "./AddPackagesPopUp";

const AdminPackageCard = ({ packageData, setPkgData, setLoadingDelete }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [packageToUpdate, setPackageToUpdate] = useState(null);

  // Delete package
  const deletePackage = async (id) => {
    try {
      setLoadingDelete(true); // Show loader while deleting
      await axios.delete(`https://bookeasy-backend.onrender.com/admin/packages/${id}/delete`);

      // Removing the deleted package from the packageData array
      setPkgData((prevData) => prevData.filter((item) => item._id !== id));
      setLoadingDelete(false); // Hide loader after deletion
      console.log("Package deleted successfully");
    } catch (err) {
      console.error("Error deleting package:", err);
      setLoadingDelete(false); // Hide loader in case of error
    }
  };

  const openUpdateForm = (packageToUpdate) => {
    setPackageToUpdate(packageToUpdate);
    setShowPopup(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4">
        {packageData.map((item) => (
          <div
            key={item._id}
            className="border rounded-lg shadow-lg flex flex-col bg-white transition-all duration-300 hover:shadow-xl"
          >
            <div className="p-4 flex-1 flex flex-col text-center overflow-hidden">
              <div className="flex justify-between gap-2">
                <label className="font-semibold">PackageId</label>
                <span>{item._id}</span>
              </div>
              <span className="flex justify-between gap-2">
                <label className="font-semibold">Title</label>
                {item.title}
              </span>
              <div className="flex justify-between gap-2">
                <label className="font-semibold">Description</label>
                <p className="text-right">{item.desc}</p>
              </div>
              <div className="flex justify-between gap-2">
                <label className="font-semibold">Price</label>
                {item.price}
              </div>
              <div className="flex items-center mx-auto gap-5 mt-3">
                <button
                  className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 transition duration-300"
                  onClick={() => deletePackage(item._id)}
                >
                  Delete
                </button>
                <button
                  className="px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-700 transition duration-300"
                  onClick={() => openUpdateForm(item)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <AddPackagesPopUp
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          packageToUpdate={packageToUpdate}
          setPkgData={setPkgData}
        />
      )}
    </>
  );
};

export default AdminPackageCard;
