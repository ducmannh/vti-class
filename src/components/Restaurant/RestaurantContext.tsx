import { createContext, useState } from "react";
import Restaurant from "./Restaurant";

export const RestaurantDataContext = createContext<any>(null)

export default function RestaurantContext({children}:any) {
    // const [menu, setMenu] = useState<any>([]);
    // const [love, setLove] = useState(false);
    const [show, setShow] = useState(true);
    return(
        <RestaurantDataContext.Provider value={{show, setShow}}>
            {children}         
        </RestaurantDataContext.Provider>
    )
};
