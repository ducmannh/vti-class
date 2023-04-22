import { Box, Modal } from "@mui/material";

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
  job: string;
  favourite: any;
  dataClient: any;
  open: boolean;
  handleClose: any;
}

export default function FormDataRegister({
  job,
  favourite,
  dataClient,
  open,
  handleClose,
}: DataType) {

  return (
    <div>
      {dataClient && (
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <p>Full Name: {dataClient.fullName}</p>
            <p>User Name: {dataClient.userName}</p>
            <p>Password: {dataClient.password}</p>
            <p>Email: {dataClient.email}</p>
            <p>Telephone Number: {dataClient.phoneNumber}</p>
            <p>Input Object: {job}</p>
            <p>Favourite: {favourite}</p>
            <p>Address: {dataClient.address}</p>
            <p>Birthday: {dataClient.date}</p>
          </Box>
        </Modal>
      )}
    </div>
  );
}
