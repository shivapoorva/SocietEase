import React from 'react';
import Background from '../assets/Bg.mp4';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import FeaturesPage from './FeaturesHome';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import { useSelector } from 'react-redux';

function Home() {
  const isLoggedIn=useSelector((state)=>state.loggedIn);
  console.log("Home successful:", isLoggedIn);
  const navigate = useNavigate()
  // const getStarted = () => {
  //   navigate("/Sign-up")
  // }

  return (
    <div>
      <div className='main'>
        <div className="overlay"></div>
        <video src={Background} autoPlay loop muted />
        <div className="content">
          <h2>Welcome to SocietEase</h2>
          <p>Simplifying residential society management</p>
          {/* <button onClick={getStarted}>Get Started</button> */}
        </div>
      </div>
      <FeaturesPage />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default Home;
