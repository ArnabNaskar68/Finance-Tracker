import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema(
    {
        id:{
            type:String,
            required: false,
        },
        date: {
            type: String,
            required: true,
        },
        food: {
            type: Number,
            default: 0,
        },
        entertainment: {
            type: Number,
            default: 0,
        },
        lifestyle: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

export const Expense = mongoose.model('Expense', expenseSchema);
