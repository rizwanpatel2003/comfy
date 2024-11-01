import { User } from "../Models/user.models.js";
import { ApiError } from "../Utils/ApiError.js";
import { asyncHandler } from "../Utils/asyncHandler.js";
import jwt from 'jsonwebtoken';

export const verifyJWt = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || null; // No need to await here
        if (!token) {
            throw new ApiError(401, "Access token required"); // Use 401 for unauthorized access
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_KEY); // No need to await here
        if (!decodedToken) {
            throw new ApiError(401, "Invalid access token"); // Use 401 for invalid token
        }

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
        if (!user) {
            throw new ApiError(404, "User  not found");
        }

        req.user = user; // Assign the user to the request object
        next(); // Call next() to proceed to the next middleware
    } catch (error) {
        console.log(error);
        // Ensure you pass the error to the next middleware or error handler
        next(new ApiError(401, error?.message || "Invalid access token"));
    }
});