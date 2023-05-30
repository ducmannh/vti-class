/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { listUser } from "../redux/slice/listSlice";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";

const schema = yup
  .object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .min(5, "Password must be at least 5 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])/,
        "Password must contain at least one uppercase letter and one number"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password must match")
      .required(),
    displayName: yup.string().required(),
    firstName: yup.string().required().max(10).min(4),
    lastName: yup.string().required().max(10).min(4),
    nickName: yup.string().required(),
    website: yup.string().required().url(),
    bio: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((value: any) => value.list.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const existingUserName = user.find(
      (item: any) => item.username === data.username
    );

    if (existingUserName) {
      alert("username already exists");
      return;
    }

    axios
      .post("https://6456519d5f9a4f236140a83c.mockapi.io/user", data)
      .then((res) => {
        dispatch(listUser(res.data));
      });

    navigate("/login");
  };

  React.useEffect(() => {
    axios
      .get("https://6456519d5f9a4f236140a83c.mockapi.io/user")
      .then((res) => dispatch(listUser(res.data)));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <div className="flex items-center mb-4">
        <label htmlFor="username" className="w-44 text-sm text-gray-900">
          Username
        </label>
        <input
          {...register("username")}
          type="text"
          id="username"
          className="w-1/4 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p className="text-red-500 text-sm">{errors.username?.message}</p>

      <div className="flex items-center mb-4">
        <label htmlFor="email" className="w-44 text-sm text-gray-900">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className="w-1/4 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p className="text-red-500 text-sm">{errors.email?.message}</p>

      <div className="flex items-center mb-4">
        <label htmlFor="email" className="w-44 text-sm text-gray-900">
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          id="password"
          className="w-1/4 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p className="text-red-500 text-sm">{errors.password?.message}</p>

      <div className="flex items-center mb-4">
        <label htmlFor="username" className="w-44 text-sm text-gray-900">
          Confirm Password
        </label>
        <input
          {...register("confirmPassword")}
          type="password"
          id="confirmPassword"
          className="w-1/4 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>

      <div className="flex items-center mb-4">
        <label htmlFor="displayName" className="w-44 text-sm text-gray-900">
          Display Name
        </label>
        <input
          {...register("displayName")}
          type="text"
          id="displayName"
          className="w-1/4 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p className="text-red-500 text-sm">{errors.displayName?.message}</p>

      <div className="flex items-center mb-4">
        <label htmlFor="firstName" className="w-44 text-sm text-gray-900">
          First Name
        </label>
        <input
          {...register("firstName")}
          type="firstName"
          id="firstName"
          className="w-1/4 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p className="text-red-500 text-sm">{errors.firstName?.message}</p>

      <div className="flex items-center mb-4">
        <label htmlFor="lastName" className="w-44 text-sm text-gray-900">
          Last Name
        </label>
        <input
          {...register("lastName")}
          type="text"
          id="lastName"
          className="w-1/4 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p className="text-red-500 text-sm">{errors.lastName?.message}</p>

      <div className="flex items-center mb-4">
        <label htmlFor="nickName" className="w-44 text-sm text-gray-900">
          Nickname
        </label>
        <input
          {...register("nickName")}
          type="text"
          id="nickName"
          className="w-1/4 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p className="text-red-500 text-sm">{errors.nickName?.message}</p>

      <div className="flex items-center mb-4">
        <label htmlFor="website" className="w-44 text-sm text-gray-900">
          Website
        </label>
        <input
          {...register("website")}
          type="text"
          id="website"
          className="w-1/4 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p className="text-red-500 text-sm">{errors.website?.message}</p>

      <div className="flex items-center mb-4">
        <label htmlFor="bio" className="w-44 text-sm text-gray-900">
          Bio
        </label>
        <input
          {...register("bio")}
          type="text"
          id="bio"
          className="w-1/4 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p className="text-red-500 text-sm">{errors.bio?.message}</p>

      <input type="submit" value="Register" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"/>
    </form>
  );
}
