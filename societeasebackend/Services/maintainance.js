const express = require('express');
const connection = require('../database/mysql');
const maintainance = require('../model/Maintainance');
const SchMaintainance = require('../model/ScheduleMaintainance');
const cors = require('cors');
const Member = require('../model/Member');

const router = express.Router();
router.use(express.json());

router.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend origin
}));

router.post('', (req, res) => {
  const {
    commite_member_id,
    member_id,
    sinking_fund,
    repair_charges,
    municipal_tax,
    water_charges,
    parking_charges,
    NOC_charges,
    service_charges,
    N_A_taxes,
    other_charges,
    festival_fund,
    interest_percent
  } = req.body;

  maintainance.create({
    "Committee_id": commite_member_id,
    "Member_id": member_id,
    "Sinking_Fund": sinking_fund,
    "Repair_charges": repair_charges,
    "Municipal_Tax": municipal_tax,
    "Water_Charges": water_charges,
    "Parking_Charges": parking_charges,
    "NOC_Charges": NOC_charges,
    "Service_Charges": service_charges,
    "N_A_Taxes": N_A_taxes,
    "Other_Charges": other_charges,
    "Festival_fund": festival_fund,
    "Interest_percent": interest_percent,
    "Total_Amount": parseInt(sinking_fund) + parseInt(repair_charges) + parseInt(municipal_tax) + parseInt(water_charges) + parseInt(parking_charges) + parseInt(NOC_charges) + parseInt(service_charges) + parseInt(N_A_taxes) + parseInt(other_charges) + parseInt(festival_fund)
  }).then(maintainance => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const nextMonth = currentDate.getMonth() + 1;

    const remainingMonths = 12 - nextMonth + 1;

    const scheduleMaintainancePromises = [];

    for (let i = 0; i < remainingMonths; i++) {
      const maintainanceDate = new Date(currentYear, nextMonth + i, 1);

      const scheduleMaintainancePromise = SchMaintainance.create({
        "Maintainance_id": maintainance.id,
        "Member_id": member_id,
        "Amount": maintainance.Total_Amount,
        "Interest_Amount": (maintainance.Total_Amount * interest_percent) / 100,
        "created_at": new Date(),
        "Maintainance_date": maintainanceDate,
        "payment_status": "pending"
      });

      scheduleMaintainancePromises.push(scheduleMaintainancePromise);
    }

    Promise.all(scheduleMaintainancePromises)
      .then(scheduleMaintainances => {
        return res.status(201).json(scheduleMaintainances);
      })
      .catch(error => {
        return res.status(500).json({ error: 'Failed to create ScheduleMaintainance' });
      });
  }).catch(error => {
    return res.status(500).json({ error: 'Failed to create Maintainance'+error });
  });
});

router.post('/getData', (req, res) => {
  const member_id = req.body.member_id;
  const society_id = req.body.society_id;
  
let opt={
  include: {
    model: Member,
    where: {
      Society_id:society_id

    }
  }
}
  if(member_id)
  {
    opt={
      where: {
        Member_id: parseInt(member_id)
      },
      include: {
        model: Member,
        where:{
          Society_id:society_id
        }

      }
    }
  }
  

  return SchMaintainance.findAll(opt)
    .then(scheduleMaintainances => {
      return res.status(200).json(scheduleMaintainances);
    })
    .catch(error => {
      console.error('Error fetching ScheduleMaintainance:', error);
      return res.status(500).json({ error: 'Failed to fetch ScheduleMaintainance' });
    });
});


router.put('', (req, res) => {
  const scheduleMaintanance = req.body.scheduleMaintanance;
  const updatePromises = [];

  for (let i = 0; i < scheduleMaintanance.length; i++) {
    const schedule = scheduleMaintanance[i];
    console.log('Member data:=======', schedule);
    const updatePromise = SchMaintainance.update(
      { payment_status : schedule.payment_status},
      { where: { id: schedule.id } }
    );
    updatePromises.push(updatePromise);
  }

  Promise.all(updatePromises)
    .then(() => {
      return res.status(200).json({ message: 'ScheduleMaintanance updated successfully' });
    })
    .catch(error => {
      console.error('Error updating ScheduleMaintanance:', error);
      return res.status(500).json({ error: 'Failed to update ScheduleMaintanance' });
    });




 
});



module.exports = router;