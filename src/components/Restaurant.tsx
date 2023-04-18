import RestaurantMenu from "./RestaurantMenu";

export default function Restaurant() {
  const menuData = [
    {
      nameValue: "Caesar Salad",
      description: "The original Caesar Salad recipe",
      price: "12 EUR",
      imageValue: 'src/assets/salad.png',
      like: 'like'
    },
    {
      nameValue: "Spagetti Carbonara",
      description: "Better than your nonna! All local and fresh ingredients",
      price: "15 EUR",
      imageValue: "src/assets/spagetti.jpeg",
      like: 'like'
    },
    {
      nameValue: "Grilled Whole Fish",
      description: "Fish of the day, grilled whole with a side of vegetables",
      price: "12 EUR",
      imageValue: "src/assets/fish.jpg",
      like: 'like'
    },
  ];
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Wild Restaurant Menu</h1>
      {menuData.map((item, index) => {
        return (
          <RestaurantMenu
            key={index}
            nameValue={item.nameValue}
            description={item.description}
            price={item.price}
            imageValue={item.imageValue}
            like={item.like}
          />
        );
      })}
    </div>
  );
}
