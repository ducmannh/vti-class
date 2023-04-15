import ModalPage from "./ModalPage";

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
  const showModal = () => {
    return <ModalPage />;
  }
  return (
    <div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        onClick={showModal}
      >
        Create New Account
      </button>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.username}</td>
                  <td className="px-6 py-4">{item.fullname}</td>
                  <td className="px-6 py-4">{item.departmant}</td>
                  <td className="px-6 py-4">{item.position}</td>
                  <td className="px-6 py-4">{item.create_date}</td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:focus:ring-yellow-900"
                    >
                      {item.edit}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:focus:ring-yellow-900"
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

      {/* <ModalPage/> */}
    </div>
  );
}
