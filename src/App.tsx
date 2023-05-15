import { Provider } from "react-redux";
import CreateAccount from "./components/CreateAccount";
import EditAccount from "./components/EditAccount";
import ListAccounts from "./components/ListAccounts";
import Login from "./components/Login";
import ListItemAccount from "./store/ListItemAccount";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { store } from "./redux/store";

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
    <Provider store={store}>
      <ListItemAccount>
        <RouterProvider router={router} />
      </ListItemAccount>
    </Provider>
  );
}

export default App;
