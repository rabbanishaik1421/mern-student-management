import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import studentroutes from "./routes/studentroutes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/students", studentroutes);

app.get('/', (req, res)=>{
    res.json("Student App");
});

app.listen('3000', ()=>{
    console.log("App Started at PORT: 3000");
});



