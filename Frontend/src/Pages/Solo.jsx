/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Addcart } from '../Store/CompySlice'
import axios from 'axios'

function Solo() {
   const dispatch= useDispatch()
    let data=useSelector( (state) => state.indo)
    let username=useSelector((state)=> state.user)
    const [counter,setcounter]= useState(1)
    const updateInDb= async()=>{
      try {
        const response= await axios.post("/api/v1/user/cart",{
          user_id:username._id,
          product_id:data.id,
          quantity:counter,
          image:data.img,
          title:data.Title,
          price:data.Price
        })
        console.log(response.data)
      } catch (error) {
        console.log("Something went wrong while updating cart data",error.response ? error.response.data : error.message);
      }
    }

    const addToCart=useCallback(
      () => {

         updateInDb()
        dispatch(Addcart({
          id:data.id,
          image:data.img,
          title:data.Title,
          quantity:counter,
          price:data.Price
        }))
      },[counter,dispatch]
    )
    

    
    return (
       <div className="w-full flex font-mono">
  <div className="w-1/2 flex justify-center">
    <img src={data.img} alt="" className="h-[500px] w-3/4 mt-20" />
  </div>
  <div className="w-1/2 mt-24">
    <p className="text-5xl pb-3">{data.Title}</p>
    <p className="text-3xl pb-3">{data.Price}</p>
    <p className="leading-7">{data.Desp}</p>
    <select name="" id="" className="" onChange={(e)=> setcounter(Number( e.target.value)) }>
      <option value="">1</option>
      <option value="">2</option>
      <option value="">3</option>
      <option value="">4</option>
      <option value="">5</option>
      <option value="">6</option>
      <option value="">7</option>
      <option value="">8</option>
      <option value="">9</option>
      <option value="">10</option>
    </select>
    <button className="bg-red-400 rounded-lg p-2 w-28 mt-10" onClick={addToCart}>Add Cart</button>
  </div>
</div> 
    )
}

export default Solo
