/* eslint-disable no-unused-vars */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState ,useEffect,useCallback} from "react";
import { useSelector,useDispatch } from "react-redux";
import {  SetFlag, Setsignvisibility, Setuser } from "../Store/CompySlice";
import { redirect, replace, useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Sign() {
     const [flag,setflag]=useState(false)
    const dispatch=useDispatch()
    const navigate= useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const vis=useSelector( state => state.signvisibility )
      
    const [signpage,setSignpage]=useState(true);

    const invisiblefalse=useCallback(()=>{
        dispatch(Setsignvisibility(true))
})
    const Signup=useCallback(()=>{
          navigate('/member')
       
    })

    const onSubmit = async (loginData) => {
       
        validate(loginData)
      

    };
    useEffect(()=>{
      setSignpage(vis)
    },[vis])
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

    const validate= async (loginData)=>{
        try {
        const response = await axios.post("/api/v1/user/login",{
            email: loginData.email,
            password: loginData.password,
        }) 
        if(response.data.message==='Success'){
            dispatch(SetFlag(true))
            dispatch(Setuser({
                name:response.data.statusCode.loggedInUser.name,
                email:response.data.statusCode.loggedInUser.email,
                _id:response.data.statusCode.loggedInUser._id,
                accesstoken:response.data.statusCode.accessToken
            }))
            
           
            dispatch(Setsignvisibility(true))
           
          }
        console.log(response.data)
        } catch (error) {
            console.log("Something went wrong while validating data",error.response ? error.response.data : error.message);
        }
    }
    
    
    
    return (
        <div className=" fixed inset-0 backdrop-blur-sm flex items-center justify-center  " style={{visibility:signpage?"hidden":'visible'}}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mt-10">
      
        <div className="w-full  rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 bg-[#004843]">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in <span className="ml-20" onClick={invisiblefalse}> x</span>
                </h1>
                <form className="space-y-4 md:space-y-6 text-black" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="   text-black rounded-lg  block w-full p-2.5 bg-yellow-50 " placeholder="name@company.com" required="" {...register('email')}/>
                    </div>
                   <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="text" name="password" id="password" placeholder="••••••••" className=" border border-gray-300 text-black text-sm rounded-lg  w-full p-2.5 bg-yellow-50  
                        " required="" {...register('password')} />
                    </div>
                    {/* <div>
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className=" border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-yellow-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""{...register('confirmation')} />
                    </div> */}
                    
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                        </div>
                    </div>
                    <input type="submit" className="mx-auto bg-yellow-50 ml-8 text w-2/3 rounded-lg hover:bg-transparent "/>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Does have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={Signup}>signup here</a>
                    </p>
                </form>
            </div>
        </div>
        <button className=" text-red-800"> logout </button>
    </div>
    
    </div>
    )
}

export default Sign
