import React, { useState } from 'react';
import "./Signup.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Signup() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const register = (e) => {
        e.preventDefault();
    
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth) => {
            // it successfully create a new user
            console.log(auth);
            if (auth) {
              history.push("/");
            }
          })
          .catch((error) => alert(error.message));
      };

    return (
        <div className="login">
            <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Create Account </h1>

        <form>
          <h5>Your name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}

          />
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />

          
        </form>

        <p>By signin -in you agree to all of our terms and conditions</p>
        
        <button
          type="submit"
          className="login__signinButton"
          onClick={register}
        >
          Create New Account
        </button>
        <span>Already have an account? <Link to="/login">Sign in</Link></span>
      </div>
        </div>
    )
}

export default Signup

// h1>Sign-in </h1>

//         <form>
//           <h5>Email</h5>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <h5>Password</h5>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             type="submit"
//             className="login__signinButton"
//             onClick={singIn}
//           >
//             Sign In
//           </button>
//         </form>

//         <p>By signin -in you agree to all of our terms and conditions</p>
        
//         <button
//           type="submit"
//           className="login__registerButton"
//           onClick={register}
//         >
//           Create New Account
//         </button>
//       </div>
