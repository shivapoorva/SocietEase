const express = require('express');
const cors = require('cors');
const connection = require('../database/mysql');
const member = require('../model/Member');
const Committee_member = require('../model/Committee_member');
const Society = require('../model/Society');
const Users = require('../model/Users')

const router = express.Router();

// Use CORS middleware to allow requests from specific origins
router.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend origin
}));

router.use(express.json());

router.post('', async (req, res) => {
  const { salutations, name, contact_number, dob, owner, flatno, email, validated_by, commitee_member, society_id, user_name, password } = req.body;
  
  try {
    // Check if the username already exists
    const existingUser = await Users.findOne({ where: { Username: user_name } });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Create the member record
    const newMember = await member.create({
      "Salutations": salutations,
      "name": name,
      "contact_number": contact_number,
      "DOB": dob,
      "Owner": owner,
      "Flat_Number": flatno,
      "Email": email,
      "Validated_by": validated_by,
      "Society_id": society_id,
    });

    // Create the user record
    const newUser = await Users.create({
      "member_id": newMember.id,
      "Username": user_name,
      "Password": password,
      "Email": email,
    });

    // If the user is a committee member, create a committee_member record
    if (commitee_member) {
      await Committee_member.create({
        "Member_id": newMember.id
      });
    }

    return res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


router.post('/getData', (req, res) => {
  const { society_id } = req.body;

  let filter = {
    include: {
      model: Society
    }
  };

  if (society_id) {
    filter.where = { Society_id: society_id };
  }

  member.findAll(filter).then(members => {

    Committee_member.findAll({
      where: {
        Member_id: members.map(member => member.id)
      }
    }).then(committeeMembers => {
      // Add committee member details to each member object
      const membersWithCommittee = members.map(member => {
        const committee = committeeMembers.find(committeeMember => committeeMember.Member_id === member.id);
        return {
          ...member.dataValues,
          committee_member: committee ? true : false,
          duration: committee ? committee.Duration_Period : null
        };
      });

      console.log('Members with committee:', membersWithCommittee);
      return res.status(200).json(membersWithCommittee);
    }).catch(err => {
      console.error('Error retrieving committee members:', err);
      return res.status(400).json({ error: 'Failed to retrieve committee members' });
    });
  });
});

router.put('', (req, res) => {
  const { member_updated, validated_by } = req.body;
  console.log('Member data:=======', member_updated);

  for (let i = 0; i < member_updated.length; i++) {
    const memberData = member_updated[i];
    console.log('Member data:=======', memberData);
    member.update({ Validated_by: validated_by }, {
      where: {
        id: memberData.id
      }
    }).then(member => {
      if (memberData.commitee_member) {
        Committee_member.create({
          "Member_id": memberData.id,
          "Duration_Period": memberData.duration
        });
      }
      console.log('Member updated:', member);
      return res.status(201).json(member);
    })
    
    .catch(err => {
      console.error('Error updating member:', err);
      return res.status(400).json({ error: 'Failed to update member' });
    });
    

  }

  

});


router.delete('', async (req, res) => {
  const { member_updated } = req.body;

  try {
    for (let i = 0; i < member_updated.length; i++) {
      const memberData = member_updated[i];
      const { id } = memberData;

      // First delete the committee member
      await Committee_member.destroy({
        where: {
          Member_id: id
        }
      });
      await Users.destroy({
        where: {
          member_id: id
        }
      });

      // Then delete the member
      await member.destroy({
        where: {
          id: id
        }
      });
    }

    console.log('Members and related committee members deleted successfully');
    return res.status(200).json({ message: 'Members and related committee members deleted successfully' });
  } catch (err) {
    console.error('Error deleting members and related committee members:', err);
    return res.status(400).json({ error: 'Failed to delete members and related committee members' });
  }
});

router.delete('/committeeMember', (req, res) => {
  const { member_updated } = req.body;

  for (let i = 0; i < member_updated.length; i++) {
    const memberData = member_updated[i];
    const { id } = memberData;
    Committee_member.destroy({
      where: {
        Member_id: id
      }
    }).then(committeeMember => {
      console.log('Committee member deleted:', committeeMember);
      return res.status(200).json(committeeMember);
    }).catch(err => {
      console.error('Error deleting committee member:', err);
      return res.status(400).json({ error: 'Failed to delete committee member' });
    });
  }
});



module.exports = router;
