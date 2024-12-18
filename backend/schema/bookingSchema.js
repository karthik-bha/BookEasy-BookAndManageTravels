const mongoose = require("mongoose")

const newBooking = new mongoose.Schema(
    {
        name: {
            type: String,
            required:true,
        },
        email: {
            type: String,
            required:true,
        },
        phone: {
            type: Number,
            required:true,
        },
        travelerCnt: {
            type: Number,
            required:true,
        },
        splReq: {
            type:String,
        },
        title: {
            type: String,
            required:true,
        },
        price: {
            type: Number,
          required:true,  
        },
        totalCost: {
            type: Number,
            required:true,
        }
    }
)

const BookingDetails = mongoose.model("BookingDetails", newBooking);
module.exports = BookingDetails;