import "../../App.css";
import {  useState, useEffect } from "react";

interface Menu {
  id: number;
  nameValue: string;
  description: string;
  price: number;
  imageValue: string;
  like: string;
  handleAddMenu: any;
  handleAdd: any;
  handleMinus: any;
}

export default function RestaurantMenu({
  id,
  nameValue,
  description,
  price,
  imageValue,
  like,
  handleAddMenu,
  handleAdd,
  handleMinus,
}: Menu) {
  const [love, setLove] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleClick = () => {
    setLove(!love);
    handleAddMenu(price, love);
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
    handleAdd(id, nameValue, price, quantity);
  };

  const handleMinusQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      handleMinus(id, nameValue, price, quantity);
    }
  };

  return (
    <div className="div0">
      <div className="div1">
        <img src={imageValue} className="img" />
        <div className="div2">
          <p>{nameValue}</p>
          <p>{description}</p>
          <p>{quantity}</p>
        </div>
        <div className="div3">
          <p>{price}</p>
          <p onClick={handleClick} className={`love ${love ? "active" : ""}`}>
            {like}
          </p>
          <span onClick={handleAddQuantity} className="text-2xl">
            +
          </span>
          <span onClick={handleMinusQuantity} className="text-2xl">
            -
          </span>
        </div>
      </div>
    </div>
  );
}
