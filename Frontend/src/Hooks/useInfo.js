/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../Store/CompySlice';

 // Import the setData action from your Redux slice

function UseInfo() {
  const [data, setDataState] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((res) => {
         setDataState(res);
       // Dispatch the setData action with the retrieved data
      });
  }, [dispatch]);
  
  return data;
}

export default UseInfo;