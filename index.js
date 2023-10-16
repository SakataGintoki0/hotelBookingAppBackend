import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotels from "./routes/hotels.js";
import users from "./routes/users.js";
import rooms from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
dotenv.config();

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB");
    }catch(err){
        throw err;
    }
};

app.get("/", (req, res) => {
    res.send("hello")
})


//middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", users);
app.use("/api/hotels", hotels);
app.use("/api/rooms", rooms);


app.use((err, req, res, next) =>{
    const errorStatus = err.status || 500
    const errorMsg = err.message || "something went wrong"
    return res.status(errorStatus).json({
        success : false,
        status : errorStatus,
        message : errorMsg,
        stack : err.stack
    });



});

app.use(cors({origin: "http://localhost:3000/"}))

app.listen(30000, ()=>{
    connect();
    console.log("connected at port 30000");
})