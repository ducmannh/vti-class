import "../../App.css";
import { useStepperContext } from "@mui/material";
import { useContext, useState } from "react";
import { RestaurantDataContext } from "./RestaurantContext";

interface Menu {
  id: number;
  nameValue: string;
  description: string;
  price: number;
  imageValue: string;
  like: string;
  handleAddMenu: any;
}

export default function RestaurantMenu({
  id,
  nameValue,
  description,
  price,
  imageValue,
  like,
  handleAddMenu,
}: Menu) {
  const [love, setLove] = useState(false);
  const handleClick = () => {
    setLove(!love);
    handleAddMenu(nameValue, price, id, love);
  };


  return (
    <div className="div0">
      <div className="div1">
        <img src={imageValue} className="img" />
        <div className="div2">
          <p>{nameValue}</p>
          <p>{description}</p>
        </div>
        <div className="div3">
          <p>{price}</p>
          <p
            onClick={handleClick}
            className={`love ${love ? "active" : ""}`}
          >
            {like}
          </p>
        </div>
      </div>
    </div>
  );
}
