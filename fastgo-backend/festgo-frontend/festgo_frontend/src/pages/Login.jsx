import { useState } from "react";


function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");



function login(){

if(email && password){

window.location.href="/dashboard";

}
else{

alert("Enter details");

}

}



return(

<div className="login-page">


<div className="login-container">


<div className="login-box">


<h2>
Login
</h2>



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