import React from 'react'
import Footer from '../../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import InvoiceCard from '../../components/InvoiceCard';



const Invoice = () => {
  const location = useLocation();
  const invoiceData = location.state || {};

  return (
    <div className=" mx-auto bg-white  h-screen flex flex-col">
      <div className=" ">
        <h1 className="text-center mx-auto font-semibold text-4xl my-10 text-green-500">
          Trip Confirmed!
        </h1>
        <h1 className="text-center mx-auto font-semibold text-4xl  py-3">
          Invoice
        </h1>
      </div>
      <div className="h-full  justify-center w-full ">
        <InvoiceCard invoiceDetails={invoiceData} />
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Invoice
