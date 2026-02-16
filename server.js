import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.json("Student App");
});

app.listen('3000', ()=>{
    console.log("App Started at PORT: 3000");
});



