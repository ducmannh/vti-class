import CreateAccount from "./components/CreateAccount";
import EditAccount from "./components/EditAccount";
import ListAccounts from "./components/ListAccounts";
import Login from "./components/Login";
import ListItemAccount from "./store/ListItemAccount";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <ListAccounts />,
  },
  {
    path: "/create",
    element: <CreateAccount />,
  },
  {
    path: "/edit",
    element: <EditAccount />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
]);

function App() {
  return (
    <ListItemAccount>
      <RouterProvider router={router} />
    </ListItemAccount>
  );
}

export default App;
