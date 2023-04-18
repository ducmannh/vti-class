import { useState } from "react";

interface Person {
  fullName: string;
  age: number;
  birthDay: number;
  class1: string;
  slogan: string;
}

export default function Content({
  fullName,
  age,
  birthDay,
  class1,
  slogan,
}: Person) {
  const [show, setShow] = useState(true);
  const [buttonText, setButtonText] = useState("An");
  const handleClick = () => {
    setShow(!show);
    if(buttonText === "An"){
      setButtonText("hien");
    }else{
      setButtonText("An");
    }
  };
  return (
    <div>
      {show && (
        <div>
          <p>fullName: {fullName}</p>
          <p>age: {age}</p>
          <p>birthDay: {birthDay}</p>
          <p>class: {class1}</p>
          <p>slogan: {slogan}</p>
        </div>
      )}
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}
