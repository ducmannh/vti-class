/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import {
  countProduct,
  quantityProduct,
  resetQuantity,
  selectOneProduct,
  selectProduct,
} from "../redux/slice/listSlice";
import { useTimeOut } from "../hooks/useTimeOut";

export default function Detail() {
  const dispatch = useDispatch();
  const { timeOut } = useTimeOut();
  const countItem = useSelector((value: any) => value.list.count);
  const quantityItem = useSelector((value: any) => value.list.quantity);
  const selectOneItem = useSelector(
    (value: any) => value.list.selectedOneProducts
  );

  const handleAddCart = () => {
    dispatch(countProduct(countItem + 1));
    dispatch(selectProduct(selectOneItem));
  };

  const handleMinus = () => {
    if (quantityItem > 1) {
      dispatch(quantityProduct(quantityItem - 1));
      dispatch(
        selectOneProduct({
          ...selectOneItem,
          quantity: quantityItem - 1,
        })
      );
    }
  };

  const handleAdd = () => {
    dispatch(quantityProduct(quantityItem + 1));
    dispatch(
      selectOneProduct({
        ...selectOneItem,
        quantity: quantityItem + 1,
      })
    );
  };

  React.useEffect(() => {
    dispatch(resetQuantity());
  }, []);

  React.useEffect(() => {
    if (timeOut) {
      alert("Click ok to continue...");
    }
  }, [timeOut]);

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div>
            <img
              src={selectOneItem.image}
              alt={selectOneItem.image}
              className="w-full"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{selectOneItem.name}</h1>
            <p className="text-gray-500 text-2xl">${selectOneItem.price}</p>
            <p className="text-gray-500 text-2xl">
              {" "}
              <span onClick={handleMinus} className="cursor-pointer">
                -
              </span>{" "}
              {selectOneItem.quantity}{" "}
              <span onClick={handleAdd} className="cursor-pointer">
                +
              </span>{" "}
            </p>
            <button
              onClick={handleAddCart}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
