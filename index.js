const express = require('express');
const { sendEmail } = require('./email-utils');  

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Email service running on port ${port}`);
});