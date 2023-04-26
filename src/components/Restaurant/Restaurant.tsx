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
  const [totalPrice, setTotalPrice] = useState(0);
  const { show, setShow } = useContext(RestaurantDataContext);
  const { likeCount, setLikeCount } = useContext(RestaurantDataContext);
  
  const handleAddMenu: any = (
    nameValue: string,
    price: number,
    id: number,
    love: boolean
  ) => {
    const newMenu = {
      nameValue,
      price,
      id,
    };
    if (love) {
      setMenu(menu.filter((item: any) => item.id !== newMenu.id));
      setTotalPrice(totalPrice - price);
      setLikeCount(likeCount - 1);
    } else {
      setMenu([...menu, newMenu]);
      setTotalPrice(totalPrice + price);
      setLikeCount(likeCount + 1);
    }
  };

  const handlePayment = () => {
    setShow(!show);
  };

  const handleDelete = (id: number, price: number) => {
    setMenu(menu.filter((item: any) => item.id !== id));
    setTotalPrice(totalPrice - price);
    setLikeCount(likeCount - 1);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }} className="text-3xl">
        Wild Restaurant Menu
      </h1>
      {show === true && (
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
        <div className="flex flex-col items-center">
          <table className="table-fixed text-xl">
            <thead>
              <tr>
                <th className="px-4 py-2">Food Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item: any, index: number) => {
                return (
                  <tr key={index}>
                    <td className="px-4 py-2">{item.nameValue}</td>
                    <td className="px-4 py-2">{item.price}</td>
                    <td className="px-4 py-2">
                      {" "}
                      <button
                        className="bg-red-500 px-5 py-2 rounded-lg text-white text-md"
                        onClick={() => handleDelete(item.id, item.price)}
                      >
                        Delete
                      </button>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="text-xl">Total Price: {totalPrice}</p>
        </div>
      )}

      <div className="flex justify-center mt-2">
        <button
          onClick={handlePayment}
          className="bg-sky-500 px-5 py-2 rounded-lg text-white text-lg relative"
        >
          Payment
          <span className="absolute bottom-7 left-24 rounded-full bg-red-500 text-white px-2 py-1 text-xs">
            {likeCount}
          </span>
        </button>
      </div>
    </div>
  );
}
