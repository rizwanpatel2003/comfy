/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
function Page2() {
    let products=[]
    const data=useSelector(state => state.data);
   
    products=data.slice(21,40);
   
 return (
    <>
     <div className="grid grid-cols-3 grid-rows-6 gap-6 bg-black">
      {products.map((item)=>{
      return    (  <div className="bg-black" key={item.id}> 
      <img src={item. images[0]} alt="" className="h-2/3 m-auto rounded-xl shadow-sm  hover:shadow-lg shadow-white"/>
      <div className="m-auto text-center font-serif text-white my-3 ">
         <p>{item.title}</p>
         <p>{item.price+'$'}</p>
           </div>
      </div>
     
      )
      })}
    </div>
    <div className="inline-flex rounded-md shadow-sm import mx-44" role="group">
    <NavLink to='/Product' className={({ isActive }) => isActive ? 'bg-gray-100 text-blue-700' : 'text-gray-900'}>
      <button type="button" className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
        1
      </button>
    </NavLink>
    <NavLink to='/Product/Page2' className={({ isActive }) => isActive ? 'bg-gray-100 text-blue-700' : 'text-gray-900'}>
      <button type="button" className="px-4 py-2 text-sm font-medium bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
        2
      </button>
    </NavLink>
    <NavLink to="/Product/Page3" className={({ isActive }) => isActive ? 'bg-gray-100 text-blue-700' : 'text-gray-900'}>
      <button type="button" className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
        3
      </button>
    </NavLink>
  </div>
   </>  
 )   
}

export default Page2
