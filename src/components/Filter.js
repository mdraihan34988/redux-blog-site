import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { categorychange } from '../redux/filters/actions';

function Filter() {

    const filters = useSelector((state) => state.filters);
    const {categories,text,author} = filters;
    const dispatch = useDispatch();

    const handleCategoryChange = (category) => {
      
      if (categories.includes(category)) {
          dispatch(categorychange(category, "removed"));
      } else {
          dispatch(categorychange(category, "added"));
      }
  };

  return (
    <>
     {(text || author || categories.length>0) &&
      <p
          className="mt-1 max-w-2xl mx-auto text-sm font-bold text-gray-500 sm:mt-4"
      >
          -- Filter By -- <br/>{author ? <>Author : {author}<br/></> : <></>}
          {text ? <>Search text : {text}<br/></> : <></>}
          {categories?.length>0 ? <>Category : {categories.map((category,key) => category + " | ")} <br/></> : <></>}
      </p>}
    <div
        className="border mt-2 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
    >
        <p className="ml-2 text-sm font-sm text-gray-900 dark:text-gray-300 text-right">
          Filter by Category : 
        </p>

      <div className="flex justify-center mx-2">
        <div>
          <div className="form-check">
            <input
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              defaultValue=""
              id="flexCheckDefault1"
              onChange={()=>handleCategoryChange('Article')} checked={categories.includes('Article')}
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexCheckDefault1"
            >
              Article
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-2">
        <div>
          <div className="form-check">
            <input
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              defaultValue=""
              id="flexCheckChecked1"
              
              onChange={()=>handleCategoryChange('Drama')} checked={categories.includes('Drama')}
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexCheckChecked1"
            >
              Drama
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-2">
        <div>
          <div className="form-check">
            <input
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              defaultValue=""
              id="flexCheckDefault"
              onChange={()=>handleCategoryChange('Sports')} checked={categories.includes('Sports')}
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexCheckDefault"
            >
              Sports
            </label>
          </div>

        </div>
      </div>
      <div className="flex justify-center mx-2">
        <div>
          <div className="form-check">
            <input
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              defaultValue=""
              id="flexCheckChecked"
              
              onChange={()=>handleCategoryChange('Technology')} checked={categories.includes('Technology')}
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexCheckChecked"
            >
              Technology
            </label>
          </div>
        </div>
      </div>
        {/* <input onChange={()=>handleCategoryChange('Article')} checked={categories.includes('Article')} id="default-checkbox" type="checkbox" value="" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 float-right"/>
        <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Article</label>
        <input onChange={()=>handleCategoryChange('Drama')} checked={categories.includes('Drama')} id="default-checkbox" type="checkbox" value="" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "/>
        <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Drama</label>
        <input onChange={()=>handleCategoryChange('Sports')} checked={categories.includes('Sports')} id="default-checkbox" type="checkbox" value="" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "/>
        <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Sports</label>
        <input onChange={()=>handleCategoryChange('Technology')} checked={categories.includes('Technology')} id="default-checkbox" type="checkbox" value="" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "/>
        <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Technology</label> */}
       
    </div>
    </>
  )
}

export default Filter