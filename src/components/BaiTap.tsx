/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const initialReducer = {
  data: 0,
};

const todoReducer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case "PLUS_ONE":
      return { ...state, data: action.payload + 1 };
    case "PLUS_TWO":
      return { ...state, data: action.payload + 2 };
    case "MINUS_ONE":
      return { ...state, data: action.payload - 1 };
    case "MINUS_TWO":
      return { ...state, data: action.payload - 2 };
    case "SQUARE":
      return { ...state, data: action.payload * action.payload };
    case "RESET":
      return { ...state, data: 0 };
    default:
      return state;
  }
};

const BaiTap = () => {
  const [numberA, setNumberA] = React.useState<number>(0);
  const [numberB, setNumberB] = React.useState<number>(0);
  const [numberC, setNumberC] = React.useState<number>(0);
  const [numberD, setNumberD] = React.useState<number>(0);

  const sum = React.useMemo(() => {
    console.log("sum");
    return Number(numberA) + Number(numberB);
  }, [numberA, numberB]);

  const minus = React.useMemo(() => {
    console.log("minus");
    return Number(numberC) - Number(numberD);
  }, [numberC, numberD]);

  // const sum1 = (numberA: number, numberB: number) => {
  //   console.log("sum");
  //   return Number(numberA) + Number(numberB);
  // };

  // const minus1 = (numberC: number, numberD: number) => {
  //   console.log("minus");
  //   return Number(numberC) - Number(numberD);
  // };

  const [states, dispatch] = React.useReducer(todoReducer, initialReducer);

  const handlePlusOne = () => {
    dispatch({
      type: "PLUS_ONE",
      payload: states.data,
    });
  };

  const handlePlusTwo = () => {
    dispatch({
      type: "PLUS_TWO",
      payload: states.data,
    });
  };

  const handleMinusOne = () => {
    dispatch({
      type: "MINUS_ONE",
      payload: states.data,
    });
  };

  const handleMinusTwo = () => {
    dispatch({
      type: "MINUS_TWO",
      payload: states.data,
    });
  };

  const handleSquare = () => {
    dispatch({
      type: "SQUARE",
      payload: states.data,
    });
  };

  const handleReset = () => {
    dispatch({
      type: "RESET",
      payload: states.data,
    });
  };

  return (
    <>
      {/* useMemo */}
      <div className="flex text-2xl">
        <div className="mr-8">
          <div className="border-2 bg-amber-400">Sum</div>
          <input
            type="number"
            placeholder="Nhap so A"
            onChange={(e: any) => setNumberA(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder="Nhap so B"
            onChange={(e: any) => setNumberB(e.target.value)}
          />
          <br />
          <div>Sum = {sum}</div>
          {/* <div>Sum = {sum1(numberA, numberB)}</div> */}
        </div>

        <div>
          <div className="border-2 bg-amber-400">Minus</div>
          <input
            type="number"
            placeholder="Nhap so C"
            onChange={(e: any) => setNumberC(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder="Nhap so D"
            onChange={(e: any) => setNumberD(e.target.value)}
          />
          <br />
          <div>Minus = {minus}</div>
          {/* <div>Minus = {minus1(numberC, numberD)}</div> */}
        </div>
      </div>

      {/* useReducer */}
      <div className="mt-10">
        <button
          onClick={handlePlusOne}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mr-2"
        >
          +1
        </button>
        <button
          onClick={handleMinusOne}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mr-2"
        >
          -1
        </button>
        <button
          onClick={handlePlusTwo}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mr-2"
        >
          +2
        </button>
        <button
          onClick={handleMinusTwo}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mr-2"
        >
          -2
        </button>
        <button
          onClick={handleSquare}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mr-2"
        >
          x^2
        </button>
        <button
          onClick={handleReset}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mr-2"
        >
          Reset
        </button>
        <div className="text-2xl">Result: {states.data}</div>
      </div>
    </>
  );
};

export default BaiTap;
