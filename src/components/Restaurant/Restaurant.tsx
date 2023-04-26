import { RestaurantDataContext } from "./RestaurantContext";
import RestaurantMenu from "./RestaurantMenu";
import { useContext, useState } from "react";

export default function Restaurant() {
  const menuData = [
    {
      id: 1,
      nameValue: "Caesar Salad",
      description: "The original Caesar Salad recipe",
      price: 12,
      imageValue: "src/assets/salad.png",
      like: "like",
    },
    {
      id: 2,
      nameValue: "Spagetti Carbonara",
      description: "Better than your nonna! All local and fresh ingredients",
      price: 15,
      imageValue: "src/assets/spagetti.jpeg",
      like: "like",
    },
    {
      id: 3,
      nameValue: "Grilled Whole Fish",
      description: "Fish of the day, grilled whole with a side of vegetables",
      price: 13,
      imageValue: "src/assets/fish.jpg",
      like: "like",
    },
    {
      id: 4,
      nameValue: "Fish",
      description: "Fish of the day, grilled whole with a side of vegetables",
      price: 14,
      imageValue: "src/assets/fish.jpg",
      like: "like",
    },
    {
      id: 5,
      nameValue: "Pizza",
      description: "Fish of the day, grilled whole with a side of vegetables",
      price: 16,
      imageValue: "src/assets/fish.jpg",
      like: "like",
    },
  ];
  const [menu, setMenu] = useState<any>([]);
  // const {menu, setMenu} = useContext(RestaurantDataContext)
  // console.log(menu)
  const { show, setShow } = useContext(RestaurantDataContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleAddMenu: any = (
    nameValue: string,
    price: number,
    id: number,
    love: any
  ) => {
    const newMenu = {
      nameValue,
      price,
      id,
    };
    if (love) {
      setMenu(menu.filter((item: any) => item.id !== newMenu.id));
      setTotalPrice(totalPrice - price);
    } else {
      setMenu([...menu, newMenu]);
      setTotalPrice(totalPrice + price);
    }
  };
  const handlePayment = () => {
    setShow(!show);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Wild Restaurant Menu</h1>
      {show === true &&  (
        <div>
          {menuData.map((item, index) => {
            return (
              <RestaurantMenu
                key={index}
                id={item.id}
                nameValue={item.nameValue}
                description={item.description}
                price={item.price}
                imageValue={item.imageValue}
                like={item.like}
                handleAddMenu={handleAddMenu}
              />
            );
          })}
        </div>
      )}

      {show === false && (
        <div>
          {" "}
          <p>Total Price: {totalPrice}</p>
          {menu.map((item: any, index: number) => {
            return (
              <div key={index}>
                <p>Ban da chon mon : {item.nameValue}</p>
                <p>Gia : {item.price}</p>
              </div>
            );
          })}
        </div>
      )}

      {/* {menuData.map((item, index) => {
        return (
          <RestaurantMenu
            key={index}
            id={item.id}
            nameValue={item.nameValue}
            description={item.description}
            price={item.price}
            imageValue={item.imageValue}
            like={item.like}
            handleAddMenu={handleAddMenu}
          />
        );
      })} */}

      {/* <p>Total Price: {totalPrice}</p>
      {menu.map((item: any, index: number) => {
        return (
          <div key={index}>
            <p>Ban da chon mon : {item.nameValue}</p>
            <p>Gia : {item.price}</p>
          </div>
        );
      })} */}

      <button onClick={handlePayment}>Thanh toan</button>
    </div>
  );
}
