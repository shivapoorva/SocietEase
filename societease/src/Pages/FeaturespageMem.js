import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FeatureBox from "./FeatureBox";
import MaintainanceR from "../assets/maintainanceR.jpg";
import MemberNotices from "../assets/Notices.jpg";
import PollAnswers from "../assets/PollAnswers.jpg";
import Maintaianance from "../assets/Maintainance.jpg";
import Accountrecords from "../assets/Account records.jpg";
import PostNotices from "../assets/CommitteNotices.jpg";
import SolveIssue from "../assets/solveissue.jpg";
import PollQuestions from "../assets/PollQuestions.jpg";
import ViewMembers from "../assets/ViewMembers.jpg";
import ADDMAINTAINANCE from "../assets/ADDMAINTAINANCE.jpg";
import ADDDONATIONS from "../assets/ADDDONATIONS.jpg"

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "black",
    padding: theme.spacing(8),
    textAlign: "center",
    color: "black",
  },
  title: {
    marginBottom: theme.spacing(8),
    fontWeight: "bold",
    color: "white", // Add this line to set the title color as white
  },
}));

const Featurespage = () => {
  const classes = useStyles();

  const features = [
    {
      image: ViewMembers,
      title: "View Members",
      description:"Members of Societease can view their neighbours on the website. By enabling users to get to know their neighbours and make connections with other members of the community, this feature fosters community engagement and connectivity."    ,

      link:"Members"
    },
    {
      image: MemberNotices,
      title: "View Notices",
      description: "Members can effortlessly access and read notices. With a simple interface, they stay informed about community events and updates conveniently. This feature promotes transparency and engagement within the community, enriching the overall experience for members.",
      link:"Notices"
    },
    
   
   
    {
      image: SolveIssue,
      title: "Add Issues",
      description:"Societease allows issue reporting for committee review, promoting transparency and prompt resolution. This centralized platform streamlines problem-solving, enhancing member satisfaction. Committee members can promptly address reported issues, fostering a responsive community environment." , 
      link:"IssueReport"
    },
    {
      image: ADDMAINTAINANCE,
      title: "Maintenance Reminder",
      description: "Societease's maintenance reminder feature offers seamless upkeep tracking, eliminating manual tasks. With automatic notifications for community facilities and amenities, members can stay informed effortlessly, enhancing their experience within the society.",
      link:"Maintainance"
    },
    {
      image: ADDDONATIONS,
      title: "Add Donations",
      description: "Societease allows members to contribute funds for society festivals or improvements, enhancing community involvement. This special feature empowers members to support initiatives they value. Committee members can monitor these donations, ensuring transparency and accountability in fund allocation, fostering trust and collaboration within the society.",

      link:"AddDonation"
    }

  ];

  return (
    <div className={classes.container}>
      <Container>
        <Typography variant="h3" className={classes.title}>
          Our Features
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FeatureBox {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Featurespage;
