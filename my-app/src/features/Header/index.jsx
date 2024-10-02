import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <header className="bg-white mt-2 ">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center space-x-2">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo.png?v=1694685223&width=160x"
            alt="Logo"
            className="h-10 w-36"
          />
        </div>

        <nav className="space-x-16 text-lg">
          <div className="group inline-block relative z-50">
            <a
              href="/"
              className="text-black hover:text-green-700 font-semibold transition-all hover:font-bold transition-colors duration-300 ease-in-out"
            >
              HOME
            </a>
          </div>

          <div className="group inline-block relative z-50">
            <a
              href="/collection"
              className="text-black hover:text-green-700 font-semibold hover:font-bold transition-colors transition-all duration-300 ease-in-out"
            >
              COLLECTION
            </a>

            <div className=" w-[1400px] hidden group-hover:grid absolute top-10 px-6 py-16 right-[-800px] bg-white shadow-lg mt-2 p-6 grid-cols-4 gap-12 transition-all duration-500 ease-in-out transform scale-y-0 group-hover:scale-y-100 origin-top opacity-0 group-hover:opacity-100 z-50">
              <div>
                <h3 className="font-bold mb-6 ">BEST SELLERS</h3>
                <a
                  href="/bestsellers"
                  className="block text-gray-800 hover:text-green-700 transition-colors duration-300 ease-in-out mb-2"
                >
                  Best Sellers
                </a>
                <a
                  href="/new"
                  className="block text-gray-800 hover:text-green-700 transition-colors duration-300 ease-in-out mb-2"
                >
                  New Arrival
                </a>
                <a
                  href="/trending"
                  className="block text-gray-800 hover:text-green-700 transition-colors duration-300 ease-in-out mb-2"
                >
                  Top Trending
                </a>
                <a
                  href="/sale"
                  className="block text-gray-800 hover:text-green-700 transition-colors duration-300 ease-in-out"
                >
                  On Sale
                </a>
              </div>

              <div>
                <h3 className="font-bold mb-6 ">COLLECTION PAGE</h3>
                <a
                  href="/collection/left-sidebar"
                  className="block text-gray-800 hover:text-green-700 transition-colors duration-300 ease-in-out mb-2"
                >
                  Collection Left Sidebar
                </a>
                <a
                  href="/collection/right-sidebar"
                  className="block text-gray-800 hover:text-green-700 transition-colors duration-300 ease-in-out mb-2"
                >
                  Collection Right Sidebar
                </a>
                <a
                  href="/collection/top-sidebar"
                  className="block text-gray-800 hover:text-green-700 transition-colors duration-300 ease-in-out mb-2"
                >
                  Collection Top Sidebar
                </a>
                <a
                  href="/collection/no-sidebar"
                  className="block text-gray-800 hover:text-green-700 transition-colors duration-300 ease-in-out"
                >
                  Collection Without Sidebar
                </a>
              </div>

              <div>
                <h3 className="font-bold mb-6">COLLECTION PAGE</h3>
                <a
                  href="/collection/canvas-left"
                  className="block text-gray-800 hover:text-green-700 transition-colors duration-300 ease-in-out mb-2"
                >
                  Collection Canvas On Left
                </a>
                <a
                  href="/collection/canvas-top"
                  className="block text-gray-800 hover:text-green-700 transition-colors duration-300 ease-in-out mb-2"
                >
                  Collection Canvas On Top
                </a>
                <a
                  href="/collection/canvas-bottom"
                  className="block text-gray-800 hover:text-green-700 transition-colors duration-300 ease-in-out mb-2"
                >
                  Collection Canvas On Bottom
                </a>
                <a
                  href="/collection/full-width"
                  className="block text-gray-800 hover:text-green-700 transition-colors duration-300 ease-in-out"
                >
                  Collection Full Width
                </a>
              </div>

              <div>
                <h3 className="font-bold mb-6">COLLECTION PAGE</h3>
                <a
                  href="/collection/pagination"
                  className="block text-gray-800 hover:text-green-700 transition-colors duration-300 ease-in-out mb-2"
                >
                  Numbered Pagination
                </a>
                <a
                  href="/collection/load-more"
                  className="block text-gray-800 hover:text-green-700 transition-colors duration-300 ease-in-out mb-2"
                >
                  Load More Button
                </a>
                <a
                  href="/collection/infinity-scroll"
                  className="block text-gray-800 hover:text-green-700 transition-colors duration-300 ease-in-out"
                >
                  Infinity Scroll Load More
                </a>
              </div>
            </div>
          </div>

          <a
            href="/products"
            className="text-black hover:text-green-700 font-semibold  hover:font-bold transition-colors transition-all duration-300 ease-in-out"
          >
            PRODUCTS
          </a>

          <a
            href="/other-pages"
            className="text-black hover:text-green-700 font-semibold hover:font-bold transition-colors transition-all duration-300 ease-in-out"
          >
            OTHER PAGES
          </a>

          <a
            href="/blog"
            className="text-black hover:text-green-700 font-semibold hover:font-bold transition-colors transition-all duration-300 ease-in-out"
          >
            BLOG
          </a>
        </nav>

        <div className="flex space-x-4 items-center">
          <div className="hover:bg-gray-200 rounded-full p-2 transition duration-300 ease-in-out cursor-pointer">
            <AiOutlineSearch className="w-6 h-6" />
          </div>

          <div className="hover:bg-gray-200 rounded-full p-2 transition duration-300 ease-in-out cursor-pointer">
            <FaUser className="w-6 h-6" />
          </div>

          <div className="relative hover:bg-gray-200 rounded-full p-2 transition duration-300 ease-in-out cursor-pointer">
            <FaShoppingCart className="w-6 h-6" />
            <span className="absolute top-0 right-0 bg-green-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>

          <div className="hover:bg-gray-200 rounded-full p-2 transition duration-300 ease-in-out cursor-pointer">
            <GiHamburgerMenu className="w-6 h-6" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
