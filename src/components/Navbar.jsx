import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../context/ShopContextProvider";

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

  const totalItemsInCart = Object.values(cartItems).reduce(
    (acc, quantity) => acc + quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ color: "white", fontSize: 20 }}
          />
        </Link>
        <div className="cart-number">
          <p>
            {totalItemsInCart > 0 &&  totalItemsInCart }
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
