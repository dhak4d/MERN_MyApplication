const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json()); 

const mongoose = require("mongoose")
const mongoUrl = 


mongoose.connect(mongoUrl, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to the Database")
}).catch((e) =>
    console.log(e)
)


require("./contactUs")
const user = mongoose.model("ContactUs")

require("./aboutMe")
const about = mongoose.model("AboutMe")


app.post("/register", async (req, res) => {
    const { name, email, phone, message } = req.body;
    try{
        await user.create({
            name,
            email,
            phone,
            message,    
        });
        console.log(name, email, phone, message);
        res.send({ status: "ok" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "error" });
    }
});


app.get("/getAllUser", async(req, res)=>{
    try{
      const allUser = await user.find({})
      res.send({status:"ok", data: allUser})
      console.log(allUser)
    }catch(error){
      console.log(error)
    }
  })

  app.get("/getAboutMe", async(req, res)=>{
    try{
      const version = 'latest';
      const allUser1 = await about.find({version})
      res.send({status:"ok", data: allUser1})
      console.log(allUser1)
    }catch(error){
      console.log(error)
    }
  })

  // app.get("/getAboutMe", async(req, res)=>{
  //   try{
  //      const version = 'latest'
  //      const myData = await about.find({version})
  //      res.send({data:myData})
  //     //  res.json(myData)
  //      console.log(myData)
  //   }catch(error){
  //     console.log(error)
  //   }
  // })


app.listen(5000, () => {
    console.log("Server Started")
})
