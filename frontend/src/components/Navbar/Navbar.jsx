import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGripLines } from "react-icons/fa";
// import { useState } from 'react';

const Navbar = () => {
    const links=[
        {
        title: "Home",
        link: "/"
        },
        // {
        // title: "About US",
        // link: "/about-us",
        // },
        // {
        // title: "Genres",
        // link: "/genres",
        // },
        {
            title: "All Books",
            link: "/all-books",
            },
        // {
        //     title: "Wishlist",
        //     link: "/wishlist",
        //     },
        {
            title: "Cart",
            link: "/cart",
            },
        {
            title: "Profile",
            link: "/profile",
            },
    ]
    const [MobileNav, setMobileNav] = useState("hidden");
  return (
    <>
    <nav className="z-50 relative flex bg-sky-600 text-white px-8 py-4 items-center justify-between">
        <Link to="/" className="flex items-center" >
            <img 
        className="h-10 me-4"
        src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png" alt="logo"/>
            <h1 className="text-2xl font-semibold">InkyReads</h1></Link>
        <div className="nav-links-InkyReads block md:flex items-center gap-4 ">
         <div className="hidden md:flex gap-4">
            {
            links.map((items, i)=>(
                <Link to={items.link} className="hover:text-blue-500 transition-all duration-300" 
                key={i}
                >
                    {items.title}</Link>
            ))}
            </div>
      <div className="hidden md:flex gap-4">
        <Link to="/LogIn" className="px-4 py-1 border border-blue-500 rounded hover:bg-blue-500 hover:text transition-all duration-300">LogIn</Link>
        <Link to="/SignUp" className="px-4 py-1 bg-blue-500 rounded hover:bg-white hover-text-amber-800 transition-all duration-300 text-amber-800 ">SignUp</Link>
      </div>
      <button className="text-white text-2xl hover:text-sky-500" 
      onClick={()=> 
      MobileNav === "hidden" 
      ? setMobileNav("block") 
      : setMobileNav("hidden")
      }><FaGripLines /></button>
      </div>
    </nav>
    <div className={`${MobileNav} bg-white h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`} >{
            links.map((items, i)=>(
                <Link to={items.link} 
                className={`${MobileNav} text-sky-500 text-4xl mb-8 font-semibold hover:text-blue-500 transition-all duration-300`} 
                key={i}
                onClick={()=> 
                    MobileNav === "hidden" 
                        ? setMobileNav("block") 
                         : setMobileNav("hidden")
      }
                >
                    {items.title}{" "}</Link>
            ))}
        <Link to="/LogIn" className={`${MobileNav} px-8 mb-8 text-3xl font-semibold py-2 border border-sky-500 rounded text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300`}>LogIn</Link>
        <Link to="/SignUp" className={`${MobileNav} px-8 mb-8 text-3xl font-semibold py-2 bg-sky-500 rounded hover:bg-white hover:text-amber-800 transition-all duration-300 text-white `}>SignUp</Link>
            </div>
    </>
  )
}

export default Navbar
