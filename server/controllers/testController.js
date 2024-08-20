const Test = require('../models/Test');
const User = require('../models/User');

const startTest = async (req, res) => {
  try {
    const questions = await Test.find({}).select('questions');

    if (!questions) {
      return res.status(404).json({ message: 'No questions found' });
    }

    res.status(200).json({ questions });
  } catch (error) {
    console.error('Error starting test:', error);
    res.status(500).json({ message: 'Failed to start the test' });
  }
};
const submitTest = async (req, res) => {
  try {
    const { userId, answers } = req.body;

    if (!userId || !answers) {
      return res.status(400).json({ message: 'User ID and answers are required' });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const submittedTest = new Test({
      userId: user._id,
      answers: answers,
      submissionDate: new Date(),
    });

    await submittedTest.save();

    res.status(200).json({ message: 'Test submitted successfully' });
  } catch (error) {
    console.error('Error submitting test:', error);
    res.status(500).json({ message: 'Failed to submit the test' });
  }
};

module.exports = { startTest, submitTest };
