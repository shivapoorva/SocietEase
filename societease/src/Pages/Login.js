import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/Login.css";
import BackgroundImage from "../assets/LOGINBG.jpg";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoLogIn } from "react-icons/io5";
import { loggedIn } from "../redux/actions";
import { useSelector } from "react-redux";


const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLoggedIn=useSelector((state)=>state.loggedIn);
  console.log("Login successful:", isLoggedIn);

 

  const [isCommitteeMember, setIsCommitteeMember] = useState(false); // State variable to store committee member field

  const handleLogin = async () => {
    
    let formData = {
      user_name: username,
      password: password,
    };
    try {
      const response = await fetch("http://localhost:5000/users/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      // If login successful, set isCommitteeMember based on the response
      setIsCommitteeMember(data.commitee_member || false);
      

     // setLoggedIn(true);

      if(isLoggedIn)
         dispatch(loggedIn(false));
      else
        dispatch(loggedIn(true));



      // Use optional chaining to safely access data.id
      sessionStorage.setItem("member_id", data?.member_id);
      sessionStorage.setItem("commitee_member", data?.commitee_member);
      sessionStorage.setItem("society_id" , data?.member.Society_id);
      sessionStorage.setItem("name" , data?.Username);
      sessionStorage.setItem("commitee_member_id" , data?.commitee_member_id);


    } catch (error) {
      console.error("Login error:", error);
      // Handle login error (e.g., show error message to the user)
    }
  };

  return (
    <div
      className="fullscreen-bg"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label>
            <FaUser />
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            <RiLockPasswordFill />
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            <IoLogIn /> Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
