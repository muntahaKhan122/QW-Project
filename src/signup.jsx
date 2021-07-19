import React, { Component, useEffect, useRef, useState } from 'react';
import './signup.css';
import { useHistory } from "react-router-dom";
import Home from './home';
import { Link } from 'react-router-dom';



const Signup = () =>{

    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(" ");
    const [confPass,setConfPass]=useState("");
    const history = useHistory();


   

    const checkValidations=(event)=>{

        event.preventDefault();

        if(email!==""&&username!==""&&password!==""&&confPass!=="")
        {
            if(password===confPass)
            {
                history.push("/Quotes");
            }
            else
            {
                setError("Passwords do not match");    
            }
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
           <h5 style={{marginTop:"20px"}}>Sign Up</h5>
        </div>
      
          <form>
            
            <input 
            type="text" id="username" class="fadeIn first" 
            value={username} onChange={e => setUsername(e.target.value)} name="login" placeholder="email"
            />
            <input 
            type="text" id="email" class="fadeIn second" 
            value={email} onChange={e => setEmail(e.target.value)} name="login" placeholder="Username"
            />
            <input
             type="password" id="password" class="fadeIn third" 
             value={password} onChange={e => setPassword(e.target.value)} name="login" placeholder="password"
             />
            <input
             type="password" id="password" class="fadeIn fourth" 
             value={confPass} onChange={e => setConfPass(e.target.value)} name="login" placeholder="confirm password"
             />
             <div className="error"  onChange={e => setError(e.target.value)}>{error}</div>

            <input 
            type="submit" onClick={checkValidations} class="fadeIn fifth" value="Sign Up"
            />
           <div className="signup" style={{marginTop:"-20px",marginBottom:"10px"}}>
           <Link to="/">Login</Link>
        
            </div>

          </form>
      
      
        </div>
      </div>
    );
}

export default Signup;
