import React, { useCallback } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import SearchImage from '../assets/search.svg' 
import {textchange,clearall} from '../redux/filters/actions'

function Search() {
  const filters = useSelector((state) => state.filters);
  const { text,author,categories } = filters;
  const dispatch = useDispatch();

  const debounce = (fn,delay) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn.apply(context, args);
      },delay)
    }
  }

  const handleInputChange = (value) => {
    console.log('changing')
      dispatch(textchange(value))
  }

  const handleClear = () => {
    document.getElementById('searchBar').value='';
    dispatch(clearall())
  }

  const debounceHandleChange = useCallback(debounce((value)=>handleInputChange(value),500),[handleInputChange])

  return (
    <><div
        className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
    >
        <input
            className="outline-none border-none bg-gray-50 h-full w-full mr-2"
            id="searchBar"
            type="search"
            name="search"
            // value = {text}
            onChange = {(e) => debounceHandleChange(e.target.value)}
            placeholder="Search"
        />
        <img
            className="inline h-6 cursor-pointer"
            src={SearchImage}
            alt="Search"
        />
        
    </div>
     {(text || author || categories.length>0) && <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 my-1 px-4 mx-4 rounded" onClick={handleClear}>
          Clear All Filter
      </button>}</>
  )
}

export default Search