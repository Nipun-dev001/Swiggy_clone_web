import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
  function Header () {
  const [toggle,setToggle] = useState(false); 

  const showSideMenu = () => {
  console.log("hi");
  setToggle(true);
  }
    return(
     <>
      <div className="fixed w-full h-full bg-black bg-opacity-30 duration-500" style ={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? "visible" : "hidden"
      }}>
        <div className="w-[100px] bg-slate-50 h-full"> </div>
         </div> 
             <header className="p-[15px] shadow-xl">
                 <div className="max-w-[1200px] mx-auto flex items-center gap-4 border border-red-500">
<div className="w-[50px]">
  <img src="images/SWIGGY logo.png" className="w-full border border-blue-600" alt="" />
</div>

<div className="">
  <span className="font-bold border-b-[3px] border-black">Ratanada</span> Jodhpur, Rajasthan, India
  <RxCaretDown fontSize={25} className=" font-bold inline text-[#fc8019]
  cursor-pointer" onClick={showSideMenu}/>
</div>
                 </div>
             </header>
        </>
    )
}

export default Header;