const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  questions: [{ question: String, options: [String], answer: String }],
  userAnswers: [String],
  score: Number,
});

module.exports = mongoose.model('Test', TestSchema);
