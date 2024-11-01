/* eslint-disable no-unused-vars */
import { useGSAP } from '@gsap/react'
import React, { useCallback, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import gsap from 'gsap'
import Reviews from './Reviews'
import Footer from '../Pages/Footer'
import LandingProducts from './LandingProducts'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {  Getproducts } from '../Store/CompySlice'
import Sign from './Sign'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'
gsap.registerPlugin(ScrollTrigger);


function Home() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
  const status = useSelector(state => state.status);
  useEffect(()=>{
    if(status===null){
       dispatch(Getproducts())
    }
  
  })
 
        
          
    return (
      <>
      
        <div className=" w-full min-h-lvh bg-black text-white  bg-[url(https://i.pinimg.com/1200x/4d/b6/30/4db630f3c28b8dac82542a7961188c5e.jpg)] bg-cover bg-transparent  " id='landing'>

        <div className=" w-2/3 p-[15vh]  " id='photoside'>
          <h1 className="text-7xl text-white
           w-full pb-4" >
            We are changing the way people shop
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus mollitia maiores perferendis reiciendis hic quis. Perferendis atque sequi aperiam, dolorum velit pariatur omnis rem, excepturi sint magni ea! Nobis, quasi.
          </p>
          <button className="text-black w-28 rounded-lg bg-[#faf4d3] mt-6 p-2"
          onClick={()=>{
            navigate('/Product/page/1')
          }}
         >
            Products
          </button>
        </div>
        </div>
         <div className='mt-5 '>
          <h1 className='text-3xl text-center'>Our Products</h1>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        </div>
  
      {/* <div className="mt-20 text-white">
        <h1 className="text-center text-2xl">Featured Products</h1>
        <hr className="bg-gray-600 w-20 h-1 mx-auto self-center" />
      </div>
    <div className="flex w-full flex-col items-center gap-1 bg-black mt-10 text-center " id='head'>
    <div className=" h-96 w-1/3  rounded-lg mt-10 " >
     <img src="https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-2/3 p-4 rounded-3xl' />
     <h2>Classic Black Hooded Sweatshirt</h2>
     <h3>999$</h3>
    </div>
    <div className=" h-96 w-1/3  opacity-0 rounded-lg " id='box1'  >
      <img src="https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-2/3 p-4 rounded-3xl' />
      <h2>Classic Black Hooded Sweatshirt</h2>
      <h3>999$</h3>
     </div>
    <div className=" h-96 w-1/3  opacity-0  rounded-lg" id='box2'>
     <img src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-2/3 p-4 rounded-3xl '/>
     <h2>Classic Black Hooded Sweatshirt</h2>
     <h3>999$</h3>
     </div>
  </div> */}
      <LandingProducts></LandingProducts>
      <Reviews> </Reviews>
      <Sign></Sign>
       <Footer></Footer>
      </>
    )
}

export default Home
