
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Features from './Pages/Features';
import ContactUs from './Pages/ContactUs';
import SignUp from './Pages/SignUp';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AboutUs from './Pages/AboutUs';
import Login from './Pages/Login';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Members from './Pages/Members';
import Records from './Pages/Records';
import IssueReport from './Pages/IssueReport';
import AddMember from './Forms/AddMember';
import Notices from './Pages/Notices';
import AddIncident from './Forms/AddIncident';
import UpdateIncident from './Forms/UpdateIncident';
import AddNotices from './Forms/AddNotices';
import AddDonation from './Forms/AddDonations';
import AddAccountrecords from './Forms/AddAccountrecords';
import AddMAintainance from './Forms/Addmaintainance';
import FeaturesPage from './Pages/FeaturespageMem';
import Maintainance from './Pages/Maintainance';
import Dashboardscript from './Pages/dashboardscript'
import store from './redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Donations from './Pages/Donation';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.loggedIn);


  const onFormSwitch = (formType) => {
    // Handle form switching logic here, if needed
    console.log('Switching to ${formType} form');
  };
  console.log(store.getState());

  return (

  


    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/features" element={<Features />} />
          <Route exact path="/members" element={<Members/>} />
          <Route exact path="/records" element={<Records/>} />
          <Route exact path="/issuereport" element={<IssueReport/>} />
          <Route exact path="/notices" element={<Notices/>} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/addMember" element={<AddMember/>} />
          <Route exact path="/addIncident" element={<AddIncident/>} />
          <Route exact path="/updateIncident" element={<UpdateIncident/>} />
          <Route exact path="/addNotices" element={<AddNotices/>} />
          <Route exact path="/addDonation" element={<AddDonation/>} />
          
          <Route exact path="/addAccountrecords" element={<AddAccountrecords/>} />
          <Route exact path="/addMaintainance" element={<AddMAintainance/>} />
          <Route exact path="/featurespage" element={<FeaturesPage/>} />
          <Route exact path="/dashboardscript" element={<Dashboardscript/>} />
          <Route exact path="/maintainance" element={<Maintainance/>} />
          <Route exact path="/donations" element={<Donations />} />



          

          <Route
            exact
            path="/log-in"
            element={
              isLoggedIn  ? (
                <Navigate to="/Home" />
              ) : (
                <Login onFormSwitch={onFormSwitch} setLoggedIn={isLoggedIn} />
              )
            }
          />
          
        </Routes>
      </Router>
      <Footer />
    </div>
 
  );
}

export default App;