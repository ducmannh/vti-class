/* eslint-disable @typescript-eslint/no-explicit-any */

import Header from "./Header";
import { countProduct, deleteProduct } from "../redux/slice/listSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  let totalPrice = 0;
  const dispatch = useDispatch();

  const selectItem = useSelector((value: any) => value.list.selectedProducts);
  const countItem = useSelector((value: any) => value.list.count);

  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
    dispatch(countProduct(countItem - 1));
  };

  return (
    <div>
      <Header />
      <table className="w-full text-md text-gray-500 text-center">
        <thead className="text-lg text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">Image</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Quantity</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {selectItem.map((item: any) => {
            totalPrice += item.quantity * item.price;
            return (
              <tr key={item.id}>
                <td className="px-6 py-4">{item.image}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">{item.quantity}</td>
                <td className="px-6 py-4">{item.quantity * item.price}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                  >
                    Delete
                  </button>{" "}
                </td>
              </tr>
            );
          })}
          <tr>
            <th className="px-6 py-4 text-lg text-gray-700">Total</th>
            <td></td>
            <td></td>
            <td></td>
            <th className="px-6 py-4 text-lg text-gray-700">{totalPrice}</th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
