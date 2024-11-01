/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from 'react'


import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Timeline } from 'gsap/gsap-core'
gsap.registerPlugin(ScrollTrigger);
function  LandingProducts() {
     useGSAP(()=>{
      gsap.to('#box1',{
           
        scale:0.3,
        opacity:0,
       
       scrollTrigger:{
        trigger:"#box1",
        scroller:"body",
        markers:false,
        start:"top 30%",
        end:"bottom 15%",
        scrub:2,
   
        
       }
         })
         gsap.to('#box2',{
           
          scale:0.5,
          opacity:0,
         
         scrollTrigger:{
          trigger:"#box2",
          scroller:"body",
          markers:false,
          start:"top 30%",
          end:"bottom 15%",
          scrub:2,
          
         }
    })
    gsap.to('#box3',{
               
      opacity:0,
       scale:0,
     
     scrollTrigger:{
      trigger:"#box3",
      scroller:"body",
      markers:false,
      start:"top 30%",
      end:"bottom 15%",
      scrub:2,
      
      
     }
    })
        
        
    
        
    
     })
  
  

  
       

  return (
   <>
   
   <div className=' w-full  flex  items-center justify-evenly gap-10 flex-col mt-10 bg-black  ' id='head'>
        <div className=' w-1/3  h-[500px]    bg-white sticky top-5 bg-[url(https://i.pinimg.com/474x/bc/25/94/bc2594d95abbc1d9cbca435d35d4c8df.jpg)] bg-cover flex flex-col justify-end ' id='box1'>
        <h1 className="font-serif text-xl text-white m-2 font-extrabold "> Classic Black goggles </h1>
        <h1 className="font-serif text-xl text-white m-2 font-extrabold "> 99$ </h1>
              </div>
              <div className=' w-1/3  h-[500px] bg-white sticky top-5 bg-[url(https://i.pinimg.com/474x/c4/66/2f/c4662f7cf88b671a3fc65283f53ae2ff.jpg)] bg-cover flex flex-col justify-end ' id='box2'>
              <h1 className="font-serif text-xl text-white m-2 font-extrabold "> Classic Comfort chino pants </h1>
              <h1 className="font-serif text-xl text-white m-2 font-extrabold "> 129$ </h1>
              </div>
              <div className=' w-1/3  h-[500px]  bg-white bg-[url(https://i.pinimg.com/474x/4b/0a/e7/4b0ae7ee6b486b1922d5b3dbc48537b4.jpg)] bg-cover flex flex-col justify-end  ' id='box3'>
              <h1 className="font-serif text-xl text-white m-2 font-extrabold "> Classic Comfort jeans jacket </h1>
              <h1 className="font-serif text-xl text-white m-2 font-extrabold "> 159$ </h1>
              </div>
              
   </div>
  
     
    
  </>
)
}

export default LandingProducts
