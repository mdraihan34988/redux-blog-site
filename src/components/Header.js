import React from 'react'
import Logo from '../assets/blog.png'
import Modal from './Modal'
export default function Header() {
  return (
    <nav className="bg-slate-100 shadow-md">
        <div
            className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
        >
            <a href="/">
                <img
                    className="h-10"
                    src={Logo}
                    alt="Learn with Sumit"
                />
            </a>
            <Modal/>
        </div>
        
    </nav>
  )
}
