import React from "react";
import SubChild1 from "./SubChild1";
const Child1 = (props) => {
  return (
    <div>
      <h1>Child1 -</h1>
      <SubChild1 subval />
    </div>
  );
};
export default Child1;
