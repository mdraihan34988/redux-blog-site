import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addblog } from "../redux/blogs/actions";
import Swal from "sweetalert2";

export default function Modal() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [Title,setTitle] = useState('');
  const [Category,setCategory] = useState('');
  const [Author,setAuthor] = useState('');
  const [ReadTime,setReadTime] = useState(0);
  const [BlogImage,setBlogImage] = useState('https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80');
  const [AuthorImage,setAuthorImage] = useState('https://avatars.githubusercontent.com/u/73503432');

  const handleSubmit = (e) => {
    e.preventDefault();
    let PublishDay = new Date().toLocaleDateString('en-us', {month:"short", year:"numeric",  day:"numeric"})
    dispatch(addblog({Title,Category,Author,ReadTime,BlogImage,AuthorImage,PublishDay}));
    setShowModal(false);
    setTitle('');
    setAuthor('');
    setCategory('');
    setReadTime('');
    Swal.fire('Blog Added Successfully','','success')
  }
  return (
    <>
      <button
        className="bg-yellow-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        + Write Blog
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Write New Blog
                  </h3>
                  
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form onSubmit={handleSubmit}>
                <div className="relative p-6 flex-auto">
                  {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p> */}
                
                    <div className="mb-6">
                        <label for="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                        <input value={Author} onChange={(e) => setAuthor(e.target.value)} type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                    </div>
                    <div className="mb-6">
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Blog Category</label>
                        <select value={Category} onChange={(e) => setCategory(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option value="" selected disabled >Blog Category</option>
                        <option value="Sports">Sports</option>
                        <option value="Drama">Drama</option>
                        <option value="Article">Article</option>
                        <option value="Technology">Technology</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Blog Title</label>
                        <textarea value={Title} onChange={(e) => setTitle(e.target.value)} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Blog Title..." required></textarea>

                    </div>
                    <div className="mb-6">
                        <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Read Time</label>
                        <input value={ReadTime} onChange={(e) => setReadTime(parseInt(e.target.value))} type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min={0} placeholder="" required/>

                    </div>
                
                </div>
                
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  {/* <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button> */}
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    // onClick={() => setShowModal(false)}
                  >
                    Add Blog    
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}