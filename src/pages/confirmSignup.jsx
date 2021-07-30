/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import '../css/signup.css';
import {useHistory} from 'react-router-dom';
import {Auth} from 'aws-amplify';


const VerifySignup = () =>{
  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState(' ');
  const history = useHistory();

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code);
      history.push('/Quotes');
    } catch (error) {
      setError('There is an error in signing up');
      console.log('error confirming sign up', error);
    }
  }


  const checkValidations=(event)=>{
    event.preventDefault();

    if (code!==''&&username!=='') {
      confirmSignUp();
    } else {
      setError('All fields should be filled');
    }
  };


  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <h5 style={{marginTop: '20px'}}>Verify</h5>
        </div>

        <form>

          <input
            type="text" id="username" className="fadeIn first"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="login" placeholder="username"
          />

          <input
            type="text" id="code" className="fadeIn second"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            name="login" placeholder="confirm password"
          />
          <div className="error"
            onChange={(e) => setError(e.target.value)}>{error}</div>

          <input
            type="submit"
            onClick={checkValidations} className="fadeIn fifth"
            value="Verify"
          />


        </form>


      </div>
    </div>
  );
};

export default VerifySignup;
