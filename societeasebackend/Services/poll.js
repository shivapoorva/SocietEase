const express = require('express');
const connection = require('../database/mysql');
const Poll = require('../model/Poll');
const Answer = require('../model/Answer');

const router = express.Router();
router.use(express.json());

router.post('', async (req, res) => {
  const { commitee_member_id, questions, answers, status } = req.body;
 
  try {
    const poll = await Poll.create({
      committee_id: commitee_member_id, 
      Questions: questions
    });

    for (let i = 0; i < answers.length; i++) {
      await Answer.create({
        Poll_id: poll.id,
        Option_text: answers[i]
      });
    }

    return res.status(201).json(poll);
  } catch (error) {
    console.error('Error creating poll:', error);
    return res.status(500).json({ error: 'Error creating poll' });
  }
});

router.get('', async (req, res) => {
  Answer.findAll({
    include: Poll // Include the associated answers
  }).then((Answer) => {
    console.log(Answer);
    res.header('Access-Control-Allow-Origin',req.headers.origin)
    const groupedAnswers = {};

    Answer.forEach(answer => {
      const key = `${answer.Poll_id}-${answer.Poll.committee_id}-${answer.Poll.id}`;
      if (!groupedAnswers[key]) {
          groupedAnswers[key] = [];
      }
      groupedAnswers[key].push(answer);
  });
  const formattedResponses = [];

  for (const key in groupedAnswers) {
    console.log("----questions",key)
    if (groupedAnswers.hasOwnProperty(key)) {
        const [pollId, committeeId, questionId] = key.split('-');

        // Retrieve answers for the current group
        const answers = groupedAnswers[key].map(answer => {
            return {
                text: answer.Option_text,
                answer_id: answer.id,
                votes: answer.Votes
            };
        });

        // Construct formatted response object
        const formattedResponse = {
            commitee_member_id: committeeId,
            question_id: questionId,
            questions: groupedAnswers[key][0].Poll.Questions,
            answers: answers,
            status: "ACTIVE/INACIVE" // Change as needed
        };

        // Push formatted response to the array
        formattedResponses.push(formattedResponse);
    }
}

    return res.send(formattedResponses);
  });
})

router.put("", (req, res) => {
  const { answer_id } = req.body;

  // Fetch the current answer with the provided answer_id
  Answer.findByPk(answer_id)
    .then(answer => {
      if (!answer) {
        return res.status(404).json({ error: 'Answer not found' });
      }

      // Increment the votes
      const newVotes = answer.Votes + 1;

      // Update the answer with the new votes
      return Answer.update(
        { Votes: newVotes },
        { where: { id: answer_id } }
      );
    })
    .then(() => {
      // Return success response
      return res.status(200).json({ success: true });
    })
    .catch(error => {
      console.error('Error updating votes:', error);
      return res.status(500).json({ error: 'Error updating votes' });
    });
});


  module.exports = router;