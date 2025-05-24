"use client";

import { Search, Inbox, Heart, User,MoreVertical } from 'lucide-react';
import Link from 'next/link';
import TooltipWrapper from './TooltipWrapper';
import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-black border-b-2 border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400">
              USP Face
            </Link>
          </div>

          {/* Search Box */}
          <div className="flex-1 max-w-2xl sm:max-w-md md:max-w-lg mx-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-white transition-all duration-300 group-hover:border-blue-400 ring-2 text-white"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Icons and Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <TooltipWrapper message={'Inbox'} >
            <button className="p-2 hover:bg-blue-400 rounded-full transition-colors">
              <Inbox className="h-6 w-6 text-gray-600" />
            </button>
            </TooltipWrapper>
            <TooltipWrapper message={'Like'}>
            <button className="p-2 hover:bg-blue-400 rounded-full transition-colors">
              <Heart className="h-6 w-6 text-gray-600" />
            </button>
            </TooltipWrapper>
            
            <TooltipWrapper message={'Profile'}>
              <button className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 hover:bg-blue-400 transition-colors">
                <User className="h-5 w-5 text-gray-600" />
              </button>
              </TooltipWrapper>
            
          </div>
           {/* Kebab menu for small screens */}
           <div className="md:hidden relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:bg-blue-400 rounded-full transition-colors"
            >
              <MoreVertical className="h-6 w-6 text-white" />
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
                <ul className="py-1">
                  <li className="px-4 py-2 hover:bg-blue-100 flex items-center gap-2 text-gray-700">
                    <Inbox className="h-5 w-5" />
                    Inbox
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-100 flex items-center gap-2 text-gray-700">
                    <Heart className="h-5 w-5" />
                    Like
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-100 flex items-center gap-2 text-gray-700">
                    <User className="h-5 w-5" />
                    Profile
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}