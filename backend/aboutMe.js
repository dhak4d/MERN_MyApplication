const mongoose = require("mongoose");

const userAboutSchema = new mongoose.Schema(
    
    {
      meData:String,
      version:String
    },
    {
        collection:'AboutMe'
    }
)

mongoose.model("AboutMe", userAboutSchema)