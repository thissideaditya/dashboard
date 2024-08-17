import React from 'react'
import { FaSearch, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import data from '../data.json';

function Header() {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

  return (
    <div className='flex justify-between mt-2 mb-2 ml-6 mr-6 items-center'>
        <div className='flex gap-2'>
            <p className='text-[#d0d0d0]'>Home</p>
            <span>></span>
            <p className='text-sky-800 font-bold'>Dashboard V2</p>
        </div>
        <div>
            <label class="relative block">
                <span class="sr-only">Search</span>
                <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-blue-200">
                    <FaSearch />
                </span>
                <input onChange={(e) => {
                    let temp = data.categories.filter(category => category.name.toLowerCase().includes(e.target.value.toLowerCase()));
                    dispatch({ type: 'UPDATE_WIDGET', payload: { categories: temp || data.categories } });
                    
                }} class="placeholder:italic placeholder:text-slate-400 block bg-white w-[200%] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-blue-500 font-semibold" placeholder="Search anything..." type="text" name="search"/>
            </label>
        </div>
        <div>
            <FaUser />
        </div>
    </div>
  )
}

export default Header
