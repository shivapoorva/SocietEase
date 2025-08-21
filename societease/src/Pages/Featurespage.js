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
      image: MaintainanceR,
      title: "Member Maintainance",
      description: "Member Maintanance is a feature where we can add delete view make committeemember or remove him as committee member.",
      link:"Members"
    },
    
    {
      image: MemberNotices,
      title: "Notices",
      description: "Members can effortlessly access and read notices. With a simple interface, they stay informed about community events and updates conveniently. This feature promotes transparency and engagement within the community, enriching the overall experience for members.",
      link:"Notices"
    },
   
    {
      image: Maintaianance,
      title: "Maintenance Status",
      description: "Societease offers a feature allowing Committee members to monitor maintenance status effortlessly. Through this functionality, users can easily track and manage maintenance activities related to their accounts or profiles."
    
    },
    {
      image: Accountrecords,
      title: "Account Records",
      description: "Societease offers a confidential feature allowing committee members to maintain detailed account records of all activities. These records are securely stored, ensuring sensitive information remains protected within the platform.",
      link:"Records"
    },
    {
      image: PostNotices,
      title: "Post Notices",
      description: "Committee members can easily post notices to communicate important updates or announcements. This feature facilitates seamless communication within the organization, ensuring that all members are informed promptly. Notices can be customized with relevant details and distributed efficiently to the intended audience. This functionality enhances collaboration and keeps committee members well-informed about developments within the community.",
      link:"AddNotices"
    },
    {
      image: SolveIssue,
      title: "Issue Tracking",
      description: "This feature enables committee members to access a centralized platform where they can view and address issues reported by members. By providing transparency and accountability, this feature fosters efficient problem-solving and enhances member satisfaction within the community. It streamlines the process of addressing concerns and ensures that issues are promptly acknowledged and resolved.",
      link:"IssueReport"
    },
    {
      image: MaintainanceR,
      title: "Maintenance Reminder",
      description: "Societease's maintenance reminder feature offers seamless upkeep tracking, eliminating manual tasks. With automatic notifications for community facilities and amenities, members can stay informed effortlessly, enhancing their experience within the society.",
      link:"Members"
    },
    {
      image: MaintainanceR,
      title: "Donations",
      description: "Societease's maintenance reminder feature offers seamless upkeep tracking, eliminating manual tasks. With automatic notifications for community facilities and amenities, members can stay informed effortlessly, enhancing their experience within the society.",
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
