import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  function login(){

    if(email && password){

      // ✅ SAVE LOGIN STATE (VERY IMPORTANT)
      localStorage.setItem("token", "userLoggedIn");

      // ✅ REDIRECT USING REACT ROUTER
      navigate("/dashboard", { replace: true });

    }
    else{

      alert("Enter details");

    }

  }

  return(

    <div className="login-page">

      <div className="login-container">

        <div className="login-box">

          <h2>Login</h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button onClick={login}>
            Login
          </button>

        </div>

      </div>

    </div>

  )

}

export default Login;