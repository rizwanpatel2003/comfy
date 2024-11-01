/* eslint-disable no-unused-vars */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState ,useEffect} from "react";
import { useDispatch } from "react-redux";
import { Setsignvisibility } from "../Store/CompySlice";

function Form() {
    const dispatch=useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState();

    const onSubmit = async (formData) => {
        setData(formData); // Set the form data

        console.log(formData.email); // Log the email

        // Call passdata after setting data
        await passdata(formData);
    };

    const passdata = async (formData) => {
        try {
            const response = await axios.post("/api/v1/user/member", {
                email: formData.email,
                name: formData.name,
                password: formData.password,
            });
            console.log(response);
        } catch (error) {
            console.log("Something went wrong while passing data",error.response ? error.response.data : error.message);
        }
    };

    useEffect(()=>{
        dispatch(Setsignvisibility(false))
    })
  
    return (
   
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mt-10">
      
      <div className="w-full  rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 bg-[#004843]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form className="space-y-4 md:space-y-6 text-black" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="   text-black rounded-lg  block w-full p-2.5 bg-yellow-50 " placeholder="name@company.com" required="" {...register('email')}/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
   
                      <input type="text" name="name" id="name" className="   text-black text-sm rounded-lg  block w-full p-2.5 bg-yellow-50 " placeholder="__name" required="" {...register('name')}/>
                  </div>
                
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className=" border border-gray-300 text-black text-sm rounded-lg  w-full p-2.5 bg-yellow-50  
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
                      Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>

    );
}

export default Form
