/* eslint-disable @typescript-eslint/no-explicit-any */

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const countItem = useSelector((value: any) => value.list.count);
  return (
    <div className="flex">
      <div onClick={() => navigate("/")} className="cursor-pointer">
        Logo
      </div>
      <div className="flex items-center">
        <input type="text" className="w-96 h-8 border border-gray-500 bg-gray-50 rounded-lg" />
        <button>Search</button>
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <img src="src/assets/cart.png" className="w-12 h-12" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-md font-bold leading-none text-white bg-red-600 rounded-full">
            {countItem}
          </span>
        </div>
      </div>
    </div>
  );
}
