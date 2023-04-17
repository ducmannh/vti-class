import { Button } from "flowbite-react";
import { Modal } from "flowbite-react";
import { ModalBody } from "flowbite-react/lib/esm/components/Modal/ModalBody";
import { ModalHeader } from "flowbite-react/lib/esm/components/Modal/ModalHeader";
import { ModalFooter } from "flowbite-react/lib/esm/components/Modal/ModalFooter";
import { useState } from "react";

export default function AdminPage() {
  const data = [
    {
      id: 1,
      email: "manh@gmail.com",
      username: "manh",
      fullname: "tran duc manh",
      departmant: "sale",
      position: "dev",
      create_date: "2023-23-04",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 2,
      email: "manh@gmail.com",
      username: "manh",
      fullname: "tran duc manh",
      departmant: "sale",
      position: "dev",
      create_date: "2023-23-04",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 3,
      email: "manh@gmail.com",
      username: "manh",
      fullname: "tran duc manh",
      departmant: "sale",
      position: "dev",
      create_date: "2023-23-04",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 4,
      email: "manh@gmail.com",
      username: "manh",
      fullname: "tran duc manh",
      departmant: "sale",
      position: "dev",
      create_date: "2023-23-04",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 5,
      email: "manh@gmail.com",
      username: "manh",
      fullname: "tran duc manh",
      departmant: "sale",
      position: "dev",
      create_date: "2023-23-04",
      edit: "Edit",
      delete: "Delete",
    },
  ];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
       <div>
      <div className="m-6">
        <Button onClick={handleOpen}>Create New Account</Button>
      </div>
      <Modal show={open} onClose={handleClose}>
        <ModalHeader>Account</ModalHeader>
        <ModalBody>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Email:
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Input Email"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Username:
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Input Username"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Fullname:
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Input Fullname"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Select a Department
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="Giam doc">Giam doc</option>
              <option value="Thu Ky">Thu Ky</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Select a Position
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="Test">Test</option>
              <option value="Dev">Dev</option>
            </select>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClose}>Create</Button>
          <Button onClick={handleClose}>Update</Button>
        </ModalFooter>
      </Modal>
    </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
        <table className="w-full text-sm text-center text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Fullname
              </th>
              <th scope="col" className="px-6 py-3">
                Departmant
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Create Date
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b"
                >
                  <td className="px-6 py-3">{item.id}</td>
                  <td className="px-6 py-3">{item.email}</td>
                  <td className="px-6 py-3">{item.username}</td>
                  <td className="px-6 py-3">{item.fullname}</td>
                  <td className="px-6 py-3">{item.departmant}</td>
                  <td className="px-6 py-3">{item.position}</td>
                  <td className="px-6 py-3">{item.create_date}</td>
                  <td className="px-6 py-3">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                      {item.edit}
                    </button>
                  </td>
                  <td className="px-6 py-3">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                      {item.delete}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
