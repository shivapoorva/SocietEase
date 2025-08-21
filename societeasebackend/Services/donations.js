const express = require('express');
const connection = require('../database/mysql');
const donations = require('../model/Donations');
const Member = require('../model/Member');
const Society = require('../model/Society');
const cors = require('cors');

const router = express.Router();
router.use(express.json());
router.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend origin
}));

router.post('', (req, res) => {
  const { member_id,purpose,payment_method,
    amount} = req.body;
 
    donations.create({
      "Member_id" :member_id, 
      "Purpose":purpose,
      "payment_method":payment_method ,
      "Amount":amount
      
    }).then(donations => {
        return res.status(201).json(donations)
      });
    
       
    });
    router.post('/getData', (req, res) => {
      const { society_id } = req.body;

      donations.findAll({ include: {
        model: Member,
        include: {
          model: Society
        }
      },

     }).then(donations => {
        console.log(donations);

        if (donations && society_id) {
          donations = donations.filter((donations) => {
            if (donations.member.Society_id == society_id) {
              return donations;
            }
          });
        }
        res.header('Access-Control-Allow-Origin', req.headers.origin);

        return res.send(donations);
      });
       
    });
    


  module.exports = router;