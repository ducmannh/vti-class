import { Button } from "flowbite-react";
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

export default function FormData({ dataClient, fullName, userName }: any) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <input type="submit" onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="flex justify-between">
            <p>{fullName}</p>
            <p>{userName}</p>
            <p>{dataClient.password}</p>
            <p>{dataClient.email}</p>
            <p>{dataClient.city}</p>
            <p>{dataClient.birthday}</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
