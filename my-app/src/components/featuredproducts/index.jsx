import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaStar, FaEnvelope } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import axios from "axios";

const Product = ({ product, onEmailClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-[#F5F5F5] relative border overflow-hidden p-4 mt-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? product.hoverImage : product.image}
        alt={product.name}
        className="w-full h-128 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
      />

      <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.price}</p>

      <div className="flex items-center mt-2">
        {[...Array(product.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
      </div>
      <div className="absolute bottom-28 z-50 left-1/2 transform -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer">
        <div className="bg-white rounded-full p-2">
          <FaShoppingCart className="w-6 h-6 text-gray-600 hover:text-black text-[#0A5D5D]" />
        </div>
        <div className="bg-white rounded-full p-2">
          <FaStar className="w-6 h-6 text-gray-600 hover:text-black text-[#0A5D5D]" />
        </div>
        <div
          className="bg-white rounded-full p-2"
          onClick={() => onEmailClick(product)}
        >
          <FaEnvelope className="w-6 h-6 text-gray-600 hover:text-black text-[#0A5D5D]" />
        </div>
      </div>
    </div>
  );
};

const ProductModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [product.image, product.hoverImage];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-4/5 md:w-2/3 lg:w-1/2 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-3xl"
        >
          &times;
        </button>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-4 relative">
            <img
              src={images[currentImageIndex]}
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#0A5D5D] text-white rounded-full p-2"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#0A5D5D] text-white rounded-full p-2"
            >
              <FiChevronRight size={24} />
            </button>
          </div>

          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <div className="flex items-center mb-4">
              {[...Array(product.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            <p className="text-3xl text-gray-800 mb-4">{product.price}</p>
            <p className="text-gray-700 mb-2">
              <span className="font-bold">SKU:</span> {product.sku}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-bold">CATEGORY:</span> {product.category}
            </p>

            <div className="flex items-center mt-4">
              <p className="font-bold">QUANTITY:</p>
              <div className="flex items-center ml-4 border px-2 py-1">
                <button className="px-2" onClick={decreaseQuantity}>
                  -
                </button>
                <input
                  type="text"
                  className="w-12 text-center"
                  value={quantity}
                  readOnly
                />
                <button className="px-2" onClick={increaseQuantity}>
                  +
                </button>
              </div>
            </div>

            <button className="bg-[#0A5D5D] text-white mt-6 py-3 px-6 rounded-lg w-full">
              Add To Bag
            </button>
            <button className="border mt-3 py-3 px-6 rounded-lg w-full text-[#0A5D5D] hover:bg-gray-100 transition">
              Buy It Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleEmailClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onEmailClick={handleEmailClick}
        />
      ))}

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProductList;
