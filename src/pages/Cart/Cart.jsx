import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import { Products } from "../../Products";
import CardItem from "./CardItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmout } = useContext(ShopContext);
  const navigate = useNavigate();

  // Calculate the total number of items in the cart
  const totalItemsInCart = Object.values(cartItems).reduce(
    (acc, quantity) => acc + quantity,
    0
  );

  return (
    <div className="cart">
      <div className="cart-items">
        <h1>
          {totalItemsInCart > 0
            ? `Your Cart Items (${totalItemsInCart}):`
            : "There is no item added"}
        </h1>

        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CardItem key={product.id} data1={product} />;
          }
          return null;
        })}
      </div>
      {totalItemsInCart > 0 ? (
        <div className="checkout">
          <p>Subtotal : ${getTotalCartAmout()} </p>
          <div>
            <button onClick={() => navigate("/")}>Add More Item</button>
            <button  onClick={() => navigate("/success")}>Checkout</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
