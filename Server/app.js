import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();


const app=express();
const Port= process.env.PORT;
const Origin=process.env.ORIGIN;

//middlewires
app.use(express.json());
app.use(cors({
    origin:Origin
}));

app.post('/', (req,res)=>{
const {date, food, entertainment, lifestyle}=req.body;
console.log(`date:${date} totaoFood:${food} enetrtainment:${entertainment} lifestyle:${lifestyle}`)
res.status(200).json({ message: "Data received" });

})

app.listen(Port);
console.log(`http://localhost:${Port}/`);