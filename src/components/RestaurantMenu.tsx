import { useState } from "react";
import "../App.css";

interface Menu {
  nameValue: string;
  description: string;
  price: string;
  imageValue: string;
  like: string;
}

export default function RestaurantMenu({
  nameValue,
  description,
  price,
  imageValue,
  like,
}: Menu) {
  const [love, setLove] = useState(false);
  const handleClick = () => {
    setLove(!love);
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
          <p onClick={handleClick} className={`love ${love ? "active" : ""}`}>
            {like}
          </p>
        </div>
      </div>
    </div>
  );
}
