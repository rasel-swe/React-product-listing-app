import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

const Product = (props) => {
  const { id, title, image, price } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);
  const cartIteamsAmount = cartItems[id];

  return (
    <div className="product">
      <img src={image} />
      <div className="description">
        <p>{title}</p>
        <p>Price : ${price}</p>
        <button onClick={() => addToCart(id)} className="button">
          Add to cart {cartIteamsAmount > 0 && <>({cartIteamsAmount})</>}{" "}
        </button>
      </div>
    </div>
  );
};

export default Product;
