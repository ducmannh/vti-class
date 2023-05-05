import { RestaurantDataContext } from "./RestaurantContext";
import RestaurantMenu from "./RestaurantMenu";
import { useContext, useEffect, useState } from "react";

export default function Restaurant() {
  const menuData = [
    {
      id: 1,
      nameValue: "Caesar Salad",
      description: "The original Caesar Salad recipe",
      price: 2,
      imageValue: "src/assets/salad.png",
      like: "like",
    },
    {
      id: 2,
      nameValue: "Spagetti Carbonara",
      description: "Better than your nonna! All local and fresh ingredients",
      price: 5,
      imageValue: "src/assets/spagetti.jpeg",
      like: "like",
    },
    {
      id: 3,
      nameValue: "Grilled Whole Fish",
      description: "Fish of the day, grilled whole with a side of vegetables",
      price: 3,
      imageValue: "src/assets/fish.jpg",
      like: "like",
    },
    {
      id: 4,
      nameValue: "Fish",
      description: "Fish of the day, grilled whole with a side of vegetables",
      price: 8,
      imageValue: "src/assets/fish.jpg",
      like: "like",
    },
    {
      id: 5,
      nameValue: "Pizza",
      description: "Fish of the day, grilled whole with a side of vegetables",
      price: 9,
      imageValue: "src/assets/fish.jpg",
      like: "like",
    },
  ];
  const [menu, setMenu] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [money, setMoney] = useState(30);
  const [show, setShow] = useState(true);
  const { disabledBtn, setDisabledBtn } = useContext(RestaurantDataContext);
  const { showAdd, setShowAdd } = useContext(RestaurantDataContext);

  const handleAdd = (
    id: number,
    nameValue: string,
    price: number,
    quantity: number
  ) => {
    const existingMenu = menu.find((item: any) => item.id === id);
    const updatedMenu = existingMenu
      ? menu.map((item: any) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      : [...menu, { id, nameValue, price, quantity: quantity + 1 }];
    setMenu(updatedMenu);
    setTotalPrice(totalPrice + price);

    if (price > money) alert("You don't have enough money");
  };

  const handleMinus = (
    id: number,
    nameValue: string,
    price: number,
    quantity: number
  ) => {
    const existingMenu = menu.find((item: any) => item.id === id);
    const updatedMenu = existingMenu
      ? menu.map((item: any) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      : [...menu, { id, nameValue, price, quantity: quantity - 1 }];
    setMenu(updatedMenu);
    setTotalPrice(totalPrice - price);
  };

  const handlePayment = () => {
    setShow(!show);
  };

  const handleDelete = (id: number) => {
    const filteredMenu = menu.filter((item: any) => item.id !== id);
    const newTotalPrice = filteredMenu.reduce(
      (sum: number, item: any) => sum + item.price * item.quantity,
      0
    );
    setMenu(filteredMenu);
    setTotalPrice(newTotalPrice);
  };

  useEffect(() => {
    const newMoney = 30 - totalPrice;
    if (newMoney < 0) {
      setShowAdd(false);
      setDisabledBtn(true);
    } else {
      setMoney(newMoney);
      setShowAdd(true);
      setDisabledBtn(false);
    }
  }, [totalPrice]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }} className="text-3xl">
        Wild Restaurant Menu
      </h1>
      {show === true && (
        <div>
          <h1 style={{ textAlign: "center", fontSize: "20px" }}>
            You have {money}
          </h1>
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
                handleAdd={handleAdd}
                handleMinus={handleMinus}
                money={money}
                totalPrice={totalPrice}
                setMoney={setMoney}
              />
            );
          })}
        </div>
      )}

      {show === false && (
        <div className="flex flex-col items-center">
          <h1 style={{ textAlign: "center", fontSize: "20px" }}>
            You have {money}
          </h1>
          <table className="table-fixed text-xl text-center">
            <thead>
              <tr>
                <th className="px-4 py-2">Food Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
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
                      {showAdd && (
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            handleAdd(
                              item.id,
                              item.nameValue,
                              item.price,
                              item.quantity
                            )
                          }
                        >
                          +
                        </span>
                      )}
                      {item.quantity}
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          handleMinus(
                            item.id,
                            item.nameValue,
                            item.price,
                            item.quantity
                          )
                        }
                      >
                        -
                      </span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      {" "}
                      <button
                        className="bg-red-500 px-5 py-2 rounded-lg text-white text-md"
                        onClick={() => handleDelete(item.id)}
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
          className="bg-sky-500 px-5 py-2 rounded-lg text-white text-lg relative disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={disabledBtn}
        >
          Payment
        </button>
      </div>
    </div>
  );
}
