const cron = require('node-cron');
const Test = require('./models/Test');
const nodemailer = require('nodemailer');

cron.schedule('0 * * * *', async () => {
  try {
    const tests = await Test.find({ score: null }); 

    for (const test of tests) {
      const score = test.userAnswers.reduce((acc, answer, index) => {
        return acc + (answer === test.questions[index].answer ? 1 : 0);
      }, 0);

      test.score = score;
      await test.save();

      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'user@example.com',
        subject: 'Your Test Score',
        text: `Your test score is: ${score}`,
      };

      await transporter.sendMail(mailOptions);
    }
  } catch (error) {
    console.error('Cron job failed', error);
  }
});

