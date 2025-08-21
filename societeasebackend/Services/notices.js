const express = require("express");
const connection = require("../database/mysql");
const notices = require("../model/Notices");
const Society = require("../model/Society");
const Member = require("../model/Member");
const cors = require('cors');

const { DATE,Op } = require("sequelize");

const Committee_member = require("../model/Committee_member");


const router = express.Router();
router.use(express.json());

router.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend origin
}));

router.post('', (req, res) => {
  const { commitee_member_id, content, title, priority,valid_till } = req.body;

  notices
    .create({
      member_id: commitee_member_id,
      content: content,
      title: title,
      created_at: new Date(),
      updated_at: new Date(),
      priority: priority,
      valid_till: valid_till,
    })
    .then((notices) => {
      return res.status(201).json(notices);
    });




});
router.post('/getData', (req, res) => {
  const { society_id } = req.body;

  let queryOptions = {
    include: {
      model: Member,
      include: {
        model: Society
      }
    },
    where: {
      valid_till: {
        [Op.gte]: new Date() 
      }
    },
    order: [['updated_at', 'DESC']],
  };

  return notices
    .findAll(queryOptions)
    .then((notices) => {
      if (notices && society_id) {
        notices = notices.filter((notice) => {
          if (notice.member.Society_id == society_id) {
            return notice;
          }
        });
      }

      res.header('Access-Control-Allow-Origin', req.headers.origin);

      return res.send(notices);
    });
});

module.exports = router;
