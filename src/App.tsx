import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./components/List";
import Cart from "./components/Cart";
import Detail from "./components/Detail";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <List />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/detail",
      element: <Detail />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    }
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
