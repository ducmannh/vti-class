/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import AccountModal from "./AccountModal";
import { ListItemAccountContext } from "../store/ListItemAccount";
import { instance } from "../instanceAxios";

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
  const [selectAllAccount, setSelectAllAccount] = React.useState(false);
  const [selectAccount, setSelectAccount] = React.useState<any[]>([]);
  const [count, setCount] = React.useState(0);
  const isAnySelected = selectAccount.length > 0;

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
    
    instance.get(`/account/${id}`).then((res) => {
      setSelectedAccount(res.data);
      setShowUpdateButton(true);
      setTitleModal("update");
    });
  };

  const handleDelete = (id: number) => {
    instance.delete(`/account/${id}`).then(() => listItem());
  };

  const handleCreateAccount = () => {
    setOpenModal(false);
    listItem();
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

  const handleSelectedAllAccount = (e: any) => {
    const isChecked = e.target.checked;
    setSelectAllAccount(isChecked);
    if (isChecked) {
      const selectedAllAccounts = listAccounts.map((item: any) => ({
        id: item.id,
      }));
      setSelectAccount(selectedAllAccounts);
    } else {
      setSelectAccount([]);
    }
    setCount(listAccounts.length);
  };

  const handleSelectedOneAccount = (e: any, item: any) => {
    if (e.target.checked) {
      setSelectAccount((prev) => [...prev, item]);
      setCount(count + 1);
      if (count === listAccounts.length - 1) {
        setSelectAllAccount(true);
      }
    } else {
      setSelectAccount((prev) =>
        prev.filter((select) => select.id !== item.id)
      );
      setSelectAllAccount(false);
      setCount(count - 1);
    }
  };

  const handleDeleteSelected = () => {
    const newListAccount = listAccounts.filter(
      (select: any) => !selectAccount.some((item) => item.id === select.id)
    );
    setListAccounts(newListAccount);
    setCount(0);
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
              <th scope="col">
                {" "}
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  checked={selectAllAccount}
                  onChange={(e) => handleSelectedAllAccount(e)}
                />{" "}
              </th>
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
                  <td className="px-6 py-4">
                    {" "}
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                      checked={selectAccount.some(
                        (account: any) => account.id === item.id
                      )}
                      onChange={(e) => handleSelectedOneAccount(e, item)}
                    />{" "}
                  </td>
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

      {isAnySelected && (
        <button
          onClick={handleDeleteSelected}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
        >
          Delete All
        </button>
      )}

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
