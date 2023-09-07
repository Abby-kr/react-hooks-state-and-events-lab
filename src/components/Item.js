import React , {useState} from "react";

function Item({ name, category }) {

  const [itemInCart, setItemInCart] = useState("")

  function handleClick(){
    setItemInCart((itemInCart) => !itemInCart)
  }

  const itemClass = itemInCart ? "in-cart" : ""

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{itemInCart ? "Add to Cart" : "Remove From Cart" }</button>
    </li>
  );
}

export default Item;
