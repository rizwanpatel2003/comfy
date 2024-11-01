import { Cart } from "../Models/cart.models.js";
import { User } from "../Models/user.models.js";
import { ApiError } from "../Utils/ApiError.js";
import { ApiResponse } from "../Utils/ApiResponse.js";
import { asyncHandler } from "../Utils/asyncHandler.js";

 
const addInCart= asyncHandler(async(req,res)=>{
    const{user_id,product_id,quantity,image,title,price}=req.body
    if([user_id,product_id,quantity,,image,title,price].some((field)=> field==='')){
        throw new ApiError(400,"all fields are required")
    }
    const cart= await Cart.create({
        user_id,
        product_id,
        quantity,
        image,
        title,
        price
    })
    if(!cart){
        throw new ApiError(400,"uaable to add in cart due to server error")
    }
    const user= await User.findByIdAndUpdate(user_id,{
        $push:{cart:cart._id}
    },{
        new:true
    })
    if(!user){
        throw new ApiError(500,"unable to find the user")
    }
    console.log()
//  const updatedUser= await User.aggregate(
        
//         [
//             {
//                 $match:{
//                    _id:user._id
//                 },
//             },
//             {
//             $lookup: {
//               from: "carts",
//               localField:'cart',
//               foreignField:'_id',
//               as: "items"
//             }
//           },
//        ]
        
//     )
//      console.log(updatedUser)
    return res.status(200).json(new ApiResponse(200,user,"the product is added in the cart"))

})
export {addInCart}