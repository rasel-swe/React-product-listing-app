import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

const CardItem = (props) => {
  const { id, title, image, price } = props.data1;
  const  { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)
  return (
    <div className="cart-item">
      <img src={image} />

      <div className="description1">
        <p>{title}</p>
       
        <div className="countHandle">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItems[id]}  onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
        <p>Price : ${price}</p>
      </div>
    </div>
  );
};

export default CardItem;
