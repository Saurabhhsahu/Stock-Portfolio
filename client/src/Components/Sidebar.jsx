import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-gray-900 text-gray-300 w-[250px] p-6 min-h-screen flex flex-col">
      {/* Logo Section */}
      <div className="mb-2 py-2 px-4">
        <h2 className="text-white text-xl font-bold cursor-pointer">DeviasKit</h2>
      </div>

      <hr className="border-gray-700 mb-8" />

      {/* Menu Items */}
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center mb-2 py-2 px-4 rounded ${
                isActive ? 'bg-[#005CC4] text-white' : 'hover:text-white '
              }`
            }
          > 
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/my-stocks"
            className={({ isActive }) =>
              `flex items-center mb-2 py-2 px-4 rounded ${
                isActive ? 'bg-[#005CC4] text-white' : 'hover:text-white '
              }`
            }
          >
            My Stocks
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
