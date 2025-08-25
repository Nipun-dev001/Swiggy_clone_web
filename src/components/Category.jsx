import React, { useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Category() {
  const scrollRef = useRef(null);

  const categoryData = [
    { name: 'Biryani', image: '/images/biryani.webp' },
    { name: 'Dhokla', image: '/images/dhokla.webp' },
    { name: 'Idlii', image: '/images/idli.png' },
    { name: 'Tea', image: '/images/tea.webp' },
    { name: 'Samosa', image: '/images/samosa.webp' },
    { name: 'Poha', image: '/images/poha.png.png' },
    { name: 'Cake', image: '/images/cake.png.png' },
    { name: 'Chole Bhature', image: '/images/chole bhature.webp' },
    { name: 'Paratha', image: '/images/paratha.png.png' },
    { name: 'Pakode', image: '/images/pakode.png' },
    { name: 'Khichdi', image: '/images/khichdi.webp' },
    { name: 'Juice', image: '/images/juice.webp' },
    { name: 'Kachori', image: '/images/kachori.webp' },
    { name: 'Sambhar Vada', image: '/images/sambhar vada.webp' },
    { name: 'Pori', image: '/images/poori.png.png' },
    { name: 'Pav Bhaji', image: '/images/Pav bhaji.png.png' },
    { name: 'Coffee', image: '/images/coffee.png' },
    { name: 'Pani Pori', image: '/images/pani pori.png.png' },
    { name: 'Shake', image: '/images/shake.webp' },
    
  ];
  const ITEM_WIDTH = 120; // Adjust if your design changes
const ITEMS_PER_SCROLL = 3;

  const scrollLeft = () => {
    if (scrollRef.current.scrollLeft <= 0) {
      // Jump to end if at start
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    } else {
      scrollRef.current.scrollBy({ left: -ITEM_WIDTH * ITEMS_PER_SCROLL, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    if (scrollRef.current.scrollLeft >= maxScrollLeft) {
      // Jump to start if at end
      scrollRef.current.scrollLeft = 0;
    } else {
      scrollRef.current.scrollBy({ left: ITEM_WIDTH * ITEMS_PER_SCROLL, behavior: 'smooth' });
    }
  };
  return (
    <div className='max-w-[1500px] mx-auto my-4'>
      {/* Header */}
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-[25px] font-semibold'>What's in your mind?</h2>
        <div className='flex gap-2'>
          <button onClick={scrollLeft} className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full">
            <FaArrowLeft />
          </button>
          <button onClick={scrollRight} className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Scrollable Categories */}
      <div
        ref={scrollRef}
        className='flex gap-4 overflow-x-auto no-scrollbar scroll-smooth'
      >
        {categoryData.map((cat, index) => (

          <div key={index} className='w-[100px] shrink-0 text-center'>
            <img src={cat.image} alt={cat.name} className='w-full h-[100px] object-contain rounded-full border border-gray-200 shadow-lg shadow-gray-400/50 hover:shadow-orange-500 transition duration-300 ease-in-out' />
            
            <p className='mt-2 text-sm'>{cat.name}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}
  