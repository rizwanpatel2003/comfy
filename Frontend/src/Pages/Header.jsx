/* eslint-disable no-unused-vars */
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useCallback ,useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {NavLink, useNavigate} from 'react-router-dom'
import { Addcart, Setsignvisibility } from '../Store/CompySlice'
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

function Header() {
  const dispatch=useDispatch()
  const navigate= useNavigate()
  const log=useSelector(state=> state.flag)
       useGSAP(()=>{
          gsap.from("#homebar",{
                 opacity:0,
                 y:20,
                 duration:1,
                 delay:1,
                 stagger:true
                
          })
       })
       const no= useSelector((state)=>  state.page );
       const iconcart=useCallback(()=>{
            navigate('/Cart');
       })
       const [scrollYPosition, setScrollYPosition] = useState(true);
       const notify = () => toast.success('User logged in Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
   
        });;    

const handleScroll = () => {
  window.addEventListener('scroll', ()=>{
    const newScrollYPosition = window.scrollY;
     if(newScrollYPosition<600){
      setScrollYPosition(true);
     }else{
      setScrollYPosition(false);
     }
  });
    
};
const visiblefalse=useCallback(()=>{
        log ? navigate('/profile'): dispatch(Setsignvisibility(false))
})
const cart= useCallback( async()=>{
  try {
    const response = await axios.get('api/v1/user/getcart', {
      params: {
        email: 'rizwanpatelmalipatel@gmail.com'
      }})
      const cartproducts=response.data.data[0].items 
      cartproducts.forEach(element => {
            dispatch(Addcart({
              id:element.product_id,
            image:element.image,
             title:element.title  ,
            quantity:element.quantity,
            price:element.price,
           

            }))
      });
     console.log(cartproducts)
  
   
  } catch (error) {
   console.log("Something went wrong while validating data",error.response ? error.response.data : error.message);
   
  }
})
 useEffect(()=>{
  handleScroll();
 },[scrollYPosition])
 useEffect(()=>{
   if(log===true){
    notify();
    cart()
   }
 },[log])
      
    return (
    <>
   <div className="  flex  w-full h-16 font-serif  items-center text-white sticky top-0 left-0 right-0  " style={{backgroundColor:scrollYPosition?'transperent':'#004843'}}>
  <div className="w-1/4 text-center">
    <button className="bg-[#faf4d3] text-4xl w-11 text-black" onClick={()=> console.log(no)} >C</button>
  </div>

  <div className="w-1/2" id='homebar'>
    <ul className="flex justify-evenly text-xl font-thin ">
       <li>  <NavLink to='/'>Home</NavLink></li>
      <li>  <NavLink to= {`/Product/page/${no}`}>Products</NavLink></li>
      <li>  <NavLink to='/About'>About</NavLink></li>
      <li>  <NavLink to='/Cart'>Cart</NavLink></li>
    </ul>
  </div>
  <div className="w-1/6 ml-20 flex justify-evenly">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 "> 
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 hover:scale-125" onClick={iconcart}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      className=' size-6'
      onClick={visiblefalse}
    >
      <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
    </svg>
  </div>
</div>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
</>


    )
}

export default Header
