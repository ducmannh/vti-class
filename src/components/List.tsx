import axios from "axios";
import React from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { getListProducts } from "../redux/actions/listActions";

export default function List() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getListProducts());
  }, []);

  const listItem = useSelector((value: any) => value.list.listProducts);
  console.log(listItem);
  return (
    <div>
      <Header />
      <div className="grid grid-cols-5 gap-4">
        {listItem.map((item: any) => (
          <div className="bg-white p-4 shadow" key={item.id}>
            <img
              className="w-full h-40 object-cover mb-4"
              src={item.image}
              alt={item.image}
            />
            <div className="font-bold text-lg mb-2">{item.name}</div>
            <div className="text-gray-600">${item.price}</div>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
