const PackageDetails = require("../schema/packageSchema")
const BookingDetails = require("../schema/bookingSchema")

// api for displaying everything
const getAllPackages = async (req, res)=>{
    try {
        
        const data = await PackageDetails.find();
        console.log("fetch successful");
        res.json(data);
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "error fetching from DB" });
    }
}

//api for booking submission
const submitBooking = async (req, res) => {
    try {
        const data = req.body;

      
        const travelerCnt = Number(data.travelerCnt);
        const price = Number(data.price);

        const totalSum = price * travelerCnt;

        const newBooking = new BookingDetails({
            name: data.name,
            email: data.email,
            phone: data.phone,
            travelerCnt: data.travelerCnt,
            splReq: data.splReq,
            title: data.title,
            price: data.price,
            totalCost: totalSum,

        })

        const resp = await newBooking.save();
        console.log("Successful submission");
        res.status(200).send({ message: "Successful Submission", data: resp });
        
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "error submitting data, check fields carefully" });
    } 
}

// api for server side invoice generation
const generateInvoice = async(req, res) => {
    try {
        
    } catch (err) {
        
    }
}



module.exports = { getAllPackages, submitBooking };