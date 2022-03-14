import React from "react";
function Wishlist() {
  const [List, setQuery] = React.useState("");
  const [WList, setWList] = React.useState([]);
  const display = () => {
    const dis = {
      wdList: List,
      status: false,
    };
    // console.log(val);
    let dispalyWhislist = [...WList, dis];
    setWList(dispalyWhislist);
  };
  if (WList.length > 3) {
    console.log("halo");
    return <h1>You cannot add more than 3 items to wishlist</h1>;
  }

  const takeinput = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <>
      <h1>Wishlist</h1>
      <input
        type="text"
        placeholder="enter"
        onChange={takeinput}
        value={List}
      />
      <button onClick={() => display()}>ADD</button>
      {WList.map(({ wdList, status }, idx) => (
        <p key={idx}>{wdList}</p>
      ))}
      {/* <p>{List}</p>; */}
    </>
  );
}
export default Wishlist;
