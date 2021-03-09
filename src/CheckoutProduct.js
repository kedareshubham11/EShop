import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="cp__image" src={image} alt="product" />

      <div className="cp__info">
        <p className="cp__title">{title}</p>
        <p className="cp__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="cp__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
        
      </div>
    </div>
  );
}

export default CheckoutProduct;
