import mongoose from "mongoose";
import bcrypt from'bcrypt'
import jwt from 'jsonwebtoken'
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
         index:true,
        },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
           },
    password:{
        type:String,
        required:true,
          },
    profile:{
        type:String,
      
    },
    dob:{
        type:Date,
    },
    refreshToken:{
        type:String
    },
    cart:[{
        type:mongoose.Schema.ObjectId,
        ref:'Cart'
    }]
    
})
userSchema.pre('save',async function (next){
    if (!this.isModified("password")) {
        return next();
    }
    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        next(error);
    }
})
  userSchema.methods.isPasswordCorrect = async function(password){
    try {
       
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error('Password comparison failed');
    }
}
userSchema.methods.generateAccessToken=function(){
    

 return   jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username

  },process.env.ACCESS_TOKEN_KEY,{
      expiresIn:process.env.ACCESS_TOKEN_EXPIRY
  })
}
userSchema.methods.generateRefreshToken=function(){
    
     return   jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username

  },process.env.REFRESH_TOKEN_KEY,{
      expiresIn:process.env.REFRESH_TOKEN_EXPIRY
  })
}
export const User=mongoose.model("User",userSchema)