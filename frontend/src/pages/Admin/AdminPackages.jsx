import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import Footer from "../../components/Footer";
import axios from "axios";
import AdminPackageCard from "../../components/Admin/AdminPackageCard";
import fileAdd from "../../assets/fileAdd.svg";
import AddPackagesPopUp from "../../components/Admin/AddPackagesPopUp";
import Loader from "../../components/Loader";

const AdminPackages = () => {
  const [pkgData, setPkgData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [packageToUpdate, setPackageToUpdate] = useState(null);
  const [loadingDelete, setLoadingDelete] = useState(false); // Add this state for delete loading

  const handleOpenPopup = () => {
    setPackageToUpdate(null); // Reset package to update when opening the popup
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPackageToUpdate(null); // Reset when closing the popup
  };

  useEffect(() => {
    const getPackages = async () => {
      try {
        setLoading(true);
        const pkgDetails = await axios.get(
          "https://bookeasy-backend.onrender.com/admin/packages"
        );
        setPkgData(pkgDetails.data);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching packages:", err);
        setLoading(false);
      }
    };
    getPackages();
  }, []);

  return (
    <div className="max-w-[1300px] mx-auto px-4">
      <div className="sticky top-0 mx-auto">
        <AdminNavbar />
      </div>

      <h1 className="text-4xl text-center my-10">Control Panel</h1>
      <div className="flex gap-2 p-4">
        <h3 className="text-3xl">Create a new package</h3>
        <img
          src={fileAdd}
          className="w-[25px] h-[25px] my-2 hover:cursor-pointer"
          onClick={handleOpenPopup}
        />
      </div>
      <div className="">
        {loading ? (
          <div className="h-screen text-center">
            <Loader />
            <h1 className="font-semibold">
              Retrieving Packages, Please wait...
            </h1>
          </div>
        ) : pkgData && pkgData.length > 0 ? (
            <div className="h-screen ">
          <AdminPackageCard
            packageData={pkgData}
            setPkgData={setPkgData}
            setLoadingDelete={setLoadingDelete} // Pass setLoadingDelete to the child
              />
              </div>
        ) : (
          <h1 className="mx-4">Nothing to display, Add Packages to see them</h1>
        )}
      </div>

      {/* Display Loader for delete operation */}
      {loadingDelete && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50 ">
          <div className="text-center z-100">
            <Loader />
            
            <h1 className="font-semibold">Deleting package....</h1>
            </div>
        </div>
      )}

      <AddPackagesPopUp
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        packageToUpdate={packageToUpdate}
        setPkgData={setPkgData}
      />

      <div className="fixed bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default AdminPackages;
