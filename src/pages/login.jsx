/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import '../css/signup.css';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Amplify, {Auth} from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

const Login = () =>{
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(' ');
  const [username, setUsername] = useState('');
  const checkValidations=(event)=>{
    event.preventDefault();
    if (username!=='' &&password!=='') {
      signIn();
    } else {
      setError('All fields should be filled');
    }
  };

  async function signIn() {
    try {
      // eslint-disable-next-line no-unused-vars
      const user = await Auth.signIn(username, password);
      history.push('/Quotes');
    } catch (error) {
      setError('No such user exists');
      console.log('error signing in', error);
    }
  }

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <h5 style={{marginTop: '20px'}}>Login</h5>
        </div>

        <form>
          <input
            type="text" id="login" className="fadeIn second"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="logi" placeholder="username"
          />
          <input
            type="password" id="password" className="fadeIn third"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="login" placeholder="password"
          />

          <div className="error"
            onChange={(e) => setError(e.target.value)}>{error}</div>

          <input
            type="submit"
            onClick={checkValidations}
            className="fadeIn fourth" value="Log In"
          />
          <div className="signup"
            style={{marginTop: '-20px', marginBottom: '10px'}}>
            <Link to="/Signup">Sign Up</Link>
          </div>

        </form>


      </div>
    </div>
  );
};

export default Login;
