import { app } from "./app.js";
import dotenv from 'dotenv'
import { connectDB } from "./DB/index.js";
// import { Product } from "./Models/products.model.js";
// import productJSON from '../products.json' assert { type: 'json' };
dotenv.config(
    {
        path:"./.env"
    }
)

connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
           
        console.log(`server is running on port ${process.env.PORT}`)
    })
})
.catch(
    (err)=>{
        console.log(err)
    }
)

// const entrydata=  async()=>{
//     try {
//         await Product.create(productJSON)
//     } catch (error) {
//         console.log("the products not able store ",error)
//     }
// }

//  entrydata()