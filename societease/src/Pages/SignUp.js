import React, { useState } from 'react';
import '../styles/Signup.css'; // Import your styling
import BackgroundImage from '../assets/LOGINBG.jpg';
import { Link } from 'react-router-dom';
const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [userData, setUserdata] = useState({})

  const handleSignup = () => {
    // Perform signup logic here (e.g., call an API)
    // For simplicity, let's assume successful signup for any input
    console.log('User signed up!');
    let userData = {
      username: username,
      email: email,
    }
    console.log(userData)
  };

  return (
    <div className="fullscreen-bg" style={{ backgroundImage:` url(${BackgroundImage})` }}>
      <div className="signup-container">
        <h2>Signup</h2>
        <form>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="button" onClick={handleSignup}>
            Signup
          </button>
        </form>
        <p className="mt-5 text-textColor text-center">
          Already have an account?
          <Link to="/login" className="text-primaryColor font-medium ml-1">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;