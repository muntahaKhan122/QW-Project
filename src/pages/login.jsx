import React, {useState } from 'react';
import '../css/signup.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const Login = () =>{


    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(" ");
    
    const checkValidations=(event)=>{

        event.preventDefault();
        if(email!=="" &&password!=="")
        {
            history.push("/Quotes");
        }
        else
        {
           setError("All fields should be filled");
        }
    
    
    }





    
    return(
        <div className="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
           <h5 style={{marginTop:"20px"}}>Login</h5>
        </div>
      
          <form>
            <input 
            type="text" id="login" class="fadeIn second" 
            value={email} onChange={e => setEmail(e.target.value)} name="login" placeholder="email"
            />
            <input
             type="password" id="password" class="fadeIn third" 
             value={password} onChange={e => setPassword(e.target.value)} name="login" placeholder="password"
             />

             <div className="error"  onChange={e => setError(e.target.value)}>{error}</div>

            <input 
            type="submit" onClick={checkValidations} class="fadeIn fourth" value="Log In"
            />
           <div className="signup" style={{marginTop:"-20px",marginBottom:"10px"}}>
            <Link to="/Signup">Sign Up</Link>
            </div>

          </form>
      
          {/* <div id="formFooter">
            <a class="underlineHover" href="#">Forgot Password?</a>
          </div> */}
      
        </div>
      </div>
    );
}

export default Login;
