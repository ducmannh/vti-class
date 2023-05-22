import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import List from "./components/List";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
    },
    {
      path: "/list",
      element: <List />,
    },
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
