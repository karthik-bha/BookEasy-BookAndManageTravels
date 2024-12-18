import React, { useState, useEffect } from "react";
import axios from "axios";

const AddPackagesPopUp = ({showPopup, setShowPopup, packageToUpdate, setPkgData}) => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    price: "",
  });

  useEffect(() => {
    if (packageToUpdate) {
      setFormData({
        title: packageToUpdate.title,
        desc: packageToUpdate.desc,
        price: packageToUpdate.price,
      });
    }
  }, [packageToUpdate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let postedData;
      if (packageToUpdate) {
        // If updating, make a PUT request
        postedData = await axios.put(
          `https://bookeasy-backend.onrender.com/admin/packages/${packageToUpdate._id}/update`,
          formData
        );
        console.log("Response Data:", postedData.data);

        // Check if the response is successful
          if (postedData.status >= 200 && postedData.status < 300) {
              window.alert("Successful Updation");
          // Update the package in the state
          setPkgData((prevData) =>
            prevData.map((item) =>
              item._id === packageToUpdate._id
                ? { ...item, ...postedData.data }
                : item
            )
          );
          setShowPopup(false); 
        } else {
          throw new Error("Update failed"); 
        }
      } else {
        // If adding a new package, make a POST request
        postedData = await axios.post(
          "https://bookeasy-backend.onrender.com/admin/packages/create",
          formData,
          { headers: { "Content-Type": "application/json" } }
        );

      
        if (postedData.status >= 200 && postedData.status < 300) {
         window.alert("Creation success");
          setPkgData((prevData) => [...prevData, postedData.data]);
          setShowPopup(false); 
        } else {
          throw new Error("Package creation failed");
        }
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Close Button */}
        <button
          onClick={handleClosePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>

        {/* Form */}
        <h2 className="text-xl font-semibold mb-4">
          {packageToUpdate ? "Update Package" : "Add a New Package"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter package title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="desc"
              value={formData.desc}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter package description"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter package price"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            {packageToUpdate ? "Submit Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPackagesPopUp;
