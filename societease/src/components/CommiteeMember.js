import React from 'react';
import "./CommiteeMember.css";
import TableData from './TableData';
import { Link } from 'react-router-dom';

function CommiteeMember() {

    const commiteeMember = true; // fetch this value from the API whether the user is committee/member
    const handleSendNotice = () => {
        alert("SEND NOTICE");
        // we can create a form with textarea field so that we can send the data as a notice to backend.
    };

    return (
        <div className='main'>
            <div className={"verticalBoxes"}>

                <Link to="/AddNotices" className='box1'>
                    Send Notices
                </Link>

                <Link to="/AddMaintainance" className='box2'>
                    Maintainance Records
                </Link>
                <div className='box3'>
                    Reported Issues
                </div>
                <Link to="/AddPoll" className='box4'>
                    Poll Sessions
                </Link>
                <Link to="/AddAccountrecords" className='box5'>
                    Account Records
                </Link>
            </div>

        </div>
    );
}

export default CommiteeMember;
