const express = require('express');
const app = express();
const userAuthRouter = require('../src/routes/userAuth.route');
const aiRouter = require('../src/routes/ai.route');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userAuthRouter);
app.use('/ai', aiRouter);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


module.exports = app