import React from 'react';
import './SignUp.css';
import './Formsubmit.css';
import { Link } from 'react-router-dom';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <Link to='/Homepg'>
      <button className='form-submission-done' type='submit'>Continue to Site</button>
      </Link>
    </div>
  );
};

export default FormSuccess;