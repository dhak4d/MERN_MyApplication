const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json()); 

const mongoose = require("mongoose")
const mongoUrl = "mongodb+srv://mango:mango@cluster0.sz4n2kr.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to the Database")
}).catch((e) =>
    console.log(e)
)


require("./contactUs")
const user = mongoose.model("ContactUs")


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

app.listen(5000, () => {
    console.log("Server Started")
})