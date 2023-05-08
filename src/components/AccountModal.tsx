/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import React from "react";
import { ListItemAccountContext } from "../store/ListItemAccount";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid gray",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

interface AccoutTypes {
  isOpenModal: boolean;
  handleCloseModal: any;
  handleCreateAccount: any;
  selectedAccount: any;
  showUpdateButton: boolean;
  titleModal: string;
}

export default function AccountModal({
  isOpenModal,
  handleCloseModal,
  handleCreateAccount,
  selectedAccount,
  showUpdateButton,
  titleModal,
}: AccoutTypes) {
  const { listItem } = React.useContext(ListItemAccountContext);
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: selectedAccount,
  });

  const onSubmit = async (data: any) => {
    await fetch("https://6456519d5f9a4f236140a83c.mockapi.io/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        handleCreateAccount();
        console.log(res);
      });
  };

  const handleUpdateAccount = () => {
    const email = watch("email");
    const username = watch("username");
    const fullname = watch("fullname");
    const department = watch("department");
    const position = watch("position");
    const updatedAccount = {
      email,
      username,
      fullname,
      department,
      position,
    };
    fetch(
      `https://6456519d5f9a4f236140a83c.mockapi.io/account/${selectedAccount.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedAccount),
      }
    )
      .then((res) => res.json())
      .then(() => {
        listItem();
        reset();
        handleCloseModal();
      });
  };

  React.useEffect(() => {
    reset(selectedAccount);
  }, [reset, selectedAccount]);

  return (
    <div>
      <Modal open={isOpenModal} onClose={handleCloseModal}>
        <Box sx={style}>
          {titleModal === "create" && (
            <h1 className="text-center text-2xl mb-3">Create New Account</h1>
          )}
          {titleModal === "update" && (
            <h1 className="text-center text-2xl mb-3">Update Account</h1>
          )}
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
            <div className="flex justify-center">
              {showUpdateButton ? (
                <input
                  type="button"
                  onClick={handleUpdateAccount}
                  value="Cap nhat"
                  className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                />
              ) : (
                <input
                  type="submit"
                  value="Them moi"
                  className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                />
              )}
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
