import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FeatureBox from "./FeatureBoxHome";
import MaintainanceR from "../assets/maintainanceR.jpg";
import MemberNotices from "../assets/Notices.jpg";
import PollAnswers from "../assets/PollAnswers.jpg";
import Maintaianance from "../assets/Maintainance.jpg";
import Accountrecords from "../assets/Account records.jpg";
import PostNotices from "../assets/CommitteNotices.jpg";
import SolveIssue from "../assets/solveissue.jpg";
import PollQuestions from "../assets/PollQuestions.jpg";
import AddMembers from "../assets/AddMEMBERS.jpg";
import ViewMembers from "../assets/ViewMembers.jpg";
import ADDMAINTAINANCE from "../assets/ADDMAINTAINANCE.jpg";
import ADDACCOUNTRECORDS from "../assets/ADDACOUNTRECORDS.png";
import ADDDONATIONS from "../assets/ADDDONATIONS.jpg"
import VIEWISSUES from "../assets/VIEWISSUES.png";
import VIEWDONATION from "../assets/VIEWDONATION.png";
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
      image: AddMembers,
      title: "Add Member",
      description: "Societease allows committee members to Add/Validate new members, ensuring they match the community's values. This process strengthens the community by ensuring everyone shares common goals and values, fostering diversity and unity within the group..",
      
    },
    {
      image: ViewMembers,
      title: "View Member",
      description:"Members of Societease can view their neighbours on the website. By enabling users to get to know their neighbours and make connections with other members of the community, this feature fosters community engagement and connectivity."    ,
     
    },
    
    {
      image: MemberNotices,
      title: "Notices",
      description: "Members can effortlessly access and read notices. With a simple interface, they stay informed about community events and updates conveniently. This feature promotes transparency and engagement within the community, enriching the overall experience for members.",
      link:"Notices"
    },
    {
      image: PostNotices,
      title: "Post Notices",
      description: "Committee members can easily post notices to communicate important updates or announcements. This feature facilitates seamless communication within the organization, ensuring that all members are informed promptly. Notices can be customized with relevant details and distributed efficiently to the intended audience. This functionality enhances collaboration and keeps committee members well-informed about developments within the community.",
      link:"AddNotices"
    },
    
   
    {
      image: ADDMAINTAINANCE,
      title: "Add Maintaianance",
      description: "In Societease, committee members can effortlessly input maintenance details for members, with the system automatically calculating maintenance dues. This streamlined process ensures accurate financial tracking and transparency, simplifying administrative tasks for the committee and ensuring members stay informed about their dues.",
   
    },
    {
      image: Maintaianance,
      title: "Maintenance Status",
      description: "Societease streamlines maintenance monitoring for committee members, facilitating effortless tracking and management of maintenance activities associated with user accounts. This feature ensures efficient oversight, empowering users to stay informed and engaged in upkeep matters within the community, promoting transparency and accountability.",
    
    },
    {
      image: Accountrecords,
      title: "Account Records",
      description: "Societease provides committee members with a confidential feature to meticulously maintain comprehensive account records of all activities. These records are securely stored within the platform, safeguarding sensitive information. This ensures privacy and integrity, empowering committee members to efficiently manage operations while upholding data security standards.",

    },
    {
      image: ADDACCOUNTRECORDS,
      title: "Add Account Records",
      description: "Societease provides committee members with a confidential feature to meticulously maintain comprehensive account records of all activities. These records are securely stored within the platform, safeguarding sensitive information. This ensures privacy and integrity, empowering committee members to efficiently manage operations while upholding data security standards.",
    
    },
    
    {
      image: VIEWISSUES,
      title: "View Issues",
      description: "This feature enables committee members to access a centralized platform where they can view and address issues reported by members. By providing transparency and accountability, this feature fosters efficient problem-solving and enhances member satisfaction within the community. It streamlines the process of addressing concerns and ensures that issues are promptly acknowledged and resolved.",
    
    },
    {
      image: SolveIssue,
      title: "Add Issues",
      description:"Members can report issues on Societease for committee review. This centralized platform fosters transparency and accountability, ensuring prompt issue acknowledgment and resolution. It streamlines problem-solving, enhancing member satisfaction by addressing concerns efficiently. Committee members can access the platform to view and address reported issues promptly, promoting a responsive community environment." , 
       
    },
    
    {
      image: ADDDONATIONS,
      title: "Donations",
      description: "Societease allows members to contribute funds for society festivals or improvements, enhancing community involvement. This special feature empowers members to support initiatives they value. Committee members can monitor these donations, ensuring transparency and accountability in fund allocation, fostering trust and collaboration within the society.",
    
    },
    {
      image: VIEWDONATION,
      title: "View Donations",
      description: "Committee members in Societease can easily access and view donation records, promoting transparency and accountability. This feature enables committee oversight of funds, ensuring proper allocation for society initiatives. It fosters trust among members, demonstrating responsible management of donated resources for the community's benefit.",
   
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
