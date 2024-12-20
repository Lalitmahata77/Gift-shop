import express from "express"
import dotenv from "dotenv"
import dbConnect from "./db/dbConnect.js"
import cookieParser from "cookie-parser"
import path from "path"
dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

const PORT = process.env.PORT
import userRoute from "./routes/userRoute.js"
import categoryRoute from "./routes/categoryRoute.js"
import productRoute from "./routes/productRoute.js"
import uploadRoute from "./routes/uploadRoute.js"
import contactRoute from "./routes/contactRoute.js"
import orderRoute from "./routes/orderRoute.js"
app.use("/api/user",userRoute)
app.use("/api/category",categoryRoute)
app.use("/api/product",productRoute)
app.use("/api/upload", uploadRoute);
app.use("/api/contact",contactRoute)
app.use("/api/order", orderRoute)


app.get("/api/config/paypal", (req, res) => {
    res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
  });

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));
app.listen(PORT,()=>{
    dbConnect()
    console.log(`server is running on port : ${PORT}`);
    
})