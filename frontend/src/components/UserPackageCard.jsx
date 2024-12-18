import React from "react";
import { useNavigate } from "react-router-dom";

const UserPackageCard = ({ packageData }) => {
  const navigate = useNavigate();

  return (
    <div className="grid gap-4 my-4 grid-col-2 md:grid-cols-3 lg:grid-cols- ">
      {packageData.map((items, index) => {
        return (
          <div
            key={items._id}
            className="border rounded-lg  hover:shadow-lg flex flex-col hover:cursor-pointer"
          >
            <div className="p-4 flex-1 flex flex-col  text-center bg-white  ">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3dbgGfzRsydhoe5FB2N6y9QojT_t3GFUz8w&s"
                  className="w-full h-auto rounded-lg "
                />
              </div>
              <span className="font-semibold my-2 text-[18px]">
                {items.title}
              </span>
              <div className="my-4">
                <p>{items.desc}</p>
              </div>
              <div className="mt-auto items-center text-center">
                <h4>
                  <b>price:</b> {items.price}
                </h4>
                <button
                  className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded hover:font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800"
                  onClick={() =>
                    navigate(`/packages/${items._id}/booking`, {
                      state: {
                        title: items.title,
                        price: items.price,
                      
                      },
                    })
                  }
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserPackageCard;
