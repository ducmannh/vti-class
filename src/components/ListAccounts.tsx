/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import AccountModal from "./AccountModal";
import { ListItemAccountContext } from "../store/ListItemAccount";

export default function ListAccounts() {
  const { listAccounts, setListAccounts } = React.useContext(
    ListItemAccountContext
  );
  const { listItem } = React.useContext(ListItemAccountContext);
  const [isOpenModal, setOpenModal] = React.useState(false);
  const [selectedAccount, setSelectedAccount] = React.useState({});
  const [showUpdateButton, setShowUpdateButton] = React.useState(true);
  const [titleModal, setTitleModal] = React.useState("create");
  const [searchInput, setSearchInput] = React.useState("");

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    setSelectedAccount({});
    setShowUpdateButton(false);
    setTitleModal("create");
  };

  const handleEditAccount = (id: number) => {
    setOpenModal(true);
    fetch(`https://6456519d5f9a4f236140a83c.mockapi.io/account/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setSelectedAccount(res);
        setShowUpdateButton(true);
        setTitleModal("update");
      });
  };

  const handleDelete = (id: number) => {
    fetch(`https://6456519d5f9a4f236140a83c.mockapi.io/account/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        listItem();
      });
  };

  const handleCreateAccount = () => {
    setOpenModal(false);
    fetch("https://6456519d5f9a4f236140a83c.mockapi.io/account", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setListAccounts(res);
      });
  };

  const handleSearch = () => {
    if (searchInput) {
      const searchResult = listAccounts.filter((item: any) => {
        return (
          item.email.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.username.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.fullname.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.department.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.position.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
      setListAccounts(searchResult);
    } else {
      listItem();
    }
  };

  React.useEffect(() => {
    listItem();
  }, []);

  return (
    <div>
      <div className="flex items-center">
        <button
          onClick={handleOpenModal}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none mt-2"
        >
          Create New Account
        </button>

        <label className="sr-only">Search</label>
        <div className="w-1/2">
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Search"
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>
        <button
          type="button"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          onClick={handleSearch}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-gray-500 text-center">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
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
                Department
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
            {listAccounts.map((item: any, index: number) => {
              return (
                <tr className="bg-white border-b" key={index}>
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.username}</td>
                  <td className="px-6 py-4">{item.fullname}</td>
                  <td className="px-6 py-4">{item.department}</td>
                  <td className="px-6 py-4">{item.position}</td>
                  <td className="px-6 py-4">{item.createAt}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEditAccount(item.id)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <AccountModal
        isOpenModal={isOpenModal}
        handleCloseModal={handleCloseModal}
        handleCreateAccount={handleCreateAccount}
        selectedAccount={selectedAccount}
        showUpdateButton={showUpdateButton}
        titleModal={titleModal}
      />
    </div>
  );
}
