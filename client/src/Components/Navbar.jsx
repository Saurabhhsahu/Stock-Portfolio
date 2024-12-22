import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {user} = useUserContext()

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogOut = async() => {
    
  }

  return (
    <nav className="bg-white w-full shadow flex justify-between items-center px-6 py-4">
      {/* Left Section (Logo or Title) */}
      <div className="text-xl font-bold text-gray-800">DeviasKit</div>

      {/* Right Section (Profile Picture and Dropdown) */}
      <div className="relative">
        {/* Profile Picture */}
        <div
          className="flex items-center cursor-pointer"
          onClick={handleDropdownToggle}
        >
          <img
            src={user.image} // Replace with your profile image URL
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-0"></span>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
            <div className="px-4 py-2">
              <p className="text-sm font-semibold text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <hr className="border-gray-200" />
            <button
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
              onClick={handleLogOut} // Replace with your logout function
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
