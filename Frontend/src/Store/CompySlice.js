/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice,nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";


  export const Getproducts= createAsyncThunk('/home',async ()=>{
      try {
         const response= await axios.get('/api/v1/getdata')
        
          
         return response.data
      } catch (err) {
          console.log(err)
      }
  })
  // export const Getcart=createAsyncThunk('/home',async()=>{
  //      try {
  //         const response= await axios.get('/api/v1/user/getcart')
  //         console.log(response)
       
        
  //      } catch (error) {
  //       console.log("Something went wrong while validating data",error.response ? error.response.data : error.message);
        
  //      }
  // })
const initialState= {
    status:null,
    data:[
        
            {
              title: "Classic Black Hooded Sweatshirt",
              price: 313,
              description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.",
              images: [
                "https://i.imgur.com/cSytoSD.jpeg",
                "https://i.imgur.com/WwKucXb.jpeg",
                "https://i.imgur.com/cE2Dxh9.jpeg"
              ],
              category: "Kids"
            },
            {
              title: "Classic Comfort Fit Joggers",
              price: 25,
              description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles.",
              images: [
                "https://i.imgur.com/ZKGofuB.jpeg",
                "https://i.imgur.com/GJi73H0.jpeg",
                "https://i.imgur.com/633Fqrz.jpeg"
              ],
              category: "Kids"
            },
            {
              title: "Classic Comfort Drawstring Joggers",
              price: 79,
              description: "Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will quickly become your go-to for effortless, casual wear.",
              images: [
                "https://i.imgur.com/mp3rUty.jpeg",
                "https://i.imgur.com/JQRGIc2.jpeg"
              ],
              category: "Kids"
            },
            
    
    ],
       page:1,
       start:0,
       end:15,
        indo:{
             id:1,
            Title:"xyz",
            Price:"99$",
            Desp:"xyz",
            img:"",
    
           },
         Cart:[
             {
              id:1,
              image:'',
              title:"",
              quantity:1,
              price:100
             }

         ],
         signvisibility:true,
         flag:false,
         user:{
          name:'username',
          email:'email',
          _id:1,
          accesstoken:'bb'
         }

          
}

export const CompySlice=createSlice({
   name:"Comfy",
   initialState,
   reducers:{
    
       setIndo:(state,action)=>{

        state.indo = action.payload;
    },
    Setpage: (state, action) => {
    
      state.page = action.payload;
    },
    SetStart:(state,action)=>{
         
         state.start=action.payload;
    },
    SetEnd:(state,action)=>{
     
      state.end=action.payload;
    },
    Addcart:(state,action)=>{
       console.log("your data is going to store",action.payload)
      state.Cart.push(action.payload)
    },
    RemoveCart:(state,action)=>{
      state.Cart=state.Cart.filter((item)=>item.id!==action.payload)
    },
    Setsignvisibility:(state,action)=>{

        state.signvisibility = action.payload;
    },
    SetFlag:(state,action)=>{
      state.flag=action.payload
    },
    Setuser:(state,action)=>{
     
      state.user=action.payload
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(Getproducts.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(Getproducts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            console.log(action.payload)
            state.data = action.payload
        })
        .addCase(Getproducts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message ?? 'Unknown Error'
        })
},

});

export const{setData,setCategory,setIndo,Setpage,SetEnd,SetStart,Addcart,RemoveCart,Setsignvisibility,SetFlag,Setuser}=CompySlice.actions

export default CompySlice.reducer