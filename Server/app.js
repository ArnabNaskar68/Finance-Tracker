import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import mongoose from "mongoose"
import {DB_NAME} from "./constant.js"
import {Expense} from "./models/Expense.js"
dotenv.config();


const app=express();
const Port= process.env.PORT || 5000;
const Origin=process.env.ORIGIN || "http://localhost:3000";
const Database_Uri=process.env.DATABASE_URI;

//middlewires
app.use(express.json());
app.use(cors({
    origin:Origin
}));

// Database Connection
(
    async ()=>{
        try{
            await mongoose.connect(`${Database_Uri}/${DB_NAME}`)
            console.log("Database connected successfully");
            
            app.listen(Port, ()=>{
                console.log(`App is listening to port : ${Port}`);
                console.log(`http://localhost:${Port}`);
            });
        }
        catch(error){
            console.log("Database Connection ERROR:", error);
            process.exit(1);
        }
    }
)()

app.post('/', async (req,res)=>{
    try {
        const {date, food, entertainment, lifestyle}=req.body;
        
        if(!date) {
            return res.status(400).json({ message: "Date is required" });
        }

        const expense = new Expense({
            date,
            food: food || 0,
            entertainment: entertainment || 0,
            lifestyle: lifestyle || 0,
        });

        await expense.save();
        
        console.log(`date:${date} totalFood:${food} entertainment:${entertainment} lifestyle:${lifestyle}`)
        res.status(201).json({ 
            message: "Data received and saved successfully",
            data: expense 
        });
    } catch(error) {
        console.log("Error saving expense:", error);
        res.status(500).json({ message: "Error saving data", error: error.message });
    }
})

console.log(`http://localhost:${Port}`);