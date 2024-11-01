import { asyncHandler } from "../Utils/asyncHandler.js";
import {User} from "../Models/user.models.js";
import { ApiError } from "../Utils/ApiError.js";
import { uploadOnCloudinary } from "../Utils/cloudinary.js";
 import { ApiResponse } from "../Utils/ApiResponse.js";

 const generateAccessTokenRefreshToken= async(userId)=>{
    try {
        const user= await User.findById(userId) 
        const accessToken=user.generateAccessToken()
       const refreshToken=user.generateRefreshToken()
        user.refreshToken= refreshToken
     
        await user.save({validateBeforeSave:false})
        return {accessToken,refreshToken}

    } catch (error) {
        console.log('error while generating rt ad at', error.response ? error.response.data : error.message)
    }
}

const member= asyncHandler(async(req, res)=>{
    const {name,email,password}=req.body
       if([name,email,password].some((field)=> field?.trim()==="")){
           throw new ApiError(400,"all fields are required")
       }
    const existeduser= await User.findOne({
            email
    })
    if(existeduser){
        throw new ApiError(400,"user already exists")
    }

    //  const  profilelocalpath= req.file.path
    //  if(!profilelocalpath){
    //     throw new ApiError(401,"the profile path is not found")
    //  }
    //  const profile= await uploadOnCloudinary(profilelocalpath)
    //     if(!profile){
    //         throw new ApiError(401,"the profile is not uploaded on cloudinary")
    //     }
    //         Produc
       const user= await User.create({
              email,
              name,
              password,
            
            
            
       })

       const Createduser= await User.findById(user._id).select("-password")

       if(!Createduser){
        throw new ApiError(404,"error while creating user profile")
       }

       return res.status(201).json(new ApiResponse(
            200,        
          Createduser,
          "succesfully created User"
       ))

})

const login= asyncHandler(async(req,res)=>{
    const {email,password}=req.body
      
    if([email,password].some((field)=> field?.trim()==="")){
      throw new ApiError(400,"all field are required")
    }

    const user= await User.findOne({email})
    if(!user){
        throw new ApiError(404,"user not found")
    }

    const passwordConfirmation= await user.isPasswordCorrect(password.trim())
  
    if(!passwordConfirmation){
        throw new ApiError(400,"password is incorrect")
    }
      
    const {accessToken,refreshToken}= await generateAccessTokenRefreshToken(user._id)
    
   
    
    const loggedInUser= await User.findById(user._id).select('-password -refreshToken');
          

     const Option=
        {
            httpOnly:true,
            secure:true,
        }
        

        return res
        .status(200)
        .cookie('accessToken',accessToken,Option)
        .cookie('refreshToken',refreshToken,Option)
        .json(new ApiResponse(
            {
                statusCode:200,
                user:refreshToken,accessToken,loggedInUser,
                message:"succesfully logged in"
            }
        ))
        
     

})
const logout=asyncHandler(async(req,res)=>{
  await User.findByIdAndUpdate(req.user._id,{
        $unset: {refreshToken:1}
    },{
        new:true
    })

const Option=
{
    httpOnly:true,
    secure:true,
}


return res
.status(200)
.clearCookie('accessToken',Option)
.clearCookie('refreshToken',Option)
.json(new ApiResponse(
    
      200,
          {},
"succesfully logged out in"
    
))

})
const CartItems=asyncHandler(async(req,res)=>{
    const {email} = req.query
    console.log(email)
    const user= await User.findOne({email})
     console.log(user)
    const updatedUser= await User.aggregate(
        
        [
            {
                $match:{
                   email:email
                },
            },
            {
            $lookup: {
              from: "carts",
              localField:'cart',
              foreignField:'_id',
              as: "items"
            }
          },
          {
            $project:{
                items:1
            }
          }
       ]
        
    )
  console.log(updatedUser)
    return res.status(200).json(new ApiResponse(200,updatedUser,"the product are got succuesfully"))
})
export {member,login,logout,CartItems}