import React, { useState } from 'react';
import { PiCaretDownBold } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { CiDiscount1 } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { FcLike } from "react-icons/fc";




export default function Header () {
    const [toggle, setToggle] = useState(false);

    const showSideMenu =() =>{
        setToggle(true); 
    }
    const hideSideMenu =() =>{
        setToggle(false);
    }
    const links = [
        {
            icon: <GoSearch/>,
            name: "Search"
        },
        {
            icon: <CiDiscount1/>,
            name: "Offers",
            sup: "New"
        },
         {
            icon: <IoIosHelpCircle/>,
            name: "Help"
        },
        {
            icon: <FaRegUserCircle/>,
            name: "Sign-in"
        },
        {
            icon: <FaShoppingCart/>,
            name: "Cart",
            sup: "0"
        }
    ]
    return(
<>
<div
  className="fixed bg-black duration-500 w-full h-full bg-opacity-30"
  onClick={hideSideMenu}
  style={{
    opacity: toggle ? 1 : 0,
    visibility: toggle ? "visible" : "hidden",
    zIndex: 9999 // <-- Add this line
  }}
>
  <div
    onClick={(e) => {
      e.stopPropagation();
    }}
    className="w-[400px] bg-white h-full fixed top-0 transition-all duration-700"
    style={{
      left: toggle ? '0%' : '-100%',
      zIndex: 10000 // <-- Add this line
    }}
  >
    <div className='ml-4'>
      {/* User Profile */}
    <div className="flex items-center gap-3 border-b pb-4">
      <FaRegUserCircle className="text-3xl text-orange-500" />
      <div>
        <div className="font-bold text-lg">Hello, Guest!</div>
        <div className="text-sm text-gray-500">Sign in to get personalized offers</div>
      </div>
    </div>

 {/* Search Bar */}
    <div className="flex items-center gap-2 border rounded px-3 py-2">
      <GoSearch className="text-xl text-gray-500" />
      <input
        type="text"
        placeholder="Search for restaurants or dishes"
        className="outline-none flex-1"
      />
    </div>

     {/* Menu Links */}
    <nav className="flex flex-col gap-4">
      <button className="flex items-center gap-3 text-lg hover:text-orange-500">
        <CiDiscount1 className="text-2xl" /> Filter <span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded">New</span>
      </button>
      <button className="flex items-center gap-3 text-lg hover:text-orange-500">
        <IoIosHelpCircle className="text-2xl" /> Help
      </button>
      <button className="flex items-center gap-3 text-lg hover:text-orange-500">
        <FcLike className="text-2xl hover:scale-110 duration-30" /> Favourites <span className="ml-2 text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded">0</span>
      </button>
      <button className="flex items-center gap-3 text-lg hover:text-orange-500">
        <FaRegUserCircle className="text-2xl" /> Sign in
      </button>
    </nav>

     {/* Extra Features */}
    <div className="mt-6 border-t pt-4 flex flex-col gap-3 text-gray-700">
      <button className="hover:text-orange-500 text-left">Order History</button>
      <button className="hover:text-orange-500 text-left">Saved Addresses</button>
      <button className="hover:text-orange-500 text-left">Favorite Restaurants</button>
      <button className="hover:text-orange-500 text-left">Settings</button>
      <button className="hover:text-orange-500 text-left">Logout</button>
    </div>
  </div>
</div>
  
</div>
<header className=" w-full p-[15px] shadow-xl">
<div className=" mx-auto flex items-center">
    
    <div className="w-[100px]">
<img src="images/Swiggy logo.png" className="w-full" alt="" />
    </div>
<div className="">
   <span className="font-bold border-b-[3px] border-black"> Ratanada </span> 
   Jodhpur, Rajasthan, India <PiCaretDownBold onClick={showSideMenu} className="inline text-[16px]
    text-orange-600 cursor-pointer"/>
</div>
<div className='ml-auto'>
    <nav className="flex list-none gap-7 p-[16px] font-semibold text-[18px]">
       {
        links.map(
            (link,index) =>{
                return <li key={index} className='flex hover:text-[#fc8019] items-center gap-2'>
                {link.icon}
                {link.name}
           <sup className='text-[#fc8019]'>{link.sup}</sup>
                </li>
            }
        )
       }
    </nav>
</div>
</div>
</header>
</>
    );
}
