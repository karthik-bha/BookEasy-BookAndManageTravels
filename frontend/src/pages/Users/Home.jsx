import React from "react";
import HomeCard from "../../components/HomeCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4">
      <div className="sticky top-0 mx-auto ">
        <Navbar />
      </div>
      <div className=" px-4 h-screen">
        <HomeCard />
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
