/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../redux/store";
import { login } from "../redux/actions/userActions";

export default function Login() {
  const [userName, setUserName] = React.useState<any>("");
  const [userPassword, setUserPassword] = React.useState<any>("");
  const navigate = useNavigate();
  console.log(store.getState());

  const users = [
    {
      username: "manh",
      password: "123",
    },
    {
      username: "duc",
      password: "123",
    },
  ];

  const handleLogin = () => {
    const userNames = users.map((user) => user.username);
    const userPasswords = users.map((user) => user.password);

    if (userNames.includes(userName) && userPasswords.includes(userPassword)) {
      store.dispatch(login({ username: userName, password: userPassword }));
      navigate("/home");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl mb-3">Login</h1>
      <div className="flex flex-col w-1/2 h-full m-auto">
        UserName:
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          onChange={(e) => setUserName(e.target.value)}
        />
        Password:
        <input
          type="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          onChange={(e) => setUserPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
        />
        <button
          onClick={handleLogin}
          className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
        >
          Login
        </button>
      </div>
    </div>
  );
}
