import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] p-4">
      <h1 className="text-[#53567E] text-lg font-semibold">
        Your cart is empty
      </h1>
      <p className="text-sm text-center mt-1 font-normal">
        You can go to home page to view more restaurants
      </p>
      <Link to={"/"}>
        <button className=" mt-4 sm:mt-6 text-base border px-6 py-2 bg-[#e67e22] text-white font-bold">
          See Restaurants Near You
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
