/* eslint-disable no-unused-vars */

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 import {Store} from './Store/Store.js'
 import { Provider, connect } from 'react-redux';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home.jsx';


import About from './Pages/About.jsx';
import Page2 from './Pages/Page2.jsx';
import Page3 from './Pages/Page3.jsx';
import Cart from './Pages/Cart.jsx';
import ProductList from './Components/ProductList.jsx';
import Solo from './Pages/Solo.jsx';
import Form from './Components/Form.jsx';
import { ToastContainer } from 'react-toastify';
import Profile from './Components/Profile.jsx';
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='Product/page/:pageNumber' element={<ProductList/>}/>
     
      <Route path='About' element={<About/>}/>
      {/* <Route path='Product/Page2' element={<Page2/>}/>
      <Route path='Product/Page3' element={<Page3/>}/> */}
      <Route path='Cart' element={<Cart/>}/>
      <Route path='Product/item' element={<Solo/>}/>
      <Route path='member' element={<Form/>}/>
       <Route path='profile' element={<Profile/>}/>
    </Route>
  )
  )
  
createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <RouterProvider router={router}></RouterProvider>

  </Provider>,
)
