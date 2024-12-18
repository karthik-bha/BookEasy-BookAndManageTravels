const mongoose = require("mongoose")

const pkgSchema = new mongoose.Schema({
   
    title: {
        type:String,
        required: true,
        
    },
    desc: {
        type: String,
        required:true,
    },
    price: {
        type: Number,
        required:true,
    }

})

const PackageDetails = mongoose.model("PackageDetails", pkgSchema);
module.exports= PackageDetails;