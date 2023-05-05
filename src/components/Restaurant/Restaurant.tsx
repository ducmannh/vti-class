import { RestaurantDataContext } from "./RestaurantContext";
import RestaurantMenu from "./RestaurantMenu";
import { useContext, useEffect, useState } from "react";

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
  const [money, setMoney] = useState(30);
  const { show, setShow } = useContext(RestaurantDataContext);

  // const handleAddMenu: any = (price: number, love: boolean) => {
  //   if (love) {
  //     setTotalPrice(totalPrice - price);
  //   } else {
  //     setTotalPrice(totalPrice + price);
  //   }
  // };

  const handleAdd = (
    id: number,
    nameValue: string,
    price: number,
    quantity: number
  ) => {
    const addMenu = {
      id,
      nameValue,
      price,
      quantity,
    };
    const existingMenu = [...menu, addMenu].find(
      (item: any) => item.id === addMenu.id
    );

    const addMenuQuantity = {
      ...existingMenu,
      quantity: existingMenu.quantity + 1,
    };
    setMenu([...menu.filter((item: any) => item.id !== id), addMenuQuantity]);
    setTotalPrice(totalPrice + price);
  };

  const handleMinus = (
    id: number,
    nameValue: string,
    price: number,
    quantity: number
  ) => {
    const minusMenu = {
      id,
      nameValue,
      price,
      quantity,
    };
    const existingMenu = [...menu, minusMenu].find(
      (item: any) => item.id === minusMenu.id
    );
    const minusMenuQuantity = {
      ...existingMenu,
      quantity: existingMenu.quantity - 1,
    };
    setMenu([...menu.filter((item: any) => item.id !== id), minusMenuQuantity]);
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

  const addQuantity = (id: number, price: number) => {
    setMenu(
      menu.map((item: any) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      })
    );
    setTotalPrice(totalPrice + price);
  };

  const minusQuantity = (id: number, price: number, quantity: number) => {
    setMenu(
      menu.map((item: any) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      })
    );
    setTotalPrice(totalPrice - price);

    if (quantity === 1) {
      handleDelete(id);
    }
  };

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
                // handleAddMenu={handleAddMenu}
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
                      {" "}
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => addQuantity(item.id, item.price)}
                      >
                        +
                      </span>{" "}
                      {item.quantity}{" "}
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          minusQuantity(item.id, item.price, item.quantity)
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
          className="bg-sky-500 px-5 py-2 rounded-lg text-white text-lg relative"
        >
          Payment
        </button>
      </div>
    </div>
  );
}
