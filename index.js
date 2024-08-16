const express = require('express');
const { sendEmail } = require('./email-utils');  

const app = express();

app.use(express.json());

app.post('/notify', async (req, res) => {
    const { to, subject, text, urgency, activity } = req.body;  
    try{

    }catch(error){

    }
})
  
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Email service running on port ${port}`);
});