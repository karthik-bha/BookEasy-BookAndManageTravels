import React from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import leftArrow from "../assets/leftarrow.svg"
import { useNavigate } from "react-router-dom";
const InvoiceCard = ({ invoiceDetails }) => {
  const navigate = useNavigate();
  const downloadPDF = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica); // Embed font
    const fontSizeTitle = 20;
    const fontSizeContent = 12;

    const pageWidth = page.getWidth();
    const pageHeight = page.getHeight();


    const titleText = "BookEasy";
    const titleWidth = font.widthOfTextAtSize(titleText, fontSizeTitle);
    const titleX = (pageWidth - titleWidth) / 2;
    const titleY = pageHeight - 50; // Slightly below the top of the page

    page.drawText(titleText, {
      x: titleX,
      y: titleY,
      size: fontSizeTitle,
      font,
      color: rgb(0, 0, 0),
    });

    
    const nextTitle = "Invoice";
    const nextTitleWidth = font.widthOfTextAtSize(nextTitle, fontSizeContent);
    const nextTitleX = (pageWidth - nextTitleWidth) / 2;
    const nextTitleY = titleY - 30; // Below the title

    page.drawText(nextTitle, {
      x: nextTitleX,
      y: nextTitleY,
      size: fontSizeContent,
      font,
      color: rgb(0, 0, 0),
    });


    const invoiceContent = [
      `Name: ${invoiceDetails.name}`,
      `E-mail: ${invoiceDetails.email}`,
      `Phone: ${invoiceDetails.phone}`,
      `Number of Travelers: ${invoiceDetails.travelerCnt}`,
      `Special Requests: ${invoiceDetails.splReq || "None"}`,
      `Package Chosen: ${invoiceDetails.title}`,
      `Price Per Person: ${invoiceDetails.price}`,
      `Total Cost: ${invoiceDetails.totalCost}`,
    ];

    let currentY = nextTitleY - 40; 
    const marginX = 50; 

    invoiceContent.forEach((line) => {
      page.drawText(line, {
        x: marginX,
        y: currentY,
        size: fontSizeContent,
        font,
        color: rgb(0, 0, 0),
      });
      currentY -= 20; // Move down 
    });

    // Save and download the PDF
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Booking_Invoice.pdf";
    link.click();
  };

  return (
    <div className="justify-center mx-auto bg-white ">
      <div>
        <h1 className="text-3xl text-center  my-10">
          Here are the details of your booking, Have a memorable trip!
        </h1>
      </div>
      <div className="flex flex-col max-w-[300px] mx-auto justify-center  my-10 p-4 rounded-sm shadow-md">
        <ul>
          <li className="flex justify-between my-4">
            <label className="font-semibold">Name: </label>
            <label>{invoiceDetails.name}</label>
          </li>
          <li className="flex justify-between my-4">
            <label className="font-semibold">E-mail: </label>
            <label>{invoiceDetails.email}</label>
          </li>
          <li className="flex justify-between">
            <label className="font-semibold">Phone: </label>
            <label>{invoiceDetails.phone}</label>
          </li>

          <li className="flex justify-between my-4">
            <label className="font-semibold">Number of travelers: </label>
            <label>{invoiceDetails.travelerCnt}</label>
          </li>
          <li className="flex justify-between my-4">
            <label className="font-semibold">Special Requests: </label>
            <label>{invoiceDetails.splReq}</label>
          </li>
          <li className="flex justify-between my-4 gap-2 ">
            <label className="font-semibold">Package Chosen: </label>
            <label className="text-right">{invoiceDetails.title}</label>
          </li>
          <li className="flex justify-between my-4">
            <label className="font-semibold">Price Per Person: </label>
            <label>{invoiceDetails.price}</label>
          </li>
          <li className="flex justify-between my-4">
            <label className="font-semibold">Total Cost: </label>
            <label>{invoiceDetails.totalCost}</label>
          </li>
        </ul>
      </div>
      <div className=" text-white  flex flex-col items-center">
        <button
          className="px-6 py-4 font-semibold hover:bg-green-300 rounded-md bg-green-500 hover:font-bold"
          onClick={downloadPDF}
        >
          Download Invoice
        </button>

        <div
          className="my-10  hover:cursor-pointer"
          onClick={() => navigate("/packages")}
        >
          <label className="text-black hover:font-semibold hover:underline text-1xl md:text-2xl hover:cursor-pointer">
            Go Back
          </label>
          <img src={leftArrow} />
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
