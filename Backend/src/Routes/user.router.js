import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { CartItems, login, logout, member } from "../Controllers/user.controllers.js";
import { verifyJWt } from "../middleware/auth.middleware.js";
import { addInCart } from "../Controllers/cart.controllers.js";
const router=Router()

router.route("/member").post(
 upload.single('profile'),
 member
)
router.route("/login").post(login)
router.route("/logout").post(verifyJWt,logout)
router.route("/cart").post(addInCart)
router.route("/getcart").get(CartItems)
export default router