/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Header from "./Header";
import { instance } from "../instanceAxios.";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  countProduct,
  getLists,
  selectOneProduct,
  selectProduct,
} from "../redux/slice/listSlice";

export default function List() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const listItem = useSelector((value: any) => value.list.listProducts);
  const countItem = useSelector((value: any) => value.list.count);

  React.useEffect(() => {
    dispatch(getLists());
  }, []);

  const handleAddCart = (id: number) => {
    dispatch(countProduct(countItem + 1));

    instance
      .get(`/product/${id}`)
      .then((res) => dispatch(selectProduct(res.data)));
  };

  const handleDetail = (id: number) => {
    navigate(`/detail`);
    instance
      .get(`/product/${id}`)
      .then((res) => dispatch(selectOneProduct(res.data)));
  };

  return (
    <div>
      <Header />
      <div className="grid grid-cols-5 gap-4">
        {listItem.map((item: any) => (
          <div className="bg-white p-4 shadow cursor-pointer" key={item.id}>
            <img
              onClick={() => handleDetail(item.id)}
              className="w-full h-40 object-cover mb-4"
              src={item.image}
              alt={item.image}
            />
            <div className="font-bold text-lg mb-2">{item.name}</div>
            <div className="text-gray-600">${item.price}</div>
            <button
              onClick={() => handleAddCart(item.id)}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
