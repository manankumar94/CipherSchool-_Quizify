const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const cron= require("./cornJob");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const userRoutes = require('./routes/user');
const testRoutes = require('./routes/test');
app.use('/api/user', userRoutes);
app.use('/api/test', testRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error(err));
