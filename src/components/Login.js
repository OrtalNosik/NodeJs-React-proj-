import React, { useState } from 'react';
import '../App.css';
import '../style/Login.css';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3200/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).catch((error) => {
      console.error('Error:', error);
    });
    const data = await response.json();
    alert(data.message);
    if(data.message =="Login successful"){
      window.location.href = "/";
    }

  };

  const handleClose = () => {
    // handle close logic here
    props.onClose();
  };

  return (
      <div className="login-form">
        <a className="btn-close"  href="/" onClick={handleClose}>
          <i className="bi bi-x"></i>
        </a>
        <form className="auth-inner" onSubmit={handleSubmit}>
          <h3>התחברות   </h3>
          <div className="mb-3">
            <label>כתובת אימייל</label>
            <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>סיסמא</label>
            <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">
                זכור אותי
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              אישור
            </button>
          </div>
        </form>
      </div>
  );
}

export default Login;
