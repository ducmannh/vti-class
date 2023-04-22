import Content from "./Content";
export default function Home() {
  const data = [
    {
      fullName: "Nguyen Van A",
      age: 25,
      birthDay: 1995,
      class1: "Rocket",
      slogan: "a",
    },
    {
      fullName: "Nguyen Van B",
      age: 26,
      birthDay: 1994,
      class1: "Rocket",
      slogan: "Lam de tieu",
    },
    {
      fullName: "Nguyen Van C",
      age: 27,
      birthDay: 1993,
      class1: "Rocket",
      slogan: "Song de an",
    },
  ];
  return (
    <div>
      {data.map((item, index) => {
        return (
          <Content
            key={index}
            fullName={item.fullName}
            age={item.age}
            birthDay={item.birthDay}
            class1={item.class1}
            slogan={item.slogan}
          />
        );
      })}
    </div>
  );
}

