import React, { useState, useEffect } from "react";

const NewsModal = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white rounded-lg shadow-lg p-8 w-4/5 md:w-2/3 lg:w-1/3 transform transition-all duration-500 ease-in-out"
        style={{ animation: "slideDown 0.5s ease-out" }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">NEWSLETTER</h2>
        <p className="mb-6 text-gray-600">
          Get 15% off your first purchase! Plus, be the first to know about
          sales, new product launches and exclusive offers!
        </p>

        <div className="flex flex-col space-y-4">
          {isSubmitting ? (
            <div className="flex justify-center">
              <img
                src="https://thomas.vanhoutte.be/miniblog/wp-content/uploads/spinningwheel.gif"
                alt="Loading"
                className="w-12 h-12"
              />
            </div>
          ) : (
            <>
              <input
                type="email"
                placeholder="Enter your email"
                className="border p-3 rounded-lg w-full"
              />
              <button
                onClick={handleSubmit}
                className="bg-[#0A5D5D] text-white py-3 rounded-lg hover:bg-green-800 transition"
              >
                Submit
              </button>
            </>
          )}
        </div>

        <div className="flex items-center mt-4">
          <input type="checkbox" id="dontShowAgain" className="mr-2" />
          <label htmlFor="dontShowAgain" className="text-gray-600">
            Don't show this popup again
          </label>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

const AppModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <div className="relative">
      {isModalOpen && <NewsModal onClose={handleCloseModal} />}

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl">Main Page Content</h1>
        <p>This is the main content of the page.</p>
      </div>
    </div>
  );
};

export default AppModal;
