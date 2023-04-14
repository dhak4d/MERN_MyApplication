const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema(
    {
        name:String,
        email:String,
        phone:String,
        message:String,
    },
    {
        collection:'ContactUs'
    }
)

mongoose.model("ContactUs", userDetailsSchema)


