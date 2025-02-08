import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("general");

  const categories = [
    { name: "Technology", key: "technology" },
    { name: "Business", key: "business" },
    { name: "Health", key: "health" },
    { name: "Science", key: "science" },
    { name: "Sports", key: "sports" },
    { name: "Entertainment", key: "entertainment" },
  ];

  const handleCategoryChange = (category) => {
    setCategory(category);
    setActiveCategory(category);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="w-full mx-auto px-6 py-4 flex justify-between items-center">
        
        <a href="/" className="text-2xl font-bold flex items-center gap-2">
          <span className="bg-slate-200 text-black px-3 py-1 rounded-lg">
            Modern News Digest
          </span>
        </a>

        <div className="hidden lg:flex space-x-6">
          {categories.map((item) => (
            <button
              key={item.key}
              onClick={() => handleCategoryChange(item.key)}
              className={`text-lg font-medium transition duration-300 ${
                activeCategory === item.key
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "hover:text-blue-300"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-gray-800 py-4 space-y-4 text-center">
          {categories.map((item) => (
            <button
              key={item.key}
              onClick={() => handleCategoryChange(item.key)}
              className={`block w-full py-2 text-lg font-medium ${
                activeCategory === item.key ? "text-blue-400" : "hover:text-blue-300"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
