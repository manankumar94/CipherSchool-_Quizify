const mongoose = require('mongoose');
const Test = require('./models/Test');

mongoose.connect('mongodb://localhost:27017/MCQ_TRIAL', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Seed data
const seedTest = async () => {
  const questions = [
    {
      question: 'What does MERN stand for?',
      options: ['MongoDB, Express, React, Node', 'MySQL, Express, React, Node', 'MongoDB, Express, Redux, Node', 'MongoDB, Express, React Native, Node'],
      correctAnswer: 0,
    },
    {
      question: 'Which of the following is a NoSQL database?',
      options: ['MySQL', 'MongoDB', 'PostgreSQL', 'Oracle'],
      correctAnswer: 1,
    },
    {
      question: 'Which library is used for handling HTTP requests in React?',
      options: ['axios', 'fetch', 'jQuery', 'Redux'],
      correctAnswer: 0,
    },
    {
      question: 'Which of the following is a back-end framework in the MERN stack?',
      options: ['React', 'Redux', 'Express', 'Vue'],
      correctAnswer: 2,
    },
    {
      question: 'Which command is used to start a new React app?',
      options: ['npm start', 'npm create react-app', 'npx create-react-app', 'npx start react'],
      correctAnswer: 2,
    },
    {
      question: 'Which method is used to connect to a MongoDB database in Node.js?',
      options: ['mongoose.connect()', 'mongo.connect()', 'db.connect()', 'database.connect()'],
      correctAnswer: 0,
    },
    {
      question: 'Which of the following is used to create a server in Node.js?',
      options: ['http', 'fs', 'path', 'url'],
      correctAnswer: 0,
    },
    {
      question: 'Which lifecycle method is used to fetch data in a React component?',
      options: ['componentDidMount', 'componentWillMount', 'componentDidUpdate', 'componentWillUnmount'],
      correctAnswer: 0,
    },
    {
      question: 'Which of the following is a correct way to create a new Mongoose model?',
      options: ['mongoose.model(SchemaName, "ModelName")', 'mongoose.model("ModelName", SchemaName)', 'new mongoose.Schema("ModelName", SchemaName)', 'mongoose.createModel(SchemaName, "ModelName")'],
      correctAnswer: 1,
    },
    {
      question: 'Which of the following is used for state management in React?',
      options: ['Redux', 'axios', 'Express', 'Node'],
      correctAnswer: 0,
    },
  ];

  await Test.deleteMany({});

  await Test.create({ questions });

  console.log('Database seeded with MERN stack questions');
  mongoose.connection.close();
};

seedTest().catch((err) => console.log(err));
