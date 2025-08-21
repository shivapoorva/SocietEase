
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom"
import '../styles/Navbar.css';
import { useState } from 'react';
import { IoReorderFourSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loggedIn } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.loggedIn);
 const commitee_member = sessionStorage.getItem("commitee_member")
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/" style={{ color: `#6CB2EB` }}>Home</Link>
          <Link to="/features" style={{ color: `#6CB2EB` }}>Features </Link>
          <Link to="/members" style={{ color: `#6CB2EB` }}>Members </Link>
          <Link to="/aboutus" style={{ color: `#6CB2EB` }}> About Us </Link>
          <Link to="/contactus" style={{ color: `#6CB2EB` }}> Contact Us</Link>



        </div>
      </div>

      <div className="rightSide">
        <Link to="/" style={{ color: `#6CB2EB` }}>Home</Link>

        {isLoggedIn && (
                  <Link to="/features" style={{ color: `#6CB2EB` }}> Features</Link>

        )}
        {isLoggedIn && commitee_member=== "true" && (
        <Link to="/dashboardscript" style={{ color: `#6CB2EB` }}> Dashboard </Link>

        )}
        <Link to="/aboutus " style={{ color: `#6CB2EB` }}> About Us</Link>
        <Link to="/contactus" style={{ color: `#6CB2EB` }}> Contact Us </Link>
        <Link to="/log-in" style={{ color: `#6CB2EB` }} onClick={

          () => {
            if (isLoggedIn){
              dispatch(loggedIn(false));
            }else{
              navigate('/log-in');  
            }
             
          }
        }>  {isLoggedIn ? 'Log Out' : 'Log In'}</Link>
        <Link to="/AddMember" style={{ color: `#6CB2EB` }} > Register</Link>
        <button onClick={toggleNavbar}>
          <IoReorderFourSharp />         </button>

      </div>

    </div>
  )
}

export default Navbar
