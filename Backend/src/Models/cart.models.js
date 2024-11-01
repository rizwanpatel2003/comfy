import mongoose from "mongoose";

const cartSchema= new mongoose.Schema({
    user_id:{
      type:mongoose.Schema.ObjectId,
      ref:"User"
    },
    product_id:{
        type:mongoose.Schema.ObjectId,
         ref:"Product"
    },
    image:{
      type:String,
      required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
      type:String,
      required:true
    },
    quantity:{
       type:Number,
       default:1
    },
    // address:{
    //  type:String,
    //  required:true
    // }
})


export const Cart=mongoose.model("Cart",cartSchema)