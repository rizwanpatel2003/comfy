import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app=express()

app.get('/',(req, res)=>{
    res.send("server is ready for grinding ")

})

app.use(cors(
    {
        origin: "*",
        credentials:true
    }
))



// const options = {
//     dotfiles: 'ignore',
//     etag: false,
//     extensions: ['htm', 'html'],
//     index: false,
//     maxAge: '1d',
//     redirect: false,
//     setHeaders (res, path, stat) {
//       res.set('x-timestamp', Date.now())
//     }
//   }
  
  app.use(express.static('public'))

  app.use(express.urlencoded({
    extended: true
  }))

  app.use(express.json(
    {
      limit: '2mb'
    }
  ))
  app.use(cookieParser())

  // routers works 
   import userRouter from './Routes/user.router.js'
import { Product } from './Models/products.model.js'

   app.use("/api/v1/user",userRouter)

   app.get("/api/v1/getdata",(req,res)=>{
          Product.find().then((product)=> res.json(product) ).catch((err)=> console.log(err))
   })
 

  export {app}