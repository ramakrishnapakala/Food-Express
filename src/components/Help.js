import React from "react";
import { Link } from "react-router-dom";
import wip1 from "../../wip1.gif";

const Help = () => {
  return (
    <div className="flex flex-col justify-center min-h-[80vh] items-center">
      <h1 className="text-[#53567E] text-lg font-semibold mt-5">
        Still Working this features will coming soon..
      </h1>
      <Link to={"/"}>
        <button className=" mt-4 sm:mt-6 text-base border px-6 py-2 bg-[#FF5200] text-white font-bold">
          See Restaurants Near You
        </button>
      </Link>
    </div>
  );
};

export default Help;
