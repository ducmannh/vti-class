import { useState } from "react";
import FormDataRegister from "./FormDataRegister";
import { useForm } from "react-hook-form";
import "../../App.css";

export default function FormRegister() {
  const [job, setJob] = useState("");
  const [favourite, setFavourite] = useState<any>([]);
  const [dataClient, setDataClient] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    setDataClient(data);
  };
  console.log(dataClient)

  const handleCKChange = (e: any) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setFavourite([...favourite, value]);
    } else {
      setFavourite(favourite.filter((item: any) => item !== value));
    }
  };

  return (
    <div className="ml-3 flex">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-4xl mb-2 text-center">Register</h1>
        <p className="mb-2 italic text-center">
          Please <b>fill in this form</b> to create an account
        </p>
        <div className="mb-2">
          <label className="block mb-2 text-md font-medium text-gray-900">
            Full name
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Input your fullname..."
            {...register("fullName")}
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-md font-medium text-gray-900">
            User name
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Input your username..."
            {...register("userName")}
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-md font-medium text-gray-900">
            Password
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Input your password..."
            {...register("password")}
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-md font-medium text-gray-900">
            Email
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Input your email..."
            {...register("email")}
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-md font-medium text-gray-900">
            Telephone Number
          </label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Input your phone number..."
            {...register("phoneNumber")}
          />
        </div>
        <div className="mb-2">
          <p className="block mb-2 text-md font-medium text-gray-900">
            Input Object
          </p>
          <div className="flex">
            <div className="flex items-center rounded-lg">
              <input
                id="rdbStudent"
                type="radio"
                value="Student"
                name="radio"
                className="w-12 h-4 text-blue-600 bg-gray-100 border-gray-300"
                onChange={(e) => {
                  if (e.target.id === "rdbStudent" && e.target.checked) {
                    setJob(e.target.value);
                  }
                }}
              />
              <p className="w-full text-md font-medium text-gray-900">
                Student
              </p>
            </div>
            <div className="flex items-center rounded-lg">
              <input
                id="rdbTeacher"
                type="radio"
                value="Teacher"
                name="radio"
                className="w-12 h-4 text-blue-600 bg-gray-100 border-gray-300"
                onChange={(e) => {
                  if (e.target.id === "rdbTeacher" && e.target.checked) {
                    setJob(e.target.value);
                  }
                }}
              />
              <p className="w-full text-md font-medium text-gray-900">
                Teacher
              </p>
            </div>
          </div>
        </div>

        <div className="mb-2 textCSS">
          <div className="w-full mb-2 text-md font-medium text-gray-900">
            Favourite
          </div>
          <input
            type="checkbox"
            value="Badminton"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            onChange={handleCKChange}
          />
          <label className="ml-2 mr-8 text-md font-medium text-gray-900">
            Badminton
          </label>

          <input
            type="checkbox"
            value="Volleybal"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            onChange={handleCKChange}
          />
          <label className="ml-2 mr-8 text-md font-medium text-gray-900 ">
            Volleybal
          </label>

          <input
            type="checkbox"
            value="Football"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            onChange={handleCKChange}
          />
          <label className="ml-2 text-md font-medium text-gray-900 ">
            Football
          </label>
        </div>

        <div className="mb-2">
          <label className="block mb-2 text-md font-medium text-gray-900">
            Address
          </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
            {...register("address")}
          >
            <option value=""></option>
            <option value="Bắc Giang">Bắc Giang</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Thành phố Hồ Chí Minh">Thành phố Hồ Chí Minh</option>
          </select>
        </div>

        <div className="mb-2">
          <label className="block mb-2 text-md font-medium text-gray-900">
            Birthday
          </label>
          <input
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Input your fullname..."
            {...register("date")}
          />
        </div>

        <input
          type="submit"
          className="bg-sky-500 px-5 py-2 rounded-lg text-white text-lg"
          onClick={handleOpen}
        />
      </form>

      <FormDataRegister
        job={job}
        favourite={favourite}
        dataClient={dataClient}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
}
