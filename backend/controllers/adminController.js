const PackageDetails = require("../schema/packageSchema");
const BookingDetails = require("../schema/bookingSchema")

// api for creation 
const createPackage = async (req, res) => {
    try {
        const data = req.body;
        
        const newPackage = new PackageDetails({
            title: data.title,
            desc: data.desc,
            price: data.price
        })
        
        const resp = await newPackage.save();
        console.log("success");
        res.status(200).json(resp)

    } catch (err) {
        console.error(err);
        res.status(501).send({ message: "Submission failed", err });

    }
}

const authenticate = async (req, res) => {
  try {
    const { userId, password } = req.body;

    // Check if userId or password are missing
    if (userId === "Admin456" && password === "pass123") {
      res
        .status(200)
        .send({ message: "Successful Authentication", data: userId });
    } else {
      res.status(401).send({ message: "Invalid credentials" });
    }

  } catch (err) {
    console.error(err); 
    res.status(500).send({ message: "Login error", error: err.message });
  }
};

const showStatus = () => {
    console.log("Welcome to the Admin API gateway");  
}

const getAllBookings = async (req, res)=>{
  try {
    const details = await BookingDetails.find();
    console.log("fetch success");
    res.status(200).json(details);
  } catch (err) {
    res.status(500).send({err});
  }
}

const getAllPackages = async (req,res) => {
  try {
    const pkgData = await PackageDetails.find();
    if (!pkgData || pkgData.length === 0) {
      return res.status(404).send({ message: "No packages found." });
    }

    console.log("fetch success", pkgData);
    res.status(200).json(pkgData);
  } catch (err) {
    res.status(500).send({err});
  }
}

const deletePackage = async (req, res) => {
  try {
    const packageId  = req.params.packageId;
    const deletedPkg = await PackageDetails.findByIdAndDelete(packageId);
     if (!deletedPkg) {
      
       return res.status(404).send({ message: "Package not found" });
     }
    console.log("Successfully deleted");
    res
      .status(200)
      .send({ message: "Package successfully deleted", data: deletedPkg });


  } catch (err) {
     res.status(500).send({ err });
  }
}

// Update a package

  const updatePackage = async (req, res) => {
    try {
        const { title, desc, price } = req.body;
        const updatedPackage = await PackageDetails.findByIdAndUpdate(
          req.params.packageId,
          { title, desc, price },
          { new: true }
        );

        if (!updatedPackage) {
            return res.status(404).json({ message: 'Package not found' });
        }

        res.status(200).json(updatedPackage);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Failed to update package', err });
    }
};

const deleteBooking = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await BookingDetails.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: "Booking not found" });
    }
    res.status(200).json(result);
    
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error deleting", err });
  }
};

module.exports = { createPackage, authenticate, showStatus, getAllBookings , getAllPackages, deletePackage, updatePackage, deleteBooking};