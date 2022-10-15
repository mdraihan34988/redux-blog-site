import React from 'react'
import { useSelector } from 'react-redux'
import Blog from './Blog';

function Blogs() {
    const blogs = useSelector((state) => state.blogs);
    const filters = useSelector((state) => state.filters);

    const filterByCategories = (blog) => {
        const { categories } = filters;
        if (categories.length > 0) {
            return categories.includes(blog?.Category);
        }
        return true;
    };

    const filterByText = (blog) => {
        const { text } = filters;
        if (text) {
            let smallText = text.toLowerCase();
            let smallTitle = blog?.Title.toLowerCase();
            
            return smallTitle.includes(smallText)
        }
        return true;
    };

    const filterByAuthor = (blog) => {
        const { author } = filters;
        if (author) {

            return author === blog.Author
        }
        return true;
    };

    const NumberOfBlogs = blogs.filter(filterByText).filter(filterByAuthor).filter(filterByCategories).length;

  return (
    <section
            className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >
        <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
                <h2
                    className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
                >
                    {NumberOfBlogs>0 ? <>{NumberOfBlogs} <sapn>BLOGS ARE HERE</sapn></> : 'No Blog'}
                </h2>
                <p
                    className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Ipsa libero labore natus atque, ducimus sed.
                </p>
            </div>

   
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {blogs.filter(filterByText).filter(filterByAuthor).filter(filterByCategories)
                .map((blog,key) => (
                    <Blog key={blog.Id} blog={blog}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Blogs