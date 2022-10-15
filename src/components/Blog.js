import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { categorychange, authorchange} from '../redux/filters/actions';

function Blog({blog}) {
    const filters = useSelector((state) => state.filters);
    const {categories,author} = filters;
    const dispatch = useDispatch();

    const handleCategoryChange = (category) => {
        if (categories.includes(category)) {
            dispatch(categorychange(category, "removed"));
        } else {
            dispatch(categorychange(category, "added"));
        }
    };

    const handleAuthorChange = (value) => {
        if(value === author) {
            dispatch(authorchange(''))
        } else {
            dispatch(authorchange(value))
        }        
    }
  
  return (
    <div
        className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
        <div className="flex-shrink-0">
            <img
                className="h-48 w-full object-cover"
                src={blog?.BlogImage}
                alt=""
            />
        </div>

        <div
            className="flex-1 bg-white p-6 flex flex-col justify-between"
        >
            <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                    <span
                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
                        onClick={()=>blog?.Category && handleCategoryChange(blog.Category)}
                    >
                        {blog?.Category}
                    </span>
                </p>
                <a href="#" className="block mt-1">
                    <p
                        className="text-xl font-semibold text-gray-900"
                    >
                        {blog?.Title}
                    </p>
                </a>
            </div>
            <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                    <img
                        className="h-10 w-10 rounded-full cursor-pointer"
                        src={blog?.AuthorImage}
                        alt=""
                        onClick={()=>blog?.Author && handleAuthorChange(blog.Author)}
                    />
                </div>
                <div className="ml-3">
                    <p
                        className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
                        onClick={()=>blog?.Author && handleAuthorChange(blog.Author)}
                    >
                        {blog?.Author}
                    </p>
                    <div
                        className="flex space-x-1 text-sm text-gray-500"
                    >
                        <time dateTime={blog?.PublishDay}
                            >{blog?.PublishDay}
                        </time>
                        <span aria-hidden="true">
                            &middot;
                        </span>
                        <span> {blog?.ReadTime} min read </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog