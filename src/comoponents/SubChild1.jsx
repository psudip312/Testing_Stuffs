import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByValue } from "../feature/showSlice";
const SubChild1 = () => {
  const dispatch = useDispatch(); // send the data to the reducer

  const data = useSelector((c) => {
    console.log(c);
    return c.show.value;
  });

  return (
    <div>
      <h1>SubChils - {data}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        CLick me
      </button>
      <button
        onClick={() => {
          dispatch(incrementByValue(10));
        }}
      >
        CLick me
      </button>
    </div>
  );
};
export default SubChild1;
