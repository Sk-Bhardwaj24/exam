import React from "react";

function Vegetables(props) {
  console.log(props.name);
  console.log(props.quantity);
  let quan = +props.quantity;
  const [totalquan, setCount] = React.useState(quan);
  function total(val) {
    setCount(totalquan + val);
  }
  return (
    <>
      <h4>
        {" "}
        {props.name}:{totalquan}
      </h4>

      <button onClick={() => total(1)}>+</button>
      <button onClick={() => total(-1)}>-</button>
    </>
  );
}

export default Vegetables;
