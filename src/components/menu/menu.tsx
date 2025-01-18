// src/components/Menu.tsx

import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <nav className="p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "bg-blue-700 px-3 py-2 rounded-md text-white font-medium" 
                : "px-3 py-2 rounded-md text-blue-300 hover:text-white hover:bg-blue-700"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => 
              isActive 
                ? "bg-blue-700 px-3 py-2 rounded-md text-white font-medium" 
                : "px-3 py-2 rounded-md text-blue-300 hover:text-white hover:bg-blue-700"
            }
          >
            Dashboard
          </NavLink>
        </li>
        {/* Ajoutez d'autres liens selon vos routes */}
      </ul>
    </nav>
  );
};

export default Menu;