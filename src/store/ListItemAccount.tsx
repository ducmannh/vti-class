/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import { instance } from "../instanceAxios";

export const ListItemAccountContext = createContext<any>(null);

export default function ListItemAccount({ children }: any) {
  const [listAccounts, setListAccounts] = useState([]);
  const listItem = () => {
    instance.get("/account").then((res) => setListAccounts(res.data));
  };

  return (
    <ListItemAccountContext.Provider
      value={{ listItem, listAccounts, setListAccounts }}
    >
      {children}
    </ListItemAccountContext.Provider>
  );
}
