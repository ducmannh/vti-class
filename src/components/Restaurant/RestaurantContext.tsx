import { createContext, useState } from "react";

export const RestaurantDataContext = createContext<any>(null)

export default function RestaurantContext({children}:any) {
    const [show, setShow] = useState(true);
    const [likeCount, setLikeCount] = useState(0);
    return(
        <RestaurantDataContext.Provider value={{show, setShow, likeCount, setLikeCount}}>
            {children}         
        </RestaurantDataContext.Provider>
    )
};
