const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./src/config/db');

const app = express();
connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT}`);
});