import { createContext, useState } from "react";

export const RestaurantDataContext = createContext<any>(null)

export default function RestaurantContext({children}:any) {
    const [show, setShow] = useState(true);
    return(
        <RestaurantDataContext.Provider value={{show, setShow}}>
            {children}         
        </RestaurantDataContext.Provider>
    )
};
