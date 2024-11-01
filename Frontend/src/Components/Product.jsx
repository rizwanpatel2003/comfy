/* eslint-disable no-unused-vars */
import React ,{useEffect} from 'react'
import ProductList from './ProductList'
import FilterProduct from './FilterProduct'
import { useDispatch, useSelector } from 'react-redux'
import { Getproducts } from '../Store/CompySlice'
function Product() {  
  
    return (
         <>
         <FilterProduct></FilterProduct>
         <ProductList></ProductList>
    
         </>
    )
}

export default Product
 