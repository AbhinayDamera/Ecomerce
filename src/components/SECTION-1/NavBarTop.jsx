import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavBarTop = () => {
  return (
    
    <div className="w-full bg-gray-200 px-4 py-2 flex flex-col md:flex-row justify-between items-center text-sm">

  
      <div className="font-medium text-center md:text-left">
        Welcome to worldwide Megamart!!
      </div>

     
      <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 mt-2 md:mt-0">

        <div className="flex items-center gap-1">
          <i className="fa-solid fa-location-dot text-blue-500"></i>

          <span>Deliver to</span>
        </div>

        <div className="hidden md:block w-[1px] h-5 bg-blue-300"></div>

        <div className="flex items-center gap-1">
          <i className="fa-solid fa-truck text-blue-500"></i>
          <span>Track your order</span>
        </div>

        
        <div className="hidden md:block w-[1px] h-5 bg-blue-300"></div>

        <div className="flex items-center gap-1">
          <i className="fa-solid fa-percent text-blue-500"></i>
          <span>All Offers</span>
        </div>

      </div>

    </div>
  );
};

export default NavBarTop;