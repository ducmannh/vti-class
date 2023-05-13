/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useForm } from "react-hook-form";
import { instance } from "../instanceAxios";
import { useNavigate } from "react-router-dom";
import { ListItemAccountContext } from "../store/ListItemAccount";

export default function CreateAccount() {
  const { register, handleSubmit } = useForm({});
  const { listItem, userName } = React.useContext(ListItemAccountContext);
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    instance.post("/account", data).then(() => {
      listItem();
      navigate("/home");
    });
  };

  React.useEffect(() => {
    if (!userName) {
      navigate("/login");
    }
  });
  return (
    <div>
      <h1 className="text-center text-2xl mb-3">Create New Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("email")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          placeholder="Moi nhap email"
        />
        <input
          type="text"
          {...register("username")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          placeholder="Moi nhap UserName"
        />
        <input
          type="text"
          {...register("fullname")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          placeholder="Moi nhap Ho va ten"
        />
        <input
          type="text"
          {...register("department")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          placeholder="Moi nhap phong ban"
        />
        <input
          type="text"
          {...register("position")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          placeholder="Moi nhap vi tr cong viec"
        />
        <input
          type="date"
          {...register("createdDate")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
        />

        <input
          type="submit"
          value="Them moi"
          className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
        />
      </form>
    </div>
  );
}
