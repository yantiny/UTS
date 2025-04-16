'use client';

import { Search } from 'lucide-react';

export default function SearchInput() {
  return (
    <div className="flex items-center bg-white/28 text-white-900 focus:outline-none border-1 bg-opacity-90 backdrop-blur-md rounded-full px-4 py-2 w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search furniture"
        className="bg-transparent outline-none text-white placeholder-white flex-1"
      />
      <button className="text-white">
        <Search size={20} />
      </button>
    </div>
  );
}
