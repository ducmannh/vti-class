import { Box, Modal } from "@mui/material";
import { useState } from "react";

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

interface DataType {
  fullName: string;
  userName: string;
  password: string;
  email: string;
  phoneNumber: string;
  address: string;
  date: string;
  job: string;
  favourite: any;
}

export default function FormDataRegister({
  fullName,
  userName,
  password,
  email,
  phoneNumber,
  address,
  date,
  job,
  favourite,
}: DataType) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <button onClick={handleOpen} className="bg-sky-500 px-5 py-2 rounded-lg text-white text-lg ml-5">Submit</button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <p>Full Name: {fullName}</p>
          <p>User Name: {userName}</p>
          <p>Password: {password}</p>
          <p>Email: {email}</p>
          <p>Telephone Number: {phoneNumber}</p>
          <p>Input Object: {job}</p>
          <p>Address: {address}</p>
          <p>Birthday: {date}</p>
          <p>Favourite: {favourite}</p>
        </Box>
      </Modal>
    </div>
  );
}
