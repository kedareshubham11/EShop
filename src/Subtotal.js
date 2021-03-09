import React from "react";
import "./Subtotal.css";

import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of Homework  */}
              Subtotal ({basket?.length} items):<strong>{value}</strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //part of homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      {basket.length===0 ? <button disabled> Add Atleast 1 item </button>:
      !user ?
        <button onClick={e => history.push("/login")}> Login to Checkout </button>
      :
        <button onClick={e => history.push("/payment")}> Proceed to Checkout </button>
      
    }
      
    </div>
  );
}

export default Subtotal;
