import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    images:[
        {
            type:String,
        }
    ],
    category:{
        type:String,
        required:true
    }


})

 export const Product=mongoose.model("Product",productSchema)