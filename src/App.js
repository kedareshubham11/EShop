import React, { useEffect, useLayoutEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Signup from "./Signup";

const promise = loadStripe('pk_test_51I42F8AbRAUu3f08khjAeehVjhZUcAroQLaZfu5Jq5iR4wMWjuVJT8J3moQngMSvdbPtPI4AcKnKrf5zOFsMMDnE00rp92sSNi');

function App() {
  const [{}, dispatch] = useStateValue();
  useLayoutEffect (() => {
    //will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >> ", authUser);

      if (authUser) {
        // the use just logged in  the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //  use is logges out 
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>

  
            
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
