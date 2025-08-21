const express = require('express');
const cors = require('cors');

const Users = require('../model/Users');
const Member = require('../model/Member');
const commitee_member = require('../model/Committee_member');

const router = express.Router();

// Use CORS middleware to allow requests from specific origins
router.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend origin
}));

router.use(express.json());



router.post('', (req, res) => {
    const { user_name , password } = req.body;
  
    Users.findOne(
  {where : { "Username":user_name,"Password":password },
    include: [{
      model: Member,
    }]
  }).then(users=> {
    return commitee_member.findOne({
        where :{ "Member_id":users.member_id}})
    .then(mem => {
        if (mem) {
            // If committee member exists, set commitee_member field to true
            users.dataValues.commitee_member = true;
            users.dataValues.commitee_member_id = mem.id;
          } else {
            // If committee member does not exist, set commitee_member field to false
            users.dataValues.commitee_member = false;
          }
          
    
          // Send the modified users object in the response
          return res.send(users);
    })
  }).catch(error => {
    console.error("Error fetching users with committees:", error);
    return res.status(500).send("Internal Server Error");
  });
});




module.exports = router;
