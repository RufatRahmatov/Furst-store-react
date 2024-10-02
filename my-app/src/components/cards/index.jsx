import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Card = ({ image, title }) => {
  return (
    <div className="group relative overflow-hidden mt-20  ">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="transition-transform duration-1000 transform group-hover:scale-110 w-full h-[700px] object-cover"
        />
      </div>

      <div className="absolute bottom-4 left-4">
        <h3 className="text-white font-semibold">{title}</h3>
      </div>

      <div className="absolute bottom-4 right-4">
        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full transition-colors duration-300 group-hover:bg-[#0A5D5D]">
          <FiArrowRight className="text-black group-hover:text-white" />
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        image="https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-1_180x.jpg?v=1703662419"
        title="Pillow"
      />
      <Card
        image="https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-2_180x.jpg?v=1703662419"
        title="Armchair"
      />
      <Card
        image="https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-3_180x.jpg?v=1703662759"
        title="Side Table"
      />
    </div>
  );
};

export default CardList;
