import React from 'react';
import './SignUp.css';
import './Formsubmit.css';
import { Link } from 'react-router-dom';

const Formsuccessin = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <Link to='/Homepg'>
      <button className='form-submission-done' type='submit'>Continue to Site</button>
      </Link>
      <h1 className='form-success'> In Case of User not registered/Password did not match, Try signing in again for better experience</h1>
      <Link to='/sign-up'>
      <button className='form-submission-done' type='submit'>Sign-in Again</button>
      </Link>
    </div>
  );
};

export default Formsuccessin;