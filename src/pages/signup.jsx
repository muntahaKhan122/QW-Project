/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import '../css/signup.css';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Auth} from 'aws-amplify';


const Signup = () =>{
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(' ');
  const [confPass, setConfPass]=useState('');
  const history = useHistory();


  async function signUp() {
    try {
      const {user} = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional

        },
      });
      console.log(user);
      history.push('/VerifyUser');
    } catch (error) {
      setError('No such user exists');
      console.log('error signing up:', error);
    }
  }


  const checkValidations=(event)=>{
    event.preventDefault();

    if (email!==''&&username!==''&&password!==''&&confPass!=='') {
      if (password===confPass) {
        signUp();
      } else {
        setError('Passwords do not match');
      }
    } else {
      setError('All fields should be filled');
    }
  };


  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <h5 style={{marginTop: '20px'}}>Sign Up</h5>
        </div>

        <form>

          <input
            type="text" id="username" className="fadeIn first"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="login" placeholder="username"
          />
          <input
            type="text" id="email" className="fadeIn second"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="login" placeholder="email"
          />
          <input
            type="password" id="password" className="fadeIn third"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="login" placeholder="password"
          />
          <input
            type="password" id="confpassword" className="fadeIn fourth"
            value={confPass}
            onChange={(e) => setConfPass(e.target.value)}
            name="login" placeholder="confirm password"
          />
          <div className="error"
            onChange={(e) => setError(e.target.value)}>{error}</div>

          <input
            type="submit"
            onClick={checkValidations} className="fadeIn fifth"
            value="Sign Up"
          />
          <div className="signup"
            style={{marginTop: '-20px', marginBottom: '10px'}}>
            <Link to="/">Login</Link>

          </div>

        </form>


      </div>
    </div>
  );
};

export default Signup;
