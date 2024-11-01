/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInser } from 'react';
import UseInfo from './Hooks/useInfo';
import { setData } from './Store/CompySlice';
import ProductList from './Components/ProductList';

import FilterProduct from './Components/FilterProduct';
import Header from './Pages/Header';

import { NavLink, Outlet } from 'react-router-dom';
function App() {
  
 
 
  return (
     <>
         
   
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
  );
}

export default App;



