/* eslint-disable no-unused-vars */

import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Getproducts, setData, SetEnd, setIndo, Setpage, SetStart } from '../Store/CompySlice';
import { NavLink, useParams, useNavigate } from 'react-router-dom';

function ProductList() {
  const dispatch = useDispatch();

  
  const data = useSelector(state => state.data);
  const start = useSelector(state => state.start);
  const end = useSelector(state => state.end);
  const inpro = Array.from(data).slice(15, 30);
  const [products, setProducts] = useState(inpro);
  const [cat, setCat] = useState('All');
  const [price, setPrice] = useState('All');
  const [search,setSearch]= useState("");

  

  const mySet1 = new Set();
  if (Array.isArray(data) && data.length > 0) {
    data.forEach(element => {
      mySet1.add(element.category);
    });
  }

  const handleCategoryChange = (value) => {
    setCat(value);
  };

  const handlePriceChange = (value) => {
    setPrice(value);
  };

  const handleclickedItem = (item) => {
     console.log(item.images[0])
    dispatch(setIndo({
       id: item._id,
      Title: item.title,
      Price: item.price,
      Desp: item.description,
      img: item.images[0],
    }));
  };

  const filterOut = useCallback(() => {
    let filteredProducts = data;
    if (cat !== 'All') {
      filteredProducts = filteredProducts.filter(item => item.category === cat);
    } else if (cat === 'All') {
      filteredProducts = data.slice(start, end);
    }
    if (price === 'High') {
      filteredProducts = filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (price === 'Low') {
      filteredProducts = filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }
    setProducts(filteredProducts);
  }, [cat,price,start, end]);
  

  // useEffect(() => {
  //   filterOut();
  // }, [cat,price,filterOut]);
  useEffect(()=>{
      filterOut()
  },[start,end])

  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const currentPage = parseInt(pageNumber) || 1;

  useEffect(() => {
    dispatch(Setpage(currentPage));
    if (currentPage === 1) {
      dispatch(SetStart(0));
      dispatch(SetEnd(15));
    } else if (currentPage === 2) {
      dispatch(SetStart(16));
      dispatch(SetEnd(30));
    } else {
      dispatch(SetStart(31));
      dispatch(SetEnd(45));
    }
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    navigate(`/Product/page/${newPage}`);
  };
  const nameSearch=useCallback(()=>{ 
    var namedata;
       if(search!==""){
        namedata=data.filter((item)=>  item.title.includes(search)==true)
       }
    setProducts(namedata) 
    setSearch("")
  },[search])

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error</div>;

  return (
    <>
         <div className=' mx-96 mt-10 flex'>
         
          <input 
            type="text" 
            id="search-product"
            className="rounded-lg bg-slate-500 h-8 w-1/2 " 
            placeholder="Search by name" 
            onChange={(e)=> setSearch(e.target.value)}
          />

    <button onClick={nameSearch}>
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      className=' size-6 ml-3 mt-1'
    >
      <path d="M19 11 A8 8 0 0 1 11 19 A8 8 0 0 1 3 11 A8 8 0 0 1 19 11 z" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
    </button>
         </div>
       <div className="grid grid-cols-4 w-11/12 bg-gray-800 m-auto gap-2 text-white font-mono my-10 items-center">
        {/* <div>
          <label htmlFor="search-product">Search product</label>
          <input 
            type="text" 
            id="search-product"
            className="rounded-lg bg-slate-500 h-8 w-full" 
            placeholder="Search by name" 
          />
        </div>   */}
        <div>
          <label htmlFor="pet-select">Select Category</label>
          <select 
            id="pet-select" 
            className="rounded-lg bg-slate-500 h-8 w-full mb-5" 
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="All">All</option>
            {Array.from(mySet1).map(x => (
              <option key={x} value={x}>{x}</option>
            ))}
          </select>
        </div>

        {/* <div>
          <label htmlFor="pet-select">Select Company</label>
          <select 
            id="pet-select" 
            className="rounded-lg bg-slate-500 h-8 w-full"
          >
            <option value="">All</option>
          </select>
        </div> */}

        <div>
          <label htmlFor="pet-select">Sort By</label>
          <select 
            id="pet-select" 
            className="rounded-lg bg-slate-500 h-8 mb-5 w-full " 
            onChange={(e) => handlePriceChange(e.target.value)}
          >
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* <div>
          <label htmlFor="pet-select">Price:</label>
          <input 
            type="range" 
            className="rounded-lg bg-slate-500 h-8 w-full accent-green-300" 
          />
        </div> */}

        {/* <div>
          <label htmlFor="pet-select">Free Shipping:</label>
          <input 
            type="checkbox" 
            name="" 
            id="" 
            className="size-5 mx-20 accent-green-300" 
          />
        </div> */}

        <div>
          <button 
            className="bg-slate-500 rounded-lg p-1 w-full " 
            onClick={filterOut}
          >
            Search
          </button>
        </div>

        <div>
          <button 
            className="bg-slate-500 rounded-lg p-1 w-full "
          >
            reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-5 gap-6 bg-black px-6 ">
        {products.map((item, index) => (
          <div 
            className=" bg-gray-800 pt-4 rounded-md" 
            key={item._id || index}
          >
            <img 
              src={item.images[0]} 
              alt="" 
              className="h-2/3 m-auto rounded-xl shadow-sm  hover:shadow-lg shadow-white" 
            />
            <div 
              className="m-auto text-center font-serif text-white my-3 text-lg "
            >
              <NavLink to='/Product/item'>  
                <p 
                  onClick={() => {
                    handleclickedItem(item);
                    
                  }}
                >
                  {item.title}
                </p>
              </NavLink>
              <p>{item.price + '$'}</p>
            </div>
          </div>
        ))}
      </div>
       <div className=' flex flex-col justify-center items-center mt-10'>
      <nav>
        <ul className='inline-flex -space-x-px text-sm'>
          {[1, 2, 3].map((page) => (
            <li 
              key={page} 
              className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              <button 
                onClick={ ()=> handlePageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </>
  );
}

export default ProductList;