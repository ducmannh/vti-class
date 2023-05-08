/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";


export const ListItemAccountContext = createContext<any>(null);

export default function ListItemAccount({ children }: any) {
  const [listAccounts, setListAccounts] = useState([]);
  const listItem = () => {
    fetch("https://6456519d5f9a4f236140a83c.mockapi.io/account", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setListAccounts(res);
      });
  };

  return (
    <ListItemAccountContext.Provider
      value={{listItem, listAccounts, setListAccounts}}
    >
      {children}
    </ListItemAccountContext.Provider>
  );
}
