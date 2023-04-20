import { Button } from "flowbite-react";
import { Box, Modal } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormData from "./FormData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  border: "2px solid gray",
  boxShadow: 24,
  p: 3,
  borderRadius: "10px",
};

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [dataClient, setDataClient] = useState<any>([]);
  const onSubmit = (data: object) => {
    setDataClient(data);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h1>Register</h1>
      <p>Please fill in this form to create an account</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Full Name <br />
          <input
            {...register("fullName")}
            placeholder="Input your fullname"
            type="text"
          />
        </label>{" "}
        <br />
        <label>
          User Name <br />
          <input
            {...register("userName")}
            placeholder="Input your User Name"
            type="text"
          />
        </label>{" "}
        <br />
        <label>
          Password <br />
          <input
            {...register("password")}
            placeholder="Input your Password"
            type="text"
          />
        </label>{" "}
        <br />
        <label>
          Email <br />
          <input
            {...register("email")}
            placeholder="Input your email"
            type="text"
          />
        </label>{" "}
        <br />
        <label>
          Telephone Number <br />
          <input
            {...register("telephone")}
            placeholder="Input your Telephone Number"
            type="text"
          />
        </label>{" "}
        <br />
        <label>Input Object</label> <br />
        <input {...register("radioStudent")} type="radio" />
        Student
        <input {...register("radioTeacher")} type="radio" />
        Teacher
        <br />
        <label>Favourite</label> <br />
        <input {...register("ckbBadminton")} type="checkbox" />
        Badminton
        <input {...register("ckbVolleyball")} type="checkbox" />
        Volleyball
        <input {...register("ckbFootball")} type="checkbox" />
        Football <br />
        <label>Address</label>
        <br />
        <select {...register("city")}>
          <option value="Bac Giang">Bac Giang</option>
          <option value="Ha Noi">Ha Noi</option>
          <option value="Ca Mau">Ca Mau</option>
        </select>{" "}
        <br />
        <label>Birthday</label> <br />
        <input {...register("birthday")} type="date" /> <br />
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
        <input type="submit" onClick={handleOpen} />
      </form>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="flex justify-between">
            <p>{dataClient.fullName}</p>
            <p>{dataClient.userName}</p>
            <p>{dataClient.password}</p>
            <p>{dataClient.email}</p>
            <p>{dataClient.city}</p>
            <p>{dataClient.birthday}</p>
            <Button onClick={handleClose}>Dong</Button>
          </div>
        </Box>
      </Modal>
      {/* <FormData
        dataClient={dataClient}
        userName={dataClient.userName}
        fullName={dataClient.fullName}
      /> */}
    </div>
  );
}
