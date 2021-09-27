import React, { useState } from 'react';
import './Login.css';

function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  const handleLogin = () => {
    props.history.push('/dashboard');
  }


  return(


    <div className="login-wrapper">
        <div class="grad">
        </div>
        <div class="header">
			<div>Wel<span>come</span></div>
	 	</div>
         <div className="login">
      <form >
        <label>
          <p>User<span>name</span>  </p>
          <input type="text" {...username} autoComplete="new-password" />
         
        </label>
        <label>
          <p>Pass<span>word</span>   </p>
          <input type="password"{...password} autoComplete="new-password" />
        </label>
        <div className="login-button">
          <button type="submit" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading}>Login</button>
        </div>
      </form>
      </div>
    </div>
    
  )
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;