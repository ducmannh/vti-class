/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { listUser } from "../redux/slice/listSlice";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useTimeOut } from "../hooks/useTimeOut";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { timeOut } = useTimeOut();
  const user = useSelector((value: any) => value.list.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    if (timeOut) {
      alert("Click ok to continue...");
    }
  }, [timeOut]);

  React.useEffect(() => {
    axios
      .get("https://6456519d5f9a4f236140a83c.mockapi.io/user")
      .then((res) => dispatch(listUser(res.data)));
  }, []);

  const onSubmit = (data: FormData) => {
    const existingUser = user.find(
      (item: any) =>
        item.username === data.username && item.password === data.password
    );
    if (existingUser) {
      navigate("/");
    } else {
      alert("Wrong username or password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center h-screen text-xl"
    >
      <h1>Login</h1>
      <div className="flex items-center mb-4">
        <label htmlFor="username" className="mr-14 text-xl text-gray-900">
          Username
        </label>
        <input
          {...register("username")}
          type="text"
          id="username"
          className="w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p>{errors.username?.message}</p>

      <div className="flex items-center mb-4">
        <label htmlFor="password" className="mr-16 text-xl text-gray-900">
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          id="password"
          className="w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p>{errors.password?.message}</p>

      <input
        type="submit"
        value="Login"
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
      />
      <p>
        Not have account?
        <Link to={"/register"} className="text-blue-600">
          Register
        </Link>
      </p>
    </form>
  );
}
