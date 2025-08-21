const express = require('express');
const connection = require('../database/mysql');
const Socity = require('../model/Society');

const router = express.Router();
router.use(express.json());

router.post('/admin/socity', (req, res) => {
  const { name, contact_number, address} = req.body;
    Socity.create({
      "name":name,
      "contact_number":contact_number,
      "address":address
    }).then(socity => {
      console.log(socity);
      return res.status(201).json(socity)
    });
   
});

// Define endpoint to get data from MySQL
router.get('/admin/socity', (req, res) => {
  Socity.findAll().then(socity => {
    console.log(socity);
    return res.send(socity);
  });
   
});



module.exports = router;




