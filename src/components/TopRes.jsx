import React, { useEffect, useState, useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Cartt from './Cartt';

export default function TopRes() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // ✅ useRef to control scroll
  const scrollRef = useRef(null);

  // Fetch data from dp.json
  const apiattached = async () => {
    try {
      const response = await fetch("/dp.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const allData = await response.json();

      if (Array.isArray(allData)) {
        setData(allData);
      } else if (Array.isArray(allData.restaurants)) {
        setData(allData.restaurants);
      } else {
        throw new Error("JSON data format is not valid array");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    apiattached();
  }, []);

  // ✅ Scroll left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300, // scroll 300px to the left
      behavior: "smooth"
    });
  };

  // ✅ Scroll right
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 305, // scroll 300px to the right
      behavior: "smooth"
    });
  };

  if (error) {
    return <div className="text-red-600">Error: {error}</div>;
  }

  return (
    <div className='max-w-[1500px] mx-auto'>
      {/* Header */}
      <div className='flex my-5 items-center justify-between'>
        <div className='text-[25px] font-semibold'>
          Top Restaurant chains in Jodhpur</div>
        <div className='flex'>
          <div 
            onClick={scrollLeft} 
            className='cursor-pointer flex justify-center items-center w-[30px] h-[30px]
              bg-[#e2e2e7] rounded-full mx-2'>
            <FaArrowLeft />
          </div>
          <div 
            onClick={scrollRight} 
            className='cursor-pointer flex justify-center items-center w-[30px] h-[30px]
              bg-[#e2e2e7] rounded-full mx-2'>
            <FaArrowRight />
          </div>
        </div>
      </div>

      {/* Scrollable Row */}
      <div 
        ref={scrollRef}
        className='flex gap-5 overflow-x-scroll scrollbar-hide scroll-smooth'
      >
        {data.length > 0 ? (
          data.map((d, i) => (
            <Cartt {...d} key={i} />
          ))
        ) : (
          <p className='text-gray-500'>Loading restaurants...</p>
        )}
      </div>
      <hr className='my-4 border-[1px]'/>
    </div>
  );
}
