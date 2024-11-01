/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function FilterProduct() {
    let products=[]
     
     products=useSelector(state => state.data);
    const mySet1 = new Set();
    
     products.forEach(element => {
        mySet1.add(element.category.name);
     });

    return (
        <div className="grid grid-cols-4 w-11/12 bg-gray-800 m-auto gap-2 text-white font-mono my-10">
        <div>
          <label htmlFor="pet-select">Search product</label>
          <input type="text" className="rounded-lg bg-slate-500 h-8 w-full" placeholder="Search by name" />
        </div>
      
        <div>
          <label htmlFor="pet-select">Select Category</label>
          <select id="pet-select" className="rounded-lg bg-slate-500 h-8 w-full">
            <option value="">All</option>
            {Array.from(mySet1).map(x =>{ x.toUpperCase()
            return <option key={x} value={x}>{x}</option>})}
          </select>
        </div>
      
        <div>
          <label htmlFor="pet-select">Select Company</label>
          <select id="pet-select" className="rounded-lg bg-slate-500 h-8 w-full">
            <option value="">All</option>
          </select>
        </div>
      
        <div>
          <label htmlFor="pet-select">Sort By</label>
          <select id="pet-select" className="rounded-lg bg-slate-500 h-8 w-full">
            <option value="">All</option>
            <option value="">High</option>
            <option value="">Low</option>
          </select>
        </div>
      
    
        <div>
          <label htmlFor="pet-select">Price:</label>
          <input type="range" className="rounded-lg bg-slate-500 h-8 w-full accent-green-300" />
        </div>
      
        <div>
          <label htmlFor="pet-select">Free Shipping:</label>
          <input type="checkbox" name="" id="" className="size-5 mx-20 accent-green-300" />
        </div>
        <div>
          <button className="bg-slate-500 rounded-lg p-1 w-full mt-4">Search</button>
        </div>
        <div>
          <button className="bg-slate-500 rounded-lg p-1 w-full mt-4">Search</button>
        </div>
      </div>
    )
}

export default FilterProduct
