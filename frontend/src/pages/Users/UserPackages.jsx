import React, { useEffect, useState } from "react";
import UserPackageCard from "../../components/UserPackageCard";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";

const UserPackages = () => {
  // state to store data
  const [packageDetails, setPackageDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //fetch data from api
  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://bookeasy-backend.onrender.com/user/packages");
      setPackageDetails(response.data);
     
    } catch (err) {
  
      console.error("Error fetching data:", err);
    } finally {
      setIsLoading(false);
    }
  };
  
  //useeffect will load data on mount
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="max-w-[1300px] mx-auto px-4 ">
      <div className="sticky top-0 mx-auto ">
        <Navbar />
      </div>
      <div className="py-4 my-10">
        <h1 className="text-left md:text-center font-semibold text-3xl md:text-4xl ">
          Find the tour of your dreams here!
        </h1>
      </div>
      <div>
        {isLoading ? (
          <div className="h-screen text-center">
            <Loader />
            <h1 className="font-semibold">Retrieving available packages, Please wait...</h1>
          </div>
        ) : (
          <div>
            <UserPackageCard packageData={packageDetails} />
          </div>
        )}
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default UserPackages;
