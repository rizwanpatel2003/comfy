/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from 'react'


import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Timeline } from 'gsap/gsap-core'
gsap.registerPlugin(ScrollTrigger);
function Reviews() {
  const  images=[{
      id:1,
      address:""
    },{
      id:2,
      address:""
    },{
      id:3,
      address:""
    },{
      id:4,
      address:""
    },{
      id:5,
      address:""
    }]

        //  useGSAP(()=>{
        //       gsap.to("#rev1",{
        //          x:-400,
        //          duration:1,
        //          delay:1,
        //          opacity:0.4,
        //          scale:0.5,


        //       }) 
        //  })
        const [currentId,setcurrentId]=useState(1);
        const [lbtn,setlbtn]=useState(false);
        const [rbtn,setrbtn]=useState(true);
         const[prev,setprev]=useState(1)
        const boxreff=useRef()
        const moveleft=useCallback(()=>{
           
          gsap.to(boxreff.current,{
                     x:-400,
                      duration:1.5,
                      opacity:0,
                      scale:0,
    
           }) 
           
         setTimeout(()=>{
            setcurrentId((prev) => {
            const newId = prev + 1;
            console.log(newId); // Log the updated value
            return newId;
          });

        },1000)
      
      
        })
        const moveright=useCallback(()=>{
           
          gsap.to(boxreff.current,{
                      x:800,
                      duration:1.5,
                      opacity:0,
                      scale:0,
    
           }) 
           
         setTimeout(()=>{
            setcurrentId((prev) => {
            const newId = prev - 1;
            console.log(newId); // Log the updated value
            return newId;
          });

        },1000)
      
      
        })

        useEffect(() => {
          if(currentId===1){
            setlbtn(false);
          
            
          }else if(currentId===5){
            setrbtn(false);
          }
          else{
            setlbtn(true);
            setrbtn(true);
          }
          if(prev<currentId){
          if (currentId > 1) {
           
             setprev(currentId)
            gsap.from(boxreff.current, {
              x: 800,
              duration:1.5,
              opacity:0,
              scale:0,
            });
          }
        }
        else if(prev>currentId){
          if (currentId < 5) {
            setprev(currentId)
           gsap.from(boxreff.current, {
             x: -400,
             duration:1.5,
             opacity:0,
             scale:0,
           });
         }
        }
         
        }, [currentId]);
       

  return (
   <>
    <div className='mt-5'>
          <h1 className='text-3xl text-center font-serif'>Recent Reviews</h1>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        </div>
    {
      images.map((item)=>{
     if(item.id==currentId){   return(
    <div className='flex w-full h-screen bg-black text-white justify-center mt-10' key={item.id}>
      <button onClick={moveright} style={{visibility:lbtn?'visible':'hidden'}} className=' mr-5 '>  <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      className='size-6 text-white'
     
    >
      <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
    </svg> </button>
    <div className="max-w-sm rounded overflow-hidden shadow-lg"  ref={boxreff} >
  <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset{item.id}</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

<button onClick={moveleft} style={{visibility:rbtn?'visible':'hidden'}} className='ml-5'><svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
       className=' size-6'
    >
      <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
    </svg></button>
</div>)}
    })
  }
</>
)
}

export default Reviews





