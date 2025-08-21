const express = require("express");
const connection = require("../database/mysql");
const Incident = require("../model/Issues_report");
const { DATE } = require("sequelize");
const Committee_member = require("../model/Committee_member");
const cors = require('cors');
const Member = require("../model/Member");

const router = express.Router();
router.use(express.json());

router.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend origin
}));

router.post("", (req, res) => {
  const { member_id, description } = req.body;

  Incident.create({
    Member_id: member_id,
    Description: description,
    created_date: new Date(),
  }).then((Incident) => {
    res.header('Access-Control-Allow-Origin',req.headers.origin)

    return res.status(201).json(Incident);
  });
});
router.post("/getData", (req, res) => {

  let society_id = req.body.society_id;

  Incident.findAll({
    include: {
      model: Member,
    },
  }).then((Incident) => {

    if (Incident && society_id) {
      Incident = Incident.filter((incident) => {
        if (incident.member.Society_id == society_id) {
          return incident;
        }
      });
    }
    res.header('Access-Control-Allow-Origin',req.headers.origin)

    return res.send(Incident);
  });
});

router.put("", (req, res) => {
  const { indicent_id, commitee_member_id, comments, status } = req.body;

  Incident.update(
    {
      Member_id: commitee_member_id,
      Committee_comments: comments,
      Status: status,
    },
    {
      where: {
        id: parseInt(indicent_id),
      },
    }
  ).then((Incident) => {
    console.log(Incident);
    return res.send(Incident);
  });
});
module.exports = router;
