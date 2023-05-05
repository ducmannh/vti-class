import { createContext, useState } from "react";

export const RestaurantDataContext = createContext<any>(null)

export default function RestaurantContext({children}:any) {
    const [disabledBtn, setDisabledBtn] = useState(false);
    const [showAdd, setShowAdd] = useState(true);
    return(
        <RestaurantDataContext.Provider value={{disabledBtn, setDisabledBtn, showAdd, setShowAdd}}>
            {children}         
        </RestaurantDataContext.Provider>
    )
};
