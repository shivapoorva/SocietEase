const express = require('express');
const connection = require('../database/mysql');
const records = require('../model/Account_records');
const Member = require('../model/Member');
const Society = require('../model/Society');
const cors = require('cors');


const router = express.Router();
router.use(express.json());
router.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend origin
}));

router.post('', (req, res) => {
  const { commite_member_id,payment_method,amount,
    description} = req.body;
 
    records.create({
      "member_id" :commite_member_id, 
      "payment_method":payment_method,
      "Amount":amount ,
      "Description":description,
      
    }).then(records => {
        return res.status(201).json(records)
      });
    
       
    });

    router.post('/getData', (req, res) => {
      const { society_id } = req.body;

      records.findAll({ include: {
        model: Member,
        include: {
          model: Society
        }
      },

     }).then(records => {
        console.log(records);

        if (records && society_id) {
          records = records.filter((record) => {
            if (record.member.Society_id == society_id) {
              return record;
            }
          });
        }
        res.header('Access-Control-Allow-Origin', req.headers.origin);

        return res.send(records);
      });
       
    });
    
  module.exports = router;